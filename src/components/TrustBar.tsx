export default function TrustBar() {
  const items = [
    { icon: "fa-circle-check", text: "Smart Queue Management" },
    { icon: "fa-file-medical", text: "7,500+ Patient Checklists Processed" },
    { icon: "fa-shield-halved", text: "Zero Downtime in Production" },
    { icon: "fa-hospital-user", text: "Trusted by Hospitals & Clinics" },
    { icon: "fa-mobile-screen", text: "WhatsApp Automation" },
    { icon: "fa-fingerprint", text: "Digital Attendance Systems" },
    { icon: "fa-calendar-check", text: "Staff Roster Automation" },
    { icon: "fa-chart-line", text: "Real-Time OPD Dashboards" },
    { icon: "fa-flag", text: "Built for Indian Healthcare" },
  ];
  const doubled = [...items, ...items];

  return (
    <div className="trust-bar-wrap" aria-label="Trust signals and key metrics">
      <div className="marquee-container">
        <div className="marquee-content" aria-hidden="true">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item">
              <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
