import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/blogPosts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.celiacscanner.com";
  const currentDate = new Date().toISOString();

  // Static site routes
  const staticRoutes = [
    "",
    "/about",
    "/features",
    "/how-it-works",
    "/blog",
    "/support",
    "/privacy",
    "/terms",
    "/legal",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === "" || route === "/blog" ? "daily" : "weekly") as "daily" | "weekly",
    priority: route === "" ? 1.0 : route === "/blog" || route === "/features" ? 0.8 : 0.6,
  }));

  // Dynamic blog routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
