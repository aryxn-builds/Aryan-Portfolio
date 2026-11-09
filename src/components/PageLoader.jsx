import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";

export const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsMounted(false);
      return;
    }

    let startTime = null;
    const duration = 1350; // 1.35 seconds for crisp, minimal loading

    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth custom cubic ease-in-out curve
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const current = Math.round(eased * 100);

      setProgress(current);

      if (t < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        // Complete - trigger graceful exit animation
        setTimeout(() => setIsExiting(true), 150);
        setTimeout(() => setIsMounted(false), 650);
      }
    };

    const frameId = requestAnimationFrame(animateProgress);
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`page-loader-overlay ${isExiting ? "loader-exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-ambient-glow" aria-hidden="true" />

      <div className="loader-content">
        {/* Monogram / Brand Display */}
        <div className="loader-brand font-display">
          <span>{siteConfig.identity.displayName}</span>
          <span className="loader-brand-dot" aria-hidden="true">.</span>
        </div>

        {/* Minimal Role Label */}
        <p className="loader-role">
          {siteConfig.identity.roleLine2 || "AI/ML & GenAI Developer"}
        </p>

        {/* Minimal Progress Bar with Website Gradient */}
        <div className="loader-track-wrap">
          <div className="loader-track">
            <div
              className="loader-bar"
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>
          <span className="loader-counter font-display" aria-hidden="true">
            {String(progress).padStart(2, "0")}
            <span className="loader-counter-pct">%</span>
          </span>
        </div>
      </div>
    </div>
  );
};
