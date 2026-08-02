const packages = [
  {
    name: "Clinic Launchpad",
    target: "Clinics, Diagnostic Centres, Small Hospitals",
    price: "Starting ₹1.75L",
    priceNote: "One-time setup · Annual SaaS option available",
    features: [
      "Smart Queue Management System",
      "Patient Registration & OPD Tracking",
      "Digital Token Display Board",
      "WhatsApp Appointment Alerts",
      "Digital Attendance System",
      "Admin Dashboard & Reports",
      "3 Months Post-Go-Live Support",
    ],
    cta: "Request Demo",
    ctaStyle: "btn-outline-white",
    isPopular: false,
    desc: "Eliminate waiting room chaos and paper processes from day one. Designed specifically for clinical facilities that need to modernize fast.",
  },
  {
    name: "Business Growth Suite",
    target: "Multi-Specialty Hospitals, Startups, Enterprises",
    price: "Starting ₹4.5L",
    priceNote: "Custom scope · 12-month support included",
    features: [
      "Everything in Clinic Launchpad",
      "Custom Hospital Management Software",
      "Staff Roster Automation",
      "Patient Checklist & Tracker Module",
      "MeetTrack Integration",
      "Multi-Department Role Access",
      "API Integrations & EMR Connectivity",
      "12 Months Priority Support",
    ],
    cta: "Book Free Tech Audit",
    ctaStyle: "btn-white",
    isPopular: true,
    desc: "For healthcare providers that need a fully integrated digital ecosystem — from patient flow to staff management to reporting.",
  },
  {
    name: "Enterprise Solutions",
    target: "Large Hospitals, Hospital Chains, Enterprises",
    price: "Custom Pricing",
    priceNote: "Based on scope, departments & volume",
    features: [
      "Fully Bespoke Software Architecture",
      "Unlimited Departments & Users",
      "EMR / HIS / Billing Integration",
      "AI-Powered Analytics & Predictions",
      "Dedicated Development Team",
      "SLA-Backed Uptime Guarantee",
      "On-Site Training & Onboarding",
      "24/7 Dedicated Technical Support",
    ],
    cta: "Discuss Requirements",
    ctaStyle: "btn-outline-white",
    isPopular: false,
    desc: "For organisations that require a long-term technology partner to architect, build, and maintain complex digital infrastructure.",
  },
];

export default function PackagesSection() {
  return (
    <section
      id="packages"
      style={{ padding: "6rem 0", background: "var(--navy-950)" }}
    >
      <div className="container">
        <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div
            className="section-label fade-up"
            style={{
              background: "rgba(13,148,136,0.15)",
              borderColor: "rgba(13,148,136,0.35)",
              color: "var(--teal-400)",
            }}
          >
            Solutions &amp; Pricing
          </div>
          <h2
            className="section-heading section-heading-white fade-up delay-100"
          >
            Investment in Technology That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2DD4BF, #6389D5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Pays for Itself
            </span>
          </h2>
          <p className="section-subheading section-subheading-white mx-auto fade-up delay-200">
            Transparent, outcome-aligned pricing built for healthcare providers at every stage. Contact us
            for a custom assessment and ROI projection.
          </p>
        </div>

        <div className="pricing-grid">
          {packages.map((pkg, i) => (
            <article
              key={i}
              className={`pricing-card fade-up delay-${(i + 1) * 100} ${pkg.isPopular ? "popular" : ""}`}
              aria-label={pkg.name}
            >
              {pkg.isPopular && (
                <div className="popular-badge">Most Chosen</div>
              )}

              <div className="pricing-name">{pkg.name}</div>
              <div className="pricing-target">{pkg.target}</div>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <div className="pricing-price">{pkg.price}</div>
                <div className="pricing-price-note">{pkg.priceNote}</div>
              </div>

              <ul className="pricing-features">
                {pkg.features.map((f, j) => (
                  <li key={j}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>

              <hr className="pricing-divider" />

              <p
                style={{
                  fontSize: "0.83rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                {pkg.desc}
              </p>

              <a href="#contact" className={`btn ${pkg.ctaStyle}`} style={{ width: "100%", justifyContent: "center" }}>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.85rem" }} />
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>

        <p
          className="text-center fade-up"
          style={{
            marginTop: "2.5rem",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          All pricing is indicative. Final investment depends on scope, modules, and deployment complexity.{" "}
          <a href="#contact" style={{ color: "var(--teal-400)" }}>
            Contact us for a custom quote.
          </a>
        </p>
      </div>
    </section>
  );
}
