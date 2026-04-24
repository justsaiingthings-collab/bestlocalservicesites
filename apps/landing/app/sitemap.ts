import { MetadataRoute } from "next";
import { getAllIndustrySlugs } from "./blog/data/generator";
import { blogPosts } from "./blog/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestlocalservicesites.com";

  const coreRoutes = [
    "",
    "/demos",
    "/seo",
    "/seo-comparison",
    "/listings",
    "/onboarding",
    "/blog",
  ];

  const demoRoutes = [
    "/roofing",
    "/hvac",
    "/plumbing",
    "/landscaping",
    "/cleaning",
    "/painting",
  ];

  const industrySlugs = getAllIndustrySlugs();
  const blogPostSlugs = blogPosts.map((p) => p.slug);

  const sitemapData: MetadataRoute.Sitemap = [
    ...coreRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: "2026-04-24",
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...demoRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: "2026-04-24",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    // Programmatic industry/city pages
    ...industrySlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: "2026-04-24",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // Blog posts
    ...blogPostSlugs.map((slug) => ({
      url: `${baseUrl}/blog/post/${slug}`,
      lastModified: "2026-04-24",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return sitemapData;
}
