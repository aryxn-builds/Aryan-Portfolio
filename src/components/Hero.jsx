import React from "react";
import { siteConfig } from "../config/site";
import { ArrowUpRight, Terminal, Sparkles } from "lucide-react";

export const Hero = ({ toggleSwarm, isSwarmActive }) => {
  return (
    <section className="hero" id="home" aria-label="Hero Introduction">
      {/* Background Giant Display Title matching touquirakhtar.com */}
      <div className="hero-title" aria-hidden="true">
        PORTFOLIO
      </div>

      {/* Top Bar: Profession Eyebrow & Live Availability */}
      <div className="hero-top">
        <div className="hero-top-left">
          <span className="eyebrow">
            <Terminal size={13} aria-hidden="true" />
            {siteConfig.identity.profession}
          </span>
        </div>

        <div className="hero-top-right">
          <div className="availability-pill">
            <span className="live-dot" aria-hidden="true"></span>
            <span>{siteConfig.identity.availability}</span>
          </div>

          <button
            type="button"
            onClick={toggleSwarm}
            className={`motion-toggle-btn hero-motion-pill ${isSwarmActive ? "active" : ""}`}
            title="Toggle autonomous Swarm motion effect"
            aria-label="Toggle autonomous Swarm motion"
          >
            <Sparkles size={11} aria-hidden="true" />
            <span>{isSwarmActive ? "Swarm Running" : "Motion"}</span>
          </button>
        </div>
      </div>

      {/* Center Portrait - Crisp AI Silhouette Cutout Seamlessly Blended on #090909 */}
      <div className="hero-portrait">
        <picture>
          <source srcSet="/assets/aryan-portrait-cutout.webp" type="image/webp" />
          <img
            src="/assets/aryan-portrait-cutout.png"
            alt="Aryan Yadav - AI/ML & GenAI Developer"
            width="1024"
            height="1002"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* Left Column: Intro & Editorial Typography */}
      <div className="hero-intro">
        <p className="hero-greeting font-accent">Hello, I’m</p>

        <h1 className="hero-name font-display">
          ARYAN<span className="text-accent">.</span>
        </h1>

        <p className="hero-role">
          AI/ML &amp; GENAI DEVELOPER
          <br />
          SOFTWARE ENGINEER
        </p>

        <p className="hero-description">{siteConfig.identity.intro}</p>

        <div className="hero-actions">
          <a href="#work" className="primary-link">
            <span>See my work</span>
            <span className="primary-link-arrow" aria-hidden="true">
              →
            </span>
          </a>

          <a href="#contact" className="btn-secondary hero-contact-btn">
            <span>Initiate Contact</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <p className="hero-location">
          <span className="hero-location-dot" aria-hidden="true"></span>
          GREATER NOIDA, INDIA
        </p>
      </div>

      {/* Right Column: Editorial Manifesto & Stats Stack */}
      <div className="hero-side">
        <div className="hero-manifesto">
          <span className="manifesto-glyph" aria-hidden="true">
            ✳
          </span>
          <p className="manifesto-title">
            PRACTICAL AI.
            <br />
            REAL SOLUTIONS.
          </p>
          <p className="manifesto-desc">
            Engineering intelligent systems, LLM agents, and scalable software that solve actual problems.
          </p>
        </div>

        <div className="hero-stats">
          <div className="hero-stat-item">
            <div className="hero-stat-value font-display">
              CSE<span className="text-accent">.</span>
            </div>
            <div className="hero-stat-label">B.Tech IEC CET (2023–2027)</div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Edition and Animated Scroll Indicator */}
      <div className="hero-bottom">
        <div className="hero-bottom-tagline">
          <span>Aryan Yadav — AI/ML &amp; GenAI Portfolio Edition 2026</span>
        </div>

        <a href="#work" className="hero-scroll" aria-label="Scroll to selected work">
          <span>Scroll down</span>
          <span className="hero-scroll-bar" aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
};
