"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "What is a Smart Queue Management System for hospitals?",
    a: "A Smart Queue Management System is a digital solution that automates patient flow in hospitals and clinics using QR codes, token numbers, and real-time tracking. It eliminates manual token issuance, reduces waiting room congestion, and gives patients live queue visibility via display boards and WhatsApp notifications.",
  },
  {
    q: "How long does it take to deploy a hospital queue management system?",
    a: "A standard Smart Queue Management System deployment takes 3–6 weeks, including setup, configuration, staff training, and go-live support. Complex, multi-department integrations may take 2–3 months depending on scope.",
  },
  {
    q: "Can PihNexa integrate with our existing Hospital Management System (HMS) or EMR?",
    a: "Yes. We build our solutions with API-first architecture, enabling integration with existing HMS, EMR, and billing systems. The scope of integration depends on the APIs available in your current systems, which we assess during the requirements phase.",
  },
  {
    q: "Does PihNexa serve small clinics or only large hospitals?",
    a: "PihNexa serves the full spectrum — from single-doctor clinics and diagnostic centres to multi-specialty hospitals. Our Clinic Launchpad package is specifically designed for smaller facilities, while our Enterprise Solutions handle complex, multi-department hospitals with high patient volumes.",
  },
  {
    q: "What is included in the Patient Checklist & Tracker system?",
    a: "The Patient Checklist & Tracker automates generation of structured, digital checklists — pre-operative, post-operative, and follow-up — based on each patient's profile and procedure type. It includes staff sign-off tracking, compliance logs, and a complete audit trail. The system has processed 7,500+ checklists in a live hospital with zero performance issues.",
  },
  {
    q: "How secure is patient data on PihNexa's systems?",
    a: "All data is transmitted over HTTPS (TLS 1.3 encryption). Systems include role-based access control (RBAC) so each staff role only sees what they need. Audit logs track every action. We use enterprise-grade cloud infrastructure with automated backups. Patient data is never shared with third parties.",
  },
  {
    q: "What does the Staff Roster Automation system do?",
    a: "Staff Roster Automation replaces manual spreadsheets and WhatsApp coordination with intelligent scheduling software. It handles shift assignments, conflict detection, leave management, swap requests, and automatically sends WhatsApp notifications to staff for schedule changes.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Yes — every project includes a post-launch support period, and we offer ongoing maintenance packages for security updates, feature additions, and technical support. Healthcare systems cannot afford to go unsupported after deployment, and we take that responsibility seriously.",
  },
  {
    q: "What is the typical cost of a hospital queue management system in India?",
    a: "Our Smart Queue Management System starts at ₹1.75L as part of the Clinic Launchpad package. Final pricing depends on the number of departments, display boards, integrations, and ongoing support requirements. Contact us for a scoped quote.",
  },
  {
    q: "Do I own the source code and data after the project is complete?",
    a: "Yes. Upon project completion and final payment, full intellectual property — source code, design assets, and database schemas — is transferred to you. Your business owns its technology.",
  },
  {
    q: "Can the queue management system send SMS or WhatsApp notifications to patients?",
    a: "Yes. Our Smart Queue System integrates with WhatsApp Business API and SMS gateways to send patients automated notifications about their token number, estimated wait time, and when they are about to be called.",
  },
  {
    q: "How do we get started with PihNexa Technologies?",
    a: "Fill out our contact form or reach us on WhatsApp at +91 7307852235. We start with a free, no-obligation Tech Audit session to understand your requirements and then provide a detailed proposal within 3–5 working days.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" style={{ padding: "6rem 0", background: "var(--bg-dark)" }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="section-label fade-up">FAQ</div>
          <h2 className="section-heading fade-up delay-100">
            Frequently Asked Questions About{" "}
            <span className="gradient-text">Healthcare Automation</span>
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            Answers to the questions hospital administrators and clinic owners ask most before choosing
            a healthcare technology partner.
          </p>
        </div>

        <div className="faq-list fade-up delay-200">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "active" : ""}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <div
                className="faq-question"
                onClick={() => toggle(i)}
                role="button"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggle(i)}
              >
                <span itemProp="name">{faq.q}</span>
                <i className="fa-solid fa-chevron-down" aria-hidden="true" />
              </div>
              <div
                className="faq-answer"
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center fade-up"
          style={{ marginTop: "3rem" }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.925rem", marginBottom: "1.25rem" }}>
            Have a question not covered here?
          </p>
          <a href="/#contact" className="btn btn-primary">
            <i className="fa-solid fa-comment-dots" />
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
