"use client";

import { useSyncExternalStore } from "react";
import { ALargeSmall } from "lucide-react";

type Ukuran = "normal" | "besar" | "sangat-besar";

const urutan: Ukuran[] = ["normal", "besar", "sangat-besar"];
const label: Record<Ukuran, string> = {
  normal: "Teks normal",
  besar: "Teks besar",
  "sangat-besar": "Teks sangat besar",
};

const PERISTIWA = "ukuran-teks-berubah";

/**
 * Ukuran teks disimpan sebagai atribut `data-teks` pada elemen <html>
 * (dipasang lebih awal oleh skrip di layout agar tidak berkedip saat memuat).
 * Atribut itulah sumber kebenarannya — komponen ini hanya membacanya.
 */
function bacaUkuran(): Ukuran {
  const nilai = document.documentElement.getAttribute("data-teks");
  return nilai === "besar" || nilai === "sangat-besar" ? nilai : "normal";
}

function berlangganan(perbarui: () => void) {
  window.addEventListener(PERISTIWA, perbarui);
  return () => window.removeEventListener(PERISTIWA, perbarui);
}

/**
 * Tombol pembesar teks. Banyak pengguna situs ini adalah lansia, jadi
 * ukuran huruf bisa dinaikkan dua tingkat dan diingat di perangkat.
 */
export function PengaturTeks() {
  const ukuran = useSyncExternalStore(
    berlangganan,
    bacaUkuran,
    () => "normal" as Ukuran,
  );

  function ganti() {
    const berikutnya = urutan[(urutan.indexOf(ukuran) + 1) % urutan.length];
    if (berikutnya === "normal") {
      document.documentElement.removeAttribute("data-teks");
    } else {
      document.documentElement.setAttribute("data-teks", berikutnya);
    }
    try {
      localStorage.setItem("ukuran-teks", berikutnya);
    } catch {
      /* mode privat: abaikan */
    }
    window.dispatchEvent(new Event(PERISTIWA));
  }

  const tingkat = urutan.indexOf(ukuran) + 1;

  return (
    <button
      type="button"
      onClick={ganti}
      title="Perbesar ukuran tulisan"
      aria-label={`Ukuran tulisan: ${label[ukuran]}. Klik untuk mengubah.`}
      className="flex shrink-0 items-center gap-1.5 rounded-full border-2 border-daun-200 bg-white px-3 py-2 font-bold text-daun-800 transition-colors hover:bg-daun-50"
    >
      <ALargeSmall size={20} aria-hidden />
      <span className="flex gap-0.5" aria-hidden>
        {urutan.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < tingkat ? "bg-daun-500" : "bg-daun-100"
            }`}
          />
        ))}
      </span>
    </button>
  );
}
