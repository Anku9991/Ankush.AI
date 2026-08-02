const steps = [
  {
    number: "01",
    title: "Free Tech Audit & Requirements Discovery",
    description:
      "We start with a structured consultation to understand your current operational challenges, workflows, and goals — not a sales pitch. This produces a clear requirements document.",
    duration: "1–2 Days",
    icon: "fa-magnifying-glass",
  },
  {
    number: "02",
    title: "Architecture Design & Proposal",
    description:
      "We design the technical architecture and UI/UX flow tailored to your hospital's specific workflows. You receive a detailed project proposal with milestones and timeline.",
    duration: "3–5 Days",
    icon: "fa-pen-ruler",
  },
  {
    number: "03",
    title: "Agile Development with Milestone Demos",
    description:
      "Development proceeds in 2-week sprints with working demos at each milestone. You see real progress — not just status updates.",
    duration: "4–16 Weeks",
    icon: "fa-code",
  },
  {
    number: "04",
    title: "QA, Security & Load Testing",
    description:
      "Every system undergoes rigorous testing — including high-volume load testing to ensure it performs reliably even at peak patient volumes.",
    duration: "1–2 Weeks",
    icon: "fa-bug-slash",
  },
  {
    number: "05",
    title: "Deployment & Staff Training",
    description:
      "We handle server configuration, go-live deployment, and conduct comprehensive training for all staff roles who will use the system.",
    duration: "3–7 Days",
    icon: "fa-rocket",
  },
  {
    number: "06",
    title: "Ongoing Support & Continuous Improvement",
    description:
      "Post-launch, we remain your technology partner — providing maintenance, security updates, feature additions, and 24/7 technical support.",
    duration: "Ongoing",
    icon: "fa-headset",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{ padding: "6rem 0", background: "var(--bg-dark)" }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="section-label fade-up">Delivery Process</div>
          <h2 className="section-heading fade-up delay-100">
            How We Take Your System from{" "}
            <span className="gradient-text">Concept to Live Production</span>
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            A transparent, structured process with clear milestones and zero surprises — because your
            hospital operations cannot afford an uncertain technology delivery.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`fade-up delay-${Math.min((i % 3) * 100 + 100, 400)}`}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              {/* Step number background */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-0.5rem",
                  right: "1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "5rem",
                  fontWeight: "800",
                  color: "rgba(11,27,62,0.04)",
                  lineHeight: "1",
                  userSelect: "none",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--teal-50)",
                  border: "1px solid var(--border-teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  color: "var(--teal-600)",
                  marginBottom: "1.25rem",
                }}
                aria-hidden="true"
              >
                <i className={`fa-solid ${step.icon}`} />
              </div>

              <div
                style={{
                  display: "inline-block",
                  fontSize: "0.68rem",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--teal-600)",
                  background: "var(--teal-50)",
                  border: "1px solid var(--border-teal)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "0.75rem",
                }}
              >
                {step.duration}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: "var(--text-main)",
                  marginBottom: "0.6rem",
                  lineHeight: "1.35",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.65",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
