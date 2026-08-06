import Image from "next/image";

const solutions = [
  {
    icon: "fa-users-viewfinder",
    image: "/assets/queue-management.png",
    title: "Smart Queue Management System",
    description:
      "Enterprise-grade QR-based patient queue system for OPDs, hospitals, and diagnostic centres. Eliminates manual token issuance and waiting room congestion.",
    benefits: [
      "Digital token generation via QR code or kiosk",
      "Real-time live display board integration",
      "SMS / WhatsApp wait-time notifications",
      "Department-wise queue routing",
      "Analytics dashboard for administrators",
    ],
    tag: "PRIMARY PRODUCT",
    isPrimary: true,
  },
  {
    icon: "fa-file-medical",
    image: "/assets/patient-tracker.png",
    title: "Patient Checklist & Tracker",
    description:
      "Automated structured checklist generation for patients — pre-op, post-op, and follow-up. 7,500+ checklists processed with zero lag in live hospital deployments.",
    benefits: [
      "Automated checklist generation per patient profile",
      "Pre-op, post-op & follow-up protocols",
      "Zero paper, fully digital audit trail",
      "Staff sign-off and compliance tracking",
      "Scalable across departments",
    ],
    tag: "PROVEN IN PRODUCTION",
    isPrimary: false,
  },
  {
    icon: "fa-calendar-days",
    image: "/assets/roster.png",
    title: "Staff Roster Automation",
    description:
      "Intelligent weekly shift scheduling for doctors, nurses, and hospital staff. Eliminates spreadsheets and manual coordination.",
    benefits: [
      "Auto-scheduling based on availability & roles",
      "Conflict detection and alerts",
      "WhatsApp notifications for shift changes",
      "Monthly summary reports",
      "Leave and swap management",
    ],
    tag: null,
    isPrimary: false,
  },
  {
    icon: "fa-calendar-check",
    image: "/assets/meet-track.png",
    title: "MeetTrack — Meeting Management",
    description:
      "Advanced meeting tracking and scheduling dashboard for hospital management teams, department heads, and corporate offices.",
    benefits: [
      "Agenda creation and distribution",
      "Action item tracking with deadlines",
      "Meeting analytics and attendance log",
      "Integration-ready API",
    ],
    tag: null,
    isPrimary: false,
  },
  {
    icon: "fa-fingerprint",
    image: "/assets/saas-dashboard.png",
    title: "Digital Attendance System",
    description:
      "QR-code-based attendance tracking with location verification for hospitals, clinics, and corporate facilities. Replaces biometric machines.",
    benefits: [
      "QR scan-based check-in / check-out",
      "GPS location validation",
      "Automated payroll-ready reports",
      "Role-based access control",
    ],
    tag: null,
    isPrimary: false,
  },
  {
    icon: "fa-hospital",
    image: "/assets/saas-dashboard.png",
    title: "Custom Hospital Management Software",
    description:
      "End-to-end bespoke hospital software — patient registration, billing, EMR integration, department dashboards, and workflow automation designed around your operations.",
    benefits: [
      "Tailored to your hospital's workflow",
      "Patient registration + billing modules",
      "Appointment booking & OPD management",
      "Multi-role access (Doctor / Nurse / Admin)",
      "Scalable enterprise architecture",
    ],
    tag: "ENTERPRISE",
    isPrimary: false,
  },
];

export default function SolutionsSection() {
  return (
    <section id="solutions" style={{ padding: "6rem 0", background: "var(--bg-dark)" }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="section-label fade-up">Our Products &amp; Solutions</div>
          <h2 className="section-heading fade-up delay-100">
            Purpose-Built Software for{" "}
            <span className="gradient-text">Healthcare Operations</span>
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            Every product is built from real operational experience inside hospitals and clinics — not
            generic software retrofitted for healthcare.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <article
              key={i}
              className={`solution-card fade-up delay-${Math.min((i % 3) * 100 + 100, 400)}`}
              aria-label={s.title}
            >
              <div style={{ position: "relative" }}>
                <Image
                  src={s.image}
                  alt={`${s.title} — PihNexa Technologies`}
                  className="solution-card-img"
                  width={600}
                  height={400}
                />
                {s.tag && (
                  <div
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      background: s.isPrimary ? "var(--teal-600)" : "var(--navy-600)",
                      color: "#FFFFFF",
                      fontSize: "0.68rem",
                      fontWeight: "700",
                      letterSpacing: "0.1em",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {s.tag}
                  </div>
                )}
              </div>

              <div className="solution-card-body">
                <div className="solution-card-icon" aria-hidden="true">
                  <i className={`fa-solid ${s.icon}`} />
                </div>
                <h3 className="solution-card-title">{s.title}</h3>
                <p className="solution-card-desc">{s.description}</p>
                <ul className="solution-card-benefits" aria-label="Key benefits">
                  {s.benefits.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Request Demo
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.8rem" }} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
