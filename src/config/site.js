/**
 * UNIVERSAL PREMIUM PORTFOLIO CONFIGURATION
 * All personal details, styling tokens, and display preferences reside here.
 * To adapt this portfolio for anyone, simply edit the values below.
 */

export const siteConfig = {
  referenceWebsite: "https://touquirakhtar.com/",
  websiteUrl: "",

  identity: {
    fullName: "Aryan Yadav",
    displayName: "Aryan Yadav",
    profession: "AI/ML & GenAI Developer / Software Engineer",
    roleLine2: "GenAI Application Engineering | Software Development",
    location: "Greater Noida, India",
    availability: "Open to internships and entry-level opportunities",
    headline: "Building practical AI systems and software that solve real problems.",
    intro:
      "I'm Aryan Yadav, a Computer Science Engineering student focused on AI/ML, Generative AI, and software development. I build practical applications that combine machine learning, LLMs, APIs, and modern development tools.",
    about:
      "I'm pursuing a B.Tech in Computer Science Engineering at IEC College of Engineering & Technology, Greater Noida (September 2023–July 2027 expected). My interests include AI/ML, Generative AI application engineering, backend development, and building useful software products. I work with Python, machine learning and deep learning frameworks, LLM application tools, APIs, and databases, and I enjoy turning technical ideas into working projects.",
    portrait: "/assets/aryan-portrait-cutout.webp",
    resume: "",
    favicon: "AY initials",
  },

  contact: {
    email: "", // Can be filled by owner
    phone: "",
    whatsapp: "",
    instagram: "",
    youtube: "",
    linkedin: "https://www.linkedin.com/in/aryan0203/",
    github: "https://github.com/aryxn-builds",
    behance: "",
    dribbble: "",
    otherLinks: [],
  },

  appearance: {
    style: "cinematic minimal, premium, editorial, refined typography",
    theme: "dark",
    background: "#090909",
    panel: "#121214",
    text: "#f2efeb",
    accent: "#e32b3c",
    muted: "#a09c9a",
    line: "#241e21",
    displayFont: "Anton",
    bodyFont: "Manrope",
    accentFont: "Caveat",
    animationIntensity: "balanced",
    language: "English",
  },

  preferences: {
    showAwards: false,
    showEducation: true,
    showExperience: true, // Rendered as academic & project milestones
    showBeforeAfter: false,
    showClientLogos: false,
    showTestimonials: false,
    showContactForm: true,
    showDownloadResume: false,
    showProjectArchive: true,
  },

  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
