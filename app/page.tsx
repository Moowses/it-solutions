import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ContactForm } from "@/components/ContactForm";
import { sampleProjects } from "@/lib/case-studies";
import { contactEmail, linkedInUrl, location, services } from "@/lib/portfolio";
import { engagementSteps } from "@/lib/site-content";

export default function HomePage() {
  const contactConfigured = Boolean(process.env.RESEND_API_KEY?.trim() && process.env.CONTACT_FROM_EMAIL?.trim() && process.env.CONTACT_TO_EMAIL?.trim());

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="home-page simple-home">
        <section className="editorial-hero container" aria-labelledby="hero-heading">
          <div className="editorial-hero-copy">
            <p className="hero-identity">Karl Mosses Banlasan <span>IT Head, Developer &amp; IT Solutions Consultant</span></p>
            <h1 id="hero-heading">Technology that works for your business.</h1>
            <p className="editorial-intro">Practical IT leadership, custom software, and automation to help your business work better.</p>
            <div className="button-row">
              <Link className="button primary-button" href="#contact">Discuss Your Project <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="#work">Explore My Work <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
          <figure className="profile-portrait">
            <div className="portrait-frame">
              <Image src="/images/karl-mosses-portrait.webp" alt="Karl Mosses Banlasan in a dark suit in a modern office" fill preload sizes="(max-width: 767px) 90vw, (max-width: 1080px) 40vw, 420px" />
            </div>
            <figcaption>Karl Mosses Banlasan</figcaption>
          </figure>
        </section>

        <section className="section-block selected-work-section" id="work">
          <div className="container">
            <div className="editorial-heading"><h2>Selected work.</h2><p>Applications and websites built around everyday needs.</p></div>
            <FeaturedProjects />
            <div className="work-index-link"><Link className="text-link" href="/portfolio">View all projects <span aria-hidden="true">↗</span></Link></div>
            <details className="sample-approaches">
              <summary>Explore sample project approaches</summary>
              <p>Hypothetical examples, with no client work or verified results claimed.</p>
              <div className="sample-project-list">
                {sampleProjects.map((project) => (
                  <Link className="sample-project-link" key={project.slug} href={`/work/${project.slug}`}>
                    <div><span className="sample-label">Sample case study</span><h3>{project.title}</h3></div><span className="project-link-arrow" aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="section-block container home-services" id="services">
          <div className="editorial-heading"><h2>How I can help.</h2></div>
          <div className="service-editorial-grid">
            {services.map((service) => (
              <article className="service-editorial" key={service.title}>
                <h3>{service.title}</h3><p>{service.result}</p>
                <details className="service-disclosure"><summary aria-label={`View capabilities for ${service.title}`}>View capabilities</summary><ul>{service.capabilities.map((item) => <li key={item}>{item}</li>)}</ul></details>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block container personal-section" id="about">
          <div className="personal-title"><h2>A business perspective.<br />A builder’s mindset.</h2></div>
          <div className="personal-copy"><p>I’m Karl. I combine IT leadership with hands-on development, systems administration, and automation.</p><p>I start with your business, communicate clearly, and build solutions your team can maintain.</p><Link className="text-link" href="/about">More about me <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="section-block process-section" id="process">
          <div className="container"><div className="editorial-heading"><h2>A clear way forward.</h2></div><ol className="engagement-process">{engagementSteps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></div>
        </section>

        <section className="section-block container contact-section" id="contact">
          <div className="contact-copy"><h2>Let’s talk about your project.</h2><p>Tell me what you want to build, improve, or connect.</p><dl className="contact-details"><div><dt>Location</dt><dd>{location}<br />Available for remote collaboration</dd></div><div><dt>Email</dt><dd><a href={`mailto:${contactEmail}`}>{contactEmail}</a></dd></div><div><dt>Connect</dt><dd><a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></dd></div></dl></div>
          <ContactForm configured={contactConfigured} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
