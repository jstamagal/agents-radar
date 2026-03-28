# AI Open Source Trends 2026-03-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-03-28 00:11 UTC

---

# AI Open Source Trends Report
**Date:** 2026-03-28
**Data Source:** GitHub Trending & Topic Search

---

## 1. Today's Highlights

The open-source AI ecosystem is currently undergoing a massive shift towards **agentic autonomy** and **specialized reasoning**. The most explosive growth today is seen in **"Skills Frameworks"**—tools that empower LLMs to perform complex, multi-step research and execution tasks autonomously—evidenced by the meteoric rise of projects like `obra/superpowers` and `mvanhorn/last30days-skill`. Furthermore, **multi-agent orchestration** is maturing, with new tools like `SakanaAI/AI-Scientist-v2` utilizing "Tree Search" for automated discovery. Finally, the "Voice AI" frontier is rapidly expanding, marked by Microsoft’s release of `VibeVoice` as an open-source competitor in the voice interaction space.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
*Frameworks, sandboxes, and orchestration tools powering the next generation of AI.*

*   **[obra/superpowers](https://github.com/obra/superpowers)** ⭐+2,752 today
    An agentic skills framework and software development methodology that provides the structural "skeleton" for building robust AI workflows.
*   **[Yeachan-Heo/oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)** ⭐+1,411 today
    A teams-first orchestration layer for Claude Code, optimizing multi-agent collaboration in software development environments.
*   **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** ⭐+337 today
    A new entrant in the open-source voice AI space, positioning itself as a frontier voice model for developers.
*   **[datalab-to/chandra](https://github.com/datalab-to/chandra)** ⭐+912 today
    A specialized OCR model designed to handle complex layouts, tables, and handwriting, filling a critical gap in data ingestion pipelines.
*   **[e2b-dev/E2B](https://github.com/e2b-dev/E2B)** ⭐11,472
    The leading secure sandbox environment for executing AI agent code, ensuring safety during autonomous operations.

### 🤖 AI Agents / Workflows
*Autonomous systems, research agents, and automation frameworks.*

*   **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** ⭐+2,821 today
    The top trending agent skill today; an AI researcher that synthesizes data from Reddit, X, and Polymarket into grounded summaries.
*   **[virattt/dexter](https://github.com/virattt/dexter)** ⭐+672 today
    An autonomous agent specifically tuned for deep financial research, signaling the rise of vertical-specific AI analysts.
*   **[SakanaAI/AI-Scientist-v2](https://github.com/SakanaAI/AI-Scientist-v2)** ⭐+143 today
    An automated scientific discovery system utilizing "Agentic Tree Search" for workshop-level research generation.
*   **[langgenius/dify](https://github.com/langgenius/dify)** ⭐134,753
    A production-ready platform for agentic workflows, remaining the standard for building visual agent backends.
*   **[twentyhq/twenty](https://github.com/twentyhq/twenty)** ⭐+668 today
    A modern, community-powered CRM alternative that leverages AI agents to manage data and workflows.
*   **[activepieces/activepieces](https://github.com/activepieces/activepieces)** ⭐21,456
    An open-source workflow automation tool heavily integrating MCPs (Model Context Protocol) for agent connectivity.

### 📦 AI Applications
*End-user products leveraging AI for specific tasks.*

*   **[hacksider/Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam)** ⭐+1,616 today
    A real-time face swap and deepfake tool, remaining the most popular application for computer vision media manipulation.
*   **[onyx-dot-app/onyx](https://github.com/onyx-dot-app/onyx)** ⭐+547 today
    An open-source AI chat platform that connects to every LLM, focusing on advanced retrieval features.
*   **[Vaibhavs10/insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper)** ⭐+1,066 today
    An optimized application for high-speed audio transcription and inference.

### 🔍 RAG / Knowledge
*Vector databases, retrieval systems, and memory layers.*

*   **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** ⭐73,202
    The industry standard for bridging physical documents (PDFs/Images) into structured LLM data.
*   **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐51,266
    The leading "universal memory layer" project, enabling agents to have long-term, persistent memory across sessions.
*   **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐29,887
    A high-performance vector database essential for scaling RAG applications.
*   **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐76,416
    A RAG engine that fuses deep document retrieval with agent capabilities.

### 🧠 LLMs / Training
*Model weights, training frameworks, and fine-tuning tools.*

*   **[affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)** ⭐112,310
    A massive repository of skills and optimizations specifically for Claude Code (and similar tools), effectively "un-blocking" the potential of coding agents.
*   **[hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory)** ⭐69,156
    The leading unified framework for fine-tuning 100+ LLMs efficiently.

---

## 3. Trend Signal Analysis

**The "Agentic Skill" Explosion**
The most significant signal today is the transition from "chatbots" to "skilled agents." The explosive growth of `obra/superpowers` and `mvanhorn/last30days-skill` indicates that developers are no longer satisfied with static LLM outputs. Instead, the community is rushing to build frameworks that grant LLMs **agency**—the ability to use tools (browsers, search APIs) to perform time-consuming research tasks. This aligns with the industry's move towards "Compound AI Systems," where the LLM is just the reasoning engine, not the whole product.

**Scientific Discovery & Tree Search**
The appearance of `SakanaAI/AI-Scientist-v2` in the trending list is a bellwether for "AI for Science." The adoption of **Agentic Tree Search** suggests a merge between classic AI planning (AlphaGo style) and LLM generation. This methodology allows models to "explore" solution spaces more deeply than simple chain-of-thought, a trend likely to spill over into enterprise data analysis and code generation soon.

**Voice as the New Interface**
With Microsoft’s `VibeVoice` trending, 2026 is shaping up to be the year Voice AI moves from novelty to utility. As latency decreases and model quality increases, open-source voice models are becoming viable for real-time agents, moving us closer to the "Her" (Samantha) ideal of AI interaction.

---

## 4. Community Hot Spots

*   **Research Agents:** `mvanhorn/last30days-skill` is the project to watch. It solves the "context window" problem by actively scraping and synthesizing current web data, a pattern every agent developer needs to implement.
*   **Agentic Orchestration:** `obra/superpowers` is defining a new "Software Development Methodology" for AI. If you are building AI dev-tools, look at how they structure "skills" rather than just "prompts."
*   **Coding Context Optimization:** `Yeachan-Heo/oh-my-claudecode` and `affaan-m/everything-claude-code` are the hottest ecosystem plays. As coding agents (like Claude Code) become the primary IDE, the "plugin/context" ecosystem around them is becoming a high-value area for contribution.
*   **Specialized OCR:** `datalab-to/chandra` is trending because generic OCR fails on complex business documents. Specialized "vision-to-structure" models are a booming niche.

---
*This digest is auto-generated by [agents-radar](https://github.com/jstamagal/agents-radar).*