const differentiators = [
  {
    icon: "fa-notes-medical",
    title: "Deep Healthcare Domain Expertise",
    description:
      "We understand clinical workflows, OPD dynamics, and hospital administration from the inside. Our solutions are designed around how hospitals actually operate — not generic software adapted for healthcare.",
  },
  {
    icon: "fa-hospital-user",
    title: "Founder's Real Operational Experience",
    description:
      "Our founder has worked within hospital operations directly — not just as a developer, but as someone who has seen firsthand where manual processes fail and how technology can replace them effectively.",
  },
  {
    icon: "fa-stopwatch",
    title: "Fast Delivery with Production Readiness",
    description:
      "We move quickly without sacrificing quality. Our delivery process is built for agile execution with clear milestones, regular demos, and production-ready code at every stage.",
  },
  {
    icon: "fa-shield-halved",
    title: "Data Security & Patient Privacy First",
    description:
      "Every system we build uses HTTPS encryption, role-based access control, and secure authentication. Patient data is never compromised, and audit trails are always maintained.",
  },
  {
    icon: "fa-server",
    title: "Enterprise Architecture That Scales",
    description:
      "Our systems are engineered to handle growing patient volumes and expanding departments — built on proven cloud infrastructure that doesn't crack under load.",
  },
  {
    icon: "fa-headset",
    title: "Long-Term Partnership & Support",
    description:
      "We don't disappear after launch. Every client gets ongoing maintenance, security updates, and a direct line to technical support — because healthcare systems cannot afford downtime.",
  },
];

export default function WhyPihNexaSection() {
  return (
    <section id="why-pihnexa" style={{ padding: "6rem 0", background: "var(--bg-alt)" }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="section-label fade-up">Why PihNexa</div>
          <h2 className="section-heading fade-up delay-100">
            The Difference Between Generic Software and{" "}
            <span className="gradient-text">Healthcare-First Technology</span>
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            We combine rare operational knowledge, enterprise-grade engineering, and genuine long-term
            commitment to every client.
          </p>
        </div>

        <div className="why-grid">
          {differentiators.map((d, i) => (
            <div
              key={i}
              className={`why-card fade-up delay-${Math.min((i % 3) * 100 + 100, 400)}`}
            >
              <div className="why-card-icon" aria-hidden="true">
                <i className={`fa-solid ${d.icon}`} />
              </div>
              <h3 className="why-card-title">{d.title}</h3>
              <p className="why-card-desc">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
