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
            <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
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
            <h4 style={{ color: "var(--text-main)", marginBottom: "1rem", fontFamily: "var(--font-display)" }}>
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
            <strong>Data Security & Compliance:</strong> At PIHNEXA Technologies, we prioritize the security, privacy, and integrity of user data. Our platforms are protected with HTTPS encryption, secure authentication mechanisms, regular security updates, and industry-standard development practices. We are committed to safeguarding sensitive information and continuously improving our systems to maintain a secure and reliable digital experience for our clients and users.
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
                <h3>Section 1 - Information We Collect</h3>
                <p>
                  At PIHNEXA Technologies, we collect only voluntary inquiry information that you provide to us when contacting us through our website. This may include your Name, Email, Phone Number, and Message content.
                </p>
                <h3>Section 2 - How We Use Information</h3>
                <p>
                  We use the information collected solely to respond to your inquiries, provide customer support, and communicate regarding the services you have requested, such as Website Development, Mobile App Development, or IT Consulting.
                </p>
                <h3>Section 3 - Data Sharing</h3>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share information only with trusted service providers assisting us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
                </p>
                <h3>Section 4 - Data Retention</h3>
                <p>
                  We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by applicable laws.
                </p>
                <h3>Section 5 - Security Measures</h3>
                <p>
                  We implement reasonable administrative and technical security measures, including HTTPS encryption, to protect your personal information from unauthorized access, alteration, or disclosure.
                </p>
                <h3>Section 6 - User Rights</h3>
                <p>
                  Depending on your jurisdiction, you may have the right to request access to, correction, or deletion of your personal data. Please contact us to exercise these rights.
                </p>
                <h3>Section 7 - Contact Us</h3>
                <p>
                  If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@pihnexa.co.in" style={{color: "var(--accent-primary)"}}>info@pihnexa.co.in</a>.
                </p>
              </div>
            )}

            {/* Terms of Service */}
            {activeTab === "terms" && (
              <div id="termsText" className="legal-section active">
                <h2>Terms of Service</h2>
                <p>Last Updated: June 2026</p>
                <h3>Section 1 - Acceptance of Terms</h3>
                <p>
                  By accessing the website of PIHNEXA Technologies at https://www.pihnexa.co.in, you agree to comply with and be bound by these Terms of Service.
                </p>
                <h3>Section 2 - Services</h3>
                <p>
                  PIHNEXA Technologies provides services including Website Development, Mobile App Development, Hospital Software Development, Queue Management Solutions, WhatsApp Automation, Digital Business Solutions, and IT Consulting. Any future healthcare data processing services will be subject to separate, specific agreements.
                </p>
                <h3>Section 3 - User Responsibilities</h3>
                <p>
                  You agree to use our website and services only for lawful purposes. You must not use our platform to transmit any harmful code, unsolicited promotional material, or illegal content.
                </p>
                <h3>Section 4 - Intellectual Property</h3>
                <p>
                  All content, branding, and original materials on this website are the intellectual property of PIHNEXA Technologies and are protected by applicable copyright and trademark laws.
                </p>
                <h3>Section 5 - Limitation of Liability</h3>
                <p>
                  PIHNEXA Technologies shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use or inability to use our website or services.
                </p>
                <h3>Section 6 - Service Availability</h3>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our website or services at any time without prior notice.
                </p>
                <h3>Section 7 - Termination</h3>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <h3>Section 8 - Governing Law</h3>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <h3>Section 9 - Contact Information</h3>
                <p>
                  For any inquiries regarding these Terms, please contact us at <a href="mailto:info@pihnexa.co.in" style={{color: "var(--accent-primary)"}}>info@pihnexa.co.in</a>.
                </p>
              </div>
            )}

            {/* Cookie Policy */}
            {activeTab === "cookie" && (
              <div id="cookieText" className="legal-section active">
                <h2>Cookie Policy</h2>
                <p>Last Updated: June 2026</p>
                <h3>Section 1 - What Are Cookies</h3>
                <p>
                  Cookies are small data files placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently and provide a better user experience.
                </p>
                <h3>Section 2 - Types of Cookies</h3>
                <p>
                  We currently use basic essential cookies necessary for the proper functioning of our website, such as routing secure HTTPS traffic and managing basic user sessions.
                </p>
                <h3>Section 3 - Cookie Control</h3>
                <p>
                  You have the right to accept or reject cookies. You can exercise your cookie rights by setting or amending your web browser controls to accept or refuse cookies.
                </p>
                <h3>Section 4 - Changes to Policy</h3>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
