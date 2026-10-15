import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getSampleProject, sampleProjects } from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sampleProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getSampleProject(slug);

  if (!project) return { title: "Project not found" };

  const title = `${project.title} | Sample Concept`;
  const description = `${project.summary} Hypothetical sample; no client engagement or verified results are claimed.`;

  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title, description, url: `/work/${project.slug}`, type: "article", images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getSampleProject(slug);

  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="case-study-page">
        <section className="section-block">
          <div className="container">
            <Link className="text-link" href="/#work">← Back to selected work</Link>
            <div className="page-heading">
              <p className="sample-label">Sample concept · Hypothetical project</p>
              <p className="intro-line">{project.category}</p>
              <h1>{project.title}</h1>
              <p>{project.summary}</p>
            </div>
            <aside className="case-study-meta" aria-label="Project disclosure">
              <p>
                This sample explains how I could approach a business challenge. It is not a completed
                client engagement. No client, implementation, or verified outcome is claimed.
              </p>
              <p>Technologies below are illustrative options; the final choice would follow discovery.</p>
            </aside>
          </div>
        </section>

        <article className="section-block" aria-label="Sample case study">
          <div className="container case-study-body">
            <section aria-labelledby="business-problem">
              <h2 id="business-problem">The business problem</h2>
              <p>{project.problem}</p>
            </section>

            <section aria-labelledby="role-contribution">
              <h2 id="role-contribution">The proposed role</h2>
              <p>{project.role}</p>
            </section>

            <section aria-labelledby="solution-approach">
              <h2 id="solution-approach">A practical solution</h2>
              <ol>{project.solution.map((step) => <li key={step}>{step}</li>)}</ol>
            </section>

            <section aria-labelledby="suggested-technologies">
              <h2 id="suggested-technologies">Tools to consider</h2>
              <ul className="case-study-meta" aria-label="Illustrative technologies">
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </section>

            <section aria-labelledby="screenshots-demo">
              <h2 id="screenshots-demo">Screenshots & demo</h2>
              {project.screenshots?.length ? project.screenshots.map((screenshot) => (
                <figure key={screenshot.src}>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={screenshot.width}
                    height={screenshot.height}
                    sizes="(max-width: 760px) 100vw, 900px"
                  />
                  {screenshot.caption ? <figcaption>{screenshot.caption}</figcaption> : null}
                </figure>
              )) : <p>No screenshots or live demo are attached to this sample concept.</p>}
              {project.liveUrl || project.repositoryUrl ? (
                <div className="button-row">
                  {project.liveUrl ? <a className="button secondary-button" href={project.liveUrl} target="_blank" rel="noopener noreferrer">View live project ↗</a> : null}
                  {project.repositoryUrl ? <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View repository ↗</a> : null}
                </div>
              ) : null}
            </section>

            <section aria-labelledby="project-outcomes">
              <h2 id="project-outcomes">Outcomes awaiting verification</h2>
              {project.outcomes.map((outcome) => <p key={outcome}>{outcome}</p>)}
            </section>

            <section aria-labelledby="project-discussion">
              <h2 id="project-discussion">Working through a similar challenge?</h2>
              <p>Tell me about your business, the current process, and what a useful result would look like.</p>
              <Link className="button primary-button" href="/#contact">Discuss your project <span aria-hidden="true">↗</span></Link>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
