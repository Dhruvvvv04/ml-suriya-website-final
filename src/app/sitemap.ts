import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/achievements",
    "/philosophy",
    "/publications",
    "/media",
    "/contact",
    "/courses",
    "/media/gallery",
    "/publications/books",
    "/publications/blog",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
