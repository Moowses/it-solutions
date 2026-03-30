const models = [
  {
    title: "Project build",
    included: [
      "Defined scope, architecture, and implementation plan",
      "Build, integration, QA, and launch support",
      "Documentation and handoff for your team",
    ],
    success: "A working system in production with clear ownership and baseline metrics.",
  },
  {
    title: "Monthly support",
    included: [
      "Ongoing improvements and release cycles",
      "Monitoring, fixes, and performance tuning",
      "Delivery reporting and priority planning",
    ],
    success: "Sustained operational improvements without adding internal delivery load.",
  },
];

export function Engagement() {
  return (
    <section className="section" id="engagement">
      <div className="container">
        <div className="panel-block">
          <span className="label-chip">Engagement options</span>
          <h2 className="section-title">Choose the model that matches your timeline</h2>
          <p className="section-intro">Both options are scoped against outcomes, not activity volume.</p>

          <div className="card-grid cols-2">
            {models.map((model) => (
              <article key={model.title} className="surface-card">
                <h3 className="card-title">{model.title}</h3>
                <p className="card-kicker">What is included</p>
                <ul className="card-list">
                  {model.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="card-kicker">What success looks like</p>
                <p className="card-summary">{model.success}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
