import type { Metadata } from "next";
import Image from "next/image";
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

function ProjectVisual({ project, priority = false }: { project: DevelopmentProject; priority?: boolean }) {
  const image = getProjectImage(project);

  if (image) {
    return (
      <Image
        className="project-cover-image"
        src={image}
        alt={`${project.title} portfolio preview`}
        fill
        priority={priority}
        quality={priority ? 76 : 70}
        sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 33vw"
      />
    );
  }

  return (
    <div className={`project-visual project-visual-${project.theme}`} aria-hidden="true">
      <div className="project-browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-visual-body">
        <div>
          <p>{project.category}</p>
          <strong>{project.title}</strong>
          <span>{project.platform}</span>
        </div>
        <div className="project-visual-panel">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

function ProjectGallery({ project }: { project: DevelopmentProject }) {
  const gallery = getProjectGallery(project);

  if (!gallery.length) {
    return null;
  }

  return (
    <div className="project-gallery-strip" aria-label={`${project.title} supporting screenshots`}>
      {gallery.map((image, index) => (
        <div className="project-gallery-thumb" key={image}>
          <Image
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            fill
            quality={58}
            sizes="(max-width: 760px) 38vw, 150px"
          />
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: DevelopmentProject; featured?: boolean }) {
  const url = getProjectUrl(project);

  return (
    <article className={`development-project-card${featured ? " is-featured" : ""}`}>
      <div className="project-cover">
        <ProjectVisual project={project} priority={featured} />
      </div>
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

        <ProjectGallery project={project} />

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

function MoreWorkCard() {
  return (
    <article className="more-work-card">
      <div className="more-work-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M5 12h13M13 6l6 6-6 6" />
        </svg>
      </div>
      <p>More work is available beyond the public screenshots.</p>
      <h3>Private dashboards, automation flows, internal tools, and operational systems can be walked through when appropriate.</h3>
      <a href="#automation">View automation work</a>
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
              <p className="intro-line">Portfolio / Website and Business Systems</p>
              <h1>Portfolio work that turns websites into business systems.</h1>
              <p className="hero-text">
                A focused view of my website, web application, mobile, WordPress, WooCommerce, AI assistance, and
                automation work. The goal is simple: interfaces that look credible, systems that reduce manual work,
                and technology that supports real business operations.
              </p>
              <div className="button-row">
                <a className="button primary-button" href="#projects">
                  View Portfolio Work
                </a>
                <a className="button secondary-button" href={projectInquiryHref}>
                  Discuss a Project
                </a>
              </div>
            </div>
            <aside className="development-hero-panel" aria-label="Portfolio focus">
              <p>Portfolio focus</p>
              <ul>
                <li>Business websites that present services clearly</li>
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
              <MoreWorkCard />
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
              <h2>Automation work.</h2>
              <p>
                Automation is where the website becomes part of the operation: support assistants, booking workflows,
                CRM movement, email follow-up, webhooks, and admin queues that reduce manual checking.
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

        <section className="section-block muted-section">
          <div className="container">
            <div className="section-header">
              <h2>Related IT delivery services.</h2>
              <p>
                The development work connects naturally with business IT delivery: managed support, servers, CCTV,
                point-to-point connectivity, secure remote access, and smart-hands implementation.
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
            <h2>Need a website, dashboard, booking flow, or business web app?</h2>
            <p>
              Send the goal, the workflow, and the systems involved. I can help scope the interface, build the
              application, connect tools, and support the launch.
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
