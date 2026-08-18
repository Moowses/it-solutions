import Link from "next/link";
import type { ReactNode } from "react";

type HeroAction = {
  label: string;
  href: string;
};

type HeroProofPoint = {
  value: string;
  label: string;
};

type HeroSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  proofPoints?: HeroProofPoint[];
};

const defaultProofPoints: HeroProofPoint[] = [
  { value: "IT", label: "Operations support" },
  { value: "Web", label: "Business systems" },
  { value: "AI", label: "Workflow enablement" },
];

export function HeroSection({
  eyebrow = "IT business solutions",
  title = "Practical technology support for growing business operations.",
  description = "I help teams keep their systems stable, their workflows organized, and their digital tools moving through managed IT support, infrastructure work, automation, and modern web development.",
  primaryAction = { label: "Discuss a project", href: "/#contact" },
  secondaryAction = { label: "View services", href: "/#services" },
  proofPoints = defaultProofPoints,
}: HeroSectionProps) {
  return (
    <section className="bg-white text-gray-950">
      <div className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
        <header className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-gray-600">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-semibold tracking-normal text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            {description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink intent="primary" href={primaryAction.href}>
              {primaryAction.label}
            </ActionLink>
            <ActionLink intent="secondary" href={secondaryAction.href}>
              {secondaryAction.label}
            </ActionLink>
          </div>
        </header>

        <aside
          className="rounded-lg border border-gray-200 bg-gray-950 p-5 text-white shadow-2xl shadow-gray-950/15"
          aria-label="Service summary"
        >
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {proofPoints.map((point) => (
              <article
                key={point.label}
                className="rounded-md border border-white/10 bg-white/[0.05] p-5"
              >
                <p className="text-3xl font-semibold tracking-normal">
                  {point.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  {point.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-md border border-white/10 bg-white p-5 text-gray-950">
            <p className="text-sm font-semibold uppercase text-gray-600">
              Delivery focus
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-normal">
              Reliable support, clean systems, useful business tools.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ActionLink({
  href,
  intent,
  children,
}: {
  href: string;
  intent: "primary" | "secondary";
  children: ReactNode;
}) {
  const className =
    intent === "primary"
      ? "bg-gray-950 text-white hover:bg-gray-800 focus-visible:ring-gray-950"
      : "border border-gray-300 bg-white text-gray-950 hover:border-gray-950 hover:bg-gray-50 focus-visible:ring-gray-950";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold motion-safe:transition motion-safe:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
}
