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
              <p>From part-time web work to leading IT operations for a growing business.</p>
              <ul className="profile-facts">
                {profileFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </div>
            <div className="text-panel">
              <p>
                I started at Cottage Dream Vacations as a part-time Web Developer / Technical VA in August 2022 while
                working an evening schedule after ViewQwest. The work included websites, WordPress and WooCommerce
                solutions, booking tools, dashboards, APIs, and automation.
              </p>
              <p>
                In October 2024, that work expanded into a full-time IT Manager role covering IT operations, digital
                infrastructure, system administration, deployments, stakeholder communication, third-party vendors, and
                business-system integrations.
              </p>
              <p>
                At ViewQwest, I worked as a Network Support Engineer from July 2020 to August 2022 and was promoted to
                Network Operations Center Engineer from September 2022 to January 2025. That work covered incidents,
                monitoring, corporate connectivity, field coordination, migrations, providers, and technical escalations.
              </p>
              <p>
                I also expanded my experience through freelance CCTV, networking, VPN, point-to-point internet, and
                web-system projects. Since January 2026, I have worked part-time as a Computer Systems Servicing trainer
                at Damla Training Institute of Technology, Inc.
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
                Most recent roles first, including the real overlap between ViewQwest and part-time Cottage Dream
                Vacations work.
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
