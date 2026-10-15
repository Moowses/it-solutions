// Edit homepage selections here. Full project and experience content lives in portfolio.ts.
import { developmentProjects } from "@/lib/portfolio";

function feature(slug: string, title: string, category: string, summary: string, alt: string) {
  const project = developmentProjects.find((item) => item.slug === slug);
  if (!project || !("image" in project) || !project.image) {
    throw new Error(`Featured project ${slug} needs a portfolio entry and image.`);
  }
  return { slug, title, category, summary, alt, image: project.image, technologies: project.stack.slice(0, 3) };
}

export const featuredProjects = [
  feature("kreads", "Kreads", "Reading assessment / Development preview", "Reading practice on Windows, with teacher-managed materials and a connected web portal for reports.", "Kreads public teacher login with a classroom reading image, sign-in fields, and an administrator link"),
  feature("damla-training-enrollment-system", "Damla Training", "Enrollment & LMS", "Enrollment, student finance, and classroom learning in one connected platform.", "User-supplied Damla public homepage with program information and enrollment links"),
  feature("custom-erp-business-workflows", "Custom ERP", "Business workflows / In progress", "ERP shaped around your business processes, from purchasing and inventory to approvals and reporting.", "Illustrative ERP workflow diagram from request to approval and fulfillment; not an application screenshot"),
  feature("dreamtripclub-booking-system", "DreamTripClub", "Membership & booking", "A travel platform connecting resort search, membership rewards, and booking support.", "DreamTripClub public travel website with resort search and membership information"),
] as const;

export const engagementSteps = [
  { title: "Understand", description: "Start with your business, your people, and the problem." },
  { title: "Plan", description: "Agree on the scope, priorities, and practical next steps." },
  { title: "Build", description: "Build, share progress, and test with your team." },
  { title: "Launch & Support", description: "Launch with documentation, handover, and the support you need." },
] as const;

export const selectedTechnologies = ["Next.js", "React", "TypeScript", "Node.js", "Microsoft 365", "Google Workspace", "n8n", "Make", "Zapier"] as const;
