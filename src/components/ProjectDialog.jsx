import React, { useEffect, useRef } from "react";
import { X, Github, ExternalLink, Cpu, CheckCircle2, Workflow } from "lucide-react";

export const ProjectDialog = ({ project, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Focus first focusable element or dialog
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" ref={dialogRef}>
        {/* Modal Sticky Header */}
        <div className="modal-header">
          <div>
            <span className="eyebrow" style={{ marginBottom: 4 }}>
              {project.categoryTag || project.category} · {project.year || "Active"}
            </span>
            <h2 id="modal-title" className="font-display" style={{ fontSize: 28, color: "var(--ink)" }}>
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Cover Media */}
          {project.coverImage && (
            <div className="modal-media-banner">
              <img
                src={project.coverImage}
                alt={`${project.title} System Diagram & UI Mockup`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          )}

          {/* Overview Section */}
          <div>
            <h3 className="modal-section-title">
              <Cpu size={18} className="text-accent" aria-hidden="true" />
              Project Overview &amp; Architecture
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#d5d1cd" }}>
              {project.description}
            </p>
          </div>

          {/* Architecture Pipeline if available */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <Workflow size={18} className="text-accent" aria-hidden="true" />
                System Pipeline Flow
              </h3>
              <div className="architecture-grid">
                {project.architecture.map((item, idx) => (
                  <div key={idx} className="arch-card">
                    <div className="arch-phase">{item.phase}</div>
                    <div className="arch-detail">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <CheckCircle2 size={18} className="text-accent" aria-hidden="true" />
                Technical Highlights &amp; Capabilities
              </h3>
              <ul className="highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="modal-section-title">Technologies &amp; Libraries</h3>
            <div className="project-tools-wrap">
              {project.tools.map((tool) => (
                <span key={tool} className="tool-tag" style={{ padding: "6px 14px", fontSize: 12 }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="modal-footer">
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github size={16} aria-hidden="true" />
              <span>Explore GitHub Repository</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span>Open Live Demo</span>
            </a>
          )}

          <button type="button" className="btn-secondary" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
