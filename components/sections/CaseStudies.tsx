const caseStudies = [
  {
    client: "B2B Service Firm",
    problem: "Sales and onboarding lived across email, sheets, and ad hoc follow-ups.",
    solution:
      "Implemented a unified CRM pipeline, intake automation, and client onboarding dashboard.",
    outcome: "Average onboarding time dropped 55% in 8 weeks.",
  },
  {
    client: "Education Operator",
    problem: "Live webinar attendance was inconsistent and follow-up was mostly manual.",
    solution:
      "Built a registration-to-reminder workflow with scheduled sessions and post-event routing.",
    outcome: "Show-up rate increased 2.1x while reducing manual coordination hours.",
  },
  {
    client: "Field Services Team",
    problem: "Dispatch updates and customer notifications were delayed by disconnected tools.",
    solution:
      "Integrated booking, dispatch, and messaging into one delivery workflow with status triggers.",
    outcome: "Missed update tickets dropped 42% within the first month.",
  },
];

export function CaseStudies() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        <div className="panel-block">
          <span className="label-chip">Recent outcomes</span>
          <h2 className="section-title">Case studies from delivery-focused engagements</h2>
          <p className="section-intro">
            Each project starts from an operational bottleneck and ends with measurable change.
          </p>

          <div className="card-grid cols-3">
            {caseStudies.map((study) => (
              <article key={study.client} className="surface-card">
                <h3 className="card-title">{study.client}</h3>
                <dl className="case-grid">
                  <div>
                    <dt>Problem</dt>
                    <dd>{study.problem}</dd>
                  </div>
                  <div>
                    <dt>Solution</dt>
                    <dd>{study.solution}</dd>
                  </div>
                  <div>
                    <dt>Outcome</dt>
                    <dd className="outcome">{study.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
