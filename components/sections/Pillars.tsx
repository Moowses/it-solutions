const pillars = [
  {
    title: "Systems Engineering",
    summary:
      "Architecture, implementation, and hardening for the systems your team depends on daily.",
    points: ["Web and backend systems", "Data and API design", "Security and reliability baselines"],
  },
  {
    title: "Automation and Integrations",
    summary:
      "CRM workflows, event pipelines, and cross-tool integrations that remove repetitive effort.",
    points: ["Lead and support automation", "Third-party integrations", "Operational handoff design"],
  },
  {
    title: "Delivery and Optimization",
    summary:
      "Measured improvements after launch so systems stay fast, stable, and useful as demand grows.",
    points: ["Release planning and QA", "Performance tuning", "Observability and iteration loops"],
  },
];

export function Pillars() {
  return (
    <section className="section" id="how-i-help">
      <div className="container">
        <div className="panel-block">
          <span className="label-chip">How I help</span>
          <h2 className="section-title">Three focused ways I support delivery</h2>
          <p className="section-intro">
            A concise model built around implementation outcomes instead of a long menu of services.
          </p>

          <div className="card-grid cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="surface-card">
                <h3 className="card-title">{pillar.title}</h3>
                <p className="card-summary">{pillar.summary}</p>
                <ul className="card-list">
                  {pillar.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
