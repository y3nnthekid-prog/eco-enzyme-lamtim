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

/**
 * Header keamanan statis untuk setiap permintaan.
 *
 * Content-Security-Policy TIDAK di sini — ia butuh nonce acak per-permintaan,
 * jadi disusun di `src/proxy.ts`. Header di bawah ini bernilai tetap sehingga
 * cocok dipasang di tingkat konfigurasi.
 */
const securityHeaders = [
  {
    // Paksa HTTPS selama dua tahun, termasuk subdomain. 'preload' adalah
    // komitmen: sekali masuk daftar preload browser, sulit dibatalkan.
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
