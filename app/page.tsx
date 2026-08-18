import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  location,
  projectInquiryHref,
  services,
  workHighlights,
} from "@/lib/portfolio";

type WorkIconName = "business-systems" | "network-operations" | "site-infrastructure" | "web-applications";

function WorkIcon({ name }: { name: WorkIconName }) {
  if (name === "network-operations") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M6 17h12M12 7v10M5 7h14v6H5z" />
      </svg>
    );
  }

  if (name === "site-infrastructure") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M5 8h10v8H5zM15 10l4-2v8l-4-2M8 19h8" />
      </svg>
    );
  }

  if (name === "web-applications") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6h16v12H4zM8 10l-2 2 2 2M16 10l2 2-2 2M10 15l4-6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 7h14M5 12h14M5 17h14M8 5v14M16 5v14" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="intro-line">IT Business Solutions - {location}</p>
              <h1>Practical IT business solutions for growing teams and daily operations.</h1>
              <p className="hero-text">
                I help businesses plan, support, and improve the technology behind their operations, from managed IT
                and user support to business systems, infrastructure, cloud tools, integrations, and workflow
                automation.
              </p>
              <p className="availability">
                I can support operations, coordinate vendors, document systems, and build improvements across remote
                and onsite environments.
              </p>
              <div className="button-row">
                <a className="button primary-button" href={projectInquiryHref}>
                  Request IT Support
                </a>
                <a className="button secondary-button" href="#services">
                  Explore Services
                </a>
              </div>
            </div>

            <aside className="home-service-panel" aria-label="Business IT solution coverage">
              <h2>What the business gets</h2>
              <ul>
                <li>Managed support for daily IT operations</li>
                <li>Reliable setup for users, devices, accounts, and access</li>
                <li>Infrastructure support for offices, branches, and remote teams</li>
                <li>Business systems that connect tools, workflows, and reporting</li>
                <li>Clear documentation, vendor coordination, and ongoing improvements</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-block" id="services">
          <div className="container">
            <div className="section-header">
              <h2>Service areas behind the business solution.</h2>
              <p>
                Each engagement can focus on one area or combine several: managed support, infrastructure, site
                technology, software, systems integration, automation, cloud deployment, and documentation.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.result}</p>
                  <ul>
                    {service.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block dark-section" id="work">
          <div className="container">
            <div className="section-header">
              <h2>Work highlights.</h2>
              <p>
                A compact view of experience-backed project areas. Full case-study notes are kept on the Work page,
                with screenshots and client names added only when they can be shared publicly.
              </p>
            </div>

            <div className="work-grid">
              {workHighlights.map((work) => (
                <article className="work-teaser-card" key={work.title}>
                  <div className="work-icon">
                    <WorkIcon name={work.slug as WorkIconName} />
                  </div>
                  <p>{work.label}</p>
                  <h3>{work.title}</h3>
                  <span>{work.summary}</span>
                  <a href={`/work#${work.slug}`}>View case study</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="container two-column">
            <div className="section-header compact-header">
              <h2>How I approach IT projects.</h2>
              <p>
                I start by understanding the business process, the users, the current tools, the site conditions, and
                the failure points. Then I decide whether the right solution should be supported, configured,
                integrated, automated, secured, or built.
              </p>
            </div>
            <ol className="process-steps">
              <li>Assess the workflow, site, users, servers, systems, risks, and dependencies.</li>
              <li>Plan the support model with requirements, cost, security, and maintainability in mind.</li>
              <li>Build or configure the system, network, automation, app, or infrastructure.</li>
              <li>Test connectivity, permissions, data flow, backups, access, and user handoff.</li>
              <li>Document the setup so the business can operate, support, and improve it properly.</li>
            </ol>
          </div>
        </section>

        <section className="section-block cta-section" id="contact">
          <div className="container final-contact">
            <h2>Need an IT business solution that supports operations, systems, or growth?</h2>
            <p>
              Tell me what is happening, who or where it affects, and what fixed should look like for the business. I
              will respond with a clear path for scoping support, implementation, or project work.
            </p>
            <div className="button-row">
              <a className="button primary-button" href={projectInquiryHref}>
                Request IT Support
              </a>
              <a className="button secondary-button" href="/about">
                View Experience
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
