import type { Metadata } from "next";
import Image from "next/image";
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
  openGraph: { title: "Portfolio | Karl Mosses", url: "/portfolio", images: ["/opengraph-image"] },
  description:
    "Selected websites, enrollment and learning platforms, custom ERP, and business applications by Karl Mosses Banlasan.",
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
  const image = getProjectImage(project);
  const isDiagram = "previewKind" in project && project.previewKind === "diagram";

  return (
    <article id={project.slug} className={`development-project-card${featured ? " is-featured" : ""}`}>
      {isDiagram && image ? (
        <div className="project-cover">
          <Image
            className="project-cover-image"
            src={image}
            alt={`${project.title}: illustrative business workflow overview`}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      ) : (
        <ProjectScreenshots
          title={project.title}
          images={[...new Set([image, ...getProjectGallery(project)].filter((image) => image !== undefined))]}
          priority={featured}
        />
      )}
      {"previewNote" in project ? <p className="project-preview-note">{project.previewNote}</p> : null}
      <div className="project-card-content">
        <div className="project-card-meta">
          <span>{project.category}</span>
          {/demo|concept|development|in progress/i.test(project.status) ? <span>{project.status}</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <div className="tech-chip-row" aria-label={`${project.title} technology stack`}>
          {project.stack.slice(0, 3).map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>

        <div className="project-actions">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live site (opens in a new tab)`}>
              View live site <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>

        <details className="project-disclosure">
          <summary>Project details<span className="sr-only">: {project.title}</span></summary>
          <p>{project.status} · {project.platform}</p>
          <ul className="project-detail-list">
            {project.deepDive.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="intro-line">Full technology stack</p>
          <div className="tech-chip-row" aria-label={`${project.title} full technology stack`}>
            {project.stack.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </details>
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
      <main id="main-content" className="portfolio-page">
        <section className="development-hero">
          <div className="container development-hero-grid">
            <div>
              <p className="intro-line">Selected work</p>
              <h1>Ideas brought to life.</h1>
              <p className="hero-text">
                Websites, business applications, and practical IT solutions by Karl Mosses.
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
          </div>
        </section>

        <section className="section-block" id="projects">
          <div className="container">
            <div className="section-header">
              <h2>Applications & digital experiences.</h2>
              <p>Explore the projects. Open a screenshot for a closer look.</p>
            </div>
            <div className="development-project-grid">
              {spotlightProjects.map((project, index) => (
                <ProjectCard project={project} featured={index < 2} key={project.slug} />
              ))}

            </div>
          </div>
        </section>

        <section className="section-block muted-section">
          <div className="container">
            <div className="section-header">
              <h2>Websites & online stores.</h2>
              <p>WordPress and WooCommerce work across hospitality, personal brands, and commerce.</p>
            </div>
            <div className="cms-project-grid">
              {cmsProjects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-block portfolio-secondary">
          <div className="container">
            <div className="section-header">
              <h2>Behind the work.</h2>
              <p>Tools for design, development, integration, and ongoing support.</p>
            </div>
            <details className="project-disclosure">
              <summary>View tools & technologies</summary>
              <div className="development-skill-grid">
                {developmentSkillGroups.map((group) => (
                  <article className="development-skill-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="tech-chip-row">
                      {group.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="section-block portfolio-secondary" id="automation">
          <div className="container">
            <div className="section-header">
              <h2>Connected workflows.</h2>
              <p>Automation for inquiries, bookings, follow-up, and daily operations.</p>
            </div>
            <details className="project-disclosure">
              <summary>Explore automation capabilities</summary>
              <div className="automation-grid">
                {automationHighlights.map((item) => (
                  <article className="automation-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div className="tech-chip-row">
                      {item.tools.map((tool) => <span key={tool}>{tool}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="section-block muted-section portfolio-secondary" id="it-infrastructure">
          <div className="container">
            <div className="section-header">
              <h2>Reliable IT foundations.</h2>
              <p>Network planning, systems administration, and hands-on support for offices and sites.</p>
            </div>
            <details className="project-disclosure">
              <summary>Explore infrastructure services</summary>
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
                    <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="section-block cta-section">
          <div className="container final-contact">
            <h2>Have a project in mind?</h2>
            <p>Tell me what you need. We can find a practical way forward.</p>
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
