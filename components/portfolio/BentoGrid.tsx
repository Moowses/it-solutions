type BentoGridVariant = "light" | "dark";
type BentoGridColumns = "services" | "expertise" | "compact";
type BentoIconName =
  | "operations"
  | "server"
  | "network"
  | "security"
  | "software"
  | "automation"
  | "ai"
  | "training";

export type BentoItem = {
  title: string;
  description: string;
  eyebrow?: string;
  details?: string[];
  icon?: BentoIconName;
  className?: string;
};

type BentoGridProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items: BentoItem[];
  variant?: BentoGridVariant;
  columns?: BentoGridColumns;
  className?: string;
};

const gridColumns: Record<BentoGridColumns, string> = {
  services: "sm:grid-cols-2 lg:grid-cols-3",
  expertise: "sm:grid-cols-2 lg:grid-cols-6",
  compact: "sm:grid-cols-2 lg:grid-cols-4",
};

const variantStyles = {
  light: {
    section: "bg-white text-gray-950",
    eyebrow: "text-gray-600",
    description: "text-gray-700",
    card:
      "border-gray-200 bg-white text-gray-950 shadow-sm hover:border-gray-300 hover:shadow-lg",
    cardText: "text-gray-700",
    chip: "border-gray-200 bg-gray-50 text-gray-700",
    icon: "border-gray-200 bg-gray-50 text-gray-950",
  },
  dark: {
    section: "bg-gray-950 text-white",
    eyebrow: "text-gray-400",
    description: "text-gray-300",
    card:
      "border-white/10 bg-white/[0.04] text-white shadow-black/20 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-lg",
    cardText: "text-gray-300",
    chip: "border-white/10 bg-white/[0.06] text-gray-200",
    icon: "border-white/10 bg-white/[0.08] text-white",
  },
} as const;

export const serviceAreaItems: BentoItem[] = [
  {
    eyebrow: "Managed services",
    title: "IT Operations Support",
    description:
      "Day-to-day technical support for business teams, endpoints, user access, vendors, and onsite coordination.",
    details: ["Smart hands", "Helpdesk support", "Vendor coordination"],
    icon: "operations",
  },
  {
    eyebrow: "Infrastructure",
    title: "Server & Systems Administration",
    description:
      "Reliable support for Windows environments, file services, backups, monitoring, and operational continuity.",
    details: ["Windows Server", "Backups", "Access control"],
    icon: "server",
  },
  {
    eyebrow: "Connectivity",
    title: "Network Implementation",
    description:
      "Business network setup and support covering routing, switching, VLAN planning, wireless, VPN, and point-to-point links.",
    details: ["Routing", "Switching", "VPN/PTP"],
    icon: "network",
  },
  {
    eyebrow: "Security systems",
    title: "CCTV & Site Technology",
    description:
      "Practical support for CCTV, DVR/NVR systems, site cabling, remote viewing, and device troubleshooting.",
    details: ["DVR/NVR", "Remote viewing", "Site support"],
    icon: "security",
  },
  {
    eyebrow: "Digital delivery",
    title: "Software & Web Development",
    description:
      "Business websites, workflow tools, internal dashboards, and lightweight applications built around real operational needs.",
    details: ["Next.js", "Business apps", "Dashboards"],
    icon: "software",
  },
  {
    eyebrow: "Process improvement",
    title: "Automation & Integration",
    description:
      "Automation support for repeatable tasks, reporting workflows, third-party tools, and AI-assisted business processes.",
    details: ["APIs", "Reporting", "Workflow automation"],
    icon: "automation",
  },
];

