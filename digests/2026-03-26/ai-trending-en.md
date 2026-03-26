# AI Open Source Trends 2026-03-26

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-03-26 00:12 UTC

---

# GitHub Open Source AI Trends Report
**Date:** 2026-03-26 | **Source:** GitHub Trending & Topic Search

---

## 1. Today's Highlights

Today's trending data reveals a decisive shift toward **Agent Orchestration** and **Multi-Modal Computer Use**. The most explosive growth is seen in frameworks that allow LLMs to act autonomously—specifically the new **Deer-Flow** harness from ByteDance and the **Ruflo** orchestration platform. Interestingly, "Computer Use" is evolving beyond basic screen scraping into **WiFi Sensing** (RuView) and **Subconscious Memory** layers (Letta, Supermemory), indicating a maturation of the "Agentic AI" stack. Developers are moving away from simple chatbots toward complex, multi-step systems that possess long-term memory and enterprise-grade architecture.

---

## 2. Top Projects by Category

### 🤖 AI Agents / Workflows
*Frameworks and platforms for building autonomous agents, swarms, and workflow automation.*

- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)**
  ⭐ 0 (+3,787 today)
  An open-source "SuperAgent" harness featuring sandboxes, memories, and sub-agents to handle complex coding and creation tasks, signaling enterprise-grade agent adoption.
- **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)**
  ⭐ 0 (+1,174 today)
  A leading agent orchestration platform for deploying multi-agent swarms and autonomous workflows with native Claude/Codex integration.
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)**
  ⭐ 0 (+1,341 today)
  A specialized research agent skill that synthesizes data from Reddit, X, and Polymarket into grounded summaries, highlighting the demand for "info-processing" agents.
- **[ruvnet/RuView](https://github.com/ruvnet/RuView)**
  ⭐ 0 (+1,082 today)
  Innovates in agent perception by using WiFi signals for human pose estimation and vital sign monitoring—AI that "sees" without cameras.
- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)**
  ⭐ 29,770
  The leading frontend stack for building AI agents and Generative UI in React/Angular, essential for integrating agents into web apps.
- **[activepieces/activepieces](https://github.com/activepieces/activepieces)**
  ⭐ 21,420
  An AI workflow automation platform supporting ~400 MCP servers, bridging the gap between agents and legacy business tools.

### 🔧 AI Infrastructure
*SDKs, gateways, sandboxes, and dev-tools required to run and manage AI systems.*

- **[BerriAI/litellm](https://github.com/BerriAI/litellm)**
  ⭐ 0 (+301 today)
  The standard AI Gateway proxy, unifying 100+ LLM APIs with load balancing and guardrails—critical for avoiding vendor lock-in.
- **[trycua/cua](https://github.com/trycua/cua)**
  ⭐ 13,269
  Open-source infrastructure providing sandboxes and SDKs specifically for "Computer-Use" agents that control full desktop OS environments.
- **[alibaba/OpenSandbox](https://github.com/alibaba/OpenSandbox)**
  ⭐ 9,296
  A secure, fast sandbox runtime designed explicitly for executing untrusted AI agent code.
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)**
  ⭐ 74,326
  The de facto standard for high-throughput LLM inference, powering the backend of most modern agent stacks.

### 📦 AI Applications
*End-user apps leveraging AI, including vertical solutions and productivity tools.*

- **[supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)**
  ⭐ 0 (+810 today)
  A scalable "Memory Engine" for the AI era, functioning as a personal knowledge base that LLMs can query.
- **[Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)**
  ⭐ 0 (+1,718 today)
  A self-contained, offline survival computer integrating AI tools for offline/disconnected environments—a niche but highly practical application.
- **[FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2)**
  ⭐ 0 (+1,065 today)
  Automates online money-making processes, reflecting the continued surge in "AI-as-a-business" automation tools.
- **[usestrix/strix](https://github.com/usestrix/strix)**
  ⭐ 0 (+102 today)
  Open-source "AI hackers" for automated vulnerability finding, applying agent swarms to cybersecurity.

### 🔍 RAG / Knowledge
*Retrieval-Augmented Generation, vector databases, and memory layers.*

- **[langgenius/dify](https://github.com/langgenius/dify)**
  ⭐ 134,441
  The dominant platform for visual agentic workflow development and RAG pipelines.
- **[letta-ai/claude-subconscious](https://github.com/letta-ai/claude-subconscious)**
  ⭐ 0 (+71 today)
  Gives "Claude Code" a persistent subconscious memory, addressing the critical need for stateful agent context.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)**
  ⭐ 51,051
  A universal memory layer enabling AI agents to remember user preferences and past interactions across sessions.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)**
  ⭐ 76,130
  A deep document RAG engine that combines advanced OCR with agent capabilities.

### 🧠 LLMs / Training
*Model weights, training frameworks, and fine-tuning tools.*

- **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)**
  ⭐ 69,058
  A unified, efficient tool for fine-tuning 100+ LLMs and VLMs, essential for customizing agents.
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**
  ⭐ 43,705
  Educational resource for training a tiny GPT from scratch, remaining popular for understanding model internals.

---

## 3. Trend Signal Analysis

**The "Agent-as-an-Operating-System" Era**
The data suggests a rapid evolution from simple chatbots to **Agent Orchestrators**. The massive star counts for **Deer-Flow** and **Ruflo** indicate that the community is no longer satisfied with single-loop agents. Instead, the focus is on **harnesses** that can manage sub-agents, memory, and tools (like sandboxes) simultaneously.

**Multi-Modal Perception is Expanding**
A unique and standout trend today is the diversification of *how* agents perceive the world. **RuView** (WiFi DensePose) represents a frontier where AI interacts with the physical world via sensors rather than just APIs or cameras. This suggests a future where agents are embedded in IoT and physical infrastructure, not just web browsers.

**Memory & Subconscious Processing**
The popularity of **Letta-ai/claude-subconscious**, **Supermemory**, and **Mem0** highlights the "Statelessness Problem" of current LLMs. Developers are aggressively building "Middleware" layers to handle long-term memory, proving that **Context Window != Memory**. The ability to synthesize "30 days of history" (as seen in *last30days-skill*) is becoming a standard feature for high-end agents.

---

## 4. Community Hot Spots

*   **🚀 ByteDance's "Deer-Flow"**: With nearly 4k stars in a day, this is the project to watch for enterprise-grade agent architecture. It attempts to standardize how we build "SuperAgents."
*   **🧠 The "Subconscious" Stack**: Projects like *Letta-ai/claude-subconscious* and *thedotmack/claude-mem* are defining a new layer in the AI stack—persistent memory that sits between the LLM and the user.
*   **🌐 "Computer Use" Infrastructure**: *trycua/cua* and *browser-use* are becoming the standard interfaces for agents to interact with the web, moving away from fragile scraping to robust GUI interaction.
*   **📉 The "MoneyPrinter" Phenomenon**: The sustained popularity of *MoneyPrinterV2* (automation for income) reveals that a massive portion of the open-source community is focused on immediate, practical monetization of AI agents rather than just research.

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*