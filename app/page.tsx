export default function HomePage() {
  return (
    <main>
      <section className="section hero" id="top">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-copy">
              <span className="label-chip">Business IT Solutions</span>
              <h1 className="hero-title">Build dependable systems for business operations</h1>
              <p className="hero-subhead">
                I help teams improve operations with practical systems, automation, and security solutions
                that support day to day delivery and long term stability.
              </p>

              <div className="button-row">
                <a href="#engagement" className="btn-primary">
                  Request an IT consult
                </a>
                <a href="#how-i-help" className="btn-secondary">
                  See services
                </a>
              </div>
            </div>

            <aside className="surface-card hero-panel" aria-label="Delivery snapshot">
              <p className="card-kicker">Delivery snapshot</p>
              <p className="hero-panel-metric">Multiple production releases shipped</p>
              <p className="hero-panel-copy">
                Capabilities are scoped to each project and aligned to business priorities.
              </p>
              <div className="hero-panel-list">
                <p>Stack: chosen per project needs (web, cloud, automation, security)</p>
                <p>Cadence: weekly progress updates</p>
                <p>Coverage: US, SG, APAC, MY</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-compact" aria-label="Signals">
        <div className="container">
          <ul className="panel-block signal-strip">
            <li>3-6 month delivery windows</li>
            <li>Multiple production releases shipped</li>
            <li>Stack: tailored to requirements</li>
            <li>Coverage: US, SG, APAC, MY</li>
            <li>Measurable reductions in manual handling</li>
          </ul>
        </div>
      </section>

      <section className="section" id="how-i-help">
        <div className="container">
          <div className="panel-block">
            <span className="label-chip">How I help</span>
            <h2 className="section-title">Business IT services for operations and growth</h2>
            <p className="section-intro">
              Clear service areas designed for business teams that need practical implementation.
            </p>

            <div className="card-grid cols-3">
              <article className="surface-card">
                <h3 className="card-title">Customized Website, App and Mobile Systems</h3>
                <p className="card-summary">Deliver systems that improve service delivery and internal visibility.</p>
                <ul className="card-list">
                  <li>Websites, portals, and internal tools</li>
                  <li>Booking systems and operational dashboards</li>
                  <li>Business workflow apps for web and mobile</li>
                </ul>
              </article>

              <article className="surface-card">
                <h3 className="card-title">CRM and Automation Management</h3>
                <p className="card-summary">Reduce manual coordination and improve lead and client follow through.</p>
                <ul className="card-list">
                  <li>Pipelines, forms, and lead routing</li>
                  <li>Email and SMS workflow setup</li>
                  <li>Zapier, Make, and GHL integrations</li>
                </ul>
              </article>

              <article className="surface-card">
                <h3 className="card-title">Security, VPN and Storage Solutions</h3>
                <p className="card-summary">Protect access, data, and continuity with practical security controls.</p>
                <ul className="card-list">
                  <li>VPN setup and secure access control</li>
                  <li>Backups, cloud storage, and retention</li>
                  <li>Hardening basics and monitoring</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="outcomes">
        <div className="container">
          <div className="panel-block">
            <span className="label-chip">Example engagements</span>
            <h2 className="section-title">Recent solution outcomes across core service areas</h2>
            <p className="section-intro">
              Examples below show the type of work delivered for operations, automation, and security.
            </p>

            <div className="card-grid cols-3">
              <article className="surface-card">
                <h3 className="card-title">Systems build engagement</h3>
                <dl className="case-grid">
                  <div>
                    <dt>Problem</dt>
                    <dd>Client operations depended on scattered tools and manual booking updates.</dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>Delivered a centralized web portal with booking, status tracking, and reporting.</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd className="outcome">Improved service coordination and faster response across teams.</dd>
                  </div>
                </dl>
              </article>

              <article className="surface-card">
                <h3 className="card-title">CRM automation engagement</h3>
                <dl className="case-grid">
                  <div>
                    <dt>Problem</dt>
                    <dd>Lead intake and follow up were inconsistent across marketing and sales handoff.</dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>Configured CRM pipelines, form routing, and automated email and SMS sequences.</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd className="outcome">Manual follow up effort decreased and response consistency improved.</dd>
                  </div>
                </dl>
              </article>

              <article className="surface-card">
                <h3 className="card-title">Security and storage engagement</h3>
                <dl className="case-grid">
                  <div>
                    <dt>Problem</dt>
                    <dd>Remote access and backup controls were inconsistent across business locations.</dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>Set up secure VPN access, backup routines, and storage governance baselines.</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd className="outcome">Access reliability improved with clearer protection and recovery processes.</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="engagement">
        <div className="container">
          <div className="panel-block final-cta">
            <span className="label-chip">Engagement options</span>
            <h2 className="section-title">Choose the model that matches your timeline</h2>
            <p className="section-intro">Both options are scoped around business outcomes and clear delivery steps.</p>

            <div className="card-grid cols-2">
              <article className="surface-card">
                <h3 className="card-title">Project build</h3>
                <p className="card-kicker">What is included</p>
                <ul className="card-list">
                  <li>Scope definition and implementation plan</li>
                  <li>Build, integration, and rollout support</li>
                  <li>Handover documentation for operations</li>
                </ul>
                <p className="card-kicker">What success looks like</p>
                <p className="card-summary">A working solution with clear ownership and stable operating flow.</p>
              </article>

              <article className="surface-card">
                <h3 className="card-title">Monthly support</h3>
                <p className="card-kicker">What is included</p>
                <ul className="card-list">
                  <li>Ongoing improvements and maintenance</li>
                  <li>Automation tuning, security checks, and fixes</li>
                  <li>Priority planning with weekly progress tracking</li>
                </ul>
                <p className="card-kicker">What success looks like</p>
                <p className="card-summary">Steady performance and reduced operational friction over time.</p>
              </article>
            </div>

            <div className="button-row">
              <a href="mailto:info@karlmosses.com?subject=Business%20IT%20Consult" className="btn-primary">
                Get a solution plan
              </a>
              <a href="#outcomes" className="btn-secondary">
                View outcomes
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container site-footer-inner">
          <p>&copy; {new Date().getFullYear()} Karl Mosses</p>
          <p>Built for performance</p>
        </div>
      </footer>
    </main>
  );
}
