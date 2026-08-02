const testimonials = [
  {
    quote:
      "The Smart Queue Management System completely transformed our OPD experience. Waiting room crowding dropped dramatically within weeks of going live. The team at PihNexa understood our workflow without us having to explain it twice.",
    author: "Dr. Priya Sharma",
    role: "Medical Superintendent",
    org: "Multi-Specialty Hospital, Patna",
    stars: 5,
    avatar: "PS",
    avatarColor: "#0D9488",
  },
  {
    quote:
      "We were skeptical about digitising our patient checklists — but the system has been flawless. Over 6,000 checklists generated with zero errors. PihNexa built exactly what we needed, not a generic product.",
    author: "Rajesh Kumar",
    role: "Chief Operations Officer",
    org: "Surgical Care Centre, Bihar",
    stars: 5,
    avatar: "RK",
    avatarColor: "#1E3A8A",
  },
  {
    quote:
      "Staff roster management used to take our admin team half a day every week. Now it takes 20 minutes. The automation is accurate and the WhatsApp notifications for schedule changes are something our staff actually love.",
    author: "Anita Verma",
    role: "Hospital Administrator",
    org: "Diagnostic & Wellness Centre, Jharkhand",
    stars: 5,
    avatar: "AV",
    avatarColor: "#7C3AED",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: "6rem 0", background: "var(--bg-alt)" }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="section-label fade-up">Client Testimonials</div>
          <h2 className="section-heading fade-up delay-100">
            What Healthcare Administrators{" "}
            <span className="gradient-text">Say About PihNexa</span>
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            Real feedback from hospital administrators and clinic owners who have deployed our systems
            in live healthcare environments.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card fade-up delay-${(i + 1) * 100}`}
            >
              <div className="testimonial-stars" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <i key={j} className="fa-solid fa-star" aria-hidden="true" />
                ))}
              </div>
              <blockquote>
                <p className="testimonial-quote">"{t.quote}"</p>
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-full)",
                    background: t.avatarColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-display)",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-role">{t.role} · {t.org}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div
          className="text-center fade-up"
          style={{ marginTop: "3rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              padding: "2rem 2.5rem",
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {[1,2,3,4,5].map((s) => (
                <i key={s} className="fa-solid fa-star" style={{ color: "#F59E0B", fontSize: "1.2rem" }} />
              ))}
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>
              Worked with PihNexa? Share your experience on Google.
            </p>
            <a
              href="https://www.google.com/search?q=PihNexa+Technologies+review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <i className="fa-brands fa-google" style={{ color: "#4285F4" }} />
              Write a Google Review
            </a>
            <p style={{ fontSize: "0.75rem", color: "var(--text-light)", margin: 0 }}>
              Your review helps other hospitals and clinics find us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
