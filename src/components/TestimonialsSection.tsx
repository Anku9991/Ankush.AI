const testimonials = [
  {
    quote:
      "PihNexa built the GMD Tracker for my wife during her entire pregnancy. It was incredibly reliable for tracking her sugar levels every single day. The personal care and attention to detail in the app were outstanding.",
    author: "Satyam Patel",
    role: "User",
    org: "GMD Tracker App",
    stars: 5,
    avatar: "SP",
    avatarColor: "#0D9488",
  },
  {
    quote:
      "The Patient Tracker has made our daily operations so much smoother. Our staff is very happy with how easy it is to manage patient registrations and track checklists efficiently without any lag.",
    author: "Clinic Admin",
    role: "Operations",
    org: "Patient Tracker User",
    stars: 5,
    avatar: "CA",
    avatarColor: "#1E3A8A",
  },
  {
    quote:
      "PihNexa developed the Mission English SaaS platform for us, and it has completely changed how our students learn. They can now easily take online tests and track their progress in real-time.",
    author: "Institute Director",
    role: "Founder",
    org: "Mission English SaaS",
    stars: 5,
    avatar: "ID",
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
            What Our Clients{" "}
            <span className="gradient-text">Say About PihNexa</span>
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            Real feedback from users who have experienced the impact of our custom software solutions.
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
