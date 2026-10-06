import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";
import { programPages } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/contact", "/ai-readable-rehab-profile"];
  const programRoutes = Object.values(programPages).map((page) => page.path);

  return [...staticRoutes, ...programRoutes].map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: "2026-10-06",
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.82,
  }));
}
