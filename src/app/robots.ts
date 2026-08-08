import type { MetadataRoute } from "next";
import { situs } from "@/lib/situs";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${situs.url}/sitemap.xml`,
  };
}
