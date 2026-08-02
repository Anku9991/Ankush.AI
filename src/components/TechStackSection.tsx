const stack = [
  { icon: "fa-brands fa-react", name: "React / Next.js" },
  { icon: "fa-brands fa-node-js", name: "Node.js" },
  { icon: "fa-solid fa-mobile-screen", name: "Flutter" },
  { icon: "fa-brands fa-python", name: "Python / AI" },
  { icon: "fa-solid fa-fire", name: "Firebase" },
  { icon: "fa-solid fa-database", name: "PostgreSQL" },
  { icon: "fa-brands fa-aws", name: "AWS Cloud" },
  { icon: "fa-brands fa-docker", name: "Docker" },
  { icon: "fa-solid fa-code", name: "TypeScript" },
  { icon: "fa-brands fa-whatsapp", name: "WhatsApp API" },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" style={{ padding: "5rem 0", background: "var(--bg-dark)" }}>
      <div className="container">
        <div className="text-center" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className="section-label fade-up">Technology Stack</div>
          <h2 className="section-heading fade-up delay-100">
            Modern, Proven Technology for{" "}
            <span className="gradient-text">Mission-Critical Systems</span>
          </h2>
          <p className="section-subheading mx-auto fade-up delay-200">
            We build on battle-tested frameworks trusted by global enterprises — ensuring your hospital
            software is reliable, maintainable, and future-proof.
          </p>
        </div>

        <div className="tech-grid">
          {stack.map((tech, i) => (
            <div
              key={i}
              className={`tech-item fade-up delay-${Math.min((i % 5) * 100 + 100, 400)}`}
              title={tech.name}
            >
              <i className={tech.icon} aria-hidden="true" />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
