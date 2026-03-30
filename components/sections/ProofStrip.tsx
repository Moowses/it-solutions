const proofItems = [
  "2-6 week delivery windows",
  "30+ production releases",
  "Next.js, Node.js, TypeScript, Postgres",
  "US, EU, APAC coverage",
  "Automation impact up to -55% manual handling",
];

export function ProofStrip() {
  return (
    <section className="section section-compact" aria-label="Credibility">
      <div className="container">
        <ul className="panel-block signal-strip">
          {proofItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
