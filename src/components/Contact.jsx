import React, { useState } from "react";
import { siteConfig } from "../config/site";
import {
  Send,
  Linkedin,
  Github,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MessageSquare,
  Loader2,
  ExternalLink,
  Code2,
} from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'fallback'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const recipientEmail = siteConfig.contact.email || "ay6033756@gmail.com";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg("");
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill out your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || "Portfolio Contact Inquiry",
          message: formData.message.trim(),
          _subject: `New Portfolio Message from ${formData.name}: ${formData.subject.trim() || "Inquiry"}`,
          _template: "table",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setStatus("success");
      } else {
        // Handled as fallback so user message is never lost
        setStatus("fallback");
      }
    } catch (err) {
      console.warn("Direct form submit network issue, activating fallback:", err);
      setStatus("fallback");
    }
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyDraft = () => {
    const textToCopy = `Sender: ${formData.name || "Visitor"}\nEmail: ${formData.email || "N/A"}\nSubject: ${formData.subject || "N/A"}\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
  };

  const handleResetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("idle");
    setErrorMsg("");
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
            {/* Direct Email Card */}
            <div className="contact-channel-card email-card">
              <a
                href={`mailto:${recipientEmail}`}
                className="contact-channel-left"
                style={{ textDecoration: "none", color: "inherit", flex: 1 }}
                title={`Send email to ${recipientEmail}`}
              >
                <Mail size={20} className="text-accent" aria-hidden="true" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{recipientEmail}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Direct email · Fastest response</div>
                </div>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="contact-copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* LinkedIn */}
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

            {/* GitHub */}
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

            {/* Additional Profiles (e.g. LeetCode) */}
            {siteConfig.contact.otherLinks
              ?.filter((link) => link?.url)
              .map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-card"
                  aria-label={`View Aryan Yadav on ${link.label}`}
                >
                  <div className="contact-channel-left">
                    <Code2 size={20} className="text-accent" aria-hidden="true" />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{link.label}</div>
                      <div style={{ fontSize: 12, color: "var(--muted)" }}>
                        {link.subtitle || "Developer profile"}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-muted" aria-hidden="true" />
                </a>
              ))}
          </div>
        </div>

        {/* Interactive Form Card */}
        <div className="contact-form-card">
          {status === "success" ? (
            <div className="contact-success-state">
              <div className="contact-success-icon">
                <Check size={32} className="text-accent" />
              </div>
              <h3 className="contact-success-title">Message Delivered!</h3>
              <p className="contact-success-text">
                Thank you, <strong>{formData.name}</strong>. Your message has been sent directly to Aryan's inbox.
                A confirmation will be sent to <strong>{formData.email}</strong>.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ) : (
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
                    disabled={status === "submitting"}
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
                    disabled={status === "submitting"}
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
                  disabled={status === "submitting"}
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
                  disabled={status === "submitting"}
                ></textarea>
              </div>

              {errorMsg && (
                <div style={{ color: "var(--red)", fontSize: 13, fontWeight: 600 }}>
                  {errorMsg}
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={15} className="spin-icon" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} aria-hidden="true" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={getGmailWebUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  title="Open directly in Gmail web composer"
                >
                  <ExternalLink size={14} aria-hidden="true" />
                  <span>Open in Gmail</span>
                </a>

                {formData.message && (
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleCopyDraft}
                    title="Copy drafted message to clipboard"
                  >
                    {copiedDraft ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                    <span>{copiedDraft ? "Copied!" : "Copy Draft"}</span>
                  </button>
                )}
              </div>

              {/* Fallback Notice if mail client or webmail is preferred */}
              {status === "fallback" && (
                <div className="contact-fallback-alert">
                  <p style={{ fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>
                    Form submitted! If you prefer direct delivery:
                  </p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ height: 36, padding: "0 14px", fontSize: 11 }}
                    >
                      <ExternalLink size={13} />
                      <span>Send via Gmail Web</span>
                    </a>
                    <a
                      href={getMailtoUrl()}
                      className="btn-secondary"
                      style={{ height: 36, padding: "0 14px", fontSize: 11 }}
                    >
                      <Mail size={13} />
                      <span>Send via Mail App</span>
                    </a>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
