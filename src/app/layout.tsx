import type { Metadata, Viewport } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { KepalaSitus } from "@/components/kepala-situs";
import { KakiSitus } from "@/components/kaki-situs";
import { situs } from "@/lib/situs";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(situs.url),
  title: {
    default: `${situs.nama} — ${situs.wilayah}`,
    template: `%s | ${situs.namaPendek}`,
  },
  description: situs.deskripsi,
  keywords: [
    "eco enzyme",
    "eco enzyme Lampung Timur",
    "cara membuat eco enzyme",
    "manfaat eco enzyme",
    "sampah organik",
    "Lampung Timur",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: situs.nama,
    title: `${situs.nama} — ${situs.wilayah}`,
    description: situs.deskripsi,
    images: ["/logo-een-lamtim.png"],
  },
  icons: {
    icon: "/logo-een-lamtim.png",
    apple: "/logo-een-lamtim.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#4ea832",
};

const skripUkuranTeks = `
(function(){
  try {
    var t = localStorage.getItem('ukuran-teks');
    if (t === 'besar' || t === 'sangat-besar') {
      document.documentElement.setAttribute('data-teks', t);
    }
  } catch (e) {}
})();
`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Nonce dipasang oleh src/proxy.ts. Skrip inline pengatur ukuran teks harus
  // membawanya, kalau tidak akan diblokir CSP.
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="id"
      className={`${nunito.variable} ${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: skripUkuranTeks }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-daun-700 focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Lompat ke isi halaman
        </a>
        <KepalaSitus />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <KakiSitus />
        <Analytics />
      </body>
    </html>
  );
}
