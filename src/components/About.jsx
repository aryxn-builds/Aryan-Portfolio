import React from "react";
import { siteConfig } from "../config/site";
import { User, Terminal, Sparkles, Code2, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="section-wrap" id="about" aria-label="About Aryan Yadav">
      <div className="section-header">
        <span className="eyebrow">
          <User size={14} aria-hidden="true" />
          Background // Philosophy
        </span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Turning algorithmic research and artificial intelligence models into reliable, user-ready applications.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-narrative">
          <p>{siteConfig.identity.about}</p>
          
          <p>
            Rather than treating AI models as black boxes, my focus is on the complete engineering loop:
            data ingestion, robust document parsing, contextual prompt orchestration, low-latency API wrappers,
            and intuitive user interfaces.
          </p>

          <div style={{ marginTop: 16 }}>
            <h3 className="font-display" style={{ fontSize: 20, marginBottom: 12, color: "var(--ink)" }}>
              Core Engineering Tenets
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              <div style={{ background: "#141418", padding: 18, borderRadius: 8, border: "1px solid var(--line)" }}>
                <span className="text-accent font-display" style={{ fontSize: 16, display: "block", marginBottom: 6 }}>
                  01. Utility Over Noise
                </span>
                <span style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                  Building tools that solve tangible workflow friction rather than surface-level wrappers.
                </span>
              </div>

              <div style={{ background: "#141418", padding: 18, borderRadius: 8, border: "1px solid var(--line)" }}>
                <span className="text-accent font-display" style={{ fontSize: 16, display: "block", marginBottom: 6 }}>
                  02. Low Latency Design
                </span>
                <span style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>
                  Maximizing throughput with modern hardware acceleration like Groq LPUs and optimized vector search.
                </span>
              </div>
            </div>
          </div>
        </div>

        <aside className="about-sidebar">
          <div className="about-stat-row">
            <span className="about-stat-label">Specialization</span>
            <span className="about-stat-value">GenAI &amp; Software Dev</span>
          </div>

          <div className="about-stat-row">
            <span className="about-stat-label">Institution</span>
            <span className="about-stat-value">IEC CET, Greater Noida</span>
          </div>

          <div className="about-stat-row">
            <span className="about-stat-label">Anticipated Degree</span>
            <span className="about-stat-value">B.Tech in CSE (2027)</span>
          </div>

          <div className="about-stat-row">
            <span className="about-stat-label">Availability</span>
            <span className="about-stat-value" style={{ color: "var(--red)" }}>
              Open for Internships
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
};
