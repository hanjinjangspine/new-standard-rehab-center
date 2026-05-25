import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (siteConfig.noIndex) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      },
      sitemap: `${SITE_URL}/sitemap.xml`
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${SITE_URL}/sitemap.xml`
  };
}
