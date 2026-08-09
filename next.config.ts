import type { NextConfig } from "next";

/** Alamat resmi situs. Semua alamat lain dialihkan ke sini. */
const DOMAIN_UTAMA = "ecoenzymelamtim.com";

/**
 * Alamat lama dan alamat cadangan. Semuanya dialihkan permanen ke
 * DOMAIN_UTAMA supaya mesin pencari tidak menganggapnya beberapa situs
 * berbeda dengan isi yang sama, dan tautan yang sudah terlanjur
 * disebarkan tidak menjadi mati.
 */
const DOMAIN_ALIHAN = [
  `www.${DOMAIN_UTAMA}`,
  "ecoenzymelamtim.site",
  "www.ecoenzymelamtim.site",
  "eenlamtim.com",
  "www.eenlamtim.com",
  "eenlamtim.site",
  "www.eenlamtim.site",
];

const nextConfig: NextConfig = {
  async redirects() {
    return DOMAIN_ALIHAN.map((host) => ({
      source: "/:jalur*",
      has: [{ type: "host" as const, value: host }],
      destination: `https://${DOMAIN_UTAMA}/:jalur*`,
      permanent: true,
    }));
  },
};

export default nextConfig;
