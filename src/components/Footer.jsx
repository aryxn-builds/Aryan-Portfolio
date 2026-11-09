import React from "react";
import { siteConfig } from "../config/site";
import { ArrowUp, Github, Linkedin, Sparkles } from "lucide-react";

export const Footer = ({ toggleSwarm, isSwarmActive }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-left">
        <a href="#" className="wordmark" style={{ fontSize: 20 }}>
          {siteConfig.identity.displayName}
          <span className="wordmark-dot" aria-hidden="true"></span>
        </a>
        <span>
          © {new Date().getFullYear()} {siteConfig.identity.fullName}. All rights reserved.
        </span>
      </div>

      <div className="footer-links">
        {siteConfig.contact.linkedin && (
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </a>
        )}

        {siteConfig.contact.github && (
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
        )}

        <button
          type="button"
          onClick={toggleSwarm}
          style={{
            fontSize: 12,
            color: isSwarmActive ? "var(--red)" : "var(--muted)",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
          }}
          title="Toggle Swarmline motion builder effect"
        >
          <Sparkles size={13} aria-hidden="true" />
          <span>{isSwarmActive ? "Stop Swarm" : "Swarmline Effect"}</span>
        </button>

        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top of the page"
        >
          <span>Top</span>
          <ArrowUp size={14} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};
