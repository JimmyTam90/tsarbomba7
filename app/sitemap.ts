import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-11");
  const paths = ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"];
  return paths.map((p) => ({
    url: `${SITE.baseUrl}${p}`,
    lastModified,
    changeFrequency: p === "" ? "weekly" : "yearly",
    priority: p === "" ? 1 : 0.3,
  }));
}
