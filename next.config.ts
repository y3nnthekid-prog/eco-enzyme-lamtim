import type { NextConfig } from "next";

/**
 * Situs punya dua domain: eenlamtim.com (utama) dan eenlamtim.site.
 * Semua kunjungan ke .site dialihkan permanen ke .com supaya mesin pencari
 * tidak menganggapnya dua situs berbeda dengan isi yang sama.
 */
const nextConfig: NextConfig = {
  async redirects() {
    return ["eenlamtim.site", "www.eenlamtim.site"].map((host) => ({
      source: "/:jalur*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://eenlamtim.com/:jalur*",
      permanent: true,
    }));
  },
};

export default nextConfig;
