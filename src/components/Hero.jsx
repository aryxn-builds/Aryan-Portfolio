import React, { useEffect, useRef } from "react";
import { siteConfig } from "../config/site";
import { ArrowDown, ArrowUpRight, Cpu, MapPin, Sparkles, Terminal } from "lucide-react";

export const Hero = ({ toggleSwarm, isSwarmActive }) => {
  const canvasRef = useRef(null);

  // Subtle interactive neural constellation canvas for the visual sculpture
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    // Particle nodes representing AI neural graph
    const nodeCount = 28;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * 480,
      y: Math.random() * 480,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 1.2,
      isCore: Math.random() > 0.75,
    }));

    let t = 0;

    const draw = () => {
      t += 0.015;
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, w, h);

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10) node.vx = Math.abs(node.vx);
        if (node.x > w - 10) node.vx = -Math.abs(node.vx);
        if (node.y < 10) node.vy = Math.abs(node.vy);
        if (node.y > h - 10) node.vy = -Math.abs(node.vy);
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            const alpha = (1 - dist / 105) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle =
              nodes[i].isCore || nodes[j].isCore
                ? `rgba(227, 43, 60, ${alpha * 1.3})`
                : `rgba(242, 239, 235, ${alpha * 0.4})`;
            ctx.lineWidth = nodes[i].isCore ? 1.2 : 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        if (node.isCore) {
          ctx.fillStyle = "#e32b3c";
          ctx.shadowColor = "#e32b3c";
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = "#f2efeb";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" id="home" aria-label="Introduction & Overview">
      {/* Giant Anton Background Typography */}
      <div className="hero-giant-bg" aria-hidden="true">
        {siteConfig.identity.displayName}
      </div>

      {/* Top Bar: Profession & Availability */}
      <div className="hero-top-bar">
        <span className="eyebrow">
          <Terminal size={14} aria-hidden="true" />
          {siteConfig.identity.profession}
        </span>

        <div className="availability-pill">
          <span className="live-dot" aria-hidden="true"></span>
          <span>{siteConfig.identity.availability}</span>
        </div>
      </div>

      {/* Main Grid: Editorial Typography + Visual Sculpture */}
      <div className="hero-body-grid">
        {/* Intro Column */}
        <div className="hero-intro-column">
          <span className="font-accent hero-greeting">Hello, I'm Aryan</span>
          
          <h1 className="hero-headline">
            {siteConfig.identity.headline}
          </h1>

          <div className="hero-role-pill">
            {siteConfig.identity.roleLine2}
          </div>

          <p className="hero-intro-text">
            {siteConfig.identity.intro}
          </p>

          <div className="hero-cta-group">
            <a href="#work" className="btn-primary">
              <span>Explore Selected Work</span>
              <ArrowDown size={15} aria-hidden="true" />
            </a>

            <a href="#contact" className="btn-secondary">
              <span>Initiate Contact</span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-meta-bar">
            <div className="hero-meta-item">
              <MapPin size={14} className="text-accent" aria-hidden="true" />
              <span>{siteConfig.identity.location}</span>
            </div>
            <div className="hero-meta-item">
              <Cpu size={14} className="text-accent" aria-hidden="true" />
              <span>B.Tech CSE (2023–2027)</span>
            </div>
          </div>
        </div>

        {/* Visual Sculpture Column (Generative AI Architecture) */}
        <div className="hero-visual-column">
          <div className="visual-sculpture-card">
            <div className="sculpture-top">
              <span className="sculpture-badge">Autonomous Neural Graph</span>
              <button
                type="button"
                onClick={toggleSwarm}
                className={`motion-toggle-btn ${isSwarmActive ? "active" : ""}`}
                style={{ height: 30, fontSize: 10 }}
              >
                <Sparkles size={11} aria-hidden="true" />
                <span>{isSwarmActive ? "Swarm Running" : "Live Swarm"}</span>
              </button>
            </div>

            <canvas ref={canvasRef} className="sculpture-canvas" aria-hidden="true" />

            <div className="sculpture-bottom">
              <div className="sculpture-bottom-title">
                <span className="text-accent font-display" style={{ fontSize: 18 }}>01</span>
                <span>Active Research: Agentic &amp; RAG Architectures</span>
              </div>
              <div className="sculpture-tech-pills">
                <span className="tech-tag-pill">LangChain</span>
                <span className="tech-tag-pill">LangGraph</span>
                <span className="tech-tag-pill">Groq LPU</span>
                <span className="tech-tag-pill">Vector Retrieval</span>
                <span className="tech-tag-pill">PyTorch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="hero-bottom-bar">
        <div className="scroll-indicator">
          <span className="scroll-line" aria-hidden="true"></span>
          <span>Scroll to explore portfolio</span>
        </div>

        <div>
          <span>Based in Greater Noida · Open to global opportunities</span>
        </div>
      </div>
    </section>
  );
};
