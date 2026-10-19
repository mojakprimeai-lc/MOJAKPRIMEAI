import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "", priority: 1 },
    { path: "/what-we-take-on", priority: 0.8 },
    { path: "/how-we-work", priority: 0.8 },
    { path: "/start", priority: 0.9 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
