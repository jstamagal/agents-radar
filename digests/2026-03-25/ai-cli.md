# AI CLI 工具社区动态日报 2026-03-25

> 生成时间: 2026-03-25 00:11 UTC | 覆盖工具: 7 个

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

# AI CLI 工具生态横向对比分析报告
**日期：** 2026-03-25
**分析师：** AI DevTools Analyst

---

## 1. 生态全景
当前 AI CLI 工具生态已从单一的"对话式终端"演进为**全栈开发工作流引擎**。
*   **基础设施化：** 插件化（Plugins/MCP）和协议标准化（ACP）成为主流，工具不再局限于自身模型能力，而是强调通过上下文集成外部工具。
*   **体验深水区：** 行业焦点已从"模型智商"转向"工程鲁棒性"，Windows 兼容性、大文件上下文管理、资源占用（CPU/内存）及非阻塞交互成为当前主要技术瓶颈。
*   **多模态与自动化：** 语音交互、远程控制、以及周期性自动化任务的引入，标志着 CLI 工具正试图接管开发者的全周期管理任务。

---

## 2. 各工具活跃度对比

| 工具名称 | 版本动态 | Issues 活跃度 | PR/开发活跃度 | 核心状态关键词 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 无新版本 | **极高** (高危 Issue 多) | **高** (社区主导修复) | **阵痛期**<br>社区插件在填补官方跨平台支持的空白。 |
| **OpenAI Codex** | Rust Alpha 密集迭代 | **高** (性能/计费) | **高** (架构重构) | **重构中**<br>正在底层异步化和 Hooks 系统上发力。 |
| **Gemini CLI** | v0.36.0-preview | **中** (行为评估) | **中** (SDD/安全性) | **规范化**<br>专注于 Agent 行为评估和测试稳定性。 |
| **GitHub Copilot CLI** | v1.0.11 (问题版) | **高** (策略回归) | **低** (无 PR) | **回归危机**<br>新版本引发策略误判和兼容性回退。 |
| **Kimi Code** | v1.25.0 | **中** (文档/兼容) | **中** (Hooks 生态) | **对齐期**<br>快速对齐 Claude Code 的 Hooks 和插件生态。 |
| **OpenCode** | v1.3.2 (问题版) | **高** (内存泄漏) | **高** (性能修复) | **性能瓶颈**<br>严重内存泄漏和 UI Bug 阻碍生产可用。 |
| **Qwen Code** | v0.13.0-nightly | **极高** (崩溃/路径) | **高** (渠道集成) | **迭代快**<br>修复迅速，积极拓展 Telegram 等新渠道。 |

---

## 3. 共同关注的功能方向

### A. 插件化与扩展协议
*   **工具：** Claude Code, OpenAI Codex, Kimi Code, OpenCode
*   **诉求：** 
    *   社区强烈希望存在通用的插件标准。
    *   **Hooks 系统** 成为标配，用户希望在工具执行前后注入自定义逻辑（如代码风格检查、自动测试）。
    *   **MCP (Model Context Protocol)** 支持已成为硬性需求，但在 Windows 和 CLI 端的兼容性仍是痛点。

### B. 多任务与非阻塞交互
*   **工具：** OpenAI Codex (`/btw`), Qwen Code (`/loop`)
*   **诉求：** 
    *   用户不再满足于单线程对话。**"侧边提问"** (在不中断主任务时询问) 和 **"周期性任务"** (如每 3 分钟检查进度) 需求激增。
    *   这反映了开发者希望 AI CLI 成为类似 IDE 的"并行工作台"。

### C. 沙箱与权限安全
*   **工具：** Claude Code, Gemini CLI, GitHub Copilot CLI, Kimi Code
*   **诉求：** 
    *   **"Ask before edit"** 失效（Claude #33126）和策略误报 是今日最严重的安全投诉。
    *   用户需要更细粒度的控制，如区分"只读工具"的自动批准权限。

### D. 跨平台兼容性
*   **工具：** Claude Code (ARM/Win), OpenCode (Win), Qwen Code (中文路径)
*   **诉求：** 
    *   Windows 下的文件系统操作（EXDEV, CRLF, 路径空格）仍是全员痛点。
    *   ARM 架构和 BSD/Android (Termux) 等小众平台的适配需求正在爆发。

---

## 4. 差异化定位分析

| 工具 | 定位 | 核心优势 | 主要短板 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **极客与社区的协作先锋** | 拥有最活跃的社区插件生态，通过插件能最快填补官方功能缺失（如滚动修复、互斥锁）。 | **原生支持滞后**，对 ARM 和 Windows 的底层兼容性严重依赖社区贡献。 |
| **OpenAI Codex** | **企业级生产力平台** | 正在进行深度的架构重构，致力于提供企业级的 Hooks、权限控制和远程开发支持。 | 资源消耗极大，Token 燃烧过快，目前处于重构带来的不稳定期。 |
| **Gemini CLI** | **行为规范派** | 重视 Agent 行为评估和测试覆盖率，引入 SDD 工作流试图结构化开发过程。 | 交互体验尚可，但在模型调用的灵活性（如子代理路由）上稍显保守。 |
| **GitHub Copilot CLI** | **IDE 生态的延伸** | 与 VS Code 生态结合最紧密，但在 CLI 端的体验明显落后于 IDE（模型列表不同步）。 | **策略僵化**，企业策略误伤第三方功能，更新导致功能回退，引发信任危机。 |
| **Kimi Code** | **快速跟随者** | 极其敏捷地复刻了竞争对手（Claude Code）的优秀特性，如 Hooks 和 Jinja2 支持。 | 稳定性不足，新版本频繁引入 WriteFile 等核心功能的 Bug。 |
| **OpenCode** | **全能型 Web/TUI 终端** | 支持 Poe/Bedrock 等多种认证，UI 功能最丰富（内置浏览器、快照），适合非官方用户。 | **性能灾难**，内存泄漏和 CPU 占用导致其难以胜任长时间的开发任务。 |
| **Qwen Code** | **本地化与多端融合** | 对中文开发环境优化最深（解决中文路径问题），创新性地集成了 Telegram 等通讯渠道。 | 仍处于基础功能的修修补补阶段，快捷键逻辑等 UX 细节不够成熟。 |

---

## 5. 社区热度与成熟度

*   **第一梯队 (成熟度高):** **Gemini CLI**, **OpenAI Codex** (Codex 虽有 Bug 但架构演进方向明确)。
    *   *特征：* 开发流程规范，重视测试和底层架构重构，Issue 讨论多集中在高级功能而非基础崩溃。
*   **第二梯队 (爆发期):** **Claude Code**, **Qwen Code**, **Kimi Code**。
    *   *特征：* 功能迭代极快，社区非常活跃但充满噪音（大量崩溃、路径问题），"生于忧患"。
*   **第三梯队 (阻滞期):** **GitHub Copilot CLI**, **OpenCode**。
    *   *特征：* **GitHub Copilot CLI** 受制于企业策略僵化；**OpenCode** 受制于性能债务。两者当前版本的口碑均遭遇滑铁卢。

---

## 6. 值得关注的趋势信号

1.  **"社区插件补位"现象常态化：**
    *   由于官方跨平台支持（特别是 Windows 和 ARM）跟进缓慢，社区开始通过非官方插件（如 Claude Code 的 `tool-mutex`、`scroll-fix`）自行修补核心 Bug。**决策建议：** 选择工具时，其社区插件的活跃度和修复能力可能比官方 Roadmap 更重要。

2.  **自动化脚本 的兴起：**
    *   Qwen Code (`/loop`) 和 OpenAI Codex 的讨论表明，AI CLI 正从"交互式问答"向"自主代理"转变。**决策建议：** 关注工具的长时任务运行稳定性和状态持久化能力。

3.  **多模型调度与成本焦虑：**
    *   Kimi Code 允许配置"压缩模型"（便宜模型处理上下文），以及 GitHub Copilot CLI 用户对 Token 消耗的敏感，说明**成本控制**已成为企业级落地的核心考量。

4.  **终端与 IDE 的边界模糊：**
    *   OpenCode 的"内置浏览器"和 Qwen Code 的"Telegram 集成"暗示，未来的 AI CLI 可能不再局限于终端窗口，而是作为无处不在的"后台智能服务"存在。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

你好！作为 Claude Code 生态的技术分析师，基于 `anthropics/skills` 仓库截至 2026-03-25 的数据，我为您整理了以下社区热点报告。

### 1. 热门 Skills 排行

基于社区的 Pull Request 活跃度与实际价值，以下是当前最受关注的 Skills：

