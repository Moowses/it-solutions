import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  certificationItems,
  currentRole,
  educationItems,
  expertiseGroups,
  freelanceWork,
  ownerName,
  resumeHref,
  resumeRequestHref,
  timelineItems,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  openGraph: { title: "About Karl Mosses", url: "/about", images: ["/opengraph-image"] },
  description:
    "Karl Mosses Banlasan, IT Head at RSB Jathnier in Davao City, connecting business needs with practical digital transformation, development, and IT solutions.",
  alternates: {
    canonical: "/about",
  },
};

const resumeLabel = resumeHref ? "Download Resume" : "Request Resume";
const resumeLink = resumeHref ?? resumeRequestHref;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="about-page">
        <section className="about-hero">
          <div className="container about-grid">
            <div>
              <p className="intro-line">About Karl Mosses</p>
              <h1>Technology, with your business in mind.</h1>
              <p>
                I&apos;m {ownerName}, {currentRole.title} at {currentRole.company} in Davao City.
                I focus on practical digital transformation: connecting systems, improving workflows,
                and helping teams work better.
              </p>
              <p className="intro-line">{currentRole.focus} · Development · IT Solutions</p>
              <a
                className="button primary-button"
                href={resumeLink}
                download={resumeHref ? "Karl Mosses Banlasan Resume.pdf" : undefined}
              >
                {resumeLabel} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <figure className="about-portrait">
              <Image
                src="/images/karl-mosses-portrait.webp"
                alt="Karl Mosses Banlasan"
                width={960}
                height={1200}
                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 40vw, 440px"
                preload
              />
            </figure>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <div className="section-header compact-header">
              <p className="intro-line">My approach</p>
              <h2>Understand the business. Make the technology useful.</h2>
              <p>
                I start by listening to the people doing the work. Then I plan a practical solution,
                communicate clearly, and build something the team can maintain long after launch.
              </p>
            </div>
            <ul className="approach-list">
              <li>Clear priorities and honest communication.</li>
              <li>Reliable delivery, documentation, and handover.</li>
              <li>Maintainable systems with lasting operational value.</li>
            </ul>
          </div>
        </section>

        <section className="section-block muted-section" aria-labelledby="experience-heading">
          <div className="container">
            <div className="section-header">
              <p className="intro-line">Experience</p>
              <h2 id="experience-heading">From technical support to IT leadership.</h2>
            </div>
            <div className="timeline">
              {timelineItems.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
            <article className="freelance-card">
              <p>{freelanceWork.period}</p>
              <h3>{freelanceWork.title}</h3>
              <span>{freelanceWork.summary}</span>
            </article>
          </div>
        </section>

        <section className="section-block" aria-labelledby="background-heading">
          <div className="container">
            <div className="section-header compact-header">
              <p className="intro-line">A little more background</p>
              <h2 id="background-heading">The experience behind the work.</h2>
              <p>Explore my story, technical experience, and credentials.</p>
            </div>
            <details className="about-disclosure">
              <summary>Professional story</summary>
              <div className="text-panel">
              <p>
                My range of skills comes from working where technology meets day-to-day operations.
                At ViewQwest, I progressed from Network Support Engineer to NOC Engineer, troubleshooting
                connectivity, monitoring services, and coordinating incidents with clients, carriers,
                field technicians, and vendors. That experience taught me to think beyond a single
                device or application and understand how an entire service depends on its parts.
              </p>
              <p>
                In August 2022, I began part-time web development work for Cottage Dream Vacations
                alongside my ViewQwest role. Websites grew into booking applications, dashboards,
                loyalty tools, and integrations connecting CRM, marketing, payments, and internal
                systems. Development gave me another way to solve operational problems: build the
                missing connection or simplify a task people repeat every day.
              </p>
              <p>
                My promotion to IT Manager in October 2024 expanded that responsibility to infrastructure,
                access, deployments, support priorities, budgets, and vendor coordination. I work with
                leadership and different departments to understand their requirements, agree on priorities,
                and deliver technology that supports the company&apos;s goals.
              </p>
              <p>
                I look for ways to reduce repetitive work and unnecessary costs while protecting
                reliability, security, and the quality of the result. Sometimes that means automation;
                sometimes it means improving an existing system or choosing a more suitable service.
                The aim is to give teams dependable tools and more time to serve customers and grow
                the business.
              </p>
              <p>
                Freelance infrastructure and software projects keep that work hands-on. Since January
                2026, I have also taught Computer Systems Servicing part-time at Damla Training
                Institute of Technology, Inc., helping learners turn technical concepts into practical
                troubleshooting and support skills.
              </p>
              </div>
              <div className="expertise-grid">
                {timelineItems.map((item) => (
                  <article className="expertise-card" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </article>
                ))}
              </div>
            </details>

            <details className="about-disclosure">
              <summary>Technical expertise</summary>
            <div className="expertise-grid">
              {expertiseGroups.map((group) => (
                <article className="expertise-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            </details>

            <details className="about-disclosure">
              <summary>Licenses & certifications</summary>
            <div className="certification-grid">
              {certificationItems.map((credential) => (
                <article className="credential-card" key={`${credential.issuer}-${credential.title}`}>
                  <div className={`logo-mark ${credential.logoClass}`} aria-hidden="true">
                    {credential.issuerMark}
                  </div>
                  <div>
                    <p className="credential-issuer">{credential.issuer}</p>
                    <h3>{credential.title}</h3>
                    <p className="credential-meta">{credential.date}</p>
                    {credential.credentialId !== "Professional credential" ? <p className="credential-id">Credential ID {credential.credentialId}</p> : null}
                  </div>
                </article>
              ))}
            </div>
            </details>

            <details className="about-disclosure">
              <summary>Education</summary>
            <div className="education-list">
              {educationItems.map((item) => (
                <article className="education-card" key={`${item.school}-${item.degree}`}>
                  <div className={`logo-mark ${item.logoClass}`} aria-hidden="true">
                    {item.schoolMark}
                  </div>
                  <div>
                    <p className="credential-issuer">{item.school}</p>
                    <h3>{item.degree}</h3>
                    <p className="credential-meta">{item.period}</p>
                    <p className="education-note">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
            </details>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
