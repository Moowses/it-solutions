export type CareerTimelineItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  tags?: string[];
};

type CareerTimelineProps = {
  items?: CareerTimelineItem[];
};

export const careerTimelineItems: CareerTimelineItem[] = [
  {
    period: "Current",
    role: "IT Business Solutions Consultant",
    company: "Independent / project-based work",
    description:
      "Supports businesses with managed IT operations, site technology, systems troubleshooting, workflow automation, and web-based tools.",
    tags: ["Managed services", "Operations", "Web systems"],
  },
  {
    period: "Recent",
    role: "IT Operations & Infrastructure Support",
    company: "Business environments",
    description:
      "Handled users, endpoints, network issues, servers, CCTV/site systems, documentation, and vendor coordination.",
    tags: ["Smart hands", "Servers", "Networking"],
  },
  {
    period: "Foundation",
    role: "Technical Support & Network Training",
    company: "Professional development",
    description:
      "Built a practical base across troubleshooting, CCNA concepts, routing and switching, structured support, and customer-facing delivery.",
    tags: ["CCNA", "Support", "Troubleshooting"],
  },
];

export function CareerTimeline({ items = careerTimelineItems }: CareerTimelineProps) {
  return (
    <section className="bg-gray-950 text-white" aria-labelledby="career-heading">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase text-gray-400">
            Career timeline
          </p>
          <h2
            id="career-heading"
            className="text-3xl font-semibold tracking-normal sm:text-4xl"
          >
            Experience shaped around keeping business technology reliable.
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-300">
            A concise path through IT operations, infrastructure support, and
            practical business solution delivery.
          </p>
        </header>

        <div className="-mx-6 overflow-x-auto px-6 pb-2 sm:mx-0 sm:px-0">
          <ol className="grid min-w-[48rem] grid-cols-3 gap-4 sm:min-w-0">
            {items.map((item) => (
              <li key={`${item.period}-${item.role}`}>
                <article className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10 motion-safe:transition motion-safe:duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.06]">
                  <p className="text-sm font-semibold uppercase text-gray-400">
                    {item.period}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-normal">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    {item.company}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {item.description}
                  </p>

                  {item.tags?.length ? (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-gray-200"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
