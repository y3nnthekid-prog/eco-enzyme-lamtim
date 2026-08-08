"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigasi, situs } from "@/lib/situs";
import { PengaturTeks } from "@/components/pengatur-teks";

export function KepalaSitus() {
  const [terbuka, setTerbuka] = useState(false);
  const pathname = usePathname();
  const [jalanTerakhir, setJalanTerakhir] = useState(pathname);

  // Tutup menu setiap kali pindah halaman — disesuaikan saat render,
  // bukan lewat efek, sesuai anjuran React.
  if (pathname !== jalanTerakhir) {
    setJalanTerakhir(pathname);
    setTerbuka(false);
  }

  useEffect(() => {
    document.body.style.overflow = terbuka ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [terbuka]);

  const aktif = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="tanpa-cetak sticky top-0 z-50 border-b-2 border-daun-100 bg-krem/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:gap-3 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label={`${situs.nama} ${situs.wilayah} — beranda`}
        >
          <Image
            src="/logo-een-lamtim.png"
            alt=""
            width={56}
            height={56}
            priority
            className="h-10 w-10 shrink-0 sm:h-14 sm:w-14"
          />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-sm font-black text-daun-800 sm:text-lg">
              Eco Enzyme Nusantara
            </span>
            <span className="block text-xs font-semibold text-air-700 sm:text-sm">
              Kab. Lampung Timur
            </span>
          </span>
        </Link>

        <nav
          aria-label="Menu utama"
          className="ml-auto hidden items-center gap-1 xl:flex"
        >
          {navigasi.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={aktif(item.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-2 text-[0.95rem] font-bold transition-colors ${
                aktif(item.href)
                  ? "bg-daun-600 text-white"
                  : "text-tinta hover:bg-daun-100 hover:text-daun-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-2">
          <PengaturTeks />
          <button
            type="button"
            onClick={() => setTerbuka((v) => !v)}
            aria-expanded={terbuka}
            aria-label={terbuka ? "Tutup menu" : "Buka menu"}
            aria-controls="menu-hp"
            className="flex items-center gap-2 rounded-full bg-daun-600 px-3 py-2.5 font-bold text-white shadow-lembut transition-colors hover:bg-daun-700 sm:px-4 xl:hidden"
          >
            {terbuka ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      {terbuka && (
        <div
          id="menu-hp"
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t-2 border-daun-100 bg-white px-4 pt-3 pb-6 xl:hidden"
        >
          <ul className="grid gap-2">
            {navigasi.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={aktif(item.href) ? "page" : undefined}
                  className={`block rounded-2xl border-2 px-4 py-3 transition-colors ${
                    aktif(item.href)
                      ? "border-daun-500 bg-daun-50"
                      : "border-daun-100 hover:bg-daun-50"
                  }`}
                >
                  <span className="block font-display text-lg font-extrabold text-daun-800">
                    {item.label}
                  </span>
                  <span className="block text-sm text-tinta-lembut">
                    {item.keterangan}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
