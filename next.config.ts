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
 * Content-Security-Policy.
 *
 * Hanya sumber dari situs ini sendiri yang boleh dimuat, ditambah domain
 * @vercel/analytics. Ini menutup jalur XSS yang paling umum — termasuk bila
 * kelak ada berkas markdown yang memuat HTML mentah, skrip di dalamnya tidak
 * akan berjalan.
 *
 *   - font di-self-host oleh next/font, jadi cukup 'self'.
 *   - 'unsafe-inline' pada script masih diperlukan karena ada <script> inline
 *     pengatur ukuran teks di <head> dan skrip bootstrap Next.js. Penguatan
 *     berikutnya: ganti dengan nonce agar 'unsafe-inline' bisa dicabut.
 *   - frame-ancestors 'none' mencegah situs disematkan di iframe.
 */
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "upgrade-insecure-requests",
].join("; ");

/** Header keamanan yang dikirim untuk setiap permintaan. */
const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
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
