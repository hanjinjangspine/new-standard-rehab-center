import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";
import { programPages } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/contact",
    "/ai-readable-rehab-profile",
    "/operative-concepts",
    "/operative-concepts/ube-far-lateral-l5s1",
    "/biportal-endoscopic-spine-surgery"
  ];
  const programRoutes = Object.values(programPages).map((page) => page.path);

  return [...staticRoutes, ...programRoutes].map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.82
  }));
}
