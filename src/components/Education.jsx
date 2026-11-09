import React from "react";
import { educationData, learningMilestones } from "../data/education";
import { GraduationCap, MapPin, Calendar, Award, GitBranch } from "lucide-react";

export const Education = () => {
  return (
    <section className="section-wrap" id="education" aria-label="Education & Technical Milestones">
      <div className="section-header">
        <span className="eyebrow">
          <GraduationCap size={14} aria-hidden="true" />
          Academic Foundation // Milestones
        </span>
        <h2 className="section-title">Education &amp; Journey</h2>
        <p className="section-subtitle">
          Undergraduate engineering curriculum paired with continuous hands-on exploration in generative AI,
          systems architecture, and open-source contribution.
        </p>
      </div>

      <div className="timeline-wrap">
        {/* Education Column */}
        <div className="timeline-column">
          <h3 className="column-label">Degree &amp; Coursework</h3>
          
          {educationData.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div>
                <span className="eyebrow" style={{ fontSize: 10, marginBottom: 4 }}>
                  {edu.status}
                </span>
                <h4 className="edu-institution">{edu.institution}</h4>
                <div className="edu-degree">{edu.qualification}</div>
              </div>

              <div className="edu-meta">
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Calendar size={13} className="text-accent" aria-hidden="true" />
                  <span>{edu.period}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <MapPin size={13} className="text-accent" aria-hidden="true" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <ul className="edu-focus-list">
                {edu.focus.map((item, fIdx) => (
                  <li key={fIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Learning Milestones Column */}
        <div className="timeline-column">
          <h3 className="column-label">Engineering Trajectory</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {learningMilestones.map((milestone, idx) => (
              <div key={idx} className="milestone-item">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="milestone-year">{milestone.year}</span>
                  <GitBranch size={13} className="text-muted" aria-hidden="true" />
                </div>
                <h4 className="milestone-title">{milestone.title}</h4>
                <span style={{ fontSize: 12, color: "#d5d1cd", fontWeight: 600 }}>
                  {milestone.role}
                </span>
                <p className="milestone-summary">{milestone.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
