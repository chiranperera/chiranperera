import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/data";

const BASE = "https://chiranperera.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/studio", "/services", "/contact", "/journal"].map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.7,
  }));
  const projectRoutes = PROJECTS.map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...staticRoutes, ...projectRoutes];
}
