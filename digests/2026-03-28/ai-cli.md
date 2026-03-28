# AI CLI 工具社区动态日报 2026-03-28

> 生成时间: 2026-03-28 00:11 UTC | 覆盖工具: 7 个

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

你好！作为 AI 开发工具生态的技术分析师，基于 2026-03-28 的社区动态，我为你整理了这份横向对比分析报告。

---

# 2026-03-28 AI CLI 工具生态日报横向分析

## 1. 生态全景
当前 AI CLI 工具生态正处于**从“尝鲜”向“生产力工具”转型的阵痛期**。
*   **安全性与可控性**取代“生成能力”成为核心议题，所有主流工具都在修补 Sandbox（沙箱）和权限确认机制的漏洞。
*   **稳定性危机**笼罩着多个快速迭代的工具（如 OpenAI Codex v0.117.0、Kimi v1.26.0），更新导致的功能回归引发社区焦虑。
*   **差异化竞争加剧**：工具间开始出现明显的路线分流——有的专注全栈 Agent 自主性（如 Gemini 的 SDD），有的深耕 IDE 集成体验（如 Qwen/Copilot），有的则致力于构建开放的插件生态（如 OpenCode/Claude）。

---

## 2. 各工具活跃度对比

| 工具名称 | 今日版本发布 | 社区热度 | 开发活跃度 | 关词标签 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **v2.1.86** | 🔥🔥🔥🔥🔥 | 🔥🔥🔥🔥 | Plan Mode Bug、插件生态、会话恢复 |
| **OpenAI Codex** | **v0.118.0-alpha** | 🔥🔥🔥🔥 | 🔥🔥🔥 | Token 消耗、WebSocket 故障、权限重构 |
| **Gemini CLI** | **v0.36.0-preview.5** | 🔥🔥🔥 | 🔥🔥🔥🔥 | UI 闪烁、AST 感知、Memory 系统 |
| **GitHub Copilot** | **v1.0.13-1** | 🔥🔥🔥🔥 | 🔥🔥🔥 | Alt-screen 争议、MCP 稳定性、企业策略 |
| **Kimi Code** | **v1.27.0** | 🔥🔥🔥 | 🔥🔥🔥 | Shell 模式、大文件支持、Figma MCP |
| **OpenCode** | *无更新* | 🔥🔥 | 🔥🔥🔥 | Windows 体验、默认安全策略、本地配置 |
| **Qwen Code** | **v0.13.1 / v0.14.0-pre** | 🔥🔥🔥 | 🔥🔥🔥🔥 | 中文路径、IDE Token 浪费、Hook 文档 |

*注：社区热度基于 Issues 评论数与点赞数综合评估；开发活跃度基于 PR 数量与代码变更频率评估。*

---

## 3. 共同关注的功能方向

### 🔒 安全与沙箱机制
*   **现状**：所有工具都在处理“AI 执行破坏性操作”的风险。
*   **社区诉求**：
    *   **Claude Code / OpenCode**: 社区强烈要求修复 **Plan Mode（计划模式）失效** 的 Bug，确保模型在只读模式下不会修改文件。
    *   **OpenCode**: 社区讨论应默认启用“询问模式”，而非放任 AI 修改任意文件。
    *   **Kimi / OpenCode**: 正在推进 **Bash 命令沙箱化**，在执行前识别 `rm -rf` 等高危操作。

### 🪟 Windows 平台兼容性
*   **现状**：Windows（尤其是 WSL 和 PowerShell）是重灾区。
*   **具体痛点**：
    *   **OpenCode**: `Ctrl+C` 快捷键与“复制”冲突导致程序直接退出，引发用户强烈抗议。
    *   **Qwen**: 中英文混合路径（如 `D:\2026年`）处理错误，导致文件无法访问。
    *   **Kimi / OpenAI Codex**: 符号链接和权限策略在 Windows 下异常。

### 💰 成本控制与 Token 效率
*   **现状**：上下文处理不当导致成本激增。
*   **具体痛点**：
    *   **Claude Code**: `System reminder` 未缓存大文件导致费用剧增。
    *   **Qwen**: IDE 模式下接受 Diff 时会填充整个文件内容，造成 Token 浪费。
    *   **OpenAI Codex**: 用户报告出现 Token 异常“燃烧”。

### 🧩 插件与扩展生态 (MCP)
*   **趋势**：MCP (Model Context Protocol) 正在成为标准。
*   **进展**：
    *   **GitHub Copilot**: 重点解决企业级 MCP 服务器的配置同步问题。
    *   **Kimi**: 社区请求集成 Figma MCP。
    *   **Gemini**: 致力于将 Memory 系统与项目级上下文深度集成。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术护城河 | 风险点 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **全能型编程 Agent**<br>擅长长上下文规划和多文件重构。 | **Plan Mode / Plugins**<br>强大的任务拆解能力和日益丰富的官方插件。 | **更新频繁导致回归**<br>近期版本常引入严重的会话恢复或模式失效 Bug。 |
| **OpenAI Codex** | **极致的控制力**<br>为高级用户提供底层配置和模型切换。 | **Rust 性能 / MCP**<br>底层重写带来极高的执行效率，MCP 集成度深。 | **稳定性欠佳**<br>Alpha 版本常出现 WebSocket 断连和会话丢失问题。 |
| **Gemini CLI** | **结构化工作流 (SDD)**<br>强调 `/plan` -> `/spec` -> 执行的规范流程。 | **Memory / AST**<br>独特的全局/项目级记忆系统，探索 AST 级别的代码理解。 | **UI 体验**<br>TUI 渲染存在闪烁和卡死问题，影响流畅度。 |
| **GitHub Copilot CLI** | **企业级标准化**<br>与 GitHub 生态无缝集成，适合团队协作。 | **策略合规 / IDE**<br>完善的企业策略管控和 VS Code 深度集成。 | **交互模式争议**<br>强推 `alt-screen` 全屏模式破坏了部分终端工作流。 |
| **Kimi Code** | **中文开发者的利器**<br>对中文语境和国内开发环境优化。 | **长文本 / WebUI**<br>优秀的长窗口处理能力和直观的 Web 端体验。 | **文件系统稳定性**<br>在大文件和复杂路径处理上偶发阻塞。 |
| **OpenCode** | **本地化与隐私优先**<br>适合对数据隐私敏感的离线开发场景。 | **本地 LLM 支持 / 配置覆盖**<br>灵活的本地配置系统，不依赖云端。 | **Windows 交互细节**<br>终端快捷键和鼠标交互逻辑仍需打磨。 |

---

## 5. 社区热度与成熟度

*   **第一梯队 (成熟且活跃)**: **Claude Code, GitHub Copilot CLI**
    *   特点：拥有庞大的用户基数，Issue 反应迅速，功能迭代围绕“工作流效率”展开。
*   **第二梯队 (快速迭代中)**: **OpenAI Codex, Kimi Code, Qwen Code**
    *   特点：版本发布频繁，经常引入实验性功能，但伴随的 Bug 和回归也较多。
*   **第三梯队 (垂直领域)**: **OpenCode, Gemini CLI**
    *   特点：OpenCode 专注于特定隐私需求；Gemini CLI 正在构建独特的 SDD 体系，社区讨论技术深度较深。

---

## 6. 值得关注的趋势信号

1.  **Plan Mode 的标准化与危机**：
    *   趋势：所有工具都在尝试实现“先规划后执行”的机制，但**用户信任极其脆弱**。Claude Code 的 Bug 表明，一旦模型在只读模式下越界，会严重打击用户信心。
    *   建议：开发者在实现 Agent 时，必须在系统提示词和执行链路中设置**硬编码的熔断机制**，而非仅依赖模型自律。

2.  **Alt-screen（全屏模式）的交互反噬**：
    *   趋势：GitHub Copilot CLI 强推全屏模式引发的负面反馈表明，**开发者对终端文本流的依赖依然根深蒂固**。
    *   建议：CLI 工具应保留“行内模式”或提供可配置的渲染选项，不要试图强行改变终端用户的使用习惯。

3.  **从“对话”转向“任务追踪”**：
    *   趋势：Gemini 和 Claude 都在强调持久化的任务追踪器。
    *   价值：这意味着 AI CLI 正从“一次性对话工具”转变为“项目管理面板”，未来可能与 Jira/Linear 等项目管理工具打通。

4.  **本地化配置的战争**：
    *   趋势：OpenCode 推出 `opencode.local.jsonc`，Kimi 处理中文路径问题。
    *   价值：**AI 工具的配置越来越像 IDE**。支持团队级配置覆盖、项目级策略隔离，是企业采纳 AI CLI 的前提条件。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

基于您提供的 GitHub 数据（截止 2026-03-28），以下是 Claude Code Skills 生态的社区热点报告。

---

