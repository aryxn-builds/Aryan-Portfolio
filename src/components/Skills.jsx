import React from "react";
import { skillCategories } from "../data/skills";
import { Cpu, Terminal, Zap } from "lucide-react";

export const Skills = () => {
  return (
    <section className="section-wrap" id="skills" aria-label="Skills & Technical Ecosystem">
      <div className="section-header">
        <span className="eyebrow">
          <Cpu size={14} aria-hidden="true" />
          Technical Proficiency // Tooling Stack
        </span>
        <h2 className="section-title">Skills &amp; Ecosystem</h2>
        <p className="section-subtitle">
          Core proficiencies spanning artificial intelligence, large language model orchestration,
          vector embeddings, backend APIs, and computer vision systems.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-card">
            <div className="skill-card-top">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <Zap size={14} className="text-accent" aria-hidden="true" />
                <span className="eyebrow" style={{ fontSize: 10 }}>Domain</span>
              </div>
              <h3 className="skill-card-title">{category.title}</h3>
              <p className="skill-card-desc">{category.description}</p>
            </div>

            <div className="skill-card-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
