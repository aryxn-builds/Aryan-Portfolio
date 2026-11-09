import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { Send, Linkedin, Github, Mail, Copy, Check, ArrowUpRight, MessageSquare } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out your name, email, and message.");
      return;
    }

    // Compose formatted mailto URL
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // If Aryan has an email set in siteConfig, use it; otherwise fallback to mailto draft prompt
    const recipient = siteConfig.contact.email || "aryan.yadav.builds@gmail.com";
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const handleCopyMessage = () => {
    const textToCopy = `Sender: ${formData.name || "Visitor"}\nEmail: ${formData.email || "N/A"}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="section-wrap" id="contact" aria-label="Contact and Collaboration">
      <div className="section-header">
        <span className="eyebrow">
          <MessageSquare size={14} aria-hidden="true" />
          Collaboration // Connect
        </span>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Interested in discussing generative AI, software engineering, or exploring internship opportunities?
          Let's connect directly.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Info & Socials */}
        <div className="contact-info">
          <h3 className="contact-headline">
            Let's build something <span className="text-accent">impactful</span> together.
          </h3>

          <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--muted)" }}>
            I am currently open to internship roles, AI/ML engineering collaborations, and entry-level developer
            positions where I can apply practical LLM and software development capabilities.
          </p>

          <div className="contact-channels">
            {siteConfig.contact.linkedin && (
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="Connect with Aryan Yadav on LinkedIn"
              >
                <div className="contact-channel-left">
                  <Linkedin size={20} className="text-accent" aria-hidden="true" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>LinkedIn</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Professional network &amp; updates</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted" aria-hidden="true" />
              </a>
            )}

            {siteConfig.contact.github && (
              <a
                href={siteConfig.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                aria-label="Follow Aryan Yadav on GitHub"
              >
                <div className="contact-channel-left">
                  <Github size={20} className="text-accent" aria-hidden="true" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>GitHub</div>
                    <div style={{ fontSize: 12, color: "var(--muted)" }}>Open-source repositories &amp; code</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-muted" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Interactive Form Card */}
        <div className="contact-form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="alex@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="Internship opportunity, Project inquiry..."
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                name="message"
                required
                placeholder="Share project details or your inquiry..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {errorMsg && (
              <div style={{ color: "var(--red)", fontSize: 13, fontWeight: 600 }}>
                {errorMsg}
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <button type="submit" className="btn-primary">
                <Send size={15} aria-hidden="true" />
                <span>Send via Email Client</span>
              </button>

              {formData.message && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleCopyMessage}
                  title="Copy drafted message to clipboard"
                >
                  {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
                  <span>{copied ? "Copied Message!" : "Copy Draft"}</span>
                </button>
              )}
            </div>

            {submitted && (
              <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 8 }}>
                ✓ Mail client opened with your pre-filled inquiry. You can also connect directly via LinkedIn or GitHub!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
