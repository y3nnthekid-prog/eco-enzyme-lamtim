"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/**
 * Memunculkan isi saat tergulir ke layar: naik 14px sambil memudar masuk.
 *
 * Tiga hal yang dijaga:
 * - Tanpa JavaScript, isi tetap tampil penuh (lihat aturan `js-siap` di
 *   globals.css). Animasi tidak pernah menjadi syarat keterbacaan.
 * - Sekali muncul, tidak pernah disembunyikan lagi. Elemen yang berkedip
 *   saat digulir naik-turun itu melelahkan.
 * - Yang sudah terlihat sejak awal langsung ditampilkan tanpa jeda.
 */
export function Muncul({
  children,
  jeda = 0,
  sebagai: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  /** Jeda dalam milidetik, untuk memberi efek berurutan antar kartu. */
  jeda?: number;
  sebagai?: ElementType;
  className?: string;
}) {
  const acuan = useRef<HTMLElement>(null);
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const el = acuan.current;
    if (!el) return;

    // Pengguna yang meminta gerak dikurangi tidak perlu ditangani di sini:
    // aturan penyembunyian di globals.css sudah dibungkus
    // `prefers-reduced-motion: no-preference`, jadi bagi mereka isi halaman
    // memang tidak pernah disembunyikan sejak awal.

    // Peramban lawas tanpa IntersectionObserver: tampilkan saja, jangan
    // sampai isinya tertinggal tersembunyi selamanya.
    if (!("IntersectionObserver" in window)) {
      const bingkai = requestAnimationFrame(() => setTampil(true));
      return () => cancelAnimationFrame(bingkai);
    }

    const pengamat = new IntersectionObserver(
      (entri) => {
        if (entri[0].isIntersecting) {
          setTampil(true);
          pengamat.disconnect();
        }
      },
      // Dimunculkan sedikit sebelum benar-benar masuk layar, supaya saat
      // pembaca sampai ke sana isinya sudah selesai beranimasi.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    pengamat.observe(el);
    return () => pengamat.disconnect();
  }, []);

  return (
    <Tag
      ref={acuan}
      className={`muncul ${tampil ? "tampil" : ""} ${className}`}
      style={jeda ? ({ "--jeda": `${jeda}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
