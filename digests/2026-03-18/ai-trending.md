# AI 开源趋势日报 2026-03-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-03-18 00:10 UTC

---

# AI 开源趋势日报 | 2026-03-18

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**（6→5，排除 1 个）：
| 项目 | 判定 | 说明 |
|:---|:---|:---|
| obra/superpowers | ✅ 保留 | Agentic skills 框架，AI 开发方法论 |
| codecrafters-io/build-your-own-x | ❌ 排除 | 通用编程学习资源，非 AI 特定 |
| abhigyanpatwari/GitNexus | ✅ 保留 | 浏览器端代码知识图谱 + Graph RAG Agent |
| langchain-ai/deepagents | ✅ 保留 | LangChain/LangGraph Agent 框架 |
| jarrodwatts/claude-hud | ✅ 保留 | Claude Code 插件，AI 开发工具 |
| cloudflare/workerd | ❌ 排除 | JS/Wasm 运行时，非 AI 特定 |

**主题搜索**：80 个项目全部与 AI/ML 明确相关，全部保留。

---

## 第二步：分类体系

| 项目 | 主要类别 | 次要类别 |
|:---|:---|:---|
| obra/superpowers | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| abhigyanpatwari/GitNexus | 🔍 RAG/知识库 | 🔧 AI 基础工具 |
| langchain-ai/deepagents | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| jarrodwatts/claude-hud | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| ollama/ollama | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| huggingface/transformers | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| langgenius/dify | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| langchain-ai/langchain | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| open-webui/open-webui | 📦 AI 应用 | 🔧 AI 基础工具 |
| firecrawl/firecrawl | 🔧 AI 基础工具 | 🔍 RAG/知识库 |
| browser-use/browser-use | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| infiniflow/ragflow | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| vllm-project/vllm | 🔧 AI 基础工具 | 🧠 大模型/训练 |
| OpenHands/OpenHands | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| hiyouga/LlamaFactory | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| unslothai/unsloth | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| meilisearch/meilisearch | 🔍 RAG/知识库 | 🔧 AI 基础工具 |
| run-llama/llama_index | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| milvus-io/milvus | 🔍 RAG/知识库 | 🔧 AI 基础工具 |
| qdrant/qdrant | 🔍 RAG/知识库 | 🔧 AI 基础工具 |
| chroma-core/chroma | 🔍 RAG/知识库 | 🔧 AI 基础工具 |
| mem0ai/mem0 | 🔍 RAG/知识库 | 🤖 AI 智能体/工作流 |
| zhayujie/chatgpt-on-wechat | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| CherryHQ/cherry-studio | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| CopilotKit/CopilotKit | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| activepieces/activepieces | 🤖 AI 智能体/工作流 | 📦 AI 应用 |
| trycua/cua | 🤖 AI 智能体/工作流 | 🔧 AI 基础工具 |
| e2b-dev/E2B | 🔧 AI 基础工具 | 🤖 AI 智能体/工作流 |
| ScrapeGraphAI/Scrapegraph-ai | 📦 AI 应用 | 🤖 AI 智能体/工作流 |
| tensorflow/tensorflow | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| pytorch/pytorch | 🧠 大模型/训练 | 🔧 AI 基础工具 |
| microsoft/ML-For-Beginners | 🧠 大模型/训练 | — |
| scikit-learn/scikit-learn | 🧠 大模型/训练 | 🔧 AI 基础工具 |

---

## 第三步：完整报告

---

### 1. 今日速览

