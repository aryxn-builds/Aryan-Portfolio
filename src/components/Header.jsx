import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Sparkles, Menu, X, ArrowUpRight, Wand2 } from "lucide-react";

export const Header = ({ activeSection, isSwarmActive, toggleSwarm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="site-header" role="banner">
      {/* Brand Wordmark */}
      <a href="#" className="wordmark" aria-label={`${siteConfig.identity.displayName} Portfolio Home`}>
        {siteConfig.identity.displayName}
        <span className="wordmark-dot" aria-hidden="true"></span>
      </a>

      {/* Desktop Navigation */}
      <nav className="desktop-nav" aria-label="Main Navigation">
        {siteConfig.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.substring(1) ? "active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        {/* Swarmline Motion Animation Trigger Button */}
        <button
          type="button"
          onClick={toggleSwarm}
          className={`motion-toggle-btn ${isSwarmActive ? "active" : ""}`}
          title="Toggle autonomous Swarm animation (imperfec-t/swarmline)"
          aria-label={`Toggle Swarmline motion builder effect. Status: ${isSwarmActive ? "Active" : "Inactive"}`}
        >
          <span className="motion-indicator-dot" aria-hidden="true"></span>
          <span>{isSwarmActive ? "Swarm Live" : "Motion"}</span>
          <Wand2 size={13} style={{ marginLeft: 2 }} aria-hidden="true" />
        </button>

        {/* Contact CTA */}
        <a href="#contact" className="header-cta-btn">
          <span>Get In Touch</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>

        {/* Mobile Hamburger Trigger */}
        <button
          type="button"
          className="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-links">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={activeSection === link.href.substring(1) ? "active" : ""}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-drawer-bottom">
            <button
              type="button"
              onClick={() => {
                toggleSwarm();
                setMobileMenuOpen(false);
              }}
              className={`motion-toggle-btn ${isSwarmActive ? "active" : ""}`}
              style={{ width: "100%", justifyContent: "center", height: 44 }}
            >
              <span className="motion-indicator-dot" aria-hidden="true"></span>
              <span>{isSwarmActive ? "Stop Swarm Effect" : "Launch Swarm Animation"}</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ justifyContent: "center" }}
            >
              <span>Get In Touch</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
