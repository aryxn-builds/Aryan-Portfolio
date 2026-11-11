import React, { useMemo } from "react";
import { experiences } from "../data/experience";
import { Briefcase, Calendar, Globe } from "lucide-react";

const MONTH_INDEX = {
  jan: 0,
  january: 0,
  feb: 1,
  february: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  august: 7,
  sep: 8,
  sept: 8,
  september: 8,
  oct: 9,
  october: 9,
  nov: 10,
  november: 10,
  dec: 11,
  december: 11,
};

const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Formats full month-year strings (e.g. "September 2026") into compact timeline format ("Sep 2026").
 */
function formatShortDate(dateStr) {
  if (!dateStr) return "";
  const trimmed = dateStr.trim();
  if (trimmed.toLowerCase() === "present") return "Present";

  const parts = trimmed.split(/\s+/);
  if (parts.length !== 2) return trimmed;

  const monthIdx = MONTH_INDEX[parts[0].toLowerCase()];
  if (monthIdx === undefined) return trimmed;

  return `${SHORT_MONTHS[monthIdx]} ${parts[1]}`;
}

/**
 * Converts a date string into a numeric value for reverse-chronological sorting.
 */
function parseDateSortValue(dateStr) {
  if (!dateStr || dateStr.trim().toLowerCase() === "present") {
    return Number.POSITIVE_INFINITY;
  }

  const parts = dateStr.trim().split(/\s+/);
  const year = parseInt(parts[parts.length - 1], 10);
  if (Number.isNaN(year)) return 0;

  const monthIdx = parts.length > 1 ? MONTH_INDEX[parts[0].toLowerCase()] ?? 0 : 0;
  return year * 12 + monthIdx;
}

/**
 * Builds a concise typographic company identifier when no company logo asset is available.
 */
function getCompanyIdentifier(company) {
  if (!company) return "CO";
  const words = company.trim().split(/\s+/);
  const firstWord = words[0];

  if (firstWord === firstWord.toUpperCase() && firstWord.length <= 4) {
    return firstWord;
  }

  return words
    .filter((w) => !["private", "limited", "ltd", "inc", "llc", "pvt"].includes(w.toLowerCase()))
    .slice(0, 3)
    .map((w) => w[0].toUpperCase())
    .join("");
}

/**
 * Formats work arrangement label cleanly from location and workMode fields.
 */
function formatWorkArrangement(location, workMode) {
  if (location && location.toLowerCase() === "virtual") {
    return "Virtual";
  }
  if (location && workMode) {
    return `${location} · ${workMode}`;
  }
  return location || workMode || "Remote";
}

export const Experience = () => {
  const orderedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const endDiff = parseDateSortValue(b.endDate) - parseDateSortValue(a.endDate);
      if (endDiff !== 0) return endDiff;
      return parseDateSortValue(b.startDate) - parseDateSortValue(a.startDate);
    });
  }, []);

  if (!orderedExperiences.length) {
    return null;
  }

  return (
    <section className="section-wrap" id="experience" aria-label="Work Experience">
      <div className="section-header">
        <span className="eyebrow">
          <Briefcase size={14} aria-hidden="true" />
          Industry Experience // Professional Timeline
        </span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Verified industry internship and practical exposure to cloud computing concepts and software engineering environments.
        </p>
      </div>

      <div className="experience-timeline">
        {orderedExperiences.map((exp, idx) => {
          const duration = `${formatShortDate(exp.startDate)} – ${formatShortDate(exp.endDate)}`;
          const workArrangement = formatWorkArrangement(exp.location, exp.workMode);
          const companyInitials = getCompanyIdentifier(exp.company);
          const hasResponsibilities = Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0;
          const hasTechnologies = Array.isArray(exp.technologies) && exp.technologies.length > 0;

          return (
            <div key={exp.id || idx} className="experience-item">
              {/* Vertical Timeline Rail & Node */}
              <div className="experience-rail" aria-hidden="true">
                <span className="experience-node"></span>
                <span className="experience-track"></span>
              </div>

              {/* Experience Card */}
              <article className="experience-card">
                {/* Identity & Metadata Column */}
                <div className="experience-identity">
                  <div className="experience-brand-row">
                    {exp.logo ? (
                      <div className="experience-logo-box">
                        <img src={exp.logo} alt={`${exp.company} logo`} loading="lazy" />
                      </div>
                    ) : (
                      <div
                        className="experience-logo-box experience-logo-monogram"
                        aria-hidden="true"
                      >
                        <span>{companyInitials}</span>
                        <span className="experience-logo-dot"></span>
                      </div>
                    )}

                    <span className="experience-type-badge">{exp.employmentType}</span>
                  </div>

                  <div className="experience-company">{exp.company}</div>

                  <div className="experience-meta-list">
                    <div className="experience-meta-row">
                      <Calendar size={13} className="text-accent" aria-hidden="true" />
                      <span>{duration}</span>
                    </div>
                    <div className="experience-meta-row">
                      <Globe size={13} className="text-accent" aria-hidden="true" />
                      <span>{workArrangement}</span>
                    </div>
                  </div>
                </div>

                {/* Role & Description Column */}
                <div className="experience-body">
                  <span className="eyebrow" style={{ fontSize: 10 }}>
                    {String(idx + 1).padStart(2, "0")} // {exp.employmentType}
                  </span>
                  <h3 className="experience-position">{exp.position}</h3>
                  <p className="experience-description">{exp.description}</p>

                  {hasResponsibilities && (
                    <ul className="edu-focus-list" style={{ marginTop: 4 }}>
                      {exp.responsibilities.map((item, rIdx) => (
                        <li key={rIdx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {hasTechnologies && (
                    <div className="project-tools-wrap" style={{ marginTop: 8 }}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tool-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

