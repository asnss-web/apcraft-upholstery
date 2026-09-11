import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/content";

// /privacy is noindex, so it stays out of the sitemap.
const routes = ["", "/services", "/portfolio", "/commercial", "/about", "/contact", "/quote"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
