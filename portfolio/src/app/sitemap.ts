import type { MetadataRoute } from "next";

const baseUrl = "https://www.workwithabhinav.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
