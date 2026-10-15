import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/portfolio";
import { sampleProjects } from "@/lib/case-studies";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...["/about", "/portfolio", "/work"].map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly" as const, priority: .8 })),
    ...sampleProjects.map((project) => ({ url: `${siteUrl}/work/${project.slug}`, changeFrequency: "monthly" as const, priority: .6 })),
  ];
}
