import Link from "next/link";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-bold tracking-wide text-lg">
            IT Business Solutions
          </Link>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white/80">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="md:hidden inline-block rounded-xl border border-white/20 px-4 py-2 text-sm"
          >
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">Discover • Design • Build • Deploy</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Build secure, automated, and scalable systems <span className="text-blue-400">for your business</span>.
          </h1>
          <p className="mt-5 text-neutral-300 max-w-2xl">
            We design and deploy custom website & app solutions, integrate CRMs with powerful automations,
            and deliver security (VPN), storage, and managed services tailored to your operations.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#services"
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold hover:bg-blue-400"
            >
              See Services
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/5"
            >
              Get a Quote..
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
        <p className="mt-2 text-neutral-300">Solutions you can mix-and-match based on your needs.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
        <ServiceCard
          title="Customized Website, App & Mobile Systems"
          points={[
            "Discovery-first architecture & roadmapping",
            "Next.js (Node.js), REST/GraphQL APIs, databases",
            "iOS/Android mobile apps (React Native/Expo or native)",
            "Static or dynamic—built for speed & SEO",
          ]}
        />

        <ServiceCard
          title="CRM & Automation Management"
          points={[
            "Set up and manage CRM pipelines (e.g., HubSpot, GHL)",
            "Automations for onboarding, sales, and support",
            "Create customized and automated webinars ",
            "Turn recorded webinars into live-like scheduled events with an AI assistant that answers audience questions",
            "Event/webinar flows, email/SMS drip campaigns",
          ]}
        />

      <ServiceCard
        title="Security, VPN & Storage Solutions"
        points={[
          "Zero-trust VPN access & role-based permissions",
          "Encrypted cloud storage, backup & retention policies",
          "Monitoring, alerts, and managed services",
          "Policy documentation & incident response playbooks",
        ]}
      />

        </div>
      </section>

      <section id="other-services" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Other Services</h2>
        <p className="mt-2 text-neutral-300">
          A broader capability set to fit your roadmap kept vendor-agnostic.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Custom Software Development</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Web apps, APIs, integrations</li>
              <li>Modular, testable codebases</li>
              <li>CI/CD and versioned releases</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Front-end & Back-end Engineering</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>React/Next.js, TypeScript</li>
              <li>Node.js services & workers</li>
              <li>Database design & optimization</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Quality & Reliability</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Automated tests & QA pipelines</li>
              <li>Observability & error tracking</li>
              <li>Performance and security reviews</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Team Augmentation</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Embedded engineers & PMs</li>
              <li>Code reviews & mentorship</li>
              <li>Delivery leadership</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Solution Architecture</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>System & data design</li>
              <li>Security & governance</li>
              <li>Scalability planning</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold">Process & Delivery</h3>
            <ul className="mt-4 space-y-2 text-neutral-300">
              <li>Agile ceremonies & roadmaps</li>
              <li>Backlog grooming & documentation</li>
              <li>Stakeholder reporting</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="case-studies" className="mx-auto max-w-6xl px-6 py-20">
  <h2 className="text-2xl md:text-3xl font-semibold">Case Studies</h2>
  <p className="mt-2 text-neutral-300">Quick wins from recent projects.</p>

  <div className="mt-10 grid md:grid-cols-3 gap-6">
    {[
      {
        logo: "/logos/retail.svg",
        title: "Retail Brand",
        problem: "Manual promos + no CRM sync → missed follow-ups.",
        solution: "Next.js site + GHL automations; email/SMS flows for cart/re-engagement.",
        outcome: "38% lift in repeat purchases in 60 days.",
      },
      {
        logo: "/logos/webinar.svg",
        title: "Education/Webinar",
        problem: "Low live attendance; recordings under-used.",
        solution: "Automated ‘live-like’ webinars + reminders; simple, focused landing pages.",
        outcome: "2.1× more show-ups; 3.4× more course trials.",
      },
      {
        logo: "/logos/saas.svg",
        title: "SaaS Ops",
        problem: "Slow onboarding; scattered support requests.",
        solution: "CRM pipeline + triage automations; in-app help + status alerts.",
        outcome: "Onboarding time down 55%; NPS +11 in 90 days.",
      },
    ].map(({ logo, title, problem, solution, outcome }) => (
      <article key={title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
        <div className="flex items-center gap-3">
          {/* Put your logos in /public/logos */}
          <img src={logo} alt={`${title} logo`} className="h-8 w-8 object-contain" />
          <h3 className="font-semibold">{title}</h3>
        </div>
        <dl className="mt-4 space-y-3 text-sm text-neutral-300">
          <div>
            <dt className="font-medium text-neutral-100">Problem</dt>
            <dd className="mt-1">{problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-neutral-100">Solution</dt>
            <dd className="mt-1">{solution}</dd>
          </div>
          <div>
            <dt className="font-medium text-neutral-100">Outcome</dt>
            <dd className="mt-1">{outcome}</dd>
          </div>
        </dl>
      </article>
    ))}
  </div>
</section>



      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Process</h2>
        <ol className="mt-8 grid md:grid-cols-4 gap-6 text-sm">
          {[
            ["1. Discover", "Clarify goals, users, success metrics."],
            ["2. Design", "Plan system, data, and automations."],
            ["3. Build", "Implement, test, secure, document."],
            ["4. Deploy", "Ship to Vercel + observability & support."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-white/10 p-5">
              <p className="font-semibold">{t}</p>
              <p className="text-neutral-300 mt-2">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-4 text-neutral-300 max-w-3xl">
          We’re a hands-on engineering partner focused on business outcomes. From lean MVPs to secure,
          automated stacks, we build systems that reduce manual work, improve reliability, and scale.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-neutral-300">
            Tell us about your project. We’ll respond within 1–2 business days.
          </p>
          <div className="mt-6">
            <a
              href="mailto:info@karlmosses.com?subject=Project%20Inquiry%20-%20IT%20Business%20Solutions"
              className="inline-block rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold hover:bg-blue-400"
            >
              info@karlmosses.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-400">
          © {new Date().getFullYear()} IT Business Solutions • karlmosses.com
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
