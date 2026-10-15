/**
 * Hypothetical examples only. Keep separate from the owner's existing work.
 * Replace a sample with confirmed, approved material before describing it as delivered work.
 */
export type SampleProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  role: string;
  solution: readonly string[];
  technologies: readonly string[];
  outcomes: readonly string[];
  verified: false;
  screenshots?: readonly {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
  }[];
  liveUrl?: string;
  repositoryUrl?: string;
};

export const sampleProjects: readonly SampleProject[] = [
  {
    slug: "it-operations-project-management",
    title: "IT Operations & Project Management Platform",
    category: "IT leadership & business applications",
    summary:
      "A sample approach to bringing support requests, project delivery, and IT documentation into one clear workspace.",
    problem:
      "In this hypothetical scenario, a growing business coordinates IT requests through scattered messages and spreadsheets. Teams have difficulty seeing ownership, priorities, and the status of planned work.",
    role:
      "Illustrative role: translate operational needs into a delivery plan, define workflows with stakeholders, guide implementation, and prepare documentation for the support team.",
    solution: [
      "Map how requests enter the business, who approves them, and how support work becomes a planned improvement.",
      "Design a shared workspace for requests, project milestones, assigned owners, equipment records, and practical runbooks.",
      "Introduce role-based access, clear status definitions, and a handover process so the system can be maintained by the team.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access", "REST APIs"],
    outcomes: [
      "No verified outcomes are available. This is a sample concept, not a completed engagement.",
      "A real case study would report approved evidence such as request visibility, handover quality, and delivery against agreed milestones.",
    ],
    verified: false,
  },
  {
    slug: "hr-employee-services",
    title: "HR & Employee Services Application",
    category: "Web & business application development",
    summary:
      "A sample employee portal designed around everyday requests, clear approvals, and careful handling of staff information.",
    problem:
      "In this hypothetical scenario, employees submit leave and document requests through email. HR staff manually check records and chase approvals, while employees have limited visibility into progress.",
    role:
      "Illustrative role: understand HR and employee needs, define permission boundaries, develop the application, coordinate user review, and prepare an operational handover.",
    solution: [
      "Define request types and approval responsibilities with HR before choosing the application structure.",
      "Build accessible employee forms, request history, and an HR dashboard with explicit approval states.",
      "Protect personal information through appropriate access controls, audit records, validation, and an agreed retention approach.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Email notifications"],
    outcomes: [
      "No verified outcomes are available. The portal and its benefits are illustrative.",
      "A real case study would document user acceptance, approval accuracy, and request-processing observations using permissioned, anonymized evidence.",
    ],
    verified: false,
  },
  {
    slug: "network-server-infrastructure",
    title: "Network & Server Infrastructure Project",
    category: "Infrastructure & IT operations",
    summary:
      "A sample plan for dependable office connectivity, controlled access, and supportable server operations.",
    problem:
      "In this hypothetical scenario, an office has an undocumented network, inconsistent wireless coverage, and limited visibility into access and backups. Future changes depend heavily on individual knowledge.",
    role:
      "Illustrative role: assess the site and business requirements, plan the network and server setup, coordinate vendors, oversee validation, and document the final handover.",
    solution: [
      "Review users, devices, connectivity, applications, and continuity requirements through a site assessment.",
      "Plan network segmentation, wireless coverage, firewall policy, remote access, and server responsibilities around the agreed requirements.",
      "Define a staged change plan, recovery steps, backup and restore checks, equipment inventory, and clear support documentation.",
    ],
    technologies: ["VLANs", "Firewall & VPN", "Windows Server", "Microsoft 365", "Backup & restore"],
    outcomes: [
      "No verified outcomes or implementation details are claimed. This is a sample infrastructure scenario.",
      "A real case study would include approved acceptance checks, restore-test evidence, and redacted documentation rather than exposing network details.",
    ],
    verified: false,
  },
  {
    slug: "workflow-automation-integration",
    title: "Workflow Automation & Integration Project",
    category: "Automation & AI integration",
    summary:
      "A sample integration connecting inquiry intake, team follow-up, and business records with useful checks at each handoff.",
    problem:
      "In this hypothetical scenario, a team copies incoming inquiries into a CRM and manually sends follow-up notifications. Duplicate records and incomplete information make it difficult to track the next action.",
    role:
      "Illustrative role: map the existing process, agree on data ownership and exceptions, implement the integration, and give the team a maintainable workflow and recovery guide.",
    solution: [
      "Document the trigger, required fields, destination systems, and steps that require a person's approval.",
      "Connect intake forms and the CRM through validated webhooks, duplicate checks, and clear notification rules.",
      "Add failure alerts, safe retries, logs, and a manual recovery path. Consider AI-assisted classification only where the data and review process support it.",
    ],
    technologies: ["n8n, Make, or Zapier", "REST APIs", "Webhooks", "CRM integration", "Optional AI API"],
    outcomes: [
      "No verified time savings, conversion changes, or other results are claimed. This is a sample workflow.",
      "A real case study would compare approved process observations, record accuracy, exception handling, and maintenance needs before and after delivery.",
    ],
    verified: false,
  },
];

export function getSampleProject(slug: string): SampleProject | undefined {
  return sampleProjects.find((project) => project.slug === slug);
}
