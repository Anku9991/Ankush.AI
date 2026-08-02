const articles = [
  {
    tag: "Hospital Queue Management",
    title: "Why Every OPD in India Needs a Digital Queue System in 2026",
    description:
      "Paper tokens and manual calling are costing hospitals patient satisfaction scores and operational efficiency. Here is how smart queue systems solve this at scale.",
    readTime: "8 min read",
    icon: "fa-users-viewfinder",
    color: "var(--teal-600)",
    bg: "var(--teal-50)",
    border: "var(--border-teal)",
    comingSoon: false,
  },
  {
    tag: "Clinic Automation",
    title: "The Complete Guide to Automating a Clinic Without a Large IT Budget",
    description:
      "From attendance tracking to appointment booking — a practical breakdown of what small and mid-size clinics can automate affordably and effectively.",
    readTime: "12 min read",
    icon: "fa-stethoscope",
    color: "var(--navy-600)",
    bg: "var(--navy-50)",
    border: "var(--border-navy)",
    comingSoon: false,
  },
  {
    tag: "Digital Attendance",
    title: "Replacing Biometric Machines: How QR Attendance Works in Hospitals",
    description:
      "Biometric machines are expensive, prone to failure, and create hygiene risks in clinical settings. QR-based digital attendance solves all three problems.",
    readTime: "6 min read",
    icon: "fa-fingerprint",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.18)",
    comingSoon: true,
  },
];

export default function BlogTeaser() {
  return (
    <section id="blog" style={{ padding: "6rem 0", background: "var(--bg-alt)" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "540px" }}>
            <div className="section-label fade-up">Resources &amp; Insights</div>
            <h2 className="section-heading fade-up delay-100">
              Healthcare Technology{" "}
              <span className="gradient-text">Guides &amp; Insights</span>
            </h2>
            <p className="section-subheading fade-up delay-200" style={{ maxWidth: "none" }}>
              Practical knowledge for hospital administrators, clinic owners, and healthcare operations teams.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-secondary fade-up"
            style={{ flexShrink: 0 }}
          >
            Subscribe for Updates
            <i className="fa-solid fa-bell" style={{ fontSize: "0.85rem" }} />
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {articles.map((a, i) => (
            <article
              key={i}
              className={`blog-card fade-up delay-${(i + 1) * 100}`}
              aria-label={a.title}
            >
              {/* Header */}
              <div
                style={{
                  padding: "2rem 1.75rem 1.25rem",
                  borderBottom: "1px solid var(--border-light)",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    background: a.bg,
                    border: `1px solid ${a.border}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    color: a.color,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <i className={`fa-solid ${a.icon}`} />
                </div>
                <div>
                  <div className="blog-card-tag">{a.tag}</div>
                  {a.comingSoon && (
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: "700",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#F59E0B",
                        background: "rgba(245,158,11,0.1)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "var(--radius-full)",
                        display: "inline-block",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
              <div className="blog-card-body">
                <h3 className="blog-card-title">{a.title}</h3>
                <p className="blog-card-desc">{a.description}</p>
                <div className="blog-card-meta">
                  <i className="fa-solid fa-clock" style={{ fontSize: "0.75rem" }} />
                  {a.readTime}
                  {a.comingSoon && (
                    <span style={{ color: "#F59E0B", marginLeft: "0.5rem" }}>· Publishing soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
