/**
 * PORTFOLIO PROJECTS DATA
 * Real, verified work for Aryan Yadav.
 * To add new projects, simply append a new object following this schema.
 */

export const projects = [
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
        detail: "YouTube Transcript API captures closed captions; Unstructured cleans HTML DOM.",
      },
      {
        phase: "Orchestration Layer",
        detail: "LangChain processes chunks, manages context window, and applies task-specific system prompts.",
      },
      {
        phase: "Inference Engine",
        detail: "Groq LPU hardware powers high-throughput inference with ultra-low latency.",
      },
      {
        phase: "Interface & Presentation",
        detail: "Streamlit UI renders formatted markdown, bullet points, and provides quick clipboard export.",
      },
    ],
  },
  /*
  // TEMPLATE FOR FUTURE PROJECTS:
  // Copy and uncomment to add your next project:
  {
    id: "next-project-id",
    title: "Your Project Title",
    category: "AI/ML", // or "Generative AI" / "Software Development"
    categoryTag: "Category Subtitle",
    year: "2025",
    summary: "One sentence summary of what this project does.",
    description: "Detailed description of architecture, problem solved, and technical outcomes.",
    role: "Developer",
    tools: ["Python", "FastAPI", "PyTorch"],
    coverImage: "/assets/projects/placeholder.svg",
    sourceUrl: "https://github.com/aryxn-builds/...",
    liveUrl: "",
    featured: false,
    highlights: ["Highlight 1", "Highlight 2"],
    architecture: []
  }
  */
];

export const projectCategories = [
  "All",
  "Generative AI",
  "AI/ML",
  "Software Development",
];
