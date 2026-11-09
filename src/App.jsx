import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectGrid } from "./components/ProjectGrid";
import { ProjectDialog } from "./components/ProjectDialog";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ResumeWidget } from "./components/ResumeWidget";
import { PageLoader } from "./components/PageLoader";
import { siteConfig } from "./config/site";

export function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSwarmActive, setIsSwarmActive] = useState(false);

  // Scroll Progress and Active Section Spy
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Check section in viewport
      const sections = ["home", "work", "skills", "education", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Swarmline toggle handler
  const toggleSwarm = () => {
    if (window.__swarmline) {
      window.__swarmline.toggle();
      setIsSwarmActive(!!window.__swarmline.app);
    } else {
      // Dynamically load swarmline.js from public assets
      const script = document.createElement("script");
      script.src = "/assets/swarmline.js";
      script.onload = () => {
        setIsSwarmActive(true);
      };
      script.onerror = () => {
        console.error("Failed to load Swarmline animation script.");
      };
      document.body.appendChild(script);
    }
  };

  // Keyboard shortcut listener for Alt + Shift + L
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.shiftKey && (e.key === "L" || e.key === "l")) {
        e.preventDefault();
        toggleSwarm();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Periodically check if swarmline was closed via Esc or HUD close button
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.__swarmline) {
        const active = !!window.__swarmline.app;
        if (active !== isSwarmActive) {
          setIsSwarmActive(active);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isSwarmActive]);

  // Automatically start Swarm animation by default on website open
  useEffect(() => {
    if (!siteConfig.preferences.autoStartSwarm) return;

    // Respect user motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Brief timeout to ensure DOM is fully painted, then launch Swarmline
    const timer = setTimeout(() => {
      toggleSwarm();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="site-wrapper">
      {/* Editorial Minimal Page Loading Animation (active if autoStartSwarm is disabled) */}
      {!siteConfig.preferences.autoStartSwarm && <PageLoader />}

      {/* Scroll-linked reading progress indicator */}
      <div
        className="reading-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      {/* Accessible skip link */}
      <a href="#work" className="skip-link" style={{ position: "absolute", left: "-9999px" }}>
        Skip to selected work
      </a>

      {/* Sticky Header with Swarmline Motion Trigger */}
      <Header
        activeSection={activeSection}
        isSwarmActive={isSwarmActive}
        toggleSwarm={toggleSwarm}
      />

      <main id="main-content">
        {/* Hero Section */}
        <Hero toggleSwarm={toggleSwarm} isSwarmActive={isSwarmActive} />

        {/* Selected Work / Projects */}
        <ProjectGrid onOpenProject={(project) => setSelectedProject(project)} />

        {/* Technical Skills & Ecosystem */}
        <Skills />

        {/* Education & Academic Journey */}
        {siteConfig.preferences.showEducation && <Education />}

        {/* About & Philosophy */}
        <About />

        {/* Contact & Socials */}
        {siteConfig.preferences.showContactForm && <Contact />}
      </main>

      {/* Project Deep Dive Dialog */}
      {selectedProject && (
        <ProjectDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Footer */}
      <Footer toggleSwarm={toggleSwarm} isSwarmActive={isSwarmActive} />

      {/* Floating Bottom-Right Corner Resume Button (View & Download) */}
      <ResumeWidget />
    </div>
  );
}
export default App;
