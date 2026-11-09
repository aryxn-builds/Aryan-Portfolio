import React, { useState, useEffect } from "react";
import { FileText, Download, Eye, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../config/site";

export const ResumeWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeUrl = siteConfig.identity.resume || "/Aryan_Yadav_Resume.pdf";

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {/* Floating Compact Resume Button (Bottom-Right Corner) */}
      <aside className="resume-floating-widget" aria-label="Resume quick actions">
        <div className="resume-pill-container">
          {/* View Resume Action */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="resume-pill-btn view-btn"
            title="View Aryan Yadav's Resume"
            aria-label="View Resume"
          >
            <FileText size={13} className="text-accent" aria-hidden="true" />
            <span>View</span>
            <Eye size={12} className="resume-sub-icon" aria-hidden="true" />
          </button>

          {/* Hairline Divider */}
          <span className="resume-pill-divider" aria-hidden="true" />

          {/* Download Resume Action */}
          <a
            href={resumeUrl}
            download="Aryan_Yadav_Resume.pdf"
            className="resume-pill-btn download-btn"
            title="Download Aryan Yadav's Resume PDF"
            aria-label="Download Resume PDF"
          >
            <Download size={12} aria-hidden="true" />
            <span>Download</span>
          </a>
        </div>
      </aside>

      {/* Interactive Resume Viewer Modal */}
      {isOpen && (
        <div
          className="resume-modal-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-modal-title"
        >
          <div
            className="resume-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="resume-modal-header">
              <div className="resume-modal-info">
                <div className="resume-modal-badge">
                  <FileText size={13} className="text-accent" aria-hidden="true" />
                  <span>Curriculum Vitae</span>
                </div>
                <h3 id="resume-modal-title" className="resume-modal-title">
                  {siteConfig.identity.fullName}
                </h3>
                <p className="resume-modal-subtitle">
                  {siteConfig.identity.profession} · B.Tech CSE (2023–2027)
                </p>
              </div>

              <div className="resume-modal-actions">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary resume-action-btn"
                  title="Open PDF in new tab"
                >
                  <ArrowUpRight size={13} aria-hidden="true" />
                  <span>Open Tab</span>
                </a>

                <a
                  href={resumeUrl}
                  download="Aryan_Yadav_Resume.pdf"
                  className="btn-primary resume-action-btn"
                  title="Download PDF"
                >
                  <Download size={13} aria-hidden="true" />
                  <span>Download</span>
                </a>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="resume-modal-close"
                  aria-label="Close resume viewer"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Modal Body with Embed & Fallback */}
            <div className="resume-modal-body">
              <object
                data={`${resumeUrl}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="resume-pdf-frame"
              >
                <div className="resume-fallback-card">
                  <FileText size={44} className="text-accent" aria-hidden="true" />
                  <h4 className="resume-fallback-title">Aryan Yadav — Resume</h4>
                  <p className="resume-fallback-text">
                    AI/ML &amp; Generative AI Developer · Computer Science Engineering
                  </p>
                  <div className="resume-fallback-buttons">
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ArrowUpRight size={14} aria-hidden="true" />
                      <span>Open PDF in Browser</span>
                    </a>
                    <a
                      href={resumeUrl}
                      download="Aryan_Yadav_Resume.pdf"
                      className="btn-secondary"
                    >
                      <Download size={14} aria-hidden="true" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
