import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projectInquiryHref, workHighlights } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Work highlights for Karl Mosses Banlasan: business systems, network operations, site infrastructure, and web applications.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="about-hero">
          <div className="container about-grid">
            <div>
              <p className="intro-line">Work / Portfolio</p>
              <h1>Case-study notes from IT operations, infrastructure, and business systems work.</h1>
            </div>
            <p>
              These examples are intentionally anonymized where needed. They focus on the problem, the work performed,
              and the operating result without inventing client numbers, screenshots, or testimonials.
            </p>
          </div>
        </section>

        <section className="section-block">
          <div className="container work-case-list">
            {workHighlights.map((work) => (
              <article className="work-case" id={work.slug} key={work.title}>
                <div>
                  <p>{work.label}</p>
                  <h2>{work.title}</h2>
                </div>
                <dl>
                  <div>
                    <dt>Context</dt>
                    <dd>{work.context}</dd>
                  </div>
                  <div>
                    <dt>What I did</dt>
                    <dd>{work.action}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd>{work.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block cta-section" id="contact">
          <div className="container final-contact">
            <h2>Need similar support for your business systems or IT operations?</h2>
            <p>
              Tell me what is happening, who or where it affects, and what fixed should look like for the business.
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
