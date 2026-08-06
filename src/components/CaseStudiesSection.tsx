const caseStudies = [
  {
    metric: "6,000+",
    metricLabel: "Patient Checklists Generated",
    badge: "Healthcare · Live Deployment",
    title: "Automating Pre-Op Patient Checklists at Scale",
    challenge:
      "A busy multi-specialty hospital was relying on handwritten pre-operative checklists — a process prone to errors, compliance gaps, and administrative delays. Staff were spending 15–20 minutes per patient on paperwork.",
    solution:
      "PihNexa deployed a custom Patient Checklist & Tracker system that auto-generates structured, digital checklists based on the patient's procedure type, age, and department. Each checklist is timestamped, assigned to the responsible clinician, and auditable.",
    result:
      "Within 4 months of go-live, the system processed 6,000+ patient checklists with zero performance issues. Paperwork time dropped from 20 minutes to under 2 minutes per patient. Clinical compliance improved measurably.",
    image: "/assets/patient-tracker.png",
    tags: ["React", "Node.js", "PostgreSQL", "Healthcare"],
  },
  {
    metric: "80%",
    metricLabel: "Reduction in Queue Wait Complaints",
    badge: "OPD Management · Hospital",
    title: "Eliminating OPD Queue Chaos with Smart Token System",
    challenge:
      "A high-volume OPD clinic was handling 200+ daily patients with a manual paper token system. Patients waited without knowing their position in the queue, leading to overcrowding, frustration, and staff overload at the reception desk.",
    solution:
      "PihNexa implemented a Smart Queue Management System with QR-code-based token generation, a real-time display board, and WhatsApp notifications. Patients could see their estimated wait time from their phones.",
    result:
      "Within 6 weeks of deployment, queue-related complaints dropped by over 80%. Reception workload reduced significantly, and the clinic reported visibly improved patient satisfaction and smoother daily operations.",
    image: "/assets/queue-management.png",
    tags: ["Next.js", "Real-Time", "WhatsApp API", "QR Technology"],
  },
  {
    metric: "100+",
    metricLabel: "Students on Live SaaS Platform",
    badge: "EdTech · SaaS",
    title: "Scaling a Coaching Institute with a Purpose-Built SaaS",
    challenge:
      "A professional coaching institute was managing course content, student registrations, and batch schedules through WhatsApp and spreadsheets — completely unscalable as the student base grew.",
    solution:
      "PihNexa built a full-featured SaaS platform with student onboarding, course management, attendance tracking, and an admin dashboard — deployed on cloud infrastructure for reliability and speed.",
    result:
      "The platform now serves 100+ registered students with automated reporting, reducing admin effort by 60%. The institute has been able to scale without adding administrative headcount.",
    image: "/assets/saas-dashboard.png",
    tags: ["SaaS", "Next.js", "Firebase", "Multi-tenant"],
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="section-dark"
      style={{ padding: "6rem 0", background: "var(--navy-900)" }}
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
            Real Results · Verified Impact
          </div>
          <h2
            className="section-heading section-heading-white fade-up delay-100"
          >
            Case Studies:{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2DD4BF, #6389D5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Outcomes That Matter
            </span>
          </h2>
          <p className="section-subheading section-subheading-white mx-auto fade-up delay-200">
            We don&apos;t just ship software — we measure what changes. Here are three deployments with
            documented, real-world impact on hospital operations.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((cs, i) => (
            <article
              key={i}
              className={`case-card fade-up delay-${(i + 1) * 100}`}
              aria-label={cs.title}
            >
              {/* Badge */}
              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--teal-400)",
                  background: "rgba(13,148,136,0.12)",
                  border: "1px solid rgba(13,148,136,0.3)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "1.25rem",
                }}
              >
                {cs.badge}
              </div>

              {/* Metric */}
              <div className="case-metric" aria-label={`${cs.metric} ${cs.metricLabel}`}>
                {cs.metric}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "1.25rem",
                  fontWeight: "600",
                }}
              >
                {cs.metricLabel}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  marginBottom: "1.5rem",
                  lineHeight: "1.35",
                }}
              >
                {cs.title}
              </h3>

              {/* Challenge → Solution → Result */}
              {[
                { label: "Challenge", text: cs.challenge },
                { label: "Solution", text: cs.solution },
                { label: "Result", text: cs.result },
              ].map((step, j) => (
                <div key={j} style={{ marginBottom: j < 2 ? "1.25rem" : "1.5rem" }}>
                  <div
                    className="case-step-label"
                    style={{
                      color:
                        step.label === "Result"
                          ? "var(--teal-400)"
                          : "rgba(255,255,255,0.4)",
                    }}
                  >
                    {step.label}
                  </div>
                  <p className="case-step-text">{step.text}</p>
                </div>
              ))}

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.5rem" }}>
                {cs.tags.map((t, k) => (
                  <span
                    key={k}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: "600",
                      color: "rgba(255,255,255,0.4)",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "var(--radius-full)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          className="text-center fade-up"
          style={{ marginTop: "3rem" }}
        >
          <a href="#contact" className="btn btn-white btn-lg">
            <i className="fa-solid fa-handshake" />
            Discuss Your Requirements
          </a>
        </div>
      </div>
    </section>
  );
}
