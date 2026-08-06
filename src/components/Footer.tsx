"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Footer = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("privacy");
  const [cookieConsentOpen, setCookieConsentOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cookieConsent") !== "true") {
      setTimeout(() => setCookieConsentOpen(true), 0);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setCookieConsentOpen(false);
  };

  const openLegal = (tab: string) => {
    setActiveTab(tab);
    setLegalModalOpen(true);
  };

  const solutions = [
    { label: "Smart Queue Management", href: "/solutions" },
    { label: "Patient Checklist & Tracker", href: "/solutions" },
    { label: "Staff Roster Automation", href: "/solutions" },
    { label: "MeetTrack", href: "/solutions" },
    { label: "Digital Attendance", href: "/solutions" },
    { label: "Custom Hospital Software", href: "/solutions" },
  ];

  const company = [
    { label: "Case Studies", href: "/solutions#case-studies" },
    { label: "About Ankush Jha", href: "/about" },
    { label: "Delivery Process", href: "/pricing" },
    { label: "Packages & Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      {/* Footer */}
      <footer id="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Image
                  src="/assets/logo.png"
                  alt="PihNexa Technologies"
                  width={36}
                  height={36}
                  style={{ height: "36px", width: "auto" }}
                />
                <div className="footer-brand-name">PihNexa Technologies</div>
              </div>
              <p className="footer-brand-desc">
                Enterprise-grade healthcare technology for hospitals and clinics across India. Smart Queue
                Management, Patient Tracking, Hospital Workflow Automation, and Custom Software Development.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.linkedin.com/in/pihnexa-technologies-597891418/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PihNexa Technologies on LinkedIn"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/pihnexa_technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PihNexa Technologies on Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="https://wa.me/917307852235"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with PihNexa on WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="PihNexa Technologies on X (Twitter)"
                >
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="footer-col-title">Solutions</div>
              <nav className="footer-links" aria-label="Solutions navigation">
                {solutions.map((s) => (
                  <a key={s.label} href={s.href}>
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <div className="footer-col-title">Company</div>
              <nav className="footer-links" aria-label="Company navigation">
                {company.map((c) => (
                  <a key={c.label} href={c.href}>
                    {c.label}
                  </a>
                ))}
                <a href="#" onClick={(e) => { e.preventDefault(); openLegal("privacy"); }}>
                  Privacy Policy
                </a>
                <a href="#" onClick={(e) => { e.preventDefault(); openLegal("terms"); }}>
                  Terms of Service
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-col-title">Contact</div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-phone" />
                <span>+91 7992203671</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-envelope" />
                <span>info@pihnexa.co.in</span>
              </div>
              <div className="footer-contact-item">
                <i className="fa-solid fa-location-dot" />
                <span>India — Serving Pan-India Healthcare Organisations</span>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="https://wa.me/917307852235?text=Hi%20PihNexa,%20I%20want%20to%20discuss%20a%20project."
                  className="btn btn-primary btn-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <i className="fa-brands fa-whatsapp" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <p>
              © 2026 PihNexa Technologies. All Rights Reserved. ·{" "}
              <a
                href="https://www.pihnexa.co.in"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                www.pihnexa.co.in
              </a>
              {" · "}
              <span
                style={{ cursor: "pointer", color: "rgba(255,255,255,0.35)" }}
                onClick={() => openLegal("privacy")}
              >
                Privacy
              </span>
              {" · "}
              <span
                style={{ cursor: "pointer", color: "rgba(255,255,255,0.35)" }}
                onClick={() => openLegal("terms")}
              >
                Terms
              </span>
              {" · "}
              <span
                style={{ cursor: "pointer", color: "rgba(255,255,255,0.35)" }}
                onClick={() => openLegal("cookie")}
              >
                Cookie Policy
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/917307852235?text=Hi%20PihNexa,%20I%20want%20to%20discuss%20a%20project."
        className="floating-wa"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>

      {/* Sticky CTA */}
      <a href="/#contact" className="sticky-cta">
        <i className="fa-solid fa-calendar-check" />
        Book Free Tech Audit
      </a>

      {/* Cookie Consent */}
      {cookieConsentOpen && (
        <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
          <p>
            We use cookies to improve your experience.{" "}
            <button
              onClick={() => openLegal("cookie")}
              style={{ color: "var(--teal-400)", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", fontSize: "inherit" }}
            >
              Cookie Policy
            </button>
          </p>
          <button className="btn btn-primary btn-sm" onClick={acceptCookies}>
            Accept &amp; Continue
          </button>
        </div>
      )}

      {/* Legal Modal */}
      <div
        id="legalModal"
        className={`legal-modal ${legalModalOpen ? "show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Legal information"
      >
        <div className="legal-modal-content">
          <button
            className="close-legal"
            onClick={() => setLegalModalOpen(false)}
            aria-label="Close legal modal"
          >
            &times;
          </button>
          <div className="legal-tabs">
            {["privacy", "terms", "cookie"].map((tab) => (
              <button
                key={tab}
                className={`legal-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "privacy" ? "Privacy Policy" : tab === "terms" ? "Terms of Service" : "Cookie Policy"}
              </button>
            ))}
          </div>
          <div className="legal-body">
            {activeTab === "privacy" && (
              <div className="legal-section active">
                <h2>Privacy Policy</h2>
                <p>Last Updated: June 2026</p>
                <h3>Section 1 — Information We Collect</h3>
                <p>At PihNexa Technologies, we collect only voluntary inquiry information that you provide when contacting us. This may include your Name, Email, Phone Number, and Message content.</p>
                <h3>Section 2 — How We Use Information</h3>
                <p>Information is used solely to respond to your inquiries, provide support, and communicate regarding the services you have requested.</p>
                <h3>Section 3 — Data Sharing</h3>
                <p>We do not sell, trade, or rent your personal information to third parties.</p>
                <h3>Section 4 — Security Measures</h3>
                <p>We implement HTTPS encryption, secure authentication, and industry-standard development practices to protect your data.</p>
                <h3>Section 5 — Contact</h3>
                <p>Questions? Email <a href="mailto:info@pihnexa.co.in" style={{ color: "var(--teal-400)" }}>info@pihnexa.co.in</a></p>
              </div>
            )}
            {activeTab === "terms" && (
              <div className="legal-section active">
                <h2>Terms of Service</h2>
                <p>Last Updated: June 2026</p>
                <h3>Section 1 — Acceptance of Terms</h3>
                <p>By accessing www.pihnexa.co.in, you agree to comply with these Terms of Service.</p>
                <h3>Section 2 — Services</h3>
                <p>PihNexa Technologies provides Website Development, Mobile App Development, Hospital Software, Queue Management Solutions, WhatsApp Automation, and IT Consulting.</p>
                <h3>Section 3 — Intellectual Property</h3>
                <p>All content, branding, and original materials on this website are the intellectual property of PihNexa Technologies.</p>
                <h3>Section 4 — Governing Law</h3>
                <p>These Terms are governed by the laws of India. Contact <a href="mailto:info@pihnexa.co.in" style={{ color: "var(--teal-400)" }}>info@pihnexa.co.in</a> for inquiries.</p>
              </div>
            )}
            {activeTab === "cookie" && (
              <div className="legal-section active">
                <h2>Cookie Policy</h2>
                <p>Last Updated: June 2026</p>
                <h3>Section 1 — What Are Cookies</h3>
                <p>Cookies are small data files placed on your device when you visit a website to make it work efficiently.</p>
                <h3>Section 2 — Types We Use</h3>
                <p>We use only essential cookies necessary for the proper functioning of our website, such as routing secure HTTPS traffic.</p>
                <h3>Section 3 — Your Control</h3>
                <p>You can accept or reject cookies through your browser settings at any time.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
