import type { MetadataRoute } from "next";
import { semuaBerita } from "@/lib/berita";
import { navigasi, situs } from "@/lib/situs";

export default function sitemap(): MetadataRoute.Sitemap {
  const halaman: MetadataRoute.Sitemap = navigasi.map((n) => ({
    url: `${situs.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
    changeFrequency: n.href === "/berita" ? "weekly" : "monthly",
    priority: n.href === "/" ? 1 : 0.8,
  }));

  const berita: MetadataRoute.Sitemap = semuaBerita().map((b) => ({
    url: `${situs.url}/berita/${b.slug}`,
    lastModified: new Date(b.tanggal),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...halaman, ...berita];
}
