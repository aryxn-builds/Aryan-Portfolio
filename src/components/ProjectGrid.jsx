import React, { useState, useMemo } from "react";
import { projects, projectCategories } from "../data/projects";
import { Search, Github, ExternalLink, ArrowRight, Layers } from "lucide-react";

export const ProjectGrid = ({ onOpenProject }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "Generative AI" && project.category.includes("Generative")) ||
        (selectedCategory === "AI/ML" && (project.category.includes("AI") || project.category.includes("ML")));

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="section-wrap" id="work" aria-label="Selected Engineering Work">
      {/* Section Header */}
      <div className="section-header">
        <span className="eyebrow">
          <Layers size={14} aria-hidden="true" />
          Featured Portfolio // Engineered Applications
        </span>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Real, authentic engineering projects built with modern machine learning frameworks,
          large language model orchestration, and fast inference pipelines.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="filter-and-search-bar">
        <div className="category-filter-tabs" role="tablist" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`category-tab-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-input-box">
          <Search size={16} className="text-muted" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search projects by tech, title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects by title or technology"
          />
        </div>
      </div>

      {/* Projects List */}
      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Media Thumbnail */}
              <div
                className="project-cover-container"
                onClick={() => onOpenProject(project)}
                style={{ cursor: "pointer" }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && onOpenProject(project)}
                aria-label={`Open project details for ${project.title}`}
              >
                <img
                  src={project.coverImage}
                  alt={`${project.title} Interface & Architecture Preview`}
                  loading="lazy"
                />
                <span className="project-badge-overlay">{project.categoryTag || project.category}</span>
              </div>

              {/* Details Column */}
              <div className="project-details-container">
                <div className="project-details-top">
                  <div className="project-meta-row">
                    <span>{project.role}</span>
                    <span>{project.year || "Active Build"}</span>
                  </div>

                  <h3
                    className="project-card-title"
                    onClick={() => onOpenProject(project)}
                    style={{ cursor: "pointer" }}
                  >
                    {project.title}
                  </h3>

                  <p className="project-card-summary">{project.summary}</p>

                  <div className="project-tools-wrap">
                    {project.tools.map((tool) => (
                      <span key={tool} className="tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="project-actions-row">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={() => onOpenProject(project)}
                  >
                    <span>View Architecture</span>
                    <ArrowRight size={15} aria-hidden="true" />
                  </button>

                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} aria-hidden="true" />
                      <span>Source Code</span>
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
                      <span>Live App</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={{ padding: "60px 0", textAlign: "center", color: "var(--muted)" }}>
          <p style={{ fontSize: 16 }}>No projects found matching your search.</p>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            style={{ marginTop: 16 }}
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
