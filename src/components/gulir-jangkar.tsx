"use client";

import { useEffect } from "react";

/**
 * Gulir mulus khusus untuk tautan jangkar dalam halaman (href="#bagian").
 *
 * Dulu ini ditangani `scroll-behavior: smooth` di <html>, tetapi aturan itu
 * berlaku untuk SEMUA gulir programatik — termasuk gulir-ke-atas milik router
 * Next.js. Akibatnya animasi gulir yang belum selesai bertabrakan dengan
 * perpindahan halaman, dan halaman baru mendarat di tengah.
 *
 * Dengan ditangani per-klik seperti ini, kemulusan hanya berlaku saat pembaca
 * memang menekan tautan jangkar; navigasi antar halaman tetap melompat bersih
 * ke puncak.
 */
export function GulirJangkar() {
  useEffect(() => {
    function tanganiKlik(peristiwa: MouseEvent) {
      // Biarkan peramban menangani klik tengah, klik dengan tombol pengubah,
      // dan klik yang sudah dibatalkan penangan lain.
      if (
        peristiwa.defaultPrevented ||
        peristiwa.button !== 0 ||
        peristiwa.metaKey ||
        peristiwa.ctrlKey ||
        peristiwa.shiftKey ||
        peristiwa.altKey
      ) {
        return;
      }

      const sasaranKlik = peristiwa.target as HTMLElement | null;
      const tautan = sasaranKlik?.closest?.("a");
      const href = tautan?.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;

      const tujuan = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!tujuan) return;

      peristiwa.preventDefault();

      const bolehBergerak = !window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Fokus dipindahkan LEBIH DULU, dengan preventScroll.
      // Kalau dilakukan setelah scrollIntoView, pemindahan fokus memotong
      // animasi gulir yang sedang berjalan dan halaman jadi melompat.
      // Pengguna keyboard dan pembaca layar tetap harus ikut berpindah,
      // bukan cuma tampilannya.
      if (!tujuan.hasAttribute("tabindex")) {
        tujuan.setAttribute("tabindex", "-1");
      }
      tujuan.focus({ preventScroll: true });

      // scrollIntoView menghormati scroll-padding-top pada <html>, jadi judul
      // tujuan tidak tertutup header yang lengket di atas.
      tujuan.scrollIntoView({
        behavior: bolehBergerak ? "smooth" : "auto",
        block: "start",
      });

      // Alamat ikut diperbarui supaya tautan bisa disalin dan tombol kembali
      // tetap berfungsi seperti tautan jangkar biasa.
      history.pushState(null, "", href);
    }

    document.addEventListener("click", tanganiKlik);
    return () => document.removeEventListener("click", tanganiKlik);
  }, []);

  return null;
}
