# AI Open Source Trends 2026-03-13

> Sources: GitHub Trending + GitHub Search API + Trendshift | Generated: 2026-03-13 06:24 UTC

---

# AI Open Source Trends Report — March 13, 2026

## 1. Today's Highlights
The AI open-source ecosystem is witnessing a massive pivot toward **Agentic Capabilities** and **AI-Driven Software Development**. The dominant narrative today is no longer just about chatting with LLMs, but about agents that can *code*, *navigate the web*, and *remember* context. We see a surge in "Code Agents" (e.g., *msitarzewski/agency-agents*, *InsForge/InsForge*) and "Memory Layers" (e.g., *vectorize-io/hindsight*, *mem0ai/mem0*), signaling that the infrastructure war has moved from inference to *state management* for AI. Simultaneously, multimodal capabilities are maturing, with significant activity in Text-to-Speech (*fish-speech*) and on-device optimization (*google-ai-edge/LiteRT*).

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
- [**ollama/ollama**](https://github.com/ollama/ollama) ⭐ 164,971
  - The definitive local inference runner; essential for testing new models like Kimi-K2.5 and GLM-5 instantly.
- [**vllm-project/vllm**](https://github.com/vllm-project/vllm) ⭐ 72,989
  - High-throughput inference engine; critical for serving the latest LLMs in production.
- [**google-ai-edge/LiteRT**](https://github.com/google-ai-edge/LiteRT) ⭐ 0 (+13 today)
  - Successor to TensorFlow Lite; Google's new strategic bet for on-device GenAI deployment.
- [**firecrawl/firecrawl**](https://github.com/firecrawl/firecrawl) ⭐ 92,215
  - The standard for turning web data into LLM-ready context; fueling the RAG revolution.
- [**anthropics/claude-plugins-official**](https://github.com/anthropics/claude-plugins-official) ⭐ 0 (+150 today)
  - Official Anthropic directory; validates the "Claude Code" ecosystem as a major development platform.

### 🤖 AI Agents / Workflows
- [**msitarzewski/agency-agents**](https://github.com/msitarzewski/agency-agents) ⭐ 0 (+4,168 today)
  - A "complete AI agency" framework; explosive growth suggests high demand for persona-based, specialized agents.
- [**alibaba/page-agent**](https://github.com/alibaba/page-agent) ⭐ 0 (+1,205 today)
  - JavaScript in-page GUI agent; bridges the gap between LLM instructions and web interface control.
- [**obra/superpowers**](https://github.com/obra/superpowers) ⭐ 0 (+1,706 today)
  - An agentic skills framework & methodology; reflects the community's need to standardize "how we build agents."
- [**browser-use/browser-use**](https://github.com/browser-use/browser-use) ⭐ 80,584
  - The leading library for making websites accessible to agents; essential for autonomous web task execution.
- [**NousResearch/hermes-agent**](https://github.com/NousResearch/hermes-agent) ⭐ 0 (+1,264 today)
  - An agent "that grows with you"; highlights the trend towards personalized, evolving AI companions.
- [**InsForge/InsForge**](https://github.com/InsForge/InsForge) ⭐ 0 (+263 today)
  - Backend specifically built for "agentic development," allowing agents to ship fullstack apps.

### 📦 AI Applications
- [**CherryHQ/cherry-studio**](https://github.com/CherryHQ/cherry-studio) ⭐ 41,363
  - A sophisticated AI productivity studio integrating 300+ assistants; a prime example of a "Frontend for AI."
- [**fishaudio/fish-speech**](https://github.com/fishaudio/fish-speech) ⭐ 0 (+637 today)
  - SOTA Open Source TTS; leading the charge in high-quality, open-source voice synthesis.
- [**langflow-ai/openrag**](https://github.com/langflow-ai/openrag) ⭐ 0 (+322 today)
  - A comprehensive, single-package RAG platform built on Langflow and Docling.
- [**activepieces/activepieces**](https://github.com/activepieces/activepieces) ⭐ 21,196
  - Open-source alternative to Zapier/Make; now heavily integrated with AI Agents and MCPs.

### 🧠 LLMs / Training
- [**microsoft/BitNet**](https://github.com/microsoft/BitNet) ⭐ 0 (+2,149 today)
  - **Trending #1:** Official inference framework for 1-bit LLMs; critical for the future of efficient, extreme-edge AI.
- [**hiyouga/LlamaFactory**](https://github.com/hiyouga/LlamaFactory) ⭐ 68,335
  - Unified efficient fine-tuning tool; the go-to for training 100+ models (VLMs included).
- [**huggingface/transformers**](https://github.com/huggingface/transformers) ⭐ 157,805
  - The bedrock of the AI ecosystem; supports the latest state-of-the-art models across modalities.
- [**666ghj/MiroFish**](https://github.com/666ghj/MiroFish) ⭐ 0 (+1,857 today)
  - A "Swarm Intelligence Engine"; interesting experimental approach to collective intelligence for prediction.

### 🔍 RAG / Knowledge
- [**vectorize-io/hindsight**](https://github.com/vectorize-io/hindsight) ⭐ 0 (+217 today)
  - "Agent Memory That Learns"; addresses the critical bottleneck of long-term state in agents.
- [**mem0ai/mem0**](https://github.com/mem0ai/mem0) ⭐ 49,631
  - The leading universal memory layer project; enabling agents to retain context across sessions.
- [**infiniflow/ragflow**](https://github.com/infiniflow/ragflow) ⭐ 74,902
  - Fuses RAG with Agent capabilities; deep document understanding is becoming a prerequisite for complex agents.
- [**meilisearch/meilisearch**](https://github.com/meilisearch/meilisearch) ⭐ 56,361
  - Fast hybrid search; increasingly relevant as AI apps need exact keyword matching alongside vector search.
- [**PaddlePaddle/PaddleOCR**](https://github.com/PaddlePaddle/PaddleOCR) ⭐ 72,153
  - The backbone for converting PDFs/Images into structured data; the "eyes" for many RAG systems.

---

## 3. Trend Signal Analysis

**The "Agentic Backend" War**
Today's data reveals a clear shift from "building Chatbots" to **"Building Agents."** The trending list is dominated by infrastructure that supports *autonomy*—specifically tools that help agents write code (*InsForge*, *agency-agents*), navigate the web (*browser-use*, *page-agent*), and manage memory (*Hindsight*, *mem0*). The developer community is rushing to standardize the "Agentic Stack," which looks increasingly like a microservices architecture where the LLM is just the processor, not the whole application.

**Efficiency & The "1-Bit" Frontier**
The massive traction of **microsoft/BitNet** (Trending #1) and Google's release of **LiteRT** underscore a critical trend: **Efficiency is the new feature.** As models plateau in raw intelligence, the focus is shifting to running them cheaper, faster, and locally. 1-bit quantization (BitNet) and on-device runtimes (LiteRT) are no longer academic curiosities but production necessities.

**The Rise of "Workflow Orchestration"**
The sustained popularity of *Dify*, *Langflow*, and *Flowise* (in topic search), combined with today's trending *OpenRAG*, suggests that "Low-Code/No-Code" for AI is maturing. Businesses want to orchestrate complex workflows (RAG + Agents + Memory) without writing raw Python code for every step.

---

## 4. Community Hot Spots

*   **Microsoft BitNet:** If you are interested in the future of LLM deployment on consumer hardware, this is the project to watch. It enables running massive models on minimal hardware.
*   **Browser-use:** Web automation is a superpower for agents. This repository is rapidly becoming the standard library for "Computer Use" in the browser ecosystem.
*   **Hindsight (vectorize-io):** Long-term memory is the hardest problem in agent development. A learning memory system is a potential "killer feature" for persistent agents.
*   **Page-Agent (Alibaba):** Controlling web GUIs via natural language is the "Holy Grail" of automation. This specific approach using JavaScript agents is gaining traction quickly.
*   **Ollama:** Despite its age, it remains the *single most critical tool* for local developers to test the 50+ new models released weekly. The "Topic Search" confirms its dominance as the default interface for local AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*