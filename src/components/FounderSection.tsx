import Image from "next/image";

export default function FounderSection() {
  return (
    <section id="about" style={{ padding: "6rem 0", background: "var(--bg-dark)" }}>
      <div className="container">
        <div className="founder-grid">
          {/* Photo */}
          <div className="founder-img-wrapper slide-left">
            <Image
              src="/assets/founder.jpg"
              alt="Ankush Jha — Founder & Chief Technology Consultant, PihNexa Technologies"
              className="founder-img"
              width={500}
              height={500}
            />
            <div className="founder-img-badge" aria-hidden="true">
              <i className="fa-solid fa-hospital-user" style={{ marginRight: "0.4rem" }} />
              Healthcare Technology Expert
            </div>
          </div>

          {/* Content */}
          <div className="founder-content slide-right">
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
              Meet the Founder
            </div>
            <h2 className="founder-name">Ankush Jha</h2>
            <span className="founder-role">Founder &amp; Chief Technology Consultant</span>

            <p className="founder-bio">
              With deep, firsthand experience in hospital operations and enterprise administration, Ankush
              bridges the gap that most software companies miss — understanding both the clinical workflow
              and the technical architecture required to automate it reliably.
            </p>
            <p className="founder-bio" style={{ marginTop: "0" }}>
              At PihNexa Technologies, the focus is uncompromisingly on delivering systems that work
              under the real conditions of a busy hospital — high patient volumes, multiple concurrent
              users, and zero tolerance for downtime. Every product shipped has been designed around
              the operational realities of Indian healthcare, not adapted from generic enterprise software.
            </p>
            <p className="founder-bio" style={{ marginTop: "0" }}>
              PihNexa is not just a development agency. It is a healthcare technology partner built to
              stay — providing architecture that scales, code that is maintained, and support that
              responds when it matters.
            </p>

            <div className="founder-tags">
              {[
                "Healthcare Technology",
                "Hospital Operations",
                "Enterprise Architecture",
                "Digital Transformation",
                "Business Automation",
                "Software Consulting",
              ].map((tag) => (
                <span key={tag} className="founder-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/#contact" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-calendar-check" />
                Book Free Consultation
              </a>
              <a href="/solutions#case-studies" className="btn btn-secondary btn-lg">
                <i className="fa-solid fa-chart-line" />
                View Case Studies
              </a>
            </div>

            {/* Contact quick links */}
            <div
              style={{
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border-light)",
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:+917992203671"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  transition: "color 0.2s",
                }}
              >
                <i className="fa-solid fa-phone" style={{ color: "var(--teal-600)" }} />
                +91 7992203671
              </a>
              <a
                href="mailto:info@pihnexa.co.in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  transition: "color 0.2s",
                }}
              >
                <i className="fa-solid fa-envelope" style={{ color: "var(--teal-600)" }} />
                info@pihnexa.co.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