今日 AI 开源领域呈现 **"Agent 基础设施"** 爆发态势：LangChain 官方推出 [deepagents](https://github.com/langchain-ai/deepagents) 强化子代理与文件系统能力，单日斩获 1,415 stars；[superpowers](https://github.com/obra/superpowers) 以 3,078 stars 登顶 Trending，提出"Agentic skills framework"新范式。与此同时，**浏览器端 AI 工具**成为新热点——[GitNexus](https://github.com/abhigyanpatwari/GitNexus) 实现零服务器代码知识图谱与 Graph RAG，[claude-hud](https://github.com/jarrodwatts/claude-hud) 则为 Claude Code 带来可视化监控层。向量数据库领域持续活跃，[cognee](https://github.com/topoteretes/cognee) 以"6 行代码构建 Agent 记忆"的极简定位引发关注。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [obra/superpowers](https://github.com/obra/superpowers) | +3,078 今日 | **今日最热**：Agentic skills 框架与软件开发方法论，重新定义 AI 原生开发范式 |
| [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents) | +1,415 今日 | LangChain 官方 Agent  harness，支持规划工具、文件后端与子代理生成，复杂任务处理能力跃升 |
| [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | +466 今日 | Claude Code 可视化插件，实时监控上下文使用、工具调用与待办进度，补齐终端 Agent 的可观测性短板 |
| [ollama/ollama](https://github.com/ollama/ollama) | 165,376 | 本地大模型运行的事实标准，已支持 Kimi-K2.5、GLM-5、DeepSeek 等最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 73,442 | 高吞吐、内存高效的 LLM 推理引擎，生产级部署首选 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 94,424 | "Web Data API for AI"，将任意网站转为 LLM-ready 结构化数据，RAG 管道关键组件 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 29,483 | React/Angular 前端 Agent 栈，AG-UI 协议制定者，推动生成式 UI 标准化 |

#### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [langgenius/dify](https://github.com/langgenius/dify) | 133,260 | 生产级 Agentic 工作流开发平台，"LLM 应用开发"向"Agent 工程化"转型的标杆 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 69,307 | AI 驱动软件开发（AI-SDE），从代码生成到全栈开发的自主 Agent |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 81,109 | 让 AI Agent 操控浏览器，网页自动化任务的通用基础设施 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,265 | ~400 个 MCP 服务器的 AI 自动化平台，Agent 与工作流的桥梁 |
| [trycua/cua](https://github.com/trycua/cua) | 13,151 | 开源 Computer-Use Agent 基础设施，支持 macOS/Linux/Windows 桌面控制 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 8,480 | "随你成长的 Agent"，强调持续学习与自适应能力 |
| [crestalnetwork/intentkit](https://github.com/crestalnetwork/intentkit) | 6,493 | 自托管云 Agent 集群，多 Agent 协作的分布式架构 |

#### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 127,604 | 最友好的本地 AI 界面，Ollama/OpenAI API 统一入口，"私有化 ChatGPT" |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,260 | CowAgent 超级 AI 助理，支持飞书/钉钉/企微/QQ 全平台，主动思考与长期记忆 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 41,673 | AI 生产力工作室，300+ 助手 + 自主 Agent，统一接入前沿大模型 |
| [ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai) | 23,027 | 基于 AI 的智能网页爬虫，自然语言描述即可提取结构化数据 |
| [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo) | 9,612 | **首个工业级 AI 影视生产平台**，从短片到真人电影的好莱坞标准工作流 |

#### 🧠 大模型/训练（模型、训练框架、微调）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 157,969 | 模型定义框架的事实标准，文本/视觉/音频/多模态全覆盖 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 68,593 | 100+ LLM/VLM 统一高效微调（ACL 2024），降低领域适配门槛 |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | 54,628 | 本地训练与运行开源模型的统一 Web UI，Qwen/DeepSeek/Gemma 一站式支持 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 6,554 | Rust 生态的模块化 LLM 应用框架，性能与类型安全优先 |
| [BrainBlend-AI/atomic-agents](https://github.com/BrainBlend-AI/atomic-agents) | 5,768 | "原子化构建 Agent"，强调可组合、可测试的 Agent 架构设计 |

#### 🔍 RAG/知识库（向量数据库、检索增强、记忆）

| 项目 | Stars | 一句话说明 |
|:---|:---|:---|
| [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) | +1,116 今日 | **零服务器代码智能引擎**：浏览器端知识图谱 + Graph RAG Agent，代码探索新范式 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 75,282 | RAG 与 Agent 能力融合的开源引擎，构建 LLM 的卓越上下文层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 47,744 | 领先的文档 Agent 与 OCR 平台，数据连接与检索的核心基础设施 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 50,192 | AI Agent 的通用记忆层，跨会话长期记忆的标准化方案 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 14,281 | **"6 行代码构建 Agent 记忆"**，知识引擎的极简主义实践 |
| [memvid/memvid](https://github.com/memvid/memvid) | 13,485 | 无服务器、单文件记忆层，替代复杂 RAG 管道，"给 Agent 即时检索与长期记忆" |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 22,090 | 无向量、基于推理的 RAG 文档索引，存储成本降低 97% 的端侧 RAG 方案 |

---

### 3. 趋势信号分析

**Agent 基础设施进入"深水区"**。今日热榜清晰显示社区焦点从"能用的 Agent"转向"工程化的 Agent"：LangChain [deepagents](https://github.com/langchain-ai/deepagents) 强化子代理编排与文件系统交互，[superpowers](https://github.com/obra/superpowers) 提出系统性的 skills 框架，两者共同指向 **Agent 能力的模块化与可复用性** 这一核心命题。这与 Anthropic 近期 MCP（Model Context Protocol）的生态扩张形成呼应——[activepieces](https://github.com/activepieces/activepieces) 已集成 ~400 个 MCP 服务器，协议标准化正在加速。

**浏览器端 AI 成为新兴技术栈**。[GitNexus](https://github.com/abhigyanpatwari/GitNexus) 的"零服务器"架构与 [claude-hud](https://github.com/jarrodwatts/claude-hud) 的终端可视化，分别代表了 **AI 工具的去中心化**（隐私优先、本地运行）与 **可观测性增强**（复杂 Agent 行为的透明化）两大方向。这反映出开发者对"云端依赖"的反思，以及调试生产级 Agent 的迫切需求。

**记忆层创新涌现**。[cognee](https://github.com/topoteretes/cognee) 的极简 API 设计与 [memvid](https://github.com/memvid/memvid) 的"单文件无服务器"方案，挑战传统向量数据库的复杂性；[PageIndex](https://github.com/VectifyAI/PageIndex) 更提出"无向量 RAG"的激进路线。这表明 **RAG 架构正在分化**：追求极致简化的端侧方案 vs. 追求极致性能的云原生方案，将长期并存。

---

### 4. 社区关注热点

- **🔥 [obra/superpowers](https://github.com/obra/superpowers)** — 今日新增 3,078 stars 登顶，"Agentic skills framework"可能定义下一代 AI 原生开发方法论，需密切关注其技能定义规范与社区采纳度

- **🔥 [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus)** — 浏览器端 Graph RAG + 代码知识图谱，零服务器架构契合企业私有化需求，代码智能领域的潜在颠覆者

- **🔥 [langchain-ai/deepagents](https://github.com/langchain-ai/deepagents)** — LangChain 官方子代理框架，标志着从"链式编排"向"层级化 Agent 组织"的架构升级，复杂任务处理能力的关键基础设施

- **🔥 [topoteretes/cognee](https://github.com/topoteretes/cognee)** — "6 行代码 Agent 记忆"的极简主义，可能降低记忆层采纳门槛，观察其是否成为新一代 Agent 开发的标准配置

- **🔥 [saturndec/waoowaoo](https://github.com/saturndec/waoowaoo)** — 首个工业级 AI 影视生产平台，代表 Agent 技术向创意产业的垂直渗透，"可控生成"与"好莱坞标准"的落地值得关注

---

*报告生成时间：2026-03-18*  
*数据来源：GitHub Trending & Search API*

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*