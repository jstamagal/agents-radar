# AI Open Source Trends 2026-03-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-03-25 00:11 UTC

---

# GitHub Open Source AI Trends Report
**Date:** 2026-03-25 | **Source:** GitHub Trending & Topic Search

## 1. Today's Highlights

The open-source AI community is shifting aggressively from "chatting" to "doing," with **Agent Orchestration** and **Computer-Use** tooling dominating today’s trending charts. ByteDance’s release of the **Deer-Flow** SuperAgent harness has captured the most attention (4,300+ stars), signaling a push toward production-grade agents capable of coding and research tasks. Simultaneously, there is a massive surge in **Autonomous Financial Agents**, with multiple repositories appearing on the trending list focused on LLM-driven trading and "Money Printer" automation. Finally, the **Claude Code** ecosystem is rapidly maturing, evidenced by the rise of agent frameworks like `ruflo` and curated skill lists, indicating a strong preference for IDE-native AI capabilities over standalone web interfaces.

---

## 2. Top Projects by Category

### 🤖 AI Agents / Workflows
*The dominant category of the day, focusing on multi-agent systems, financial automation, and task execution.*

*   **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** ⭐+4,346 Today
    *   A production-grade "SuperAgent" harness designed for complex tasks like research and coding, featuring sandboxes and memory management.
*   **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐+1,760 Today
    *   A multi-agent LLM framework specifically built for financial trading, reflecting the growing intersection of Generative AI and FinTech.
*   **[FujiwaraChoki/MoneyPrinterV2](https://github.com/FujiwaraChoki/MoneyPrinterV2)** ⭐+3,006 Today
    *   An automation tool (viral hit) focused on generating online revenue streams, capitalizing on the "AI for income" trend.
*   **[ruvnet/ruflo](https://github.com/ruvnet/ruflo)** ⭐+1,397 Today
    *   An orchestration platform for deploying Claude-native agent swarms and autonomous workflows, highlighting the demand for Claude-specific infrastructure.
*   **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐+1,278 Today
    *   An agent framework designed to "grow with you," emphasizing personalization and long-term memory from the NousResearch team.

### 🔧 AI Infrastructure
*Developer tools, sandboxes, and orchestration engines powering the next wave of AI apps.*

*   **[Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad)** ⭐+2,513 Today
    *   A self-contained, offline survival computer integrating critical tools and AI, emphasizing edge computing and resilience.
*   **[hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)** ⭐+995 Today
    *   A definitive curated list of skills and plugins for Claude Code, serving as a hub for developers extending Anthropic’s coding agent.
*   **[aquasecurity/trivy](https://github.com/aquasecurity/trivy)** ⭐+104 Today
    *   (Baseline Infrastructure) While a general security scanner, its relevance to AI is highlighted by the need to scan LLM containers and supply chains for vulnerabilities.

### 📦 AI Applications
*End-user products and vertical solutions utilizing AI models.*

*   **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐+728 Today
    *   A specialized application utilizing LLMs to generate high-definition short videos automatically (viral content generation).
*   **[supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)** ⭐+344 Today
    *   A high-performance "Memory Engine" designed to act as a personal knowledge base for the AI era.
*   **[ruvnet/RuView](https://github.com/ruvnet/RuView)** ⭐+861 Today
    *   An innovative application that turns WiFi signals into human pose estimation (video-less monitoring), showcasing novel sensor-AI integration.
*   **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** ⭐+209 Today
    *   An agent skill that synthesizes research from Reddit, X, and Polymarket into grounded summaries, addressing the "data overload" problem.

### 🔍 RAG / Knowledge
*Long-term memory, vector databases, and retrieval systems.*

*   **[langgenius/dify](https://github.com/langgenius/dify)** ⭐134,290 Total
    *   The leading open-source platform for building agentic workflows and RAG applications visually; remains a standard for the ecosystem.
*   **[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex)** ⭐22,828 Total
    *   An innovative document index utilizing "Reasoning-based RAG" to reduce dependency on heavy vector computing.
*   **[meilisearch/meilisearch](https://github.com/meilisearch/meilisearch)** ⭐56,710 Total
    *   A lightning-fast search engine adding hybrid vector search capabilities, crucial for RAG performance.

---

## 3. Trend Signal Analysis

**The "Agent Summer" has arrived.** Today's data confirms a decisive pivot from generic LLM chatbots to **Action-Oriented Agents**. The sheer volume of stars (thousands in a single day) for projects like *Deer-Flow* and *MoneyPrinter* indicates the community is prioritizing utility over novelty. Specifically, we are witnessing the rise of **"Vertical Agents"**—specialized agents for coding, trading, and video creation—rather than general-purpose assistants.

**The "Claude Ecosystem" is solidifying as a counter-weight to OpenAI.** The proliferation of trending projects specifically built for or integrated with *Claude Code* (e.g., `ruflo`, `awesome-claude-code`, `hermes-agent`) suggests that Anthropic’s recent developer tooling releases have successfully captured the "power user" and open-source developer mindshare. This is creating a micro-economy of plugins and orchestrators distinct from the GPT-4 plugin ecosystem of the past.

**Computer Use and "Money" are the killer apps.** The trending list highlights a strong desire for agents that interact with the real world (TradingAgents, MoneyPrinter) or the desktop (Project Nomad, Computer-Use skills). Developers are no longer satisfied with text generation; they are building tools that execute workflows, trade assets, and manage files autonomously.

---

## 4. Community Hot Spots

*   **🦌 [ByteDance/deer-flow](https://github.com/bytedance/deer-flow):** Watch this repository. As a major tech player's entry into the open-source agent space, it sets the standard for how large enterprises view agent architecture (Sandboxes + Subagents).
*   **💰 [Financial Agents](https://github.com/TauricResearch/TradingAgents):** The explosion of interest in LLM-trading bots suggests 2026 will be the year of "Autonomous Finance." Developers should look into integrating real-time market data APIs into agent frameworks.
*   **🧩 [Claude Code Skill Ecosystem](https://github.com/hesreallyhim/awesome-claude-code):** For developers looking to contribute, the "Plugin Economy" for Claude Code is wide open. Building skills that hook external APIs into the coding agent is a high-opportunity area.
*   **🌐 [Project Nomad](https://github.com/Crosstalk-Solutions/project-nomad):** Represents a fascinating trend toward **Offline/Air-gapped AI**. As privacy concerns grow, "Survival Tech" that runs powerful AI without internet connectivity is becoming a niche but vital category.

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*