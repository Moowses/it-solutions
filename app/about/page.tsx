import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  certificationItems,
  educationItems,
  expertiseGroups,
  freelanceWork,
  location,
  ownerName,
  resumeHref,
  resumeRequestHref,
  timelineItems,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Karl Mosses Banlasan: IT leadership, systems administration, NOC operations, full-stack development, infrastructure, automation, and technical training.",
  alternates: {
    canonical: "/about",
  },
};

const resumeLabel = resumeHref ? "Download Resume" : "Request Resume";
const resumeLink = resumeHref ?? resumeRequestHref;

const profileFacts = [
  "Current IT Manager for a remote business operation",
  "Former NOC Engineer and Network Support Engineer",
  "Experience across systems, networks, cloud, web apps, and automation",
];

const leadershipItems = [
  "Understand the business process before proposing technology",
  "Listen to stakeholders and users",
  "Identify operational inefficiencies",
  "Compare solutions based on cost, risk, scalability, and maintainability",
  "Coordinate teams and vendors",
  "Track implementation through clear tasks, priorities, documentation, and updates",
  "Support users through technical change",
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="about-hero">
          <div className="container about-grid">
            <div>
              <p className="intro-line">{ownerName} - {location}</p>
              <h1>I connect technology, people, and business operations.</h1>
            </div>
            <p>
              My background spans IT leadership, systems administration, NOC operations, full-stack development,
              infrastructure, and automation. This allows me to approach technical problems from both the operational
              and business perspective.
            </p>
          </div>
        </section>

        <section className="section-block">
          <div className="container two-column">
            <div className="section-header compact-header">
              <h2>Professional story.</h2>
              <p>A career shaped by network operations, development, and IT leadership.</p>
              <ul className="profile-facts">
                {profileFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
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
              <a
                className="button primary-button"
                href={resumeLink}
                download={resumeHref ? "Karl Mosses Banlasan Resume.pdf" : undefined}
              >
                {resumeLabel}
              </a>
            </div>
          </div>
        </section>

        <section className="section-block muted-section">
          <div className="container">
            <div className="section-header">
              <h2>Leadership approach.</h2>
              <p>
                My management style starts with the operation itself: what people are trying to do, where handoffs
                break, what risk exists, and what a maintainable system should look like after launch.
              </p>
            </div>
            <ul className="approach-list">
              {leadershipItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <div className="section-header">
              <h2>Expertise matrix.</h2>
              <p>The tools and platforms I work with, grouped by area.</p>
            </div>
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
          </div>
        </section>

        <section className="section-block dark-section">
          <div className="container">
            <div className="section-header">
              <h2>Career timeline.</h2>
              <p>
                My progression through technical support, development, IT management, and training.
              </p>
            </div>
            <div className="timeline">
              {timelineItems.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <span>{item.summary}</span>
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

        <section className="section-block">
          <div className="container two-column">
            <div className="section-header compact-header">
              <h2>Licenses and certifications.</h2>
              <p>Network security, cloud security, technical support, and training credentials.</p>
            </div>
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
                    <p className="credential-id">Credential ID {credential.credentialId}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block muted-section">
          <div className="container two-column">
            <div className="section-header compact-header">
              <h2>Education.</h2>
              <p>Formal study across IT, computer science, and business/accounting foundations.</p>
            </div>
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