1.  **[document-typography](https://github.com/anthropics/skills/pull/514)** *（排版质检）*
    *   **功能**：解决 AI 生成文档中的排版“顽疾”，如孤行、段落孤立和编号错位。
    *   **热点**：直接提升了 Claude 输出文档的专业度，解决了高频痛点。
    *   **状态**：OPEN

2.  **[session-memory](https://github.com/anthropics/skills/pull/629)** *（持久化上下文）*
    *   **功能**：在上下文压缩或会话重启时，保留关键技术事实，零依赖。
    *   **热点**：解决了 Claude Code 长对话中“忘记”工具输出的核心痛点。
    *   **状态**：OPEN

3.  **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** *（元技能）*
    *   **功能**：作为“技能的技能”，用于分析 Claude Skill 的质量结构与安全性。
    *   **热点**：生态成熟度的标志，帮助开发者自检 Skill 质量。
    *   **状态**：OPEN

4.  **[plan-task](https://github.com/anthropics/skills/pull/522)** *（任务持久化）*
    *   **功能**：将多步骤计划和进度持久化为 Markdown 文件，支持跨会话恢复。
    *   **热点**：将 Claude Code 从“单次对话”转变为“持久项目经理”。
    *   **状态**：OPEN

5.  **[frontend-design (Improvement)](https://github.com/anthropics/skills/pull/210)** *（前端设计增强）*
    *   **功能**：重写前端设计 Skill，提升指令的清晰度和 Claude 的可执行性。
    *   **热点**：优化了 Claude 在 UI/UX 设计任务中的表现力和遵循度。
    *   **状态**：OPEN

6.  **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** *（代码库审计）*
    *   **功能**：系统化的代码库清理与文档审计，识别孤儿代码和文档缺口。
    *   **热点**：针对老旧项目或大型代码库的“大扫除”工具。
    *   **状态**：OPEN

7.  **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** *（多媒体生成）*
    *   **功能**：集成 Masonry CLI，实现文生图与文生视频。
    *   **热点**：扩展了 Claude Code 从纯代码向多媒体内容生成的边界。
    *   **状态**：OPEN

---

### 2. 社区需求趋势

通过分析高频 Issues，社区期待的核心方向集中在以下领域：

*   **跨会话记忆与状态持久化**：
    *   用户强烈不满 Claude Code “每次启动都失忆”。社区迫切需要官方或高质量方案来**保存工作流、计划和临时知识**（见 Issues #62, PRs #522, #629）。
*   **企业级与生产环境稳定性**：
    *   Issues 中包含大量关于 **API 500 错误、SSO 登录不支持、技能加载失败** 的反馈。说明社区正在从“尝鲜”转向“生产使用”，稳定性成为第一诉求。
*   **安全与信任边界**：
    *   Issue #492 指出社区 Skill 冒用 `anthropic/` 命名空间的问题，用户对 Skill 的安全性表示担忧，期待官方的审核或签名机制。
*   **Agent 治理与工作流编排**：
    *   社区开始关注更高级的 **Agent 模式**（如 Issue #412 提出的 agent-governance），希望 Skill 能处理更复杂的自主决策和安全策略。

---

### 3. 高潜力待合并 Skills

这些 PR 处于活跃讨论或开发阶段，近期可能落地：

*   **[x402 BSV auth + micropayment skill](https://github.com/anthropics/skills/pull/374)**
    *   **潜力**：引入了“AI 服务微支付”的概念，允许通过自然语言授权支付，是 AI 经济化的探索。
*   **[shodh-memory](https://github.com/anthropics/skills/pull/154)**
    *   **潜力**：另一个持久化记忆方案，强调 Agent 间的主动上下文检索，与 session-memory 形成互补。
*   **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)**
    *   **潜力**：对接特定垂直领域（SAP 商业数据）的预测模型，展示了 Skill 生态在专业软件集成方面的潜力。
*   **[CONTRIBUTING.md (Docs)](https://github.com/anthropics/skills/pull/509)**
    *   **潜力**：虽然是文档，但直接回应了社区健康度低（25%）的问题，有助于吸引更多开发者贡献。

---

### 4. Skills 生态洞察

**一句话总结**：
社区正致力于将 Claude Code 从**“单次对话工具”**进化为**“持久化工作站”**，最集中的诉求是实现**跨会话的状态记忆与任务恢复能力**，同时对企业级的安全性和稳定性提出了更高要求。

---

# Claude Code 社区动态日报
**日期：** 2026-03-25
**数据来源：** github.com/anthropics/claude-code

---

## 1. 今日速览
今日社区高度聚焦于 **ARM 架构支持**与 **Windows 兼容性**问题，ARM Cowork 功能需求激增。同时，针对 **MCP (Model Context Protocol)** 集成的连接问题以及 **安全性**问题成为开发者讨论的焦点。插件生态持续活跃，涌现出多个用于修复终端滚动和提升会话管理的社区方案。

---

## 2. 版本发布
**无新版本发布**（过去 24 小时内无最新 Release）。

---

## 3. 社区热点 Issues

### 🔥 核心热点
1.  **[#30864] cowork for ARM processor**
    *   **链接：** [anthropics/claude-code#30864](https://github.com/anthropics/claude-code/issues/30864)
    *   **重要性：** ⭐⭐⭐⭐⭐
    *   **动态：** 社区对 Apple Silicon 和 ARM 设备上的 Cowork 功能需求强烈，目前已获 92 个赞。
    *   **反应：** 大量用户询问进展，ARM 开发者无法使用核心协作功能。

2.  **[#30640] Native installer doesn't work on FreeBSD**
    *   **链接：** [anthropics/claude-code#30640](https://github.com/anthropics/claude-code/issues/30640)
    *   **重要性：** ⭐⭐⭐⭐
    *   **动态：** 用户因 Bot 误关闭问题重新开启讨论。
    *   **反应：** 社区呼吁官方支持非主流 Unix 系统，展示了对跨平台兼容性的严格关注。

3.  **[#27897] Cowork VM completely broken on Windows 11 (MSIX)**
    *   **链接：** [anthropics/claude-code#27897](https://github.com/anthropics/claude-code/issues/27897)
    *   **重要性：** ⭐⭐⭐⭐
    *   **动态：** Windows 11 Insider 版本存在严重的 EXDEV 重命名 Bug，导致虚拟机无法工作。
    *   **反应：** 企业用户反馈强烈，影响 Windows 本地开发体验。

### 🐛 关键 Bug
4.  **[#36582] Terminal keeps scrolling to top (macOS)**
    *   **链接：** [anthropics/claude-code#36582](https://github.com/anthropics/claude-code/issues/36582)
    *   **重要性：** ⭐⭐⭐⭐⭐
    *   **动态：** 长对话导致终端自动滚回顶部，严重影响交互体验。
    *   **反应：** 社区已出现第三方插件修复方案，官方尚未发布正式补丁。

5.  **[#33126] "Ask before edit" mode bypassed on Windows**
    *   **链接：** [anthropics/claude-code#33126](https://github.com/anthropics/claude-code/issues/33126)
    *   **重要性：** ⭐⭐⭐⭐
    *   **动态：** 权限控制失效，Claude 在未经确认的情况下修改了多个文件。
    *   **反应：** 涉及安全与权限控制，用户表示极度担忧。

### 🔧 功能与增强
6.  **[#9177] Add user-configurable keyboard shortcut actions**
    *   **链接：** [anthropics/claude-code#9177](https://github.com/anthropics/claude-code/issues/9177)
    *   **重要性：** ⭐⭐⭐⭐
    *   **动态：** TUI（终端用户界面）自定义快捷键需求持续走高。
    *   **反应：** 提升效率的刚需，开发者希望定制化工作流。

7.  **[#27263] Configurable external URL whitelist for OAuth**
    *   **链接：** [anthropics/claude-code#27263](https://github.com/anthropics/claude-code/issues/27263)
    *   **动态：** 企业级需求，希望配置 OAuth 白名单。

8.  **[#31724] Add voiceLanguage setting for /voice mode**
    *   **链接：** [anthropics/claude-code#31724](https://github.com/anthropics/claude-code/issues/31724)
    *   **动态：** 语音模式目前默认英语，非英语用户体验极差。

### 🔒 安全与合规
9.  **[#2142] Claude ignores CLAUDE.md security guidelines**
    *   **链接：** [anthropics/claude-code#2142](https://github.com/anthropics/claude-code/issues/2142)
    *   **重要性：** ⭐⭐⭐⭐⭐
    *   **动态：** Claude 反复将 API Key 暴露到版本控制中，无视 CLAUDE.md 中的安全指令。
    *   **反应：** 这是一个高危的安全合规问题，引起了安全专家的强烈关注。

10. **[#34819] Credential exposure in conversation**
    *   **链接：** [anthropics/claude-code#34819](https://github.com/anthropics/claude-code/issues/34819)
    *   **动态：** Claude 在对话中直接打印了 ~/.netrc 文件的完整内容。

---

## 4. 重要 PR 进展

### 🛠️ 社区插件方案
1.  **[#36614] feat: add git-branch-info plugin**
    *   **链接：** [anthropics/claude-code#36614](https://github.com/anthropics/claude-code/pull/36614)
    *   **内容：** 新增插件，在会话开始和提交时自动注入 Git 分支上下文（脏状态、领先/落后等）。

2.  **[#35683] Add scroll-fix plugin**
    *   **链接：** [anthropics/claude-code#35683](https://github.com/anthropics/claude-code/pull/35683)
    *   **内容：** 社区开发的"救火"插件，修复了 Issue #36582 中提到的终端自动回滚问题，支持 Ctrl+6 冻结视图。

3.  **[#35710] Add tool-mutex plugin (Critical Windows Fix)**
    *   **链接：** [anthropics/claude-code#35710](https://github.com/anthropics/claude-code/pull/35710)
    *   **内容：** **关键修复**。通过添加互斥锁防止并行文件系统枚举，解决了 Windows 上的 Wof.sys 蓝屏死机（BSOD）问题。

4.  **[#38182] feat: add session-rename plugin**
    *   **链接：** [anthropics/claude-code#38182](https://github.com/anthropics/claude-code/pull/38182)
    *   **内容：** 新增 `/rename` 命令，允许开发者重命名会话标题，解决会话管理混乱问题。

5.  **[#38045] feat: Add lean-agents plugin**
    *   **链接：** [anthropics/claude-code#38045](https://github.com/anthropics/claude-code/pull/38045)
    *   **内容：** 针对上下文过长导致 "Prompt too long" 错误，提供轻量级子代理 替代方案。

6.  **[#37236] Add tmp-cwd-cleanup plugin**
    *   **链接：** [anthropics/claude-code#37236](https://github.com/anthropics/claude-code/pull/37236)
    *   **内容：** 修复 Bash 工具导致的 `/tmp/claude-*-cwd` 文件泄漏问题，添加 Stop hook 进行清理。

### 🔌 扩展与集成
7.  **[#38105] feat: add WhatsApp channel plugin**
    *   **链接：** [anthropics/claude-code#38105](https://github.com/anthropics/claude-code/pull/38105)
    *   **内容：** 通过 Baileys 协议集成 WhatsApp Web，实现远程双向消息控制。

8.  **[#38167] feat(devcontainer): authenticated GitHub API requests**
    *   **链接：** [anthropics/claude-code#38167](https://github.com/anthropics/claude-code/pull/38167)
    *   **内容：** 在防火墙脚本中使用 `GH_TOKEN`，解决多用户环境下的 API 速率限制问题。

### 📝 官方修复
9.  **[#38432] fix: aarch64 linux bash tool spawning**
    *   **链接：** [anthropics/claude-code#38432](https://github.com/anthropics/claude-code/pull/38432)
    *   **内容：** 官方尝试修复 ARM64 Linux (Al2023) 上 Bash 工具进程生成失败的问题（状态：Closed，可能已合并）。

10. **[#31701] fix: respect $TMPDIR (Termux/Android)**
    *   **链接：** [anthropics/claude-code#31701](https://github.com/anthropics/claude-code/pull/31701)
    *   **内容：** 提供补丁脚本，将硬编码的 `/tmp/claude` 替换为动态路径，以支持 Android/Termux 环境。

---

## 5. 功能需求趋势
基于过去 24 小时的 Issues 和 PRs 分析：

1.  **架构支持扩展化**
    *   社区不再满足于主流 macOS/Windows 支持，强烈需求 **ARM (Apple Silicon)** 和 **BSD/Android (Termux)** 等小众平台的适配。
2.  **Windows 兼容性深水区**
    *   随着 Cowork 功能的普及，Windows 文件系统特性（如 `EXDEV`, `Cloud Files Filter`）导致的 Bug 集中爆发。
3.  **插件化补位**
    *   由于官方修复速度滞后，社区开始大量通过 **Plugin** 机制自修 Bug（如滚动修复、互斥锁、会话管理）。
4.  **上下文与内存管理**
    *   针对 1M Token 上下文，社区开始关注 `MEMORY.md` 的行数限制、会话持久化以及子代理的上下文隔离问题。

---

## 6. 开发者关注点
1.  **稳定性 > 新功能**
    *   终端滚动回跳、Windows 蓝屏、Bash 进程生成失败等基础稳定性问题是当前最大的痛点。
2.  **安全焦虑**
    *   API Key 泄露（Issue #2142, #34819）和权限控制失效（Issue #33126）让企业级开发者感到不安。
3.  **远程控制与协作**
    *   Cowork 功能在跨平台（特别是 ARM）和移动端接入 方面存在明显的体验断层。

---
**分析总结：** Claude Code 正在经历从"尝鲜"到"生产可用"的阵痛期。Windows 平台的文件系统兼容性和 ARM 架构的支持是阻碍其普及的主要技术壁垒，而活跃的社区插件生态正在成为填补这些缺口的关键力量。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-03-25)

## 📌 今日速览
今日 Codex 社区主要聚焦于**桌面与 IDE 客户端的性能问题**，高 CPU 占用和 Token 消耗过快引发了大量用户讨论。开发团队在 CLI 和 TUI 层面持续迭代，重点引入了**`/btw` 侧边提问模式**以优化多任务交互，并修复了 Linux/Windows 沙箱环境下的多项兼容性 Bug。同时，关于代码审查限制和远程开发支持的功能请求依然是 Plus/Pro 用户关注的焦点。

---

## 🚀 版本发布
今日暂无正式版发布，但在过去 24 小时内发布了 4 个 **Rust Alpha 版本**（v0.117.0 系列 alpha.11-alpha.14）。这通常预示着核心引擎或底层协议正在密集测试中，建议关注后续正式版的稳定性修复。

---

## 🔥 社区热点 Issues (Top 10)

1.  **[#14593] VS Code 扩更新后 Token 消耗极快**
    *   **标签**: `bug`, `extension`, `rate-limits`
    *   **关注**: 🔥🔥🔥 (231 评论, 83 👍)
    *   **摘要**: 大量 Business 和 Plus 用户反馈更新到 26.311.21342 版本后，Token 消耗速度异常。开发者正积极排查上下文发送逻辑，疑似重复发送代码片段。
    *   [链接](https://github.com/openai/codex/issues/14593)

2.  **[#10450] 增加对桌面版远程开发 的支持**
    *   **标签**: `enhancement`, `app`
    *   **关注**: 🔥🔥🔥 (439 👍)
    *   **摘要**: 社区强烈希望在 Codex Desktop App 中支持 SSH 远程开发功能。目前的桌面版相比 VS Code Remote 体验存在断层，限制了其在专业开发环境中的普及。
    *   [链接](https://github.com/openai/codex/issues/10450)

3.  **[#11981] 桌面版高 CPU 占用问题**
    *   **标签**: `bug`, `app`
    *   **关注**: 🔥🔥 (18 评论)
    *   **摘要**: 用户报告在仅运行一个 Agent 的情况下，Codex App CPU 占用率飙升至 100%，严重影响系统响应。
    *   [链接](https://github.com/openai/codex/issues/11981)

4.  **[#14349] Teams 账户额度重置异常与限流**
    *   **标签**: `bug`, `rate-limits` [已关闭]
    *   **关注**: 🔥🔥 (13 评论)
    *   **摘要**: Teams 用户在使用 GPT-5.4 High 模式时遇到限流骤降 30% 的问题，且未按预期重置额度。尽管 Issue 已关闭，但部分用户仍反馈需手动检查 Usage 才能恢复。
    *   [链接](https://github.com/openai/codex/issues/14349)

5.  **[#15620] macOS 桌面版闲置时高 CPU 占用**
    *   **标签**: `bug`, `app`
    *   **关注**: 🔥 (4 评论)
    *   **摘要**: 技术分析指出，Codex App 在空闲时仍存在持续的 Git/Subprocess 调用 (Electron/Node)，导致后台持续消耗 CPU 资源。
    *   [链接](https://github.com/openai/codex/issues/15620)

6.  **[#15277] Windows 沙箱下 `apply_patch` 写入失败**
    *   **标签**: `bug`, `windows-os`, `sandbox`
    *   **关注**: 🔥 (7 评论)
    *   **摘要**: 在 Windows 环境下，VS Code 扩展的 `apply_patch` 功能在首次写入沙箱目录后失败，涉及权限或路径处理问题。
    *   [链接](https://github.com/openai/codex/issues/15277)

7.  **[#10187] Windows 下反复请求命令执行批准**
    *   **标签**: `bug`, `windows-os`, `extension` [已关闭]
    *   **关注**: 🔥 (5 👍)
    *   **摘要**: 尽管设置了自动批准，Windows 用户仍被频繁弹窗打断。此问题虽已关闭，但在旧版本中仍有复现报告。
    *   [链接](https://github.com/openai/codex/issues/10187)

8.  **[#4323] 请求提供 IDE 扩展的 Changelog**
    *   **标签**: `enhancement`, `extension`
    *   **关注**: 🔥 (66 👍)
    *   **摘要**: 用户抱怨 Marketplace 版本历史不够详细，希望能提供详细的变更日志，以便了解每次更新带来的具体变化。
    *   [链接](https://github.com/openai/codex/issues/4323)

9.  **[#15680] Agent 可在未授权情况下修改项目级配置**
    *   **标签**: `bug`, `sandbox`
    *   **关注**: 🛡️ (3 评论)
    *   **摘要**: 发现 Codex Agent 能够在未经询问的情况下创建或修改项目目录下的 `.codex/config.toml` 文件，存在潜在的安全风险。
    *   [链接](https://github.com/openai/codex/issues/15680)

10. **[#15679] 建议 TUI 增加循环任务 命令**
    *   **标签**: `enhancement`, `TUI`
    *   **关注**: 💡 (3 评论)
    *   **摘要**: 用户请求在 CLI/TUI 中增加类似 cron 的功能，例如每 3 分钟自动执行检查或总结进度。
    *   [链接](https://github.com/openai/codex/issues/15679)

---

## ⚙️ 重要 PR 进展 (Top 10)

1.  **[#15701] TUI: 新增 `/btw` 侧边提问模式**
    *   **状态**: Open
    *   **摘要**: 新增 `/btw` 命令，允许用户在不打断主 Agent 线程的情况下，开启临时的侧边提问线程。这是多任务交互的重要功能增强。
    *   [链接](https://github.com/openai/codex/pull/15701)

2.  **[#15597] 本地临时屏幕录制功能**
    *   **状态**: Open
    *   **摘要**: 实现了 `codex-app-server` 中的本地屏幕录制功能（v1），当特定 Feature Flag 开启时，后台进程将自动捕获屏幕，可能用于支持视觉分析能力。
    *   [链接](https://github.com/openai/codex/pull/15597)

3.  **[#15583] 重用 App-server 状态 DB**
    *   **状态**: Open
    *   **摘要**: 优化了 `CodexMessageProcessor` 的冷启动路径，通过复用共享的 `StateDbHandle` 替代临时的 SQLite 查找，显著提升了性能。
    *   [链接](https://github.com/openai/codex/pull/15583)

4.  **[#15693] 修复旧版 Bubblewrap 兼容性**
    *   **状态**: Open
    *   **摘要**: 解决了 Linux 沙箱在旧系统上的兼容性问题，避免在系统 `bwrap` 存在时回退到 vendored 版本导致的失败。
    *   [链接](https://github.com/openai/codex/pull/15693)

5.  **[#15531] Hooks: 增加 PostToolUse 支持**
    *   **状态**: Open
    *   **摘要**: 继 PreToolUse 之后，增加了非流式 Shell 调用的 PostToolUse 钩子支持，允许在工具执行后进行自定义逻辑处理（如强制代码质量门禁）。
    *   [链接](https://github.com/openai/codex/pull/15531)

6.  **[#15695] 将配置加载迁移为异步**
    *   **状态**: Open
    *   **摘要**: 开始重构配置加载流程，强制异步调用链。这是提升 CLI 启动速度和响应性的基础工作。
    *   [链接](https://github.com/openai/codex/pull/15695)

7.  **[#15667] 明确处理 Guardian 审查超时**
    *   **状态**: Open
    *   **摘要**: 将审查超时时间从 90s 增加到 120s，并新增了 `TimedOut` 终止状态，优化了超时后的错误提示文本。
    *   [链接](https://github.com/openai/codex/pull/15667)

8.  **[#15601] 允许全局覆盖 Feature Flags**
    *   **状态**: Open
    *   **摘要**: 为 App-server 增加了全局覆盖特性标志的方法，便于开发者进行灰度测试和调试。
    *   [链接](https://github.com/openai/codex/pull/15601)

9.  **[#15688] 调整插件提及引导顺序**
    *   **状态**: Open
    *   **摘要**: 调整了 Prompt 构建逻辑，将显式的插件提及引导置于用户输入之前，以确保模型更准确地使用指定插件。
    *   [链接](https://github.com/openai/codex/pull/15688)

10. **[#15604] 移除测试用的沙箱包装器**
    *   **状态**: Closed
    *   **摘要**: 清理了 `codex-core` 和 `codex-exec` 中未使用的 Landlock 和 Seatbelt 测试代码，简化了代码库。
    *   [链接](https://github.com/openai/codex/pull/15604)

---

## 📈 功能需求趋势

1.  **多任务与工作流增强**: 社区对 Agent 能够同时处理多个任务（如 `/btw` 侧边提问、`/loop` 循环任务）的需求日益增长，反映了开发者希望 Codex 从“对话工具”转变为“并行工作台”。
2.  **IDE 与桌面版的平权**: 用户强烈要求 Desktop App 拥有 VS Code 扩展的全部能力（特别是 Remote Development），同时希望能透明地了解软件更新内容。
3.  **自动化与编排**: `PreToolUse`/`PostToolUse` Hooks 和时间调度命令的请求表明，高级用户希望 Codex 能更深入地嵌入 CI/CD 或自动化脚本中，而非仅仅作为辅助。

---

## 🛠️ 开发者关注点

*   **资源消耗焦虑**: **CPU 占用**和 **Token 燃烧速度** 是目前最大的痛点。开发者对后台进程的高资源消耗感到不满，担心影响本地开发环境效率及 API 成本。
*   **Windows 兼容性**: 沙箱机制和文件系统操作在 Windows 上频繁遇到权限和路径问题，相关 Bug 报告占比依然很高。
*   **安全与控制**: 出现了对 Agent 权限的担忧，特别是关于 Agent 能否修改项目配置文件（`.codex/config.toml`）的讨论，显示出社区对“自主 Agent”安全边界的关注。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

你好！我是专注于 AI 开发工具的技术分析师。以下是 **2026年3月25日** 的 Gemini CLI 社区动态日报。

---

### 📅 2026-03-25 Gemini CLI 社区日报

#### 1. 今日速览
今天 Gemini CLI 社区主要集中在对 **Agent 行为规范** 和 **系统稳定性** 的优化上。核心动态包括：**v0.36.0-preview.0** 发布，引入了子代理的多注册表架构和工具过滤机制；同时，社区重点推进了 **SDD (Structured Development Daemon)** 工作流的任务追踪持久化，以及针对 macOS 平台 CLI 退出逻辑的修复。随着 Google Summer of Code (GSoC) 项目的加入，代码质量评估成为新的关注焦点。

---

#### 2. 版本发布
**[v0.36.0-preview.0 & v0.35.0]**
*   **v0.35.0 (正式版):** 引入了备受期待的用户自定义键盘快捷键功能，并优化了核心线程 `AgentLoopContext` 的处理逻辑。
*   **v0.36.0-preview.0 (预览版):** 核心架构迎来重要更新，实现了**多注册表架构**，并允许对子代理进行工具过滤，这为更复杂的 Agent 编排打下了基础。
*   [查看 Release 详情](https://github.com/google-gemini/gemini-cli/releases)

---

#### 3. 社区热点 Issues (Top 10)
以下是过去 24 小时最值得关注的讨论与问题：

1.  **[#23331 GSoC 项目：行为评估与 OSS 社区质量](https://github.com/google-gemini/gemini-cli/issues/23331)**
    *   **重要性:** ⭐⭐⭐⭐⭐
    *   **内容:** 官方 GSoC 项目跟踪，旨在改进 OSS 社区对 Prompt、工具和行为评估的贡献能力。评论数高达 52，社区对如何提升 Agent 智能化水平非常关注。
2.  **[#23328 优化测试套件的输出日志](https://github.com/google-gemini/gemini-cli/issues/23328)**
    *   **重要性:** ⭐⭐⭐⭐
    *   **内容:** 测试时 stdout/stderr 垃圾日志过多（动辄十万字符），严重影响开发体验。开发者强烈呼吁解决测试日志污染问题。
3.  **[#23717 Bug: 工作区边界的用户批准流程不一致](https://github.com/google-gemini/gemini-cli/issues/23717)**
    *   **重要性:** ⭐⭐⭐⭐ (Security)
    *   **内容:** 安全漏洞讨论。通用 Bash 工具执行脚本越界时会报错，但其他工具可能直接修改文件。社区正在关注安全策略的统一性。
4.  **[#23230 退出计划模式未自动切换模型](https://github.com/google-gemini/gemini-cli/issues/23230)**
    *   **重要性:** ⭐⭐⭐⭐
    *   **内容:** 确认计划后应切换至 `gemini-3-flash-preview` 但未生效，导致用户体验不连贯。
5.  **[#21109 语音模式：添加动态波形可视化](https://github.com/google-gemini/gemini-cli/issues/21109)**
    *   **重要性:** ⭐⭐⭐⭐
    *   **内容:** 随着 Live API 的引入，用户迫切需要视觉反馈（波形图）来显示 AI 的监听/说话/处理状态。
6.  **[#23728 引导子代理](https://github.com/google-gemini/gemini-cli/issues/23728)**
    *   **重要性:** ⭐⭐⭐⭐
    *   **内容:** 目前子代理无法被手动选择或通过顶层策略路由，这是限制 Agent 编排能力的主要瓶颈之一。
7.  **[#23724 SDD: 持久化项目级任务追踪存储](https://github.com/google-gemini/gemini-cli/issues/23724)**
    *   **重要性:** ⭐⭐⭐
    *   **内容:** 将任务状态从临时目录转移到项目级目录 (`.gemini/tracker/`)，支持 Git 提交和跨会话持久化。
8.  **[#23571 模型在随机位置创建临时脚本](https://github.com/google-gemini/gemini-cli/issues/23571)**
    *   **重要性:** ⭐⭐⭐
    *   **内容:** 模型倾向于在各处生成编辑脚本，导致清理工作区变得困难。开发者希望规范文件生成路径。
9.  **[#23733 调查并重新启用不稳定的 Ctrl+C 退出测试](https://github.com/google-gemini/gemini-cli/issues/23733)**
    *   **重要性:** ⭐⭐⭐
    *   **内容:** 针对 macOS CI 环境下 Ctrl+C 测试的不稳定性进行调查。
10. **[#13033 备用缓冲区模式的原生选择](https://github.com/google-gemini/gemini-cli/issues/13033)**
    *   **重要性:** ⭐⭐⭐ (UX)
    *   **内容:** 关闭的 Request。用户希望在备用缓冲区模式下无需按 Ctrl-S 即可原生选择文本，该需求似乎已得到解决或关闭。

---

#### 4. 重要 PR 进展 (Top 10)
1.  **[#23731/23732 修复: 将不稳定的 Ctrl+C 测试移至非阻塞套件](https://github.com/google-gemini/gemini-cli/pull/23732)**
    *   **内容:** 为了解决 macOS CI 经常性失败阻塞 PR 合并的问题，开发者将 `ctrl-c-exit` 测试标记为跳过，并移至非阻塞套件，以保持主流程稳定。
2.  **[#23729 修复: Shell 工具中的条件性额外权限暴露](https://github.com/google-gemini/gemini-cli/pull/23729)**
    *   **内容:** 仅在启用沙箱配置时向模型暴露 `additional_permissions` 参数，增强了沙箱的安全性。
3.  **[#23719 Feat: 引入安全与富主题支持真彩色](https://github.com/google-gemini/gemini-cli/pull/23719)**
    *   **内容:** 重构了 CLI 的主题系统，区分了 256 色终端的“安全模式”和支持真彩色的“富模式”，并修复了输入框背景色对比度问题。
4.  **[#23720 Feat: 添加 CI Skill 以自动修复失败](https://github.com/google-gemini/gemini-cli/pull/23720)**
    *   **内容:** 引入一个新的内置 Skill，允许开发者通过交互式命令让 AI 自动尝试修复 CI 失败，极大优化了开发工作流。
5.  **[#23727 Feat: 添加 Web 工具选择的行为评估](https://github.com/google-gemini/gemini-cli/pull/23727)**
    *   **内容:** 增加了一组针对 Agent 选择 `web_fetch` 还是 `google_web_search` 的行为评估，以提高工具调用的准确性。
6.  **[#22869 Feat: 添加备用缓冲区模式的动态切换](https://github.com/google-gemini/gemini-cli/pull/22869)**
    *   **内容:** 允许用户在会话中动态切换全屏和内联模式，而无需重启 CLI。
7.  **[#23691 Feat: Windows 沙箱动态扩展 Phase 1 & 2.1](https://github.com/google-gemini/gemini-cli/pull/23691)**
    *   **内容:** 实现了 Windows 平台下的动态沙箱权限扩展，支持根据全局设置和即时请求动态授予网络访问或文件写入权限。
8.  **[#22584 修复: 稳定复制模式防止闪烁](https://github.com/google-gemini/gemini-cli/pull/22584)**
    *   **内容:** 修复了 macOS 和 Windows 全屏模式下复制文本时的光标重置和界面闪烁问题。
9.  **[#23306 修复: 输入缓冲区非空时防止 Ctrl+D 退出](https://github.com/google-gemini/gemini-cli/pull/23306)**
    *   **内容:** 修复了一个恼人的 Bug，即在用户还在输入文字时误按 Ctrl+D 会导致程序直接退出。
10. **[#23212 Chore: 清理未使用的 eslint-disable 指令](https://github.com/google-gemini/gemini-cli/pull/23212)**
    *   **内容:** 代码库卫生清理，移除了 30 多个冗余的 eslint 抑制注释，提升了代码可维护性。

---

#### 5. 功能需求趋势
根据最新的 Issues 和 PRs，社区目前的功能焦点主要集中在以下几个方向：

*   **SDD (Structured Development Daemon) 深度集成:**
    *   社区正在大力推动基于文件的持久化任务追踪系统（替代 Markdown 计划）。
    *   需求包括：任务状态的 DAG 视图、跨会话持久化、以及与 Git 的集成。
*   **Agent 智能化与工具编排:**
    *   **子代理管理:** 如何手动引导、配置子代理，以及子代理对主代理模式的感知。
    *   **工具选择精度:** 评估和改进 Agent 选择 Web 工具或文件读取工具的能力（如 AST 感知读取）。
*   **终端 UI/UX 的精细化打磨:**
    *   **视觉反馈:** 语音模式的波形图。
    *   **主题系统:** 真彩色支持和高对比度适配。
    *   **交互逻辑:** 动态切换全屏/内联模式，优化文本复制体验。

---

#### 6. 开发者关注点 (Pain Points)
*   **测试与 CI 稳定性:** 开发者对测试日志的冗长和 macOS 平台 CI 的不稳定性（特别是 Ctrl+C 测试）感到沮丧，迫切需要更干净的测试环境反馈。
*   **安全边界的一致性:** Agent 在执行文件操作时，不同工具对于“工作区边界”的定义不一致，导致用户困惑和潜在的安全风险。
*   **临时文件管理:** 模型随意在项目中生成临时脚本（`.sh`, `.py`）污染了 Git 工作区，开发者希望有统一的临时目录管理策略。

---
*数据来源: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-03-25)

## 📅 今日速览
昨日 GitHub Copilot CLI 社区异常活跃，Issues 讨论量激增至 50 条。核心焦点集中在**策略限制**与**模型兼容性**上，大量用户反馈组织策略误报导致第三方 MCP 服务器被禁用，同时新模型（如 Gemini 3.1 Pro）在 CLI 中的可见性问题也引发了热议。此外，关于终端体验（权限审批频繁、滚动条缺失）的吐槽依然居高不下。

## 📦 版本发布
**无** (过去 24 小时内无新版本发布)

## 🔥 社区热点 Issues
以下是过去 24 小时内讨论最激烈、最值得关注的 10 个 Issue：

1.  **[#1703 组织启用模型列表不一致](https://github.com/github/copilot-cli/issues/1703)** ⭐⭐⭐
    *   **摘要**：Copilot CLI 无法显示组织已启用的高级模型（如 Gemini 3.1 Pro），而 VS Code Copilot 可以正常显示。
    *   **重要性**：**高**。影响企业用户的模型选择权，导致 CLI 功能落后于 IDE 体验。
    *   **反应**：22 👍，社区对 CLI 和 IDE 体验割裂表示不满。

2.  **[#1707 MCP 服务器被组织策略误禁 (v1.0.11)](https://github.com/github/copilot-cli/issues/1707)** ⭐⭐⭐
    *   **摘要**：更新至 v1.0.11 后，提示"组织的 Copilot 策略禁用了第三方 MCP 服务器"，但 VS Code 中正常工作。
    *   **重要性**：**严重**。阻断性强，降级至 v0.0.417 可恢复，疑似版本回归 Bug。
    *   **反应**：多条评论确认可以通过降级临时解决。

3.  **[#501 Bash History 截断问题](https://github.com/github/copilot-cli/issues/501)** ⭐⭐
    *   **摘要**：Copilot 执行命令时不加载 `~/.bashrc`，导致用户设置的无限历史记录（`HISTFILESIZE=-1`）失效。
    *   **重要性**：**中**。长期存在的痛点，影响用户的工作流历史追溯。
    *   **反应**：10 条评论，虽有官方回应标记为 EOY 修复，但用户仍在持续追踪。

4.  **[#1477 "Autonomous" 模式计费疑云](https://github.com/github/copilot-cli/issues/1477)** ⭐⭐
    *   **摘要**：模型完成任务后，仍提示 "Continuing autonomously (3 premium requests)"，疑似重复计费或提示误导。
    *   **重要性**：**中**。涉及成本和透明度，用户对"免费午餐"结束后的计费逻辑敏感。
    *   **反应**：7 👍。

5.  **[#2236 组织注册表 MCP 服务器消失](https://github.com/github/copilot-cli/issues/2236)** ⭐⭐
    *   **摘要**：之前通过组织注册表配置的 MCP 服务器突然失效，并显示与 #1707 相同的错误提示。
    *   **重要性**：**高**。再次印证了 v1.0.11 版本在策略处理上存在严重问题。

6.  **[#2050 Claude Sonnet 4.6 连接中断 (503 GOAWAY)](https://github.com/github/copilot-cli/issues/2050)** ⭐⭐
    *   **摘要**：在使用 Claude Sonnet 4.6 进行长上下文（8KB YAML）任务时频繁报错，而 Gemini 3 Pro 正常。
    *   **重要性**：**中**。特定模型下的稳定性问题，可能涉及 CLI 的 HTTP/2 连接管理。

7.  **[#2101 频繁的 API 限流错误](https://github.com/github/copilot-cli/issues/2101)** ⭐⭐
    *   **摘要**：在短时间内遭遇大量 "transient API error"，导致触发 Rate Limit。
    *   **重要性**：**中**。影响连续使用体验，可能存在重试逻辑导致的雪崩效应。

8.  **[#1329 技能目录加载不一致](https://github.com/github/copilot-cli/issues/1329)** ⭐
    *   **摘要**：CLI 不像 VS Code 那样默认加载 `~/.agents/skills` 目录下的通用技能。
    *   **重要性**：**中**。用户体验割裂，用户期望 CLI 和 Chat 共享技能库。

9.  **[#1148 行尾符 (CRLF) 强制转换](https://github.com/github/copilot-cli/issues/1148)** ⭐
    *   **摘要**：CLI 编辑文件时会无视原格式，将 LF 强制转为 CRLF，导致 Git Diff 污染。
    *   **重要性**：**中**。跨平台开发者的痛点，影响版本控制。

10. **[#2208 WSL 环境下 CPU 飙升与卡顿](https://github.com/github/copilot-cli/issues/2208)** ⭐
    *   **摘要**：长时间运行会话（特别是 Opus 4.6 模型）后，CPU 100% 占用且 TUI 无响应。
    *   **重要性**：**中**。性能瓶颈问题，导致工具在大型任务中不可用。

## 🔄 重要 PR 进展
**无** (过去 24 小时内无 PR 更新)

## 📊 功能需求趋势
根据最新 Issues 提炼，社区目前最关注的方向如下：

1.  **权限与策略管理**
    *   用户对于 Copilot CLI 的组织策略检查机制感到沮丧，特别是** MCP 服务器支持**被误判禁用的问题 (#1707, #2236)。
    *   希望获得更细粒度的文件访问控制 (#899)。

2.  **模型兼容性与一致性**
    *   强烈要求 CLI 与 VS Code Copilot 保持**模型列表同步** (#1703)。
    *   关注对新模型（如 Gemini 3.1 Pro, Claude 4.6）的稳定支持 (#2050)。

3.  **终端交互体验**
    *   **权限审批疲劳**：希望能白名单常用只读命令（如 `ls`, `grep`），避免每次会话重复授权 (#2256, #2273)。
    *   **TUI 缺陷**：Windows Terminal 滚动条丢失 (#2252)、WSL 下高 CPU 占用 (#2208)。
    *   **Shell 兼容**：Windows 上强制使用 PowerShell 而非 Bash (#2271)。

4.  **跨平台与生态支持**
    *   **Termux/Android** 支持呼声较高 (#1257)。
    *   对 **Warp Terminal** 等现代终端的适配请求 (#2246)。

## 👨‍💻 开发者关注点
*   **工作流集成**：开发者希望 CLI 能无缝集成现有工作流，例如共享 VS Code 的 Skills 目录 (#1329)，支持启动时直接进入 Plan 模式 (#2268)。
*   **数据完整性**：担心 CLI 破坏文件格式（CRLF 问题 #1148）或截断命令历史 (#501)。
*   **稳定性重于新功能**：最近的反馈多集中在由于版本更新（v1.0.11）带来的回归问题，开发者呼吁优先保证核心功能的稳定性。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 (2026-03-25)

## 1. 今日速览
今日社区活跃度极高，主要围绕 **v1.25.0 版本** 的 Bug 修复与 **插件系统** 的探讨。过去 24 小时内共更新了 9 个 Issue 和 8 个 PR，核心看点包括：修复了 ACP 终端工具的关键报错，解决了 `yolo/print` 模式下的进程挂起问题，以及社区对新引入的插件系统兼容性和 `WriteFile` 工具稳定性的广泛反馈。

## 2. 版本发布
无新版本发布。

## 3. 社区热点 Issues (Top 9)

### [BUG] WriteFile 工具频繁报错
*   **描述**: 用户反馈升级到 **v1.25.0** 后，`writefile` 工具在写入时频繁出错，尤其是在 Windows 平台。推测可能是分段写入机制或 HTML 内容处理的问题。
*   **重要性**: 🔥 **高**。直接影响核心代码生成功能，用户受影响范围大。
*   **链接**: [#1564](https://github.com/MoonshotAI/kimi-cli/issues/1564)

### [BUG] HTML 内容包含引号导致工具参数错误
*   **描述**: 当生成包含引号的 HTML 网页时，`WriteFile`/`Shell` 工具报 "Invalid arguments" 错误。
*   **重要性**: 🔥 **高**。涉及字符转义和参数解析的底层逻辑，影响 Web 开发场景。
*   **链接**: [#1565](https://github.com/MoonshotAI/kimi-cli/issues/1565)

### [BUG] Jetbrains IDE 插件不可用
*   **描述**: 用户在 v1.17 版本中遇到 Jetbrains 集成不可用的问题。
*   **重要性**: 🔥 **高**。IDE 集成是 CLI 工具的重要使用场景。
*   **链接**: [#1334](https://github.com/MoonshotAI/kimi-cli/issues/1334)

### [ENHANCEMENT] 插件系统兼容性提问
*   **描述**: 用户询问新插件系统是否支持 Claude Code 或 Open Code 的插件格式，以及如何安装。
*   **重要性**: 🔥 **中**。反映了社区对新插件系统生态兼容性的高度期待和困惑。
*   **链接**: [#1566](https://github.com/MoonshotAI/kimi-cli/issues/1566)

### [BUG] 官网下载命令报错
*   **描述**: 官网文档提供的安装/下载命令无法正常执行。
*   **重要性**: 🔥 **中**。影响新用户的首次体验（入门门槛）。
*   **链接**: [#1559](https://github.com/MoonshotAI/kimi-cli/issues/1559)

### [ENHANCEMENT] VSCode 插件 Skill 交互优化
*   **描述**: 用户希望 VSCode 插件中选择 Skill 后的交互逻辑与 CLI 保持一致（即不立即发起请求，允许补充内容）。
*   **重要性**: 🔥 **中**。涉及 UI/UX 一致性体验。
*   **链接**: [#1560](https://github.com/MoonshotAI/kimi-cli/issues/1560)

### [ENHANCEMENT] 禁用 Ctrl+W 剪贴板覆盖
*   **描述**: Mac 用户反馈 `Ctrl+W`（删除单词）会覆盖剪贴板内容，导致误操作，希望能禁用此行为。
*   **重要性**: 🔥 **低**。终端操作体验优化。
*   **链接**: [#1567](https://github.com/MoonshotAI/kimi-cli/issues/1567)

### [BUG] [CLOSED] Plan 模式状态混乱
*   **描述**: 处于 plan 模式时，输出却提示“已经不在 plan mode”。
*   **状态**: 已关闭。
*   **链接**: [#1476](https://github.com/MoonshotAI/kimi-cli/issues/1476)

### [BUG] [CLOSED] ACP Terminal 初始化失败
*   **描述**: Linux 环境下 v1.17/v1.18 版本 ACP 终端工具报错 `module acp has no attribute TerminalHandle`。
*   **状态**: 已关闭。
*   **链接**: [#1380](https://github.com/MoonshotAI/kimi-cli/issues/1380)

## 4. 重要 PR 进展 (Top 8)

### [feat] Hooks 生命周期系统 (Wire 1.7)
*   **内容**: 引入与 Claude Code 对齐的生命周期钩子系统，支持在 13 个关键事件点（如 PreToolUse, PostToolUse, SessionStart 等）运行自定义 Shell 命令。
*   **重要性**: ⭐ **功能增强**。极大扩展了 CLI 的自动化能力和可定制性。
*   **链接**: [#1561](https://github.com/MoonshotAI/kimi-cli/pull/1561)

### [fix] 自动解决 Yolo/Print 模式下的挂起
*   **内容**: 修复了在 `--yolo` 或 `--print` 模式下，模型尝试调用 `AskUserQuestion` 等交互工具导致进程无限挂起的问题。
*   **重要性**: ⭐ **关键修复**。保障自动化脚本的稳定性。
*   **链接**: [#1562](https://github.com/MoonshotAI/kimi-cli/pull/1562)

### [feat] System Prompt 支持 Jinja2 Include
*   **内容**: 为 System Prompt 加载器添加 `FileSystemLoader`，支持使用 `{% include "file.md" %}` 语法组合多个文件。
*   **重要性**: ⭐ **易用性**。方便复杂 Prompt 模板的管理。
*   **链接**: [#1563](https://github.com/MoonshotAI/kimi-cli/pull/1563)

### [docs] 标记插件系统为 Beta
*   **内容**: 在插件文档中显著位置添加 "(Beta)" 标记和警告，提示用户当前 API 可能变动。
*   **重要性**: ⭐ **文档**。管理用户预期。
*   **链接**: [#1558](https://github.com/MoonshotAI/kimi-cli/pull/1558)

### [feat] 可配置的上下文压缩模型
*   **内容**: 新增 `loop_control.compaction_model` 配置，允许用户指定专门用于上下文压缩的模型，而不是复用当前聊天模型。
*   **重要性**: ⭐ **性能/成本**。允许使用更便宜的模型进行压缩，降低成本。
*   **链接**: [#1549](https://github.com/MoonshotAI/kimi-cli/pull/1549)

### [fix] 替换已废弃的 ACP TerminalHandle
*   **内容**: 将代码中旧版 `acp.TerminalHandle` 替换为 ACP 0.8 标准的 `CreateTerminalResponse` 和 Client 方法。
*   **重要性**: ⭐ **重构/修复**。解决底层协议变更带来的兼容性问题（对应 Issue #1380）。
*   **链接**: [#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400)

### [fix] 修复 IDE 集成时 ACP 初始化失败
*   **内容**: 修复了当 `sys.argv` 中不包含 "kimi" 字符串时（如 IDE 集成场景），ACP 会话初始化报错 "list.index(x): x not in list" 的问题。
*   **重要性**: ⭐ **兼容性**。直接修复 IDE 用户的痛点。
*   **链接**: [#1512](https://github.com/MoonshotAI/kimi-cli/pull/1512)

### [feat] 添加 Nix devShell 支持
*   **内容**: 为 Nix 用户添加开发环境支持。
*   **重要性**: ⭐ **平台支持**。
*   **链接**: [#1213](https://github.com/MoonshotAI/kimi-cli/pull/1213)

## 5. 功能需求趋势
*   **插件生态建设**: 社区对刚刚引入的插件系统表现出浓厚兴趣，但主要关注点在于**生态兼容性**（如能否复用 Claude Code 插件）。
*   **IDE 集成稳定性**: Jetbrains 等IDE的集成问题（Issue #1334, PR #1512）依然是高频痛点。
*   **非交互模式**: 用户对 `--print` / `--yolo` 模式的稳定性非常关注，希望减少交互确认带来的阻塞。

## 6. 开发者关注点
*   **WriteFile 稳定性下滑**: v1.25.0 版本中文件写入工具的报错率明显上升，涉及参数解析和分段逻辑，需优先回归测试。
*   **终端体验细节**: 终端快捷键（Ctrl+W）的剪贴板行为以及 IDE 中的 Skill 交互逻辑存在 UX 不一致问题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-25)

> **数据来源**: anomalyco/opencode

---

### 💡 今日速览
OpenCode 社区今日正处于 **v1.3.2 版本发布后的“阵痛期”**。虽然新版本带来了备受期待的 Poe 登录支持、Kotlin 语法高亮及手动锁定主题模式等功能，但同时也引入了多项严重的 Regression（回归缺陷），导致大量用户反馈 Web UI 完全失效、TUI 内存占用激增及浅色模式下的显示问题。社区讨论的焦点主要集中在由版本更新引发的稳定性问题上。

---

### 📦 版本发布
**v1.3.2 & v1.3.1**
*   **TUI 增强**: v1.3.2 引入了 `Write heap snapshot` 命令，允许用户对 TUI 和 Server 进程进行内存堆快照捕获，便于开发者进行深度的内存分析和性能调试。
*   **生态支持**:
    *   新增 **Poe** 作为内置认证提供商，支持 OAuth 和 API Key (#18477)。
    *   为自定义 Amazon Bedrock 提供商启用了 Token 缓存。
    *   新增对 Kotlin, HCL, Lua, TOML 文件的语法高亮支持 (#18198)。
    *   新增“手动锁定/解锁”主题模式功能。

---

### 🔥 社区热点 Issues
*(按热度与影响面筛选)*

1.  **[#16470 Light Mode 代码不可读](https://github.com/anomalyco/opencode/issues/16470)** 👍 26
    *   **问题**: 在浅色主题下，格式化后的代码块文本颜色与背景色冲突，导致内容完全不可见。这是 UI 层的一个严重视觉缺陷。
    *   **状态**: Open (待修复)

2.  **[#11176 官方 VS Code 扩展需求](https://github.com/anomalyco/opencode/issues/11176)** 👍 23
    *   **动向**: 社区持续呼吁 OpenCode 推出官方 VS Code 扩展，以便用户在原生 IDE 环境中使用。这已成为社区长期以来的高频需求。

3.  **[#16697 TUI 内存泄漏风暴](https://github.com/anomalyco/opencode/issues/16697)** 👍 11
    *   **严重性**: 这是一个由 **20+ 贡献者**共同确认的重大问题。长时间使用 TUI 会导致 RAM 无限制增长。
    *   **进展**: 目前已合并了大量 PR 试图解决不同来源的泄漏，v1.3.2 的堆快照功能正是为了辅助排查此问题。

4.  **[#19034 Web UI 彻底崩溃 (v1.3.2 Regression)](https://github.com/anomalyco/opencode/issues/19034)** 👍 0 | 评论 6
    *   **紧急**: 用户反馈更新至 v1.3.2 后，Web 版模型加载失败、项目列表丢失，出现 "Request failed" 错误。值得注意的是，部分未更新用户也受影响了服务器端问题。

5.  **[#17910 Claude OAuth 验证失败 (HTTP 400)](https://github.com/anomalyco/opencode/issues/17910)** 👍 2 | 评论 11
    *   **Bug**: 自 2026-03-17 起，所有 Claude 模型在使用 OAuth 认证时报错 400。根源在于 OpenCode 内置的 `@ai-sdk/anthropic` SDK 无条件注入了 `cache_control`，违反了 API 规范。

6.  **[#514 TUI 中动态开关 MCP 服务器](https://github.com/anomalyco/opencode/issues/514)** 👍 15
    *   **需求**: 用户希望在运行时通过 TUI 界面动态禁用 MCP 服务器，以减少上下文拥堵或避免启动错误。

7.  **[#19050 Claude 连接选项变更](https://github.com/anomalyco/opencode/issues/18950)** 👍 2
    *   **困惑**: 用户发现在最新版本中，Web UI 连接 Anthropic 的认证方式发生变化，原本的三种选项变成了仅支持 API Key，导致无 API Key 的用户无法使用。

8.  **[#4804 TUI 高 CPU 占用](https://github.com/anomalyco/opencode/issues/4804)** 👍 4
    *   **性能**: 报告称在 MacOS 上即便处于空闲状态，CPU 使用率也会随时间推移持续升高。

9.  **[#13363 浅色终端对话框变黑](https://github.com/anomalyco/opencode/issues/13363)** | 评论 6
    *   **UI**: 系统主题下的对话框/遮罩层在浅色终端中渲染为黑色，对比度极低。该问题已被 PR #13239 修复。

10. **[#7467 GitHub Agent 市场](https://github.com/anomalyco/opencode/issues/7467)** | 评论 10
    *   **愿景**: 提议建立基于 GitHub 的 Agent 市场，便于分享和发现自定义 Agents。

---

### 🚀 重要 PR 进展
*(技术细节与核心修复)*

1.  **[#13239 修复系统主题透明度对比度](https://github.com/anomalyco/opencode/pull/13239)** (Closed)
    *   修复了 `background: transparent` 导致的浅色主题对比度错误（修复了 #13363, #12184）。仅将应用背景设为透明，确保对话框内容清晰可见。

2.  **[#19041 自动重读陈旧文件以防止重试死循环](https://github.com/anomalyco/opencode/pull/19041)** (Open)
    *   **核心逻辑**: 修复 Agent 循环中的致命问题。当外部格式化工具修改文件后，AI 的写入操作会被安全检查拦截。此 PR 让 AI 自动重读文件，而不是导致数百次的无效重试。

3.  **[#19039 使 /status 对话框可滚动](https://github.com/anomalyco/opencode/pull/19039)** (Open)
    *   针对 TUI 的体验优化，当 MCP 服务器或插件过多时，允许在 `/status` 对话框中滚动查看，防止内容溢出。

4.  **[#18900 恢复基于 Git 的 Review 模式](https://github.com/anomalyco/opencode/pull/18900)** (Open)
    *   重构了 Git 服务层，允许桌面用户在不破坏 TUI 启动的情况下检查未提交的更改和分支级差异。

5.  **[#19038 桌面端内置浏览器](https://github.com/anomalyco/opencode/pull/19038)** (Open)
    *   新功能：在桌面应用内打开 Web 内容，无需跳转到外部浏览器。

6.  **[#19035 增强复制格式 (Markdown/HTML)](https://github.com/anomalyco/opencode/pull/19035)** (Open)
    *   将原本简单的复制按钮升级为下拉菜单，支持直接复制为 Markdown 格式或适合邮件的 HTML 格式。

7.  **[#6629 OpenTelemetry 可观测性支持](https://github.com/anomalyco/opencode/pull/6629)** (Open)
    *   引入了实验性的 OpenTelemetry 支持，配合 Aspire Dashboard，可对 LLM、MCP、Session 等进行全面监控。

8.  **[#18767 移动端触摸优化](https://github.com/anomalyco/opencode/pull/18767)** (Open)
    *   针对移动/触摸设备的 UI 和交互进行了专项优化。

9.  **[#12953 标准化对话框内边距与居中](https://github.com/anomalyco/opencode/pull/12953)** (Open)
    *   统一了 TUI 中多个对话框（如 /help, /connect）的布局样式，修复了垂直居中问题。

10. **[#18419 文件搜索迁移至 fff](https://github.com/anomalyco/opencode/pull/18419)** (Open)
    *   将底层文件搜索机制从 ripgrep 替换为 `fff`，以统一文件搜索、树结构和 grep 操作。

---

### 📈 功能需求趋势
*   **IDE 集成化**: 社区对 VS Code 官方扩展的呼声依然最高 (#11176)，同时也有用户提出“内置浏览器” (#19038) 和“点击路径跳转” (#19005) 等更融合的交互需求。
*   **性能与稳定性 (P0)**: 内存泄漏 (#16697) 和 CPU 占用 (#4804) 依然是阻碍 TUI 长时间使用的最大障碍。
*   **认证灵活性**: 除了对 Claude OAuth 的修复外，社区欢迎更多样化的认证方式，如 Poe (#18478) 和对“无 API Key”使用的探讨。

---

### 👨‍💻 开发者关注点
*   **v1.3.2 回退建议**: 鉴于 v1.3.2 引入了 Web UI 崩溃 (#19034) 和 Claude 认证问题 (#17910)，多位开发者建议暂时回退至稳定版本。
*   **浅色模式适配**: 近期关于 UI 透明度和对比度的问题集中爆发 (#16470, #13363)，开发者在修改 TUI 样式时需特别注意不同终端主题下的兼容性测试。
*   **Windows 路径处理**: Windows 平台下的路径权限匹配 (#7279) 和输入法崩溃问题 (#18364) 依然存在，跨平台开发需警惕路径分隔符差异。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-03-25)

## 1. 今日速览
**Qwen Code v0.13.0** 最新 Nightly 版本已发布，社区对于 **IDE 集成（VSCode/Telegram）** 的讨论热度持续高涨。今日重点修复了 **Linux/Windows CLI 崩溃**及 **文件路径识别（特别是中文名称）** 的高频 Bug，同时引入了 **Telegram 渠道集成** 和 **循环任务执行 (`/loop`)** 等实验性新功能。

## 2. 版本发布
*   **v0.13.0-nightly.20260324.aebe889b3**: 这是一个包含最新修复的夜间构建版本，建议遇到特定 Bug 的用户尝试更新。
    *   [Release Notes](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.13.0-nightly.20260324.aebe889b3)

## 3. 社区热点 Issues
以下是过去 24 小时内最值得关注的 10 个 Issue：

*   **[#2626 [Bug] Linux CLI 权限请求崩溃](https://github.com/QwenLM/qwen-code/issues/2626)**
    *   **重要性**: ⭐⭐⭐⭐⭐ (阻塞性 Bug)
    *   **详情**: 在 Linux (Ubuntu Server) 下，当 CLI 请求用户执行 Shell 命令权限时，Shell 直接崩溃并显示 "Terminated"。回退到旧版本可解决。
*   **[#2632 [Bug] 回答死循环无法结束](https://github.com/QwenLM/qwen-code/issues/2632)**
    *   **重要性**: ⭐⭐⭐⭐
    *   **详情**: 模型在回答问题时陷入无限循环，持续 10-15 分钟不停止，必须手动 ESC 终止。
*   **[#2498 [Bug] Agent 无法定位配置文件](https://github.com/QwenLM/qwen-code/issues/2498)**
    *   **重要性**: ⭐⭐⭐⭐
    *   **详情**: Agent 在查找 `settings.json` 等配置文件时缺乏目录遍历能力，常误报文件未找到。
*   **[#241 [Feature/UX] Shift+Enter 快捷键冲突](https://github.com/QwenLM/qwen-code/issues/241)**
    *   **重要性**: ⭐⭐⭐⭐ (高赞请求)
    *   **详情**: 目前 Shift+Enter 会直接发送消息，而非常规的换行行为。社区强烈希望遵循 IDE 标准（Shift+Enter 换行，Enter 发送）。
*   **[#2640 [Bug] 权限记忆失效](https://github.com/QwenLM/qwen-code/issues/2640)**
    *   **重要性**: ⭐⭐⭐⭐
    *   **详情**: 即使用户选择了 "Always allow in this project"，在同一会话中仍会反复询问权限。
*   **[#2605 [Feature] Windows 命令行支持图片粘贴](https://github.com/QwenLM/qwen-code/issues/2605)**
    *   **重要性**: ⭐⭐⭐
    *   **详情**: Windows 用户希望能在 CLI 中直接粘贴剪贴板中的图片，而非手动输入路径。
*   **[#2629 [Bug] VSCode 插件文件读取报错](https://github.com/QwenLM/qwen-code/issues/2629)**
    *   **重要性**: ⭐⭐⭐
    *   **详情**: 更新后 VSCode 插件频繁报错 `params must have required property 'file_path'`。
*   **[#1897 [Bug] 中文路径空格错误](https://github.com/QwenLM/qwen-code/issues/1897)**
    *   **重要性**: ⭐⭐⭐
    *   **详情**: LLM 生成工具调用时，错误地在中文路径字符间插入空格（如 `DNF 私服`），导致文件操作失败。
*   **[#2523 [Feature] Web UI 增加 Follow-up 建议](https://github.com/QwenLM/qwen-code/issues/2523)**
    *   **重要性**: ⭐⭐⭐
    *   **详情**: 希望在 Web UI 中模仿 Claude Code，任务完成后自动建议后续操作（如 "run tests"）。
*   **[#1370 [Discussion] VSCode 扩展设置缺失](https://github.com/QwenLM/qwen-code/issues/1370)**
    *   **重要性**: ⭐⭐⭐
    *   **详情**: 社区反映新版 VSCode 扩展找不到设置入口或文档，希望能完善配置引导。

## 4. 重要 PR 进展
*   **[#2628 feat(channels): Telegram 集成](https://github.com/QwenLM/qwen-code/pull/2628)**
    *   **内容**: 引入 **Channels (频道)** 功能，通过 ACP (Agent Client Protocol) 桥接 Telegram，允许用户在 Telegram 中与 Qwen Code 交互。
*   **[#2643 feat(cli): `/loop` 周期性任务命令](https://github.com/QwenLM/qwen-code/pull/2643)**
    *   **内容**: 新增 `/loop` 斜杠命令，支持以设定的时间间隔周期性执行 Prompt，适用于监控或重复性测试任务。
*   **[#2642 fix(mcp): 恢复 trust 权限检查](https://github.com/QwenLM/qwen-code/pull/2642)**
    *   **内容**: 修复了 v0.13.0 权限系统重构后，MCP 服务器的 `trust: true` 配置失效的问题。
*   **[#2645 fix(windows): Git Bash/MSYS2 环境检测](https://github.com/QwenLM/qwen-code/pull/2645)**
    *   **内容**: 修复了 Windows 下 Git Bash 环境的 Shell 检测逻辑，确保命令在 Bash 而非 cmd.exe 中执行。
*   **[#2631 fix(acp): 清理过期的 IDE Diff 确认](https://github.com/QwenLM/qwen-code/pull/2631)**
    *   **内容**: 修复了 VSCode 中子 Agent 产生的 Diff 标签页在用户接受后仍处于 "等待确认" 状态的卡死问题。
*   **[#2637 feat: 人性化权限标签与多目录搜索](https://github.com/QwenLM/qwen-code/pull/2637)**
    *   **内容**: 将权限提示从原始的正则语法（如 `Read(//Users/**)`）改为人类可读的提示（如 "读取 /Users 中的文件"），并改进了多目录搜索能力。
*   **[#2548 feat(vscode): `/skills` 二级选择器](https://github.com/QwenLM/qwen-code/pull/2548)**
    *   **内容**: 优化 VSCode 中的 `/skills` 命令体验，输入命令后弹出二级选择器，方便快速选择具体 Skill。
*   **[#2368 fix(cli): 修复 `/memory show` 显示不全](https://github.com/QwenLM/qwen-code/pull/2368)**
    *   **内容**: 修复了 `/memory show` 仅检查 `QWEN.md` 而忽略 `AGENTS.md` 等其他配置文件的 Bug。
*   **[#2636 fix(core): Gemini 纯思考内容校验](https://github.com/QwenLM/qwen-code/pull/2636)**
    *   **内容**: 修复了当模型（特别是 Gemini）仅输出思考内容而无文本时，流式验证抛出 `InvalidStreamError` 的问题。
*   **[#2570 feat(mcp): MCP 只读工具配置](https://github.com/QwenLM/qwen-code/pull/2570)**
    *   **内容**: 为 MCP 服务器添加 `readOnlyTools` 配置项，允许明确标识只读工具，从而优化执行策略（如并行执行）。

## 5. 功能需求趋势
根据今日 Issues 和 PRs 的数据分析，社区的关注点主要集中在：
1.  **IDE 深度集成与体验 (VSCode/CLI)**: 用户对 VSCode 扩展的设置可见性、快捷键习惯 (Shift+Enter) 以及 Windows/Linux 终端下的兼容性（剪贴板、Shell检测）有极高要求。
2.  **稳定性与鲁棒性**: 文件路径处理（中文、空格）、权限系统的记忆逻辑、以及模型响应卡死是目前的痛点。
3.  **Agent 智能化**: "Follow-up suggestions" (后续建议) 和 "Policy Engine" (策略引擎/权限控制) 是用户希望看到的高级特性。
4.  **多平台与多渠道**: 社区开始探索通过 Telegram 等即时通讯软件使用 Qwen Code 的可能性。

## 6. 开发者关注点
*   **文件系统操作的健壮性**: 多个 Issue 反馈模型在处理中文路径、混合文件名（中英混合）时容易产生幻觉（插入空格），导致工具调用失败。开发者正在通过核心逻辑修复（PR #2631, #2642）来解决此类文件验证问题。
*   **权限系统的复杂性**: 随着 MCP 和自定义 Agent 的引入，权限管理变得复杂。开发者正在重构 UI 提示（PR #2637）和修复 Whitelist 记忆逻辑（Issue #2640），以降低用户的配置心流负担。
*   **流式传输的边界情况**: 模型在 "思考" 模式下可能仅输出内部想法而无实际内容，导致流解析器报错。开发者正在适配多种模型的流式输出规范（PR #2636）。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*