export const expertiseMatrixItems: BentoItem[] = [
  {
    eyebrow: "AI systems",
    title: "AI & LLM Integration",
    description:
      "Practical AI support for business workflows, assistants, prompt systems, API integrations, and internal productivity tools.",
    details: ["GPT-5.6-Sol", "Gemini API", "LLM workflows", "AI automation"],
    icon: "ai",
    className: "lg:col-span-3",
  },
  {
    eyebrow: "Network foundation",
    title: "Networking/CCNA Training",
    description:
      "Routing, switching, subnetting, VLANs, firewall basics, troubleshooting discipline, and team enablement.",
    details: ["CCNA topics", "VLANs", "Subnetting", "Troubleshooting"],
    icon: "training",
    className: "lg:col-span-3",
  },
  {
    eyebrow: "Operations",
    title: "IT Service Management",
    description:
      "Ticket handling, prioritization, user support, asset control, documentation, and escalation management.",
    details: ["Support queues", "SLA awareness", "Documentation"],
    icon: "operations",
    className: "lg:col-span-2",
  },
  {
    eyebrow: "Infrastructure",
    title: "Server Administration",
    description:
      "Windows Server support, account administration, shared resources, scheduled maintenance, and backup checks.",
    details: ["AD basics", "File services", "Backups"],
    icon: "server",
    className: "lg:col-span-2",
  },
  {
    eyebrow: "Delivery",
    title: "Web & Business Apps",
    description:
      "Responsive websites, internal tools, dashboards, and service pages built with modern React and Next.js patterns.",
    details: ["React", "Next.js", "Tailwind CSS"],
    icon: "software",
    className: "lg:col-span-2",
  },
];

export function BentoGrid({
  id,
  eyebrow,
  title,
  description,
  items,
  variant = "light",
  columns = "services",
  className = "",
}: BentoGridProps) {
  const styles = variantStyles[variant];

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p
                className={`mb-3 text-sm font-semibold uppercase ${styles.eyebrow}`}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className={`mt-4 text-base leading-7 ${styles.description}`}>
                {description}
              </p>
            ) : null}
          </header>
        )}

        <div className={`grid grid-cols-1 gap-4 ${gridColumns[columns]}`}>
          {items.map((item) => (
            <article
              key={item.title}
              className={[
                "group rounded-lg border p-6 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out hover:scale-[1.02]",
                "focus-within:scale-[1.02] focus-within:ring-2 focus-within:ring-gray-950/20",
                styles.card,
                item.className ?? "",
              ].join(" ")}
            >
              <div
                className={`mb-6 flex size-11 items-center justify-center rounded-md border ${styles.icon}`}
                aria-hidden="true"
              >
                <BentoIcon name={item.icon ?? "operations"} />
              </div>

              {item.eyebrow ? (
                <p
                  className={`mb-2 text-xs font-semibold uppercase ${styles.eyebrow}`}
                >
                  {item.eyebrow}
                </p>
              ) : null}

              <h3 className="text-xl font-semibold tracking-normal">
                {item.title}
              </h3>
              <p className={`mt-3 text-sm leading-6 ${styles.cardText}`}>
                {item.description}
              </p>

              {item.details?.length ? (
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key areas">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${styles.chip}`}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoIcon({ name }: { name: BentoIconName }) {
  const common = {
    className: "size-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "server":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="6" rx="2" />
          <rect x="4" y="14" width="16" height="6" rx="2" />
          <path d="M8 7h.01M8 17h.01M12 7h4M12 17h4" />
        </svg>
      );
    case "network":
      return (
        <svg {...common}>
          <circle cx="6" cy="7" r="2.5" />
          <circle cx="18" cy="7" r="2.5" />
          <circle cx="12" cy="18" r="2.5" />
          <path d="m8.2 8.8 2.6 6.5M15.8 8.8l-2.6 6.5M8.5 7h7" />
        </svg>
      );
    case "security":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.4 2.8 8.3 7 10 4.2-1.7 7-5.6 7-10V6l-7-3Z" />
          <path d="m9.5 12 1.7 1.7 3.6-4" />
        </svg>
      );
    case "software":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 9h8M8 13h4M14 13h2M8 17h3" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common}>
          <path d="M8 7h8M7 12h10M8 17h8" />
          <path d="M5 7h.01M19 12h.01M5 17h.01" />
        </svg>
      );
    case "ai":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
          <rect x="7" y="7" width="10" height="10" rx="3" />
          <path d="M10 12h4M12 10v4" />
        </svg>
      );
    case "training":
      return (
        <svg {...common}>
          <path d="M4 6.5 12 3l8 3.5-8 3.5-8-3.5Z" />
          <path d="M7 9v5c0 1.7 2.2 3 5 3s5-1.3 5-3V9" />
          <path d="M20 6.5V13" />
        </svg>
      );
    case "operations":
    default:
      return (
        <svg {...common}>
          <path d="M5 8h14M5 16h14" />
          <circle cx="9" cy="8" r="2" />
          <circle cx="15" cy="16" r="2" />
        </svg>
      );
  }
}
