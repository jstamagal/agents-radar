# AI Open Source Trends 2026-03-14

> Sources: GitHub Trending + GitHub Search API + Trendshift | Generated: 2026-03-14 00:10 UTC

---

## GitHub AI Open Source Trends Report
**Date:** 2026-03-14

### 1. Today's Highlights

The most significant trend today is the explosive rise of **"Agentic Infrastructure"**—tools designed not just to run models, but to manage AI agents that can execute complex workflows. Microsoft’s **BitNet** is leading the charge with a focus on 1-bit LLM inference, signaling a strong industry push toward extreme efficiency and edge deployment. Simultaneously, there is a massive surge in "Computer Use" tools; repositories like **Lightpanda** (a headless browser for AI) and **Page-Agent** (GUI control) indicate that 2026 is the year AI agents move beyond chat windows to actively navigate and manipulate interfaces. Finally, the community is doubling down on **Agent Memory**, with projects like **Hindsight** and **Mem0** trending, proving that persistent memory is now a prerequisite for production-grade agents.

---

### 2. Top Projects by Category

#### 🔧 AI Infrastructure
*   [**microsoft/BitNet**](https://github.com/microsoft/BitNet) ⭐0 (+2227 today)
    Official inference framework for 1-bit LLMs; crucial for running massive models on consumer hardware.
*   [**google-ai-edge/LiteRT**](https://github.com/google-ai-edge/LiteRT) ⭐0 (+211 today)
    The successor to TensorFlow Lite, Google's renewed push for on-device GenAI deployment.
*   [**lightpanda-io/browser**](https://github.com/lightpanda-io/browser) ⭐0 (+2093 today)
    A headless browser specifically architected for AI agents and automation (Zig-based).
*   [**promptfoo/promptfoo**](https://github.com/promptfoo/promptfoo) ⭐0 (+1668 today)
    Essential testing and red-teaming tool for prompts, RAGs, and agents.
*   [**vllm-project/vllm**](https://github.com/vllm-project/vllm) ⭐73,018
    High-throughput inference engine, remaining the standard for LLM serving.
*   [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) ⭐92,607
    The dominant API for turning entire websites into LLM-ready data.

#### 🤖 AI Agents / Workflows
*   [**msitarzewski/agency-agents**](https://github.com/msitarzewski/agency-agents) ⭐0 (+5745 today)
    A comprehensive framework creating a "complete AI agency" with specialized expert agents.
*   [**obra/superpowers**](https://github.com/obra/superpowers) ⭐0 (+2106 today)
    An agentic skills framework focused on software development methodologies.
*   [**alibaba/page-agent**](https://github.com/alibaba/page-agent) ⭐0 (+1468 today)
    A JavaScript in-page agent capable of controlling web interfaces via natural language.
*   [**vectorize-io/hindsight**](https://github.com/vectorize-io/hindsight) ⭐0 (+595 today)
    "Agent Memory That Learns" – focusing on longitudinal learning for agents.
*   [**langgenius/dify**](https://github.com/langgenius/dify) ⭐132,697
    The production-standard platform for visual agentic workflow creation.
*   [**browser-use/browser-use**](https://github.com/browser-use/browser-use) ⭐80,690
    Library enabling agents to automate tasks directly in the browser.

#### 📦 AI Applications
*   [**langflow-ai/openrag**](https://github.com/langflow-ai/openrag) ⭐0 (+905 today)
    A comprehensive, single-package RAG platform.
*   [**anthropics/claude-plugins-official**](https://github.com/anthropics/claude-plugins-official) ⭐0 (+654 today)
    The official directory for Claude Code Plugins, signaling growing ecosystem support.
*   [**AstrBotDevs/AstrBot**](https://github.com/AstrBotDevs/AstrBot) ⭐0 (+1128 today)
    Agentic chatbot infrastructure integrating multiple IM platforms and LLMs.
*   [**fishaudio/fish-speech**](https://github.com/fishaudio/fish-speech) ⭐0 (+559 today)
    SOTA Open Source Text-to-Speech engine.
*   [**CherryHQ/cherry-studio**](https://github.com/CherryHQ/cherry-studio) ⭐41,436
    A productivity studio offering unified access to frontier LLMs and autonomous agents.

#### 🔍 RAG / Knowledge & Memory
*   [**mem0ai/mem0**](https://github.com/mem0ai/mem0) ⭐49,717
    The leading "Universal memory layer" project for AI Agents.
*   [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) ⭐74,954
    A deep-document RAG engine bridging complex PDFs and Knowledge Graphs.
*   [**PaddlePaddle/PaddleOCR**](https://github.com/PaddlePaddle/PaddleOCR) ⭐72,203
    Critical tool for turning visual documents into structured data for LLMs.
*   [**milvus-io/milvus**](https://github.com/milvus-io/milvus) ⭐43,282
    High-performance vector database, the backbone of modern RAG.
*   [**memvid/memvid**](https://github.com/memvid/memvid) ⭐13,425
    A serverless, single-file memory layer attempting to replace complex RAG pipelines.

#### 🧠 LLMs / Training
*   [**ollama/ollama**](https://github.com/ollama/ollama) ⭐164,980
    The undisputed king of local model management (Kimi, DeepSeek, Qwen, etc.).
*   [**huggingface/transformers**](https://github.com/huggingface/transformers) ⭐157,772
    The foundational library for state-of-the-art model definitions.
*   [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) ⭐68,373
    Unified fine-tuning tool for 100+ models, essential for custom LLM development.

---

### 3. Trend Signal Analysis

**The "Agentic Stack" is consolidating.**
The standout trend from March 14, 2026, is not just the volume of new agent projects, but the specialization of the infrastructure supporting them. We are seeing a distinct shift from generic "chat with PDF" tools to **"Computer Use" and "Memory" infrastructure**.
*   **Computer Use:** The viral success of *Lightpanda* and *Page-Agent* (both trending today) alongside *browser-use* (from topic search) confirms that the community is solving the last-mile problem of AI: **Interface Control**. Developers are building stacks where LLMs don't just generate text, but control DOM elements and execute browser actions.
*   **Memory as a Service:** The trending status of *Hindsight* and *Mem0* highlights that context window limitations are being solved by "learned memory" systems rather than just bigger windows.
*   **The "Lite" Revolution:** Microsoft's *BitNet* and Google's *LiteRT* trending simultaneously suggests a massive industry pivot toward **1-bit and on-device inference**. The community is reacting to the prohibitive cost of cloud inference by aggressively optimizing for edge deployment.

**Development Methodology Shift:** The rise of *obra/superpowers* and *agency-agents* implies a new software development lifecycle where "Agentic Skills" are treated as the new microservices.

---

### 4. Community Hot Spots

*   **Browser Automation Agents:**
    *   **Projects to Watch:** [lightpanda-io/browser](https://github.com/lightpanda-io/browser), [alibaba/page-agent](https://github.com/alibaba/page-agent)
    *   **Reasoning:** The highest star-velocity today is in tools that allow LLMs to "see" and "click" the web. This is the immediate frontier for agentic capabilities.
*   **Specialized Inference (1-bit & Edge):**
    *   **Projects to Watch:** [microsoft/BitNet](https://github.com/microsoft/BitNet), [google-ai-edge/LiteRT](https://github.com/google-ai-edge/LiteRT)
    *   **Reasoning:** Major tech giants are releasing frameworks to minimize model footprints. This is where the cost-savings battle is being fought.
*   **Claude Ecosystem Expansion:**
    *   **Projects to Watch:** [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official), [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)
    *   **Reasoning:** With the "Coding Agent" wars heating up, the tooling around Claude (plugins, memory, benchmarks) is becoming a primary focus for open-source devs.
*   **Agentic Memory Systems:**
    *   **Projects to Watch:** [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight), [mem0ai/mem0](https://github.com/mem0ai/mem0)
    *   **Reasoning:** Static RAG is no longer enough. Projects that offer "learning" memory (updating based on new interactions) are gaining traction.

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*