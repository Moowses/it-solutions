import type { Metadata } from "next";
import { ProjectScreenshots } from "@/components/ProjectScreenshots";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  automationHighlights,
  developmentProjects,
  developmentSkillGroups,
  infrastructureServiceAreas,
  projectInquiryHref,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio of websites, web apps, AI assistants, automation workflows, RSVP digital invitations, WordPress, WooCommerce, and business systems by Karl Mosses Banlasan.",
  keywords: [
    "website development portfolio",
    "web app development Philippines",
    "Next.js developer Philippines",
    "WordPress developer",
    "WooCommerce developer",
    "RSVP website",
    "digital invitation system",
    "AI chatbot integration",
    "business automation",
    "IT business solutions",
  ],
  alternates: {
    canonical: "/portfolio",
  },
};

type DevelopmentProject = (typeof developmentProjects)[number];

function getProjectImage(project: DevelopmentProject) {
  return "image" in project ? project.image : undefined;
}

function getProjectUrl(project: DevelopmentProject) {
  return "url" in project ? project.url : undefined;
}

function getProjectGallery(project: DevelopmentProject) {
  return "gallery" in project ? project.gallery : [];
}

function ProjectCard({ project, featured = false }: { project: DevelopmentProject; featured?: boolean }) {
  const url = getProjectUrl(project);

  return (
    <article className={`development-project-card${featured ? " is-featured" : ""}`}>
      <ProjectScreenshots title={project.title} images={[...new Set([getProjectImage(project), ...getProjectGallery(project)].filter((image) => image !== undefined))]} priority={featured} />
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <ul className="project-detail-list">
          {project.deepDive.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="tech-chip-row" aria-label={`${project.title} technology stack`}>
          {project.stack.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>



        <div className="project-actions">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              View live site
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

const spotlightProjects = developmentProjects.filter((project) => "isSpotlight" in project && project.isSpotlight);
const cmsProjects = developmentProjects.filter((project) => !("isSpotlight" in project && project.isSpotlight));

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="development-hero">
          <div className="container development-hero-grid">
            <div>
              <p className="intro-line">Karl Mosses Banlasan / Portfolio</p>
              <h1>Web development & IT solutions.</h1>
              <p className="hero-text">
                Websites, applications, and the infrastructure behind everyday business.
                Explore my development projects and IT work across systems administration,
                network planning, on-site support, and automation.
              </p>
              <div className="button-row">
                <a className="button primary-button" href="#projects">
                  Websites & Apps
                </a>
                <a className="button secondary-button" href="#it-infrastructure">
                  IT &amp; Infrastructure
                </a>
              </div>
            </div>
            <aside className="development-hero-panel" aria-label="Portfolio focus">
              <p>Portfolio focus</p>
              <ul>
                <li>Websites, web apps, and e-commerce</li>
                <li>Systems administration and managed IT support</li>
                <li>Building network design and IT consulting</li>
                <li>Booking, enrollment, RSVP, billing, inventory, and rewards systems</li>
                <li>WordPress, WooCommerce, and custom-code implementation</li>
                <li>AI assistants for patient, member, and support workflows</li>
                <li>Automation that reduces repetitive admin checking</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="container">
            <div className="section-header">
              <h2>Web apps, AI assistance, and dashboards.</h2>
              <p>
                These are the projects that show business-system thinking: member access, booking workflows,
                enrollment, LMS operations, RSVP management, billing, inventory, AI support, and mobile reservations.
              </p>
            </div>
            <div className="development-project-grid">
              {spotlightProjects.map((project, index) => (
                <ProjectCard project={project} featured={index < 2} key={project.slug} />
              ))}

            </div>
          </div>
        </section>

        <section className="section-block dark-section">
          <div className="container">
            <div className="section-header">
              <h2>WordPress and WooCommerce builds.</h2>
              <p>
                Public-facing sites need more than a nice homepage. They need clear positioning, content structure,
                conversion paths, mobile polish, CMS maintainability, and room for campaigns to evolve.
              </p>
            </div>
            <div className="cms-project-grid">
              {cmsProjects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <div className="section-header">
              <h2>Technical skills behind the portfolio.</h2>
              <p>
                The stack is broad because the work is usually end to end: interface, content, logic, integration,
                deployment, support, and business handoff.
              </p>
            </div>
            <div className="development-skill-grid">
              {developmentSkillGroups.map((group) => (
                <article className="development-skill-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tech-chip-row">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block dark-section" id="automation">
          <div className="container">
            <div className="section-header">
              <h2>Sales, customer, and operations automation.</h2>
              <p>
                Lead capture, webinar engagement, customer follow-up, and operational handoffs.
                My projects and workflow services connect business tools through n8n, Zapier,
                GoHighLevel, and custom API integrations.
              </p>
            </div>
            <div className="automation-grid">
              {automationHighlights.map((item) => (
                <article className="automation-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <div className="tech-chip-row">
                    {item.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block muted-section" id="it-infrastructure">
          <div className="container">
            <div className="section-header">
              <h2>IT infrastructure & field services.</h2>
              <p>
                IT administration, building network planning, and hands-on implementation.
                These service areas cover the systems, connectivity, and support businesses need
                to keep their offices and sites running.
              </p>
            </div>
            <div className="infrastructure-grid">
              {infrastructureServiceAreas.map((service) => (
                <article className="infrastructure-card" key={service.title}>
                  <div
                    className="infrastructure-visual"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.22), rgba(15, 23, 42, 0.78)), url(${service.image})`,
                    }}
                    aria-hidden="true"
                  >
                    <span>{service.label}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block cta-section">
          <div className="container final-contact">
            <h2>Planning a website, an office network, or an IT upgrade?</h2>
            <p>
              Tell me what you are planning and where you need support, from a new application
              to network design, system administration, or ongoing IT operations.
            </p>
            <div className="button-row">
              <a className="button primary-button" href={projectInquiryHref}>
                Start a Project
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
