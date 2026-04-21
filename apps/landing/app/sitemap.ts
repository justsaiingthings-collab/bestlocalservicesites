import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestlocalservicesites.com";

  const coreRoutes = [
    "",
    "/pricing",
    "/seo",
    "/listings",
    "/onboarding",
  ];

  const demoRoutes = [
    "/roofing",
    "/hvac",
    "/plumbing",
    "/landscaping",
    "/cleaning",
    "/painting",
  ];

  const sitemapData: MetadataRoute.Sitemap = [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: "2026-04-20",
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...demoRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: "2026-04-20",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return sitemapData;
}
