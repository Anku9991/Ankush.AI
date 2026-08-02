const securityItems = [
  {
    icon: "fa-lock",
    title: "End-to-End HTTPS Encryption",
    desc: "All data transmitted between clients and our servers is encrypted using TLS 1.3. No patient data travels over unsecured connections.",
  },
  {
    icon: "fa-users-gear",
    title: "Role-Based Access Control (RBAC)",
    desc: "Granular permissions for doctors, nurses, receptionists, and administrators. Each role sees only what they need to see.",
  },
  {
    icon: "fa-file-shield",
    title: "Audit Logs & Compliance Trails",
    desc: "Every action in the system is logged with a timestamp and user identity — enabling full traceability for compliance reviews.",
  },
  {
    icon: "fa-database",
    title: "Secure & Redundant Data Storage",
    desc: "Patient and operational data is stored on enterprise-grade cloud infrastructure with automated backups and redundancy.",
  },
  {
    icon: "fa-key",
    title: "Secure Authentication",
    desc: "OTP-based login, session expiry management, and brute-force protection are standard on all our healthcare systems.",
  },
  {
    icon: "fa-arrow-up-right-dots",
    title: "Regular Security Updates",
    desc: "We actively monitor, patch, and update all deployed systems to address vulnerabilities before they become risks.",
  },
];

export default function SecuritySection() {
  return (
    <section
      id="security"
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
            Security &amp; Compliance
          </div>
          <h2
            className="section-heading section-heading-white fade-up delay-100"
          >
            Patient Data Security Is{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2DD4BF, #6389D5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Non-Negotiable
            </span>
          </h2>
          <p className="section-subheading section-subheading-white mx-auto fade-up delay-200">
            Every system we build is architected with security from the ground up — not bolted on as an
            afterthought. Hospital administrators can trust that their data is protected.
          </p>
        </div>

        <div className="security-grid">
          {securityItems.map((item, i) => (
            <div
              key={i}
              className={`security-item fade-up delay-${Math.min((i % 3) * 100 + 100, 400)}`}
            >
              <div className="security-icon" aria-hidden="true">
                <i className={`fa-solid ${item.icon}`} />
              </div>
              <div>
                <div className="security-title">{item.title}</div>
                <p className="security-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
