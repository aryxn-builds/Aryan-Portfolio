/**
 * PORTFOLIO PROJECTS DATA
 * Real, verified work for Aryan Yadav.
 */

export const projects = [
  {
    id: "documind-ai",
    title: "DocuMind AI",
    category: "Generative AI",
    categoryTag: "Full-Stack AI / Multimodal RAG",
    year: "2024–2025",
    summary:
      "Built a full-stack AI-powered document intelligence platform using RAG, vector embeddings, OCR, and LLMs to enable conversational document analysis and evidence-backed question answering.",
    description:
      "A full-stack, production-ready AI workspace that allows users to upload documents (PDFs, DOCX, and images) and interact with their content through natural language. Built with a focus on reliability, true page-aware citations, and streaming performance, DocuMind AI combines semantic vector search with structural metadata filtering so that questions like 'What is on page 4?' or 'Compare pages 10 and 12' are grounded in exact document pages without hallucination.",
    role: "Full-Stack AI Developer",
    tools: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Qdrant",
      "Supabase",
      "Google Gemini",
      "Groq",
      "PyMuPDF",
    ],
    coverImage: "/assets/projects/documind-cover.svg",
    gallery: [],
    videoUrl: "",
    liveUrl: "https://documind-ai-alpha-six.vercel.app/",
    sourceUrl: "https://github.com/aryxn-builds/DocuMind-AI",
    featured: true,
    highlights: [
      "Engineered page-aware RAG combining dense vector similarity with structural metadata filtering in Qdrant.",
      "Integrated multimodal ingestion supporting PDFs, DOCX, and images with OCR and table extraction via PyMuPDF and Gemini.",
      "Built a multi-tier LLM routing gateway utilizing Groq for primary low-latency generation and automatic failover to Google Gemini.",
      "Designed a custom Server-Sent Events (SSE) streaming parser that handles arbitrary TCP chunk boundaries reliably.",
      "Implemented ChatGPT-style persistent chat with cross-document sidebar navigation and Supabase Row-Level Security (RLS).",
    ],
    architecture: [
      {
        phase: "Ingestion & OCR",
        detail:
          "FastAPI BackgroundTasks parse PDF/DOCX/images with PyMuPDF, extracting clean text, tables, and OCR data.",
      },
      {
        phase: "Vector Indexing",
        detail:
          "Chunks are embedded via Google Gemini and indexed into Qdrant Cloud with strict page-level metadata.",
      },
      {
        phase: "Page-Aware Retrieval",
        detail:
          "Queries are dynamically routed to page-filtered vector searches, multi-page comparisons, or full-document summaries.",
      },
      {
        phase: "AI Gateway & Streaming",
        detail:
          "Groq LPU (with Gemini fallback) streams token-by-token answers with inline page citations via SSE.",
      },
    ],
  },
  {
    id: "research-pilot-ai",
    title: "Research Pilot AI",
    category: "Generative AI",
    categoryTag: "Autonomous Multi-Agent System",
    year: "2024–2025",
    summary:
      "An autonomous multi-agent research platform orchestrated by LangGraph and FastAPI that conducts parallel web investigations, cross-verifies claims, and produces citation-backed intelligence reports.",
    description:
      "Designed and developed an autonomous multi-agent research assistant that structures research into a verifiable, evidence-grounded workflow. Using LangGraph, the system breaks complex queries into parallel sub-tasks across specialized agents (Planner, Web Researcher, Academic Researcher, Source Ranker, Evidence Extractor, Synthesis, and Critic). Features a dedicated Critic Agent that challenges every extracted claim against source evidence, initiating an automated retry loop before the Writer Agent streams the final markdown report.",
    role: "AI & Backend Engineer",
    tools: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tavily Search API",
      "Groq",
      "Google Gemini",
    ],
    coverImage: "/assets/projects/researchpilot-cover.svg",
    gallery: [],
    videoUrl: "",
    liveUrl: "https://research-pilot-ai-seven.vercel.app/",
    sourceUrl: "https://github.com/aryxn-builds/ResearchPilot-AI.git",
    featured: true,
    highlights: [
      "Architected an autonomous multi-agent graph with LangGraph spanning 8 specialized agent roles.",
      "Built a dedicated Critic Agent verification loop that validates claims against sources, achieving a 97.2% claim verification benchmark.",
      "Integrated parallel web and academic exploration using Tavily Search API with dynamic source credibility reranking.",
      "Implemented a streaming FastAPI backend that delivers real-time agent execution progress and final reports via Server-Sent Events (SSE).",
      "Structured session state management in Supabase PostgreSQL, persisting research sessions, query histories, and verified intelligence reports.",
    ],
    architecture: [
      {
        phase: "Planner Agent",
        detail:
          "Decomposes multi-faceted user research questions into targeted, parallel exploration sub-queries.",
      },
      {
        phase: "Parallel Research & Ranking",
        detail:
          "Web and Academic Agents query Tavily in parallel; Source Ranker scores domain credibility and filters low-confidence pages.",
      },
      {
        phase: "Critic & Verification Loop",
        detail:
          "Critic Agent rigorously cross-checks candidate claims; triggers automatic retry loops for any unverified statements.",
      },
      {
        phase: "Report Generation & SSE",
        detail:
          "Writer Agent synthesizes verified claims into structured Markdown and streams live output to the Next.js UI.",
      },
    ],
  },
  {
    id: "youtube-video-web-url-summarization",
    title: "YouTube Video & Web URL Content Summarization",
    category: "Generative AI",
    categoryTag: "GenAI / LLM Application",
    year: "2024–2025",
    summary:
      "A high-speed Streamlit application that extracts, processes, and intelligently summarizes spoken dialogue from YouTube videos and content from arbitrary web URLs.",
    description:
      "Engineered an AI-powered content summarization platform combining Python, Streamlit, LangChain, Groq high-speed LPU inference, the YouTube Transcript API, and Unstructured web parsing. Solves information overload by distilling long-form videos, podcasts, documentation, and technical articles into concise, structured executive summaries.",
    role: "Developer",
    tools: [
      "Python",
      "Streamlit",
      "LangChain",
      "Groq",
      "YouTube Transcript API",
      "Unstructured",
    ],
    coverImage: "/assets/projects/yt-summarizer.svg",
    gallery: [],
    videoUrl: "",
    liveUrl: "",
    sourceUrl: "https://github.com/aryxn-builds/YT-Video-and-Web-URL-content-Summarization",
    featured: true,
    highlights: [
      "Automated extraction of complete time-stamped video transcripts via YouTube Transcript API without requiring video downloads.",
      "Implemented resilient document ingestion with Unstructured to strip boilerplates, ads, and scripts from web URLs.",
      "Leveraged Groq LPU acceleration for sub-second LLM inference, dramatically reducing end-user waiting time.",
      "Architected modular LangChain prompt templates delivering executive summaries, key takeaways, and action items.",
      "Built a clean, responsive Streamlit interface with live progress indicators and instant Markdown rendering.",
    ],
    architecture: [
      {
        phase: "Ingestion Layer",
        detail:
          "YouTube Transcript API captures closed captions; Unstructured cleans HTML DOM.",
      },
      {
        phase: "Orchestration Layer",
        detail:
          "LangChain processes chunks, manages context window, and applies task-specific system prompts.",
      },
      {
        phase: "Inference Engine",
        detail:
          "Groq LPU hardware powers high-throughput inference with ultra-low latency.",
      },
      {
        phase: "Interface & Presentation",
        detail:
          "Streamlit UI renders formatted markdown, bullet points, and provides quick clipboard export.",
      },
    ],
  },
];

export const projectCategories = [
  "All",
  "Generative AI",
  "AI/ML",
  "Software Development",
];
