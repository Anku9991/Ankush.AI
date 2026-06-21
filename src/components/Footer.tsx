"use client";

import React, { useState, useEffect } from "react";

export const Footer = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("privacy");
  const [cookieConsentOpen, setCookieConsentOpen] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("cookieConsent") === "true") {
      setCookieConsentOpen(false);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setCookieConsentOpen(false);
  };

  const openLegalModal = (tab: string) => {
    setActiveTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <>
      <footer id="footer">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            padding: "4rem 0",
          }}
        >
          <div>
            <img
              src="/assets/logo.png"
              alt="PIHNEXA Logo"
              style={{ height: "40px", marginBottom: "1rem" }}
            />
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Healthcare & Business Automation Experts.
            </p>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: "1.5rem",
                fontSize: "1.5rem",
                position: "relative",
                zIndex: "50",
              }}
            >
              <a 
                href="https://www.linkedin.com/in/pihnexa-technologies-597891418/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-muted)", transition: "color 0.3s" }}
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-muted)", transition: "color 0.3s" }}
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/pihnexa_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--text-muted)", transition: "color 0.3s" }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
              Products
            </h4>
            <ul
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                <a href="#projects">MeetTrack Pro</a>
              </li>
              <li>
                <a href="#projects">Smart Queue Management</a>
              </li>
              <li>
                <a href="#projects">Patient Tracker Pro</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
              Legal & Compliance
            </h4>
            <ul
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); openLegalModal("privacy"); }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); openLegalModal("terms"); }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); openLegalModal("cookie"); }}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="container"
          style={{
            borderTop: "1px solid var(--border-light)",
            padding: "2rem 0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "0.85rem",
              maxWidth: "800px",
              margin: "0 auto 1rem auto",
            }}
          >
            <strong>Healthcare Data Security & Compliance:</strong> At PIHNEXA, security is
            embedded in our DNA. We adhere to OWASP Top 10 standards, utilize AES-256 encryption,
            and enforce secure JWT/OAuth 2.0 authentication. Our healthcare solutions are designed
            with HIPAA compliance principles, ensuring end-to-end data protection for patient
            records.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
            &copy; 2026 PIHNEXA Technologies. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917992203671?text=Hi%20PIHNEXA,%20I%20want%20to%20discuss%20a%20project."
        className="floating-wa"
        target="_blank"
        aria-label="Chat on WhatsApp"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* STICKY CTA */}
      <a href="#contact" className="sticky-cta">
        <i className="fa-solid fa-calendar-check"></i> Book Free Tech Audit
      </a>

      {/* COOKIE CONSENT */}
      {cookieConsentOpen && (
        <div className="cookie-consent" id="cookieConsent" style={{ display: 'block' }}>
          <p>
            We use cookies to improve your experience and ensure compliance with security
            standards. By continuing, you agree to our{" "}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); openLegalModal("cookie"); }}
              style={{ color: "var(--accent-primary)", textDecoration: "underline" }}
            >
              Cookie Policy
            </a>
            .
          </p>
          <button className="btn btn-primary btn-sm" id="acceptCookies" onClick={acceptCookies}>
            Accept & Continue
          </button>
        </div>
      )}

      {/* LEGAL MODAL */}
      <div id="legalModal" className={`legal-modal ${legalModalOpen ? "show" : ""}`}>
        <div className="legal-modal-content glass">
          <span className="close-legal" onClick={() => setLegalModalOpen(false)}>
            &times;
          </span>
          <div className="legal-tabs">
            <button
              className={`legal-tab ${activeTab === "privacy" ? "active" : ""}`}
              onClick={() => setActiveTab("privacy")}
            >
              Privacy Policy
            </button>
            <button
              className={`legal-tab ${activeTab === "terms" ? "active" : ""}`}
              onClick={() => setActiveTab("terms")}
            >
              Terms of Service
            </button>
            <button
              className={`legal-tab ${activeTab === "cookie" ? "active" : ""}`}
              onClick={() => setActiveTab("cookie")}
            >
              Cookie Policy
            </button>
          </div>
          <div className="legal-body">
            {/* Privacy Policy */}
            {activeTab === "privacy" && (
              <div id="privacyText" className="legal-section active">
                <h2>Privacy Policy</h2>
                <p>Last Updated: June 2026</p>
                <h3>1. Information We Collect</h3>
                <p>
                  At PIHNEXA Technologies, we collect information that you voluntarily provide to
                  us when expressing an interest in obtaining information about our premium products
                  (such as MeetTrack Pro, Patient Tracker Pro) or services.
                </p>
                <h3>2. Healthcare Data & HIPAA Compliance</h3>
                <p>
                  For our healthcare partners using Patient Tracker Pro and Smart Queue Management,
                  we adhere strictly to OWASP Top 10 security protocols and ensure end-to-end
                  AES-256 encryption. We process patient data in compliance with standard global
                  health data privacy principles.
                </p>
                <h3>3. How We Use Your Information</h3>
                <ul>
                  <li>To provide and maintain our automated services.</li>
                  <li>To deploy AI bots and custom Web/App solutions securely.</li>
                  <li>To notify you about changes to our software infrastructure.</li>
                </ul>
                <h3>4. Data Security</h3>
                <p>
                  Security is our core DNA. We utilize OAuth 2.0 and JWT for secure session
                  management, ensuring that your enterprise data remains impenetrable.
                </p>
              </div>
            )}

            {/* Terms of Service */}
            {activeTab === "terms" && (
              <div id="termsText" className="legal-section active">
                <h2>Terms of Service</h2>
                <p>Last Updated: June 2026</p>
                <h3>1. Acceptance of Terms</h3>
                <p>
                  By accessing PIHNEXA Technologies' website or utilizing our software products,
                  you agree to be bound by these Terms of Service.
                </p>
                <h3>2. Enterprise Software Licenses</h3>
                <p>
                  Products like MeetTrack Pro and Patient Tracker Pro are licensed to organizations
                  under strict usage parameters. Reverse engineering, unauthorized distribution, or
                  tampering with our proprietary AI algorithms is strictly prohibited.
                </p>
                <h3>3. Limitation of Liability</h3>
                <p>
                  PIHNEXA Technologies shall not be liable for any indirect, incidental, special,
                  consequential or punitive damages resulting from your use of our custom
                  applications or business automation workflows.
                </p>
                <h3>4. Intellectual Property</h3>
                <p>
                  All source code, designs, UI/UX layouts, and AI models provided by PIHNEXA remain
                  our intellectual property unless explicitly transferred under a custom development
                  contract.
                </p>
              </div>
            )}

            {/* Cookie Policy */}
            {activeTab === "cookie" && (
              <div id="cookieText" className="legal-section active">
                <h2>Cookie Policy</h2>
                <p>Last Updated: June 2026</p>
                <h3>1. What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored securely on your device. PIHNEXA uses
                  cookies exclusively for essential functionality, such as CSRF protection and
                  session persistence during secure client logins.
                </p>
                <h3>2. Types of Cookies We Use</h3>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> Required for the secure operation of our
                    enterprise applications.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Fully anonymized telemetry to help us
                    improve software load speeds and identify potential bottlenecks.
                  </li>
                </ul>
                <h3>3. Your Control</h3>
                <p>
                  You may disable cookies through your browser settings, though doing so may
                  impair the functionality of our strict-security enterprise portals.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