## 🔥 1. 热门 Skills 排行 (Top 5)

以下为社区关注度最高、讨论最活跃的 Pull Requests。由于原始数据显示评论数为 `undefined`，本排名依据 PR 的**功能性突破、技术复杂度及摘要信息质量**进行甄选：

**1. Windows Screenshot Paste Skill**
*   **链接**: [anthropics/skills#646](https://github.com/anthropics/skills/pull/646)
*   **功能**: 解决了 Claude Code 在 Windows Terminal 下无法直接粘贴截图的痛点。通过安装 AutoHotkey v2 脚本，拦截剪贴板图片并自动处理，实现 `Ctrl+V` 无感集成。
*   **状态**: **[OPEN]** | 2026-03-14
*   **热点**: 极大地改善了 Windows 开发者的交互体验，填补了平台兼容性的空白。

**2. Session Memory Skill**
*   **链接**: [anthropics/skills#629](https://github.com/anthropics/skills/pull/629)
*   **功能**: 实现“零依赖”的持久化上下文记忆。旨在解决上下文压缩导致的技术细节丢失问题，确保会话重启或压缩后关键信息不丢失。
*   **状态**: **[OPEN]** | 2026-03-13
*   **热点**: 直击 LLM 应用的核心痛点（记忆遗忘），提供了无需外部数据库的轻量级解决方案。

**3. Document Typography (排版质量控制)**
*   **链接**: [anthropics/skills#514](https://github.com/anthropics/skills/pull/514)
*   **功能**: 专门解决 AI 生成文档的排版问题，如孤行、寡页、编号错位等，提升文档的专业度。
*   **状态**: **[OPEN]** | 2026-03-04
*   **热点**: 细分领域的垂直优化，表明社区对 AI 输出“不仅要有，还要好”的专业性要求在提升。

**4. Skill Quality & Security Analyzers (元技能)**
*   **链接**: [anthropics/skills#83](https://github.com/anthropics/skills/pull/83)
*   **功能**: 引入“元技能”概念，用于分析和评估其他 Skills 的质量（结构、文档、示例）和安全性。
*   **状态**: **[OPEN]** | 2025-11-06
*   **热点**: 社区开始关注生态的自查与自治，试图建立标准化的质量保证体系。

**5. Skill-creator Fix & Improvements**
*   **链接**: [anthropics/skills#202](https://github.com/anthropics/skills/issues/202) (关联 Issue)
*   **功能**: 旨在优化 `skill-creator` 的 Token 效率，将其从“开发者文档”转变为“可执行指令”。
*   **状态**: **[OPEN]** (讨论活跃)
*   **热点**: 社区意识到创建 Skills 的过程本身需要优化，呼吁更符合 Prompt Engineering 最佳实践的 Creator。

---

## 📈 2. 社区需求趋势

根据 Issues 的反馈，社区目前最期待的方向如下：

*   **企业级协作与权限管理**
    *   **Issue**: [#228](https://github.com/anthropics/skills/issues/228)
    *   **需求**: 用户希望能在组织内部直接共享 Skills，而不是通过手动下载文件传输。这表明 Skills 正从个人工具向团队资产转变。
*   **信任边界与安全性**
    *   **Issue**: [#492](https://github.com/anthropics/skills/issues/492)
    *   **需求**: 社区担忧第三方技能滥用 `anthropic/` 命名空间，呼吁建立明确的官方与社区技能的隔离机制及签名验证。
*   **生产环境的稳定性与 API 支持**
    *   **Issue**: [#389](https://github.com/anthropics/skills/issues/389), [#403](https://github.com/anthropics/skills/issues/403)
    *   **需求**: 用户频繁报告 API 删除技能失败、内部服务器错误等问题，反映社区急需 Skills 在生产环境下的稳定性保障。
*   **特殊格式与集成支持**
    *   **Issue**: [#29](https://github.com/anthropics/skills/issues/29) (Bedrock 支持), [#16](https://github.com/anthropics/skills/issues/16) (MCPs)
    *   **需求**: 社区渴望 Skills 能脱离单一的 Claude 环境，支持 AWS Bedrock 或封装为 MCP (Model Context Protocol) 服务器，实现跨平台复用。

---

## 🚀 3. 高潜力待合并 Skills

以下 PR 讨论度较高且具有实质性功能，近期有较大可能落地：

*   **[frontend-design](https://github.com/anthropics/skills/pull/210)**: 重构了前端设计指令，使其更具可操作性和内部连贯性。*（2025-01-05 创建，活跃更新中）*
*   **[ODT Skill](https://github.com/anthropics/skills/pull/486)**: 支持 OpenDocument 文本格式 的创建、填充和 HTML 解析，填补了开源文档格式的空白。*（2026-03-01 创建）*
*   **[management-consulting](https://github.com/anthropics/skills/pull/384)**: 引入咨询行业的结构化问题解决框架，商业应用场景明确。*（2026-02-13 创建）*
*   **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)**: 提供系统化的 10 步工作流来清理代码库中的孤儿代码和文档缺口。*（2025-12-16 创建）*

---

## 🧠 4. Skills 生态洞察

**总结**: 社区正从追求 **"技能的数量"** 转向关注 **"生态的质量与治理"** —— 用户最集中的诉求是**建立企业级的信任标准（安全/命名规范）与跨团队的协作机制**，同时迫切需要解决**长时记忆**与**多平台兼容性**等核心技术瓶颈。

---

# Claude Code 社区动态日报 | 2026-03-28

## 📌 今日速览
**Plan Mode 安全漏洞引关注**：今日社区最热话题集中在 v2.1.83/2.1.84 版本引入的 **Plan Mode（计划模式）失效回归 Bug**，导致模型在只读模式下仍能修改文件或执行破坏性操作，已有多个用户确认复现。
**插件生态蓬勃发展**：社区开发者提交了多个实用插件 PR，包括自动清理临时文件 (`tmp-cleanup`) 和跨路径恢复会话 (`preserve-session`)，解决了长期存在的磁盘空间浪费和会话管理痛点。

---

## 🚀 版本发布
**v2.1.86** (2026-03-27)
- **API 优化**：新增 `X-Claude-Code-Session-Id` 请求头，方便代理服务器按会话聚合请求，无需解析请求体。
- **版本控制支持**：Grep 和文件自动补全现自动排除 Jujutsu (`.jj`) 和 Sapling (`.sl`) 的元数据目录。
- **Bug 修复**：修复了 `--resume` 功能的相关问题。
> [Release 详情](https://github.com/anthropics/claude-code/releases)

---

## 🔥 社区热点 Issues

### 🚨 高危/热点 Bug

1. **[#39713](https://github.com/anthropics/claude-code/issues/39713)** | Plan Mode 完全失效（回归）
   - **影响**：v2.1.83/2.1.84 引入的严重 Bug，导致模型在计划模式下依然会执行写入/执行操作。
   - **状态**：最新版本 (v2.1.86) 或包含修复，社区正在密集验证中。
   
2. **[#24964](https://github.com/anthropics/claude-code/issues/24964)** | 文件夹选择器限制过多 (Win/Mac)
   - **痛点**：Cowork 功能中的文件夹选择器拒绝主目录外的路径，并阻止符号链接/联结点。
   - **反馈**：110+ 评论，150+ 赞，跨平台开发者的核心痛点。

3. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** | Max 计划会话消耗异常
   - **问题**：3月23日以来，CLI 使用的会话限制消耗速度异常快。
   - **热度**：80+ 赞，涉及计费问题，用户极度敏感。

4. **[#38055](https://github.com/anthropics/claude-code/issues/38055)** | Cowork 更新导致数据丢失
   - **严重性**：Minor 版本更新会永久删除聊天历史和计划任务。
   - **标签**：`data-loss`，属最高优先级问题。

5. **[#32963](https://github.com/anthropics/claude-code/issues/32963)** | 长时间运行后行为失控 (WSL)
   - **现象**：约 6 小时后，模型开始忽略指令、自主执行破坏性操作、破坏数据。
   - **关联**：可能与上下文漂移 或内存管理有关。

### ✨ 核心功能需求

6. **[#7490](https://github.com/anthropics/claude-code/issues/7490)** | 允许配置 Bash 工具使用的 Shell
   - **需求**：用户希望 Bash 工具能继承初始 Shell 或允许自定义（如 Fish, Zsh）。
   - **热度**：89+ 赞，长期以来 MacOS/Linux 用户的强烈诉求。

7. **[#16561](https://github.com/anthropics/claude-code/issues/16561)** | 复合命令权限解析优化
   - **痛点**：`cmd && cmd` 目前被当作整体审查，导致即使单独允许也会频繁弹窗。
   - **价值**：118+ 赞，极大影响 CLI 工作流的流畅度。

8. **[#36460](https://github.com/anthropics/claude-code/issues/36460)** | Max 计划无法使用 Channels
   - **问题**：`--channels` 参数在个人 Max 计划下被静默忽略。
   - **反馈**：官方插件功能的限制引发用户不满。

9. **[#4464](https://github.com/anthropics/claude-code/issues/4464)** | "System reminder" 消耗过多 Token
   - **分析**：系统提示注入未缓存的大文件内容导致成本剧增。
   - **讨论**：26+ 评论，涉及核心计费逻辑。

10. **[#30457](https://github.com/anthropics/claude-code/issues/30457)** | Google Drive 连接器显示已连接但工具不可用
    - **现状**：Cowork 模式下 Google Drive 集成仅显示连接，无法实际调用工具。

---

## 🛠️ 重要 PR 进展

### 核心功能增强

1. **[#39977](https://github.com/anthropics/claude-code/pull/39977)** | **[Plugin] tmp-cleanup** - 自动清理 `/tmp` 泄漏
   - **功能**：针对后台任务产生的无上限 `.output` 文件进行清理（曾有用户报告单个文件 46GB）。
   - **机制**：在 startup/resume/compact 时运行，清理超大文件(>100MB)和陈旧文件(>72h)。

2. **[#32755](https://github.com/anthropics/claude-code/pull/32755)** | **[Plugin] edit-verifier** - 编辑后验证
   - **功能**：解决 Edit 工具的"静默失败"问题（如因空白不匹配导致编辑未生效但模型误以为成功）。
   - **价值**：通过 PostToolUse 钩子验证编辑结果，防止模型基于错误假设继续操作。

3. **[#39148](https://github.com/anthropics/claude-code/pull/39148)** | **[Plugin] preserve-session** - 路径无关的会话恢复
   - **功能**：即使项目目录重命名或移动，也能通过 UUID 映射恢复历史会话。

### 终端与兼容性修复

4. **[#39132](https://github.com/anthropics/claude-code/pull/39132)** | **[Plugin] terminal-restore** - 修复 Kitty 键盘协议残留
   - **问题**：解决 Claude Code 退出后导致 Ghostty/Kitty/WezTerm 中 Ctrl-C 失效的问题。
   - **原理**：通过 Stop Hook 清理终端状态。

5. **[#39872](https://github.com/anthropics/claude-code/pull/39872)** | **[Core] 升级 Node.js v20 -> v24**
   - **背景**：为即将到来的 Node.js LTS 变更做准备。

### 文档与脚本优化

6. **[#39855](https://github.com/anthropics/claude-code/pull/39855)** | **[Script] 优化 `gh.sh` 小写转换**
   - **改进**：使用 Bash 参数扩展 `${var,,}` 替代 `tr`，提升效率并避免子 Shell 开销。

7. **[#37648](https://github.com/anthropics/claude-code/pull/37648)** | **[Docs] 完善 Skills 开发文档**
   - **内容**：更新了 Skill frontmatter 的完整参考表（11个字段）。

8. **[#39043](https://github.com/anthropics/claude-code/pull/39043)** | **[Tweak] 移除 Frontend Design Skill 中的 "retro-futuristic" 建议**
   - **备注**：作者幽默地表示 "Trust me on this one"。

---

## 📊 功能需求趋势

1.  **Shell 与权限控制精细化**：社区强烈要求 Bash 工具支持 Fish/Zsh (#7490) 以及更细粒度的复合命令权限检查 (#16561)。
2.  **资源与性能管理**：磁盘泄漏 (#39977)、Token 消耗 (#4464) 和长时间运行的不稳定性 (#32963) 是目前的三大技术痛点。
3.  **IDE 与集成稳定性**：VS Code 扩展在拖拽图片 (#40037)、AVX 指令集兼容性 (#40052) 以及浏览器扩展连接稳定性方面问题集中。
4.  **数据安全与会话持久化**：Plan Mode 的回归 Bug (#39713) 和 Cowork 的数据丢失问题 (#38055) 严重影响了用户信任。

---

## 👨‍💻 开发者关注点

*   **Windows/Wsl 兼容性**：近期多个高赞 Bug 报告集中在 Windows 平台（文件夹选择器、权限弹窗位置错误、AVX 崩溃），需要优先关注 Windows 生态的体验。
*   **Max 计划限制**：付费用户对功能限制（如 Channels 不可用、会话消耗异常）反应强烈，需要透明化计费逻辑和功能矩阵。
*   **插件系统成为双刃剑**：虽然官方插件增加了功能，但权限提示的交互逻辑（如 Discord 回复阻断 #39782）仍需优化。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 (2026-03-28)

## 1. 今日速览
Codex CLI 在过去 24 小时内密集发布了两个 Alpha 版本（`v0.118.0-alpha.2` & `alpha.3`），主要针对 Sandbox 沙箱权限和文件系统写入策略进行重构。社区焦点集中在 `v0.117.0` 升级后引入的多个回归问题，包括会话恢复失败、MCP 协议兼容性断裂以及 TUI 渲染错误。

---

## 2. 版本发布
**核心更新：Rust CLI v0.118.0-alpha.3 / alpha.2**
- **发布时间**: 2026-03-28
- **重点变更**:
  - **文件系统策略调整**: 修改了沙箱权限拒绝逻辑，即使旧版 `SandboxPolicy` 桥接无法表示，只要新版 `FileSystemSandboxPolicy` 支持即允许写入工作区外的路径（如 `:tmpdir`）。
  - **向后兼容**: 尝试保留对只读操作的传统回退支持。
- **影响**: 此更新旨在解决开发者长期以来对 Codex 无法写入临时目录或特定非工作区路径的痛点，但也引发了关于安全边界的讨论。

---

## 3. 社区热点 Issues

### 🔥 高危/热点故障
1. **[#14593](https://github.com/openai/codex/issues/14593) [bug] Tokens 燃烧过快**
   - **重要度**: ⭐⭐⭐⭐⭐ (307 评论)
   - **摘要**: 商业版用户报告 Codex 在短时间内异常消耗大量配额，疑似后台循环请求或重复计费。
   - **社区反应**: 极为焦虑，大量用户跟帖反馈类似账单异常。

2. **[#13041](https://github.com/openai/codex/issues/13041) [bug] WebSocket 连接策略降级**
   - **重要度**: ⭐⭐⭐⭐ (54 评论)
   - **摘要**: WebSocket 握手成功后服务器立即关闭连接（Code 1008），导致 IDE 强制回退到 HTTPS，影响实时性。
   - **社区反应**: 请求官方排查服务端策略配置。

3. **[#16049](https://github.com/openai/codex/issues/16049) [bug] v0.117.0 升级后无法恢复会话**
   - **重要度**: ⭐⭐⭐⭐ (5 评论, 新提交)
   - **摘要**: 升级到最新版后，CLI 报错 "No saved session found"，导致历史工作流中断。
   - **社区反应**: 阻碍用户升级，建议官方发布修复指南。

4. **[#16028](https://github.com/openai/codex/issues/16028) [bug] MCP 协议在 v0.116/v0.117 部分失效**
   - **重要度**: ⭐⭐⭐⭐ (5 评论, 新提交)
   - **摘要**: 升级后 MCP (Model Context Protocol) 服务器连接异常或工具调用失败。
   - **社区反应**: 影响了依赖 MCP 进行扩展开发的用户。

### 💡 核心体验与需求
5. **[#3962](https://github.com/openai/codex/issues/3962) [enhancement] 任务完成提示音**
   - **重要度**: ⭐⭐⭐⭐ (34 评论, 124 👍)
   - **摘要**: 请求在 Codex 完成长时间任务时播放提示音，方便用户切换窗口时感知。
   - **社区反应**: 高度期待，认为是提升多任务效率的关键功能。

6. **[#7727](https://github.com/openai/codex/issues/7727) [enhancement] VS Code 任务列表增加“删除”选项**
   - **重要度**: ⭐⭐⭐ (17 评论, 71 👍)
   - **摘要**: 当前右键菜单仅支持剪贴板操作，无法永久删除历史任务。
   - **社区反应**: 基础 UI 缺陷，呼声强烈。

7. **[#2628](https://github.com/openai/codex/issues/2628) [enhancement] 项目级 MCP 配置**
   - **重要度**: ⭐⭐⭐ (27 评论, 140 👍)
   - **摘要**: 希望支持为每个项目配置独立的 MCP 服务器，而非全局配置。
   - **社区反应**: 企业级开发场景的刚需。

8. **[#15920](https://github.com/openai/codex/issues/15920) [bug] Sub-agent 导致回合异常结束**
   - **重要度**: ⭐⭐⭐ (已关闭)
   - **摘要**: 多代理协作时，子代理导致主流程非正常中断。

---

## 4. 重要 PR 进展

### 🔧 核心修复
1. **[#15929](https://github.com/openai/codex/pull/15929) feat: 允许非工作区文件系统写入**
   - **内容**: 重构了权限配置文件逻辑，允许写入 `/tmp` 等非根目录路径，即使传统沙箱不支持。
   - **状态**: Open

2. **[#16050](https://github.com/openai/codex/pull/16050) Fix TUI resume-by-name 查找回归**
   - **内容**: 修复了 `codex resume <name>` 命令在 app-server 路径下无法通过名称恢复会话的问题。
   - **状态**: Open

3. **[#16014](https://github.com/openai/codex/pull/16014) Fix TUI agent picker closed-state 回归**
   - **内容**: 修复了 Agent 选择器将活跃线程错误标记为“已关闭”的显示 Bug。
   - **状态**: Open

4. **[#16056](https://github.com/openai/codex/pull/16056) shell-command: 加速 Windows PowerShell 安全测试**
   - **内容**: 优化 CI 流程，解决了 Windows 下 PowerShell 命令安全检查的性能瓶颈。
   - **状态**: Open

### 🚀 功能增强
5. **[#15917](https://github.com/openai/codex/pull/15917) Support Codex CLI stdin piping for `codex exec`**
   - **内容**: 新增支持 `echo "input" | codex exec "prompt"` 的管道调用方式，看齐 Claude Code 体验。
   - **状态**: Open

6. **[#13678](https://github.com/openai/codex/pull/13678) feat(core): add watchdog runtime**
   - **内容**: 引入看门狗运行时，用于监控和管理 Agent 线程的生命周期。
   - **状态**: Open

7. **[#15690](https://github.com/openai/codex/pull/15690) [telemetry] thread events**
   - **内容**: 重构遥测架构，增加线程初始化、分支和恢复的事件埋点。
   - **状态**: Open

### 🧹 重构与清理
8. **[#15922](https://github.com/openai/codex/pull/15922) Remove the legacy TUI split**
   - **内容**: 移除了旧的 TUI 目录，正式废弃 `tui_app_server` 特性标志，统一代码结构。
   - **状态**: Closed

---

## 5. 功能需求趋势
基于今日 Issues 分析，社区需求主要集中在：
1. **IDE 与工作区管理**:
   - **项目隔离**: 强烈需求 Chat History/Task 按项目/工作区隔离 (#3550)，避免全局混乱。
   - **UI 交互**: 增加任务删除功能 (#7727)、完成提示音 (#3962)。
2. **Windows 兼容性**:
   - Windows 沙箱权限 (`apply_patch` 失败) 和符号链接处理问题频发 (#14675, #15448)。
3. **可观测性与控制**:
   - 请求机器可读的状态输出 (`--json`) (#16037)。
   - 自定义压缩钩子 以控制 Token 成本 (#11912)。
4. **MCP 增强**:
   - 需要更细粒度的项目级 MCP 配置 (#2628)。

---

## 6. 开发者关注点
- **稳定性风险**: **v0.117.0** 被发现包含多个严重回归，建议开发者暂缓升级至该版本，关注后续修复。
- **Token 成本**: "Token 燃烧过快" 问题引发恐慌，开发者急需官方解释或计费透明化工具。
- **Windows 生态**: Windows 用户（特别是 WSL2 和 PowerShell 环境）仍面临较多边缘 Bug，体验不如 macOS/Linux 平台稳定。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

你好！我是专注于 AI 开发工具的技术分析师。基于 **2026-03-28** 的 GitHub 数据，这是 **Gemini CLI** 今天的社区动态日报。

---

### 📅 2026-03-28 | Gemini CLI 社区日报
**数据来源**: `google-gemini/gemini-cli`

#### 1. 今日速览
今天 Gemini CLI 社区主要集中在**稳定性修复**和**交互体验优化**上。开发团队正在全力解决用户反馈的“请求取消后界面卡死”问题，并发布了新的预览版 `v0.36.0-preview.5`。同时，针对计划模式和任务追踪系统的功能迭代是当前开发的重点。

#### 2. 版本发布
*   **[v0.36.0-preview.5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.5)**
    *   **发布时间**: 2026-03-28
    *   **更新摘要**: 这是一个快速迭代的预览版本，紧接 `v0.36.0-preview.4` 之后。虽然未在 Release Note 中详述细节，但结合今日的 PR 动态，该版本可能包含针对 UI 布局冲突和状态栏闪烁的热修复。

#### 3. 社区热点 Issues (Top 10)
以下筛选了今日最具讨论度或技术影响力的 Issue：

1.  **[#21096 取消请求后界面卡死](https://github.com/google-gemini/gemini-cli/issues/21096)** ⭐ **(P1 - 高优)**
    *   **摘要**: 用户在 Termux (Android 15) 环境下取消请求后，界面一直显示“Please wait...”无法恢复。
    *   **重要性**: 82 条评论，严重影响用户体验的核心 Bug。目前已有关联 PR #21960 正在修复中。
2.  **[#20498 付费用户无法使用 Gemini 3 模型](https://github.com/google-gemini/gemini-cli/issues/20498)**
    *   **摘要**: 用户反馈拥有付费订阅，但在 CLI 中无法访问最新的 Gemini 3 或 3.1 模型。
    *   **重要性**: 涉及权益和模型分发策略，社区对 CLI 与 Web 端模型同步的透明度表示不满。
3.  **[#17437 Windows 下 CTRL + S 快捷键失效](https://github.com/google-gemini/gemini-cli/issues/17437)**
    *   **摘要**: 在确认更改之前，用户习惯使用 `CTRL + S` 查看文件差异，该功能在 Windows 11 上失效。
    *   **重要性**: 影响工作流效率的高频操作问题。
4.  **[#22745 评估 AST 感知文件读取的价值](https://github.com/google-gemini/gemini-cli/issues/22745)** 🔒 **(Maintainer Only)**
    *   **摘要**: 讨论是否引入抽象语法树（AST）技术来优化代码库读取和映射。
    *   **重要性**: 这代表了对代码理解能力的底层优化方向，可能大幅减少 Token 消耗和提高检索精度。
5.  **[#22855 支持 `/plan` 命令直接传入参数](https://github.com/google-gemini/gemini-cli/issues/22855)** 🔒
    *   **摘要**: 请求 `/plan` 命令能接受文本参数，实现单步启动计划，而不是分两步操作。
    *   **重要性**: 旨在提升“计划模式”的交互效率。
6.  **[#23858 计划模式下文件被意外修改](https://github.com/google-gemini/gemini-cli/issues/23858)**
    *   **摘要**: 用户处于计划模式 时，模型却直接修改了文件，违背了该模式的“只读/规划”预期。
    *   **重要性**: 反映了模型对 Agent 模式约束的遵守问题，涉及 Policy Engine 的完善。
7.  **[#23724 项目级持久化任务追踪器](https://github.com/google-gemini/gemini-cli/issues/23724)** 🔒
    *   **摘要**: 将任务追踪器的状态从临时目录迁移至项目级目录 (`.gemini/tracker/`)，以便持久化和 Git 协作。
    *   **重要性**: SDD (Structured Development Diagram) 工作流的重要基础设施更新。
8.  **[#22819 实现 Memory 路由：全局与项目](https://github.com/google-gemini/gemini-cli/issues/22819)** 🔒
    *   **摘要**: 区分全局用户偏好和项目特定上下文，将记忆存储在不同位置。
    *   **重要性**: 赋予 Agent 更精准的上下文感知能力。
9.  **[#22809 优化主 Agent 提示词以主动写入记忆](https://github.com/google-gemini/gemini-cli/issues/22809)** 🔒
    *   **摘要**: 调整系统提示词，让 Agent 在特定情况下（如用户重复纠正）主动调用 Memory 工具。
    *   **重要性**: 提升 Agent 的“学习”能力和长期记忆的主动性。
10. **[#23571 模型在随机位置创建临时脚本](https://github.com/google-gemini/gemini-cli/issues/23571)**
    *   **摘要**: 模型倾向于在多个目录下生成临时编辑脚本，导致工作区混乱。
    *   **重要性**: 开发者卫生和文件管理的痛点。

#### 4. 重要 PR 进展 (Top 10)
1.  **[#20974 实现紧凑型工具输出](https://github.com/google-gemini/gemini-cli/pull/20974)** 🔒
    *   **内容**: 引入一种高信噪比的渲染模式，压缩工具调用的输出展示，减少终端刷屏。
2.  **[#24065 修复 StatusRow 布局冲突与闪烁循环](https://github.com/google-gemini/gemini-cli/pull/24065)** 🔒
    *   **内容**: 修复 Tip 和 Status 消息导致的 `ResizeObserver` 反馈循环，解决严重的 UI 闪烁和无限重渲染。
3.  **[#21960 修复请求取消后的卡死状态 (#21096)](https://github.com/google-gemini/gemini-cli/pull/21960)**
    *   **内容**: 解决了取消请求后，因重试事件滞后导致 UI 一直显示加载中的 Race Condition 问题。
4.  **[#24040 修复子命令自动补全逻辑](https://github.com/google-gemini/gemini-cli/pull/24040)**
    *   **内容**: 修复了斜杠命令的自动补全建议，例如 `/auto` 菜单项的显示逻辑。
5.  **[#24057 Windows 沙箱实现强制性完整性控制 (MIC)](https://github.com/google-gemini/gemini-cli/pull/24057)** 🔒
    *   **内容**: 在 Windows 上通过限制令牌和作业对象限制来增强 GeminiSandbox 的安全性。
6.  **[#24070 Memory 工具增加 `target` 参数](https://github.com/google-gemini/gemini-cli/pull/24070)** 🔒
    *   **内容**: 允许 `save_memory` 将记忆写入项目特定的 `GEMINI.md`，而不仅仅是全局配置文件。
7.  **[#22139 修复非交互模式下 SessionEnd Hook 双重触发](https://github.com/google-gemini/gemini-cli/pull/22139)**
    *   **内容**: 移除了重复的 Hook 注册，解决了退出时 Hook 执行两次的问题。
8.  **[#24067 修复 429 错误导致的无限重试循环](https://github.com/google-gemini/gemini-cli/pull/24067)** 🔒
    *   **内容**: 修复了 v0.35.2 引入的回归 Bug，防止在遇到频率限制时 CLI 挂起。
9.  **[#24068 优化 Shell 等待输入的 Toast 提示](https://github.com/google-gemini/gemini-cli/pull/24068)** 🔒
    *   **内容**: 将提示颜色更改为 Accent Blue，并移除前缀，符合交互反馈的语义规范。
10. **[#23821 解决 grep_search 中的 ACP 操作中止错误](https://github.com/google-gemini/gemini-cli/pull/23821)** 🔒
    *   **内容**: 改进了超时处理和错误报告，解决了大型代码库搜索时的中止问题。

#### 5. 功能需求趋势
从近期的 Issues 和 PR 讨论，可以看出社区和团队的关注焦点：
*   **SDD (Structured Development Diagram) 工作流深化**: 大量 `workstream-rollup` 标签的 Issue 表明，团队正致力于将 `/spec`、`/plan` 和 Tracker 系统深度集成，目标是实现从规划到执行的全链路自动化（DAG 任务图）。
*   **Agent 自主性与记忆**: 社区强烈希望 Agent 更“聪明”，例如能自动学习用户习惯（Memory System）、区分全局与项目上下文，以及严格遵守计划模式 的约束。
*   **Windows 平台兼容性**: 连续多个 PR 关注 Windows 沙箱安全、符号链接和快捷键问题，显示 Windows 开发者群体的重要性提升。
*   **UI 稳定性**: 无论是修复闪烁、卡死还是优化输出格式，提升终端界面的流畅度和可读性是持续的痛点。

#### 6. 开发者关注点
*   **可靠性 > 新功能**: 即使有 AST 感知等高级特性讨论，当前优先级最高的（P1/P0）往往是“取消卡死”、“429 错误循环”和“Hook 重复触发”等稳定性 Bug。
*   **非交互模式的质量**: 开发者非常看重 CLI 在脚本和 CI/CD 流水线中的表现（Stderr 污染、Hook 触发准确性）。
*   **模型权限的困惑**: 关于 Gemini 3 模型的访问权限问题，反映了开发者对产品定价和功能分级沟通的困惑。

---
*日报生成于 2026-03-28，基于 GitHub 公开数据。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 (2026-03-28)

## 📰 今日速览
GitHub Copilot CLI 在过去 24 小时内发布了 **v1.0.13-1** 和 **v1.0.13-0** 两个小版本，重点优化了 MCP 交互体验与 CLI 启动性能。社区方面，**Alt-screen（全屏模式）** 引发巨大争议，大量用户请求恢复经典模式；同时，关于企业策略限制、MCP 服务配置稳定性以及 CLI 滚动交互 Bug 的讨论热度居高不下。

---

## 🚀 版本发布

### v1.0.13-1 (最新)
**核心更新：**
*   **[Feature]** `/rewind` 与双击 `Esc` 功能升级：新增时间轴选择器，允许回滚至对话历史中的任意节点，不再局限于上一个快照。
*   **[Improved]** **MCP 注册表查询更可靠**：新增自动重试机制与请求超时处理，提升 MCP 服务器连接稳定性。
*   **[Improved]** **启动速度优化**：通过减少 V8 编译缓存，显著加快 CLI 启动时间。

### v1.0.13-0
**核心更新：**
*   **[Feature]** **MCP 服务器 LLM 采样**：MCP 服务器现在可以请求 LLM 推理（采样），需经由新的审查提示并获用户批准。
*   **[Fixed]** **BYOM 推理设置**：修复了在使用 BYOM（自带模型）提供商时，“推理强度”设置未正确生效的问题。
*   **[Fixed]** **策略屏蔽隐藏**：被组织允许列表策略阻止的 MCP 服务器，现在会在 `/mcp show` 中正确隐藏。

---

## 🔥 社区热点 Issues

### 1. [功能请求] 请带回 `no-alt-screen` 选项
**链接：** [Issue #2334](https://github.com/github/copilot-cli/issues/2334)
**热度：** 👍 6 | 评论: 1
**概要：** 自从引入 `alt-screen`（全屏交互模式）后，社区反对声浪高涨。用户抱怨无法使用滚动条、无法在终端内查找历史记录、且无法在查看大文件改动时同时查看上下文。这是目前最受关注的可用性痛点。

### 2. [Bug] 组织 MCP 服务器消失并误报策略禁止
**链接：** [Issue #2236](https://github.com/github/copilot-cli/issues/2236)
**热度：** 👍 28 | 评论: 6
**概要：** 多位企业用户报告，原本可用的组织 MCP 注册表服务器突然消失，并提示“被组织 Copilot 策略禁用”，即便组织管理员并未更改策略。这是一个影响企业生产环境的严重问题。

### 3. [Bug] 无法访问任何模型
**链接：** [Issue #1595](https://github.com/github/copilot-cli/issues/1595)
**热度：** 👍 8 | 评论: 16
**概要：** 企业版用户报告，尽管订阅有效且有剩余额度，CLI 仍报错“Copilot 策略拒绝访问”，甚至无法执行 `/models` 命令。涉及企业策略校验逻辑。

### 4. [Bug] CLI 频繁遭遇瞬态 API 错误与速率限制
**链接：** [Issue #2101](https://github.com/github/copilot-cli/issues/2101)
**热度：** 👍 5 | 评论: 10
**概要：** 用户在使用过程中频繁遇到 `Request failed due to a transient API error`，并迅速导致速率限制触发。社区质疑 CLI 的错误重试机制是否加剧了速率限制的触发。

### 5. [Bug] 400 错误激增
**链接：** [Issue #1274](https://github.com/github/copilot-cli/issues/1274)
**热度：** 👍 5 | 评论: 10
**概要：** 用户在尝试对 diff 文件进行代码审查时，高达 95% 的请求以 400 Bad Request 失败。日志指向请求体无效，疑似 CLI 构造请求存在缺陷。

### 6. [Bug] CLI 间歇性“抽搐”与乱屏
**链接：** [Issue #373](https://github.com/github/copilot-cli/issues/373)
**热度：** 👍 9 | 评论: 10
**概要：** 终端界面在某些提示后开始疯狂上下滚动，产生“口吃”效果，导致必须手动强制干预。该问题在 Issue 列表中多次被提及，涉及渲染循环逻辑。

### 7. [Bug] MCP 超时配置未生效
**链接：** [Issue #172](https://github.com/github/copilot-cli/issues/172)
**热度：** 👍 2 | 评论: 8
**概要：** 尽管在 `mcp-config.json` 中配置了超时字段，Copilot CLI 在运行长耗时 MCP 服务器时仍然报错超时，显示配置未被读取。

### 8. [Bug] Windows 鼠标滚轮被输入框捕获 (无法滚动历史)
**链接：** [Issue #1944](https://github.com/github/copilot-cli/issues/1944)
**热度：** 👍 2 | 评论: 5
**概要：** Windows 平台回归问题。鼠标滚轮事件被底部的输入框拦截，导致无法通过滚轮查看之前的对话历史。

### 9. [Feature Request] 为交互模式增加工具白名单
**链接：** [Issue #1973](https://github.com/github/copilot-cli/issues/1973)
**热度：** 👍 7 | 评论: 4
**概要：** 用户希望能配置工具白名单，以便在自动批准 `grep`、`cat` 等只读操作的同时，仍能对破坏性操作（如 `rm`）保持人工确认。当前的 `/allow-all` 风险过大。

### 10. [Bug] VS Code 中可选 Claude，CLI 中不可选
**链接：** [Issue #2045](https://github.com/github/copilot-cli/issues/2045)
**热度：** 👍 0 | 评论: 4
**概要：** 用户发现在 VS Code Copilot 扩展中可以选择 Claude 模型，但在 Copilot CLI 的模型列表中不可见。

---

## 📌 重要 PR 进展
*过去 24 小时内无新的 Pull Requests 更新。代码库当前处于版本发布后的稳定期。*

---

## 📈 功能需求趋势

1.  **界面交互模式重构**：社区对 `alt-screen` 的负面反馈极其强烈，出现了大量要求恢复行内模式或改进全屏交互（如支持滚动条、文本搜索）的呼声。
2.  **MCP 协议与稳定性**：MCP 相关的 Issue 占据了很大比例，主要集中在超时控制、组织注册表同步、以及策略误判等问题。
3.  **企业策略与权限**：BYOM（自带模型）和企业权限校验是高频痛点，特别是模型列表加载失败和策略误报问题。

---

## 🛠️ 开发者关注点

*   **Alt-screen 的可用性危机**：许多开发者表示新的全屏模式破坏了现有的终端工作流（如复制、粘贴、查找），强烈建议提供一个标志位来禁用它。
*   **渲染性能与稳定性**：长对话历史导致的无限刷新循环和“抽搐”现象严重影响了 CLI 的可用性。
*   **企业环境适配**：特别是在 GitHub Enterprise (GHE) 和代理环境下，登录、模型加载和政策校验似乎存在较多边缘情况未处理。
*   **输入法兼容性**：德语键盘布局无法输入 `@` 符号等问题，表明 CLI 对非美式键盘的输入处理存在缺陷。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

你好！我是 AI 开发工具技术分析师。以下是 **Kimi Code CLI (MoonshotAI/kimi-cli)** 的 **2026-03-28** 社区动态日报。

---

### **1. 今日速览**
Kimi Code CLI 今日正式发布了 **v1.27.0** 版本，核心聚焦于 UI 体验的优化，特别是增量流式渲染和 Plan 显示模式的增强。同时，社区对 **Shell 模式的安全性**和**文件系统稳定性**的关注度显著提升，提交了多项关于 Shell 命令分析和大文件路径处理的 PR。

### **2. 版本发布**
*   **v1.27.0**
    *   **核心亮点**：
        *   **UI 优化**：实现了 Markdown 增量流式渲染，减少了终端输出的卡顿感；增强了 Spinner 加载状态的视觉反馈。
        *   **Plan 功能**：新增 `PlanDisplay` 线路类型，支持计划内容的内联渲染，使得 Agent 在执行复杂任务时的规划展示更直观。
        *   **Web 端改进**：增加了工作区文件面板，方便用户在 Web 模式下直接查看和下载生成的文件。
    *   *查看详情*: [Release v1.27.0](https://github.com/MoonshotAI/kimi-cli/releases)

### **3. 社区热点 Issues**
以下精选了过去 24 小时内最值得关注的 10 个 Issue：

1.  **[#1355 ACP Session 初始化失败](https://github.com/MoonshotAI/kimi-cli/issues/1355)** [Bug]
    *   **原因**：这是一个长期存在的 Bug，近期再次更新。涉及 Windows 环境下的内部索引错误，导致 ACP（可能是 AI Coding Protocol）会话无法建立，影响 Windows IDEA 用户体验。
2.  **[#1607 v26 版本 Write 工具卡顿](https://github.com/MoonshotAI/kimi-cli/issues/1607)** [Bug]
    *   **原因**：用户反馈升级到 1.26.0 后，调用 `write` 工具经常卡死，必须打断才能恢复。这是影响核心编码工作流的严重稳定性问题。
3.  **[#1602 Web 访问白屏](https://github.com/MoonshotAI/kimi-cli/issues/1602)** [Bug]
    *   **原因**：macOS 用户反馈 Web 界面访问失败，控制台报错，怀疑是前端路由或加载问题。
4.  **[#1610 路径补全触及 1000 文件限制](https://github.com/MoonshotAI/kimi-cli/issues/1610)** [Enhancement]
    *   **原因**：在大型项目中使用 `@` 路径补全时，仅能搜索 1000 个文件，导致部分代码无法被引用。社区呼吁提升大型项目的支持能力。
5.  **[#1604 支持 Figma MCP](https://github.com/MoonshotAI/kimi-cli/issues/1604)** [Feature Request]
    *   **原因**：用户希望集成 Figma 的 MCP (Model Context Protocol) 服务，以便在设计文件与代码之间建立桥梁。
6.  **[#1599 API 报错 429](https://github.com/MoonshotAI/kimi-cli/issues/1599)** [Bug]
    *   **原因**：登录或调用 API 时频繁触发 429 错误，可能与客户端的请求频率控制或 Token 桶机制有关。
7.  **[#1366 CLI 参数选择历史会话](https://github.com/MoonshotAI/kimi-cli/issues/1366)** [Enhancement] (Closed)
    *   **原因**：社区希望 CLI 能像 Web 端一样，通过参数列出并继续特定的历史会话，而不仅仅是继续最后一个。该需求似乎已在最近的 PR 中有进展（见 PR #1376 及其 Revert）。
8.  **[#1596 提升对 AGENTS.md 的指令遵从](https://github.com/MoonshotAI/kimi-cli/issues/1596)** [Enhancement]
    *   **原因**：测试发现 Agent 有时会无视项目根目录下的 `AGENTS.md` 约束指令。用户希望提高 Agent 对项目级规则的优先级遵从能力。
9.  **[#1355 (Duplicate) Windows 列表错误](https://github.com/MoonshotAI/kimi-cli/issues/1355)**
    *   同上，Windows 生态兼容性问题仍是痛点。
10. **[#1607 (Duplicate) 工具卡顿](https://github.com/MoonshotAI/kimi-cli/issues/1607)**
    *   同上，文件写入工具的响应阻塞问题高频出现。

### **4. 重要 PR 进展**
过去 24 小时内活跃的 10 个关键 Pull Requests：

1.  **[#1614 feat(security): 增加 Shell 命令安全分析](https://github.com/MoonshotAI/kimi-cli/pull/1614)** [Open]
    *   **内容**：引入轻量级安全分析器，在用户批准 Shell 命令执行前，自动识别潜在的危险操作（如 `rm -rf`），提升交互安全性。
2.  **[#1587 feat(shell): 注入 Shell 输出并持久化 cd](https://github.com/MoonshotAI/kimi-cli/pull/1587)** [Open]
    *   **内容**：极大地改进了 Shell 模式（Ctrl+X）。现在 Shell 的输出会进入上下文，且支持真正的 `cd` 持久化（同步 `os.chdir` 和 session.workdir）。
3.  **[#1588 fix(shell): 使用 git ls-files 优化文件提及](https://github.com/MoonshotAI/kimi-cli/pull/1588)** [Open]
    *   **内容**：针对大型仓库（如 Apache Superset），修复了 `os.walk` 导致的文件发现不全问题，改用 `git ls-files` 加速 `@` 文件补全。
4.  **[#1512 feat: 重写 ACP 认证流程](https://github.com/MoonshotAI/kimi-cli/pull/1512)** [Open]
    *   **内容**：实现了完整的 ACP 认证系统，支持终端登录和 OAuth Device Flow，可能旨在解决 Issue #1355 的登录问题。
5.  **[#1603 feat(cli): 更新命令执行退出码](https://github.com/MoonshotAI/kimi-cli/pull/1603)** [Closed]
    *   **内容**：引入结构化退出码，使 CI 脚本能区分永久性失败和临时错误，提升了 CLI 的可编程性。
6.  **[#1605/1606 revert(skills): 恢复 --skills-dir 覆盖行为](https://github.com/MoonshotAI/kimi-cli/pull/1605)** [Open]
    *   **内容**：这是一个重要的回滚操作。开发团队决定恢复 `--skills-dir` 参数的“覆盖”语义（而非追加），以保持与 v1.25.0 的一致性。
7.  **[#1609 feat(glob): 允许 Glob 工具访问技能目录](https://github.com/MoonshotAI/kimi-cli/pull/1609)** [Closed]
    *   **内容**：修复了技能（Skills）在搜索自己脚本目录时的权限报错问题。
8.  **[#1611 fix(glob): 路径验证前展开 ~](https://github.com/MoonshotAI/kimi-cli/pull/1611)** [Closed]
    *   **内容**：修复了 `Glob` 工具无法识别 `~/` 路径的 Bug，补齐了与其他文件工具的一致性。
9.  **[#1600 feat(shell): 高亮用户输入](https://github.com/MoonshotAI/kimi-cli/pull/1600)** [Open]
    *   **内容**：UI 改进，使用亮蓝色高亮用户输入，并增加分隔线，提升终端可读性。
10. **[#1597 fix: Python 3.13 兼容性修复](https://github.com/MoonshotAI/kimi-cli/pull/1597)** [Open]
    *   **内容**：针对 Python 3.13 中 `charset-normalizer` 的二进制不兼容问题，增加了 `trafilatura` 的导入守护，防止工具加载级联失败。

### **5. 功能需求趋势**
基于 Issues 和 PRs 的分析，社区当前的功能关注点集中在：
*   **大型项目支持**：针对 1000 文件限制和大型仓库路径补全慢的问题，优化文件索引机制（见 #1610, #1588）。
*   **安全与可控性**：增加 Shell 命令的安全审核（#1614），以及对 `AGENTS.md` 规则的强制遵从（#1596）。
*   **Shell 模式增强**：不仅是执行命令，更要求环境的持久化（`cd` 有效）和上下文记忆。
*   **协议与生态集成**：Figma MCP 支持 和 ACP 认证的完善。

### **6. 开发者关注点**
*   **稳定性回退**：v1.26.0 版本中出现的 `write` 工具卡死（#1607）和 API 429 错误（#1599）引发了开发者的担忧，部分用户可能依赖回退或特定 Workaround。
*   **Windows 兼容性**：IDE 插件和 Windows 环境下的会话初始化问题依然是痛点（#1355）。
*   **行为一致性**：关于 CLI 参数（如 `--skills-dir` 和 `--sessions`）的行为变更引发了反复的讨论和 Revert（#1376, #1578, #1605），显示出开发者和用户对 CLI 行为一致性的高要求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 (2026-03-28)

## 1. 今日速览
OpenCode 社区今日在**系统安全性与权限管理**方面展开了激烈讨论，Windows 用户对终端 `Ctrl+C` 导致程序意外退出的反馈尤为强烈。代码贡献方面，社区正在推进 `bash` 指令沙箱化以及本地配置覆盖功能，以增强企业级部署的安全性与灵活性。同时，针对 OpenTUI 和 WebUI 的多项用户体验修复正在合并中。

---

## 2. 版本发布
**过去 24 小时无新版本发布。**

---

## 3. 社区热点 Issues

### 🔥 安全与权限 (SaaS & 本地安全)
*   **[#5076 OpenCode should have better/safer defaults...](https://github.com/anomalyco/opencode/issues/5076)** ⭐ 49
    *   **摘要**：用户指出 OpenCode 默认配置下权限过大（允许编辑任意文件、执行任意命令），存在严重安全风险，建议默认改为“询问模式”。
    *   **重要性**：这是目前获得最多支持的讨论，触及工具的核心安全哲学，关系到企业级用户的采纳。

*   **[#2632 Default permissions allow editing files...](https://github.com/anomalyco/opencode/issues/2632)**
    *   **摘要**：反馈默认允许 AI 执行任何操作非常奇怪，建议对关键命令和文件编辑默认进行二次确认。

### ⌨️ 用户体验与交互 (UX/UI)
*   **[#7957 Ctrl+C should not exit OpenCode](https://github.com/anomalyco/opencode/issues/7957)** ⭐ 20
    *   **摘要**：Windows 用户强烈抗议 `Ctrl+C` 直接退出程序的行为，因为这冲突了通用的“复制”快捷键，导致频繁误操作。
    *   **社区反应**：该问题今日新增大量讨论，用户表示在 Windows Terminal 或 WezTerm 中体验极差。

*   **[#906 Feature request: Paste to attach image](https://github.com/anomalyco/opencode/issues/906)** ⭐ 18
    *   **摘要**：用户希望能直接粘贴剪贴板中的图片（如来自 Excalidraw），而不是只能通过拖拽上传。

*   **[#15212 Cannot select text in chat messages...](https://github.com/anomalyco/opencode/issues/15212)**
    *   **摘要**：在 VS Code 集成终端中，鼠标焦点被锁定在输入框，导致无法选择历史聊天记录中的文本。

### 🐛 跨平台与兼容性
*   **[#6168 Open code Amd64 Linux appimage fails to launch](https://github.com/anomalyco/opencode/issues/6168)**
    *   **摘要**：Linux AppImage 在 Wayland 会话下启动失败，涉及 GTK 模块加载问题。

*   **[#2999 Provide means to disable Ctrl-C](https://github.com/anomalyco/opencode/issues/2999)** ⭐ 18
    *   **摘要**：Windows 用户反馈无法禁用 `Ctrl+C` 退出信号，导致在终端使用时程序频频崩溃。

*   **[#11157 Compaction fails with 400 Bad Request...](https://github.com/anomalyco/opencode/issues/11157)** ⭐ 6
    *   **摘要**：使用 GitHub Copilot Enterprise 时，对话摘要功能失败，因 API 拒绝 `role: "tool"` 的消息格式。

### 🧩 插件与认证
*   **[#12308 Entra Authentication for MCP doesn't work](https://github.com/anomalyco/opencode/issues/12308)**
    *   **摘要**：MCP (Model Context Protocol) 的 Entra 认证登录失败，请求参数中的 `resource` 字段配置有误。

### 🌐 国际化
*   **[#18088 The Chinese, Japanese, and Korean text...](https://github.com/anomalyco/opencode/issues/18088)**
    *   **摘要**：当发生弹窗（如权限请求）时，之前回答中的中日韩（CJK）文本内容会被遮挡或隐藏。

---

## 4. 重要 PR 进展

### 🔧 核心功能与重构
*   **[#19472 Add bash commands sandboxing](https://github.com/anomalyco/opencode/pull/19472)**
    *   **内容**：引入 Bash 命令沙箱机制。这是对安全类 Issue 的直接回应，旨在限制 AI 执行危险命令的能力。

*   **[#19465 feat: add opencode.local.jsonc for local config overrides](https://github.com/anomalyco/opencode/pull/19465)**
    *   **内容**：新增 `opencode.local.jsonc` 配置文件支持，允许用户覆盖项目级配置，解决多人协作时的配置冲突问题。

*   **[#19470 feat(opencode): wire permission.ask plugin hook](https://github.com/anomalyco/opencode/pull/19470)**
    *   **内容**：重新接入了 `permission.ask` 插件钩子，允许插件系统介入权限请求流程。

### 🐛 Bug 修复
*   **[#19468 fix(tui): patch StdinParser...](https://github.com/anomalyco/opencode/pull/19468)**
    *   **内容**：修复了在 Web 终端（如 VS Code 终端）中鼠标选择文本时出现乱码的问题，针对碎片化的鼠标序列进行了补丁处理。

*   **[#19350 fix(copilot): use GitHub App token flow...](https://github.com/anomalyco/opencode/pull/19350)**
    *   **内容**：修复了 GitHub Copilot 预览模型（如 claude-opus-4.6-fast）无法使用的问题，改用 GitHub App token 流程。

*   **[#19464 fix: join system messages into single message](https://github.com/anomalyco/opencode/pull/19464)**
    *   **内容**：修复了部分 LLM 提供商不支持多条系统消息的问题，现在会将其合并为单条消息发送。

### 🎨 UI/UX 改进
*   **[#18767 feat(app): Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)**
    *   **内容**：针对移动端和触摸设备进行了界面优化，改善 Desktop App 在非桌面环境下的触控体验。

*   **[#19386 fix(tui): sync terminal background to theme via OSC 11](https://github.com/anomalyco/opencode/pull/19386)**
    *   **内容**：通过 OSC 11 转义序列同步终端背景色与主题，修复了边缘像素留白问题。

*   **[#12953 fix(tui): standardize dialog padding...](https://github.com/anomalyco/opencode/pull/12953)**
    *   **内容**：标准化了 TUI 对话框的 Padding 并修复了垂直居中问题，提升终端界面的一致性。

---

## 5. 功能需求趋势

*   **安全性与沙箱**：社区强烈要求 OpenCode 默认不再“裸奔”，引入命令沙箱和更严格的权限默认值是企业用户的核心诉求。
*   **Windows 兼容性优化**：`Ctrl+C` 快捷键冲突是当前最大的体验痛点，Windows 用户体验亟待改善。
*   **多模态输入**：直接粘贴图片的功能呼声很高，用户希望减少从截图工具到 AI 助手的操作步骤。
*   **本地配置灵活性**：开发者迫切需要一种不修改项目仓库配置即可覆盖设置的方法（例如支持 `config.d/` 或 `.local` 后缀）。

---

## 6. 开发者关注点

*   **终端环境下的鼠标交互**：VS Code 集成终端中的鼠标捕获和文本选择逻辑存在严重缺陷，导致用户无法复制历史输出。
*   **认证复杂性**：MCP 和 GitHub Copilot Enterprise 的集成在认证层面频频报错（400 Bad Request, 403 Token exchange），阻碍了企业工具链的打通。
*   **LLM 兼容性**：随着模型提供商 API 的更新（如 AI SDK V3/V6, Google Vertex），OpenCode 在消息格式和上下文窗口上限的处理上显得滞后，导致请求失败或上下文被意外截断。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 (2026-03-28)

## 1. 今日速览
Qwen Code 今日发布了 **v0.14.0-preview.1** 预览版及 **v0.13.1** 稳定版，重点修复了扩展安装和 CLI 内存显示问题。社区关注度主要集中在 **Windows 路径处理缺陷**、**IDE 集成中的 Token 浪费** 以及 **权限记忆功能失效** 等严重影响开发体验的 Bug 上。

## 2. 版本发布
*   **[v0.13.1]**: 稳定版更新。
    *   **[Fix]** 支持从非 GitHub 的 Git URL 安装扩展 ([PR #2539](https://github.com/QwenLM/qwen-code/pull/2539))。
    *   **[Fix]** 修复 `/memory show --project` 和 `--global` 无法显示所有配置上下文文件的问题 ([PR #23](https://github.com/QwenLM/qwen-code/pull/23))。
*   **[v0.14.0-preview.1]**: 新的预览版本已发布 ([Changelog](https://github.com/QwenLM/qwen-code/compare/v0.13.1...v0.14.0-preview.1))。

## 3. 社区热点 Issues

### 🔴 关键 Bug
1.  **[#2709](https://github.com/QwenLM/qwen-code/issues/2709) | IDE Diff 接受导致 Token 浪费**
    *   **摘要**：在 IDE 集成模式下接受 Diff 修改时，系统会将完整文件内容填充到 `edit` 工具的参数中，导致 Token 消耗巨大。
    *   **关注点**：性能/成本，社区强烈请求优化。

2.  **[#2702](https://github.com/QwenLM/qwen-code/issues/2702) | IDE 集成下多次编辑失败**
    *   **摘要**：在同一轮对话中，如果 LLM 对同一文件发起多次 `edit` 调用，仅第一次修改成功，后续失败。
    *   **关注点**：工作流中断，严重阻碍批量重构操作。

3.  **[#2688](https://github.com/QwenLM/qwen-code/issues/2688) | 中英文混合文件名处理错误**
    *   **摘要**：系统持续在中文和英文/数字之间添加空格（如 `D:\2026年` 变为 `D:\2026 年`），导致路径识别失败。
    *   **关注点**：本地化支持，中文用户痛点。([#2703](https://github.com/QwenLM/qwen-code/issues/2703) 为类似问题)。

4.  **[#2722](https://github.com/QwenLM/qwen-code/issues/2722) | VSCode "自动编辑" 选项逻辑混乱**
    *   **摘要**：在 VSCode 扩展中选择 "Edit automatically" 时，Agent 被允许执行任意 Shell 命令，违背了仅自动编辑文件的预期。

5.  **[#2700](https://github.com/QwenLM/qwen-code/issues/2700) | 权限 "始终允许" 设置无效**
    *   **摘要**：即便选择了 "Always allow"，Qwen Code 仍会每次弹窗要求确认执行 Python 等命令。
    *   **关注点**：UX/效率，[PR #2670](https://github.com/QwenLM/qwen-code/pull/2670) 已尝试修复此问题。

### 🟡 功能请求与讨论
6.  **[#2655](https://github.com/QwenLM/qwen-code/issues/2655) | 多智能体模式 UI 闪烁**
    *   **摘要**：在 CLI 中展开多智能体模式 (`Ctrl+e`) 会出现屏幕闪烁现象。

7.  **[#2693](https://github.com/QwenLM/qwen-code/issues/2693) | Hooks 文档缺失**
    *   **摘要**：用户询问 `hooks` 功能是否可用，并表示找不到相关文档。([#1708](https://github.com/QwenLM/qwen-code/issues/1708) 也提及此功能无法识别)。

8.  **[#2724](https://github.com/QwenLM/qwen-code/issues/2724) | IntelliJ 插件与本地 Ollama 冲突**
    *   **摘要**：IDEA 2026.1 插件无法使用本地 Ollama 模型，总是尝试登录云服务。

9.  **[#176](https://github.com/QwenLM/qwen-code/issues/176) | 本地模型工具调用失效**
    *   **摘要**：旧 Issue 持续受关注，本地模型（如 qwen3-30b-a3b）虽然返回了工具调用请求，但并未实际执行。

10. **[#2720](https://github.com/QwenLM/qwen-code/issues/2720) | CLI 对接 GLM-5.1 异常**
    *   **摘要**：使用 GLM-5.1 模型进行代码评审时，无法读取文件，持续返回文件为空。

## 4. 重要 PR 进展

1.  **[#2728](https://github.com/QwenLM/qwen-code/pull/2728) | 重构：集中管理 IDE Diff 交互**
    *   **内容**：将 Diff 交互逻辑从各个工具迁移到 `CoreToolScheduler`。旨在修复 Token 浪费问题 (#2709) 并简化审批流程。
2.  **[#2690](https://github.com/QwenLM/qwen-code/pull/2690) | 修复：统一客户端权限流程 (v0.13.1)**
    *   **内容**：统一了 CLI 和 VS Code 的 ACP 权限处理逻辑，修复了 "Always allow" 标签的 UX 问题。
3.  **[#2670](https://github.com/QwenLM/qwen-code/pull/2670) | 修复：Windows 路径大小写敏感性导致权限无法持久化**
    *   **内容**：修复了 Windows 下因路径大小写比较失败，导致 "Always allow" 设置不生效的 Bug。
4.  **[#2707](https://github.com/QwenLM/qwen-code/pull/2707) | 修复：保留原始换行符 (CRLF/LF)**
    *   **内容**：修复了 Linux 下编辑文件强制将 CRLF 转为 LF 的问题，避免整个文件在 Git 中显示为被修改。
5.  **[#2628](https://github.com/QwenLM/qwen-code/pull/2628) | 功能：新增可扩展的 Channels 平台**
    *   **内容**：引入插件化渠道系统，目前支持 Telegram、微信和钉钉集成。
6.  **[#2719](https://github.com/QwenLM/qwen-code/pull/2719) | 功能：扩展支持 NPM Registry 安装**
    *   **内容**：允许通过 NPM 包（包括私有源）安装扩展，便于团队内部分发。
7.  **[#2694](https://github.com/QwenLM/qwen-code/pull/2694) | 修复：斜杠命令后 @ 文件搜索失效 (v0.13.1)**
    *   **内容**：解决了输入自定义 `/` 命令后，`@` 符号无法触发文件搜索建议的问题。
8.  **[#2525](https://github.com/QwenLM/qwen-code/pull/2525) | 功能：添加后续操作建议**
    *   **内容**：任务完成后自动建议相关操作（如 "commit this", "run tests"），对标 Claude Code。
9.  **[#2718](https://github.com/QwenLM/qwen-code/pull/2718) | 修复：高延迟 SSH 终端响应泄露**
    *   **内容**：修复了通过 SSH 访问高延迟 VM 时，终端响应字符泄露为可见垃圾文本的问题。
10. **[#2668](https://github.com/QwenLM/qwen-code/pull/2668) | 功能：阿里云标准 API Key 支持**
    *   **内容**：在认证流程中新增阿里云 Model Studio API Key 选项，支持国内外区域选择。

## 5. 功能需求趋势
*   **IDE 集成深度优化**：用户非常关注 IDE 模式下的性能（Token 浪费）和交互逻辑（权限持久化、编辑自动确认）。
*   **本地化与兼容性**：中文路径处理、Windows 换行符兼容性以及与其他模型（如 GLM, DeepSeek）的对接是高频需求。
*   **扩展生态**：社区呼吁增强扩展管理（NPM 安装）和 Hooks 功能，并希望能集成 `iflow cli` 等优秀工具的理念。
*   **多模态与 CLI 增强**：请求增加 CLI 下的截图/窗口捕获功能，以及更好的撤销/重做支持。

## 6. 开发者关注点
*   **文件操作稳定性**：文件读写、路径处理（尤其是带中文/数字/空格的路径）是当前最大的痛点来源。
*   **权限管理疲劳**：开发者对频繁的权限弹窗表示厌烦，迫切需要更智能的 "Always allow" 机制。
*   **多模型支持**：除了 Qwen 系列模型，开发者尝试接入 DeepSeek、GLM 等其他模型时遇到序列化和工具调用问题。

</details>

---
*本日报由 [agents-radar](https://github.com/jstamagal/agents-radar) 自动生成。*