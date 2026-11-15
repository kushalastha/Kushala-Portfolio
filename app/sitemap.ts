import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  // Sections are fragments of one page, not separately indexable routes.
  return siteUrl ? [{ url: siteUrl.href }] : [];
}
