const problems = [
  {
    icon: "fa-clock",
    title: "Uncontrolled Patient Waiting Times",
    description:
      "OPD queues managed with paper tokens and manual calling lead to patient frustration, crowded waiting areas, and inefficient doctor utilization.",
    solution: "Smart Queue Management eliminates this",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.18)",
  },
  {
    icon: "fa-calendar-xmark",
    title: "Manual Roster & Attendance Chaos",
    description:
      "Spreadsheets and WhatsApp groups for shift scheduling cause errors, under-staffing, and hours of administrative work every week.",
    solution: "Staff Roster Automation solves this",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.18)",
  },
  {
    icon: "fa-file-circle-exclamation",
    title: "Paper-Based Patient Checklists",
    description:
      "Handwritten pre-op checklists are lost, illegible, or inconsistent — creating compliance risks and slowing down clinical workflows.",
    solution: "Patient Checklist Tracker solves this",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.18)",
  },
  {
    icon: "fa-eye-slash",
    title: "No Real-Time Operational Visibility",
    description:
      "Without dashboards, hospital administrators cannot see live patient counts, staff coverage gaps, or department-wise metrics in real time.",
    solution: "Custom Hospital Dashboards solve this",
    color: "#0B1B3E",
    bg: "rgba(11,27,62,0.06)",
    border: "rgba(11,27,62,0.14)",
  },
];

export default function ProblemsSection() {
  return (
    <section id="problems" style={{ padding: "6rem 0", background: "var(--bg-alt)" }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="section-label fade-up">Common Pain Points We Solve</div>
          <h2 className="section-heading fade-up delay-100">
            The Operational Challenges Costing Hospitals Every Day
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            Every manual process in a hospital is a risk — to patient experience, staff efficiency, and
            administrative control. PihNexa replaces them with intelligent, connected systems.
          </p>
        </div>

        <div className="problems-grid" style={{ marginTop: "3.5rem" }}>
          {problems.map((p, i) => (
            <div key={i} className={`problem-card fade-up delay-${(i + 1) * 100}`}>
              <div
                className="problem-icon"
                style={{
                  background: p.bg,
                  borderColor: p.border,
                  color: p.color,
                }}
                aria-hidden="true"
              >
                <i className={`fa-solid ${p.icon}`} />
              </div>
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-desc">{p.description}</p>
              <div className="problem-arrow">
                <i className="fa-solid fa-arrow-right" style={{ fontSize: "0.75rem" }} />
                {p.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
