# AI Open Source Trends 2026-04-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-04-05 00:12 UTC

---

# GitHub Open Source AI Trends Report
**Date:** 2026-04-05 | **Data Source:** GitHub Trending & Topic Search

### 1. Today's Highlights

The open-source AI community is currently obsessed with **agentic coding tools** and **multi-agent orchestration**. Today's trending list is dominated by "Code-CX" alternatives—harnesses that extend autonomous coding capabilities—reflecting a massive shift from simple chat interfaces to complex, agentic workflows. Microsoft's entry into the orchestration space with `agent-framework` signals a push toward standardizing how multi-agent systems are deployed in enterprise environments. Additionally, there is a strong surge in "local-first" and "Mac-native" inference (MLX), indicating developers prefer running powerful models on-premise for privacy and cost reasons.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure
*Frameworks, SDKs, and developer tools.*

| Project | Stars | Description |
| :--- | :--- | :--- |
| [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | **+1,789** today | **Trending:** An open-source "Agent Harness" that adds hooks, agent teams, and HUDs to your existing coding CLI (Codex/Cursor). |
| [block/goose](https://github.com/block/goose) | **+935** today | **Trending:** An extensible, open-source AI agent tool in Rust that goes beyond suggestions to execute, edit, and test code with any LLM. |
| [Blaizzy/mlx-vlm](https://github.com/Blaizzy/mlx-vlm) | **+343** today | **Trending:** Enables inference and fine-tuning of Vision Language Models (VLMs) locally on Apple Silicon using the MLX framework. |
| [microsoft/agent-framework](https://github.com/microsoft/agent-framework) | **New** | Microsoft's official framework for building and orchestrating multi-agent workflows with support for Python and .NET. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 75,260 | A high-throughput and memory-efficient inference engine, essential for serving LLMs at scale. |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 69,521 | A unified, efficient fine-tuning framework for 100+ LLMs and VLMs. |

#### 🤖 AI Agents / Workflows
*Agent frameworks, automation, and orchestration.*

| Project | Stars | Description |
| :--- | :--- | :--- |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | 48,230 | A "nano" implementation of a Claude Code-like agent harness, built from 0 to 1 for educational and practical use. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 42,911 | A productivity studio providing unified access to frontier LLMs via autonomous agents and smart chat. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 29,981 | The frontend stack for AI agents and Generative UI, integrating React and Angular via the AG-UI Protocol. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 24,962 | An agent framework designed to "grow with you," focusing on adaptability and long-term context. |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 21,566 | Enterprise-grade workflow automation supporting AI Agents and MCP (Model Context Protocol) servers. |
| [trycua/cua](https://github.com/trycua/cua) | 13,379 | Open-source infrastructure providing sandboxes and SDKs for "Computer-Use Agents" that control full desktops. |
| [langgenius/dify](https://github.com/langgenius/dify) | 135,922 | A production-ready platform for developing agentic RAG workflows. |

#### 📦 AI Applications
*End-user apps and vertical solutions.*

| Project | Stars | Description |
| :--- | :--- | :--- |
| [onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx) | **+1,197** today | **Trending:** An open-source AI platform connecting to every LLM, designed for advanced search and chat capabilities. |
| [zhayujie/chatgpt-on-wechat](https://github.com/zhayujie/chatgpt-on-wechat) | 42,756 | A super AI assistant capable of task planning and OS access, integrated directly into WeChat and other messaging platforms. |
| [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) | 20,991 | A free, local, open-source coworking app compatible with various CLI coding agents (Claude, Goose, etc.). |
| [saturndee/waoowaoo](https://github.com/saturndec/waoowaoo) | 10,813 | An industry-first professional AI Agent platform for controllable film & video production. |

#### 🧠 LLMs / Training
*Model weights and training pipelines.*

| Project | Stars | Description |
| :--- | :--- | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 45,622 | Educational project demonstrating how to train a 64M-parameter GPT model from scratch in 2 hours. |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 70,579 | An AI-driven software development agent (formerly OpenDevin) capable of solving engineering tasks. |
| [ollama/ollama](https://github.com/ollama/ollama) | 167,169 | The standard for running local LLMs (Llama, DeepSeek, Gemma, etc.) with a simple CLI. |

#### 🔍 RAG / Knowledge
*Vector databases and retrieval systems.*

| Project | Stars | Description |
| :--- | :--- | :--- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 132,376 | The foundational framework for context-aware reasoning applications and RAG. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 77,121 | A leading RAG engine that fuses deep document understanding with agent capabilities. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 43,600 | A high-performance, cloud-native vector database built for scalable AI applications. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 56,954 | A lightning-fast search engine bringing AI-powered hybrid search to applications. |

---

### 3. Trend Signal Analysis

**The Rise of the "Agent Harness"**
The most distinct signal from today's data is the explosion of "Agent Harnesses" or "Agent Wrappers" (e.g., *oh-my-codex*, *learn-claude-code*, *everything-claude-code*). The community is moving past generic AI chatbots toward highly specialized, tool-augmented autonomous coding agents. These projects function as middleware, allowing LLMs to execute terminal commands, manipulate files, and observe system states (HUDs). This reflects a maturation in the stack: developers are no longer just asking "What model should I use?" but "How do I give this model hands and eyes?"

**Standardization of Multi-Agent Systems**
With the release of `microsoft/agent-framework` and the high star counts on `activepieces` (MCP support), there is a clear trend toward interoperability and standardization. The industry is moving away from monolithic single-agent scripts toward **orchestrated multi-agent workflows** (e.g., one agent plans, another writes code, a third tests). The mention of MCP (Model Context Protocol) in multiple top repositories suggests it is becoming the de facto standard for tool discovery and connection.

**Local-First & Privacy**
The trend of `MLX` (Apple Silicon) and `Ollama`-centric repositories highlights a "Local-First" counter-movement. As enterprise concerns regarding data privacy grow and API costs for massive reasoning chains (O1/R1 class models) increase, developers are building infrastructure to run powerful agentic workflows locally.

---

### 4. Community Hot Spots

*   **🔥 Agentic Coding CLI:** The cluster around *oh-my-codex* and *goose* is the hottest area right now. Developers are eager to extend VS Code/Cursor capabilities into the terminal.
*   **⚙️ Rust for AI Tooling:** The appearance of *block/goose* and *qdrant* in trending lists signals a growing preference for **Rust** in building high-performance, reliable AI infrastructure (replacing some Python/Node.js legacy tools).
*   **🦀 The MCP Ecosystem:** Projects like *activepieces* and *AionUi* that explicitly support **Model Context Protocol (MCP)** are seeing rapid adoption as they solve the "interoperability" problem between different agents.
*   **📉🤖 Test-Time Scaling:** While not dominating the *daily* trending list, the "Test Time Scaling" research repositories (e.g., *testtimescaling*) are gaining traction, mirroring the industry's shift toward "Reasoning Models" (o1, R1).

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*