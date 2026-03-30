export function Hero() {
  return (
    <section className="section hero" id="top">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="label-chip">Technical Consulting</span>
            <h1 className="hero-title">Engineer systems that remove operational bottlenecks</h1>
            <p className="hero-subhead">
              I partner with teams that need dependable software delivery, robust integrations,
              and measurable reliability improvements without adding operational drag.
            </p>

            <div className="button-row">
              <a href="#engagement" className="btn-primary">
                Book a project call
              </a>
              <a href="#case-studies" className="btn-secondary">
                See recent outcomes
              </a>
            </div>
          </div>

          <aside className="surface-card hero-panel" aria-label="Delivery snapshot">
            <p className="card-kicker">Delivery snapshot</p>
            <p className="hero-panel-metric">30+ releases shipped</p>
            <p className="hero-panel-copy">
              Hands-on implementation across product, operations, and support workflows.
            </p>
            <div className="hero-panel-list">
              <p>Stack: Next.js, Node.js, TypeScript, Postgres</p>
              <p>Cadence: Async updates in one business day</p>
              <p>Coverage: US, EU, APAC stakeholders</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
