"use client";

import { useMemo, useState } from "react";
import {
  Bath,
  Droplets,
  PawPrint,
  Search,
  Shirt,
  SprayCan,
  Sprout,
  UtensilsCrossed,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  daftarKategori,
  daftarPemakaian,
  type Kategori,
} from "@/data/pemakaian";

const ikon: Record<string, LucideIcon> = {
  UtensilsCrossed,
  SprayCan,
  Shirt,
  Sprout,
  Droplets,
  Bath,
  PawPrint,
};

export function PencariTakaran() {
  const [kategori, setKategori] = useState<Kategori | "semua">("semua");
  const [cari, setCari] = useState("");

  const hasil = useMemo(() => {
    const kunci = cari.trim().toLowerCase();
    return daftarPemakaian.filter((p) => {
      const cocokKategori = kategori === "semua" || p.kategori === kategori;
      const cocokKata =
        kunci === "" ||
        p.nama.toLowerCase().includes(kunci) ||
        p.manfaat.toLowerCase().includes(kunci);
      return cocokKategori && cocokKata;
    });
  }, [kategori, cari]);

  return (
    <div>
      <div className="rounded-4xl border border-daun-200/70 bg-white p-5 shadow-lembut sm:p-6">
        <label
          htmlFor="cari-takaran"
          className="block font-display text-lg font-extrabold text-daun-900"
        >
          Mau dipakai untuk apa?
        </label>
        <div className="relative mt-3">
          <Search
            size={22}
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-daun-600"
            aria-hidden
          />
          <input
            id="cari-takaran"
            type="search"
            value={cari}
            onChange={(e) => setCari(e.target.value)}
            placeholder="Ketik misalnya: cuci piring, pel lantai, pupuk…"
            className="w-full rounded-2xl border border-daun-200/70 bg-daun-50 py-3.5 pr-11 pl-12 text-lg focus:border-daun-500 focus:bg-white"
          />
          {cari && (
            <button
              type="button"
              onClick={() => setCari("")}
              aria-label="Hapus pencarian"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1.5 text-tinta-lembut hover:bg-daun-100"
            >
              <X size={20} aria-hidden />
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Saring menurut kategori">
          <button
            type="button"
            onClick={() => setKategori("semua")}
            aria-pressed={kategori === "semua"}
            className={`rounded-full border-2 px-4 py-2 font-bold transition-colors ${
              kategori === "semua"
                ? "border-daun-600 bg-daun-600 text-white"
                : "border-daun-200 bg-white text-daun-800 hover:bg-daun-50"
            }`}
          >
            Semua
          </button>
          {daftarKategori.map((k) => {
            const Ikon = ikon[k.ikon];
            return (
              <button
                key={k.id}
                type="button"
                onClick={() => setKategori(k.id)}
                aria-pressed={kategori === k.id}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-bold transition-colors duration-300 ${
                  kategori === k.id
                    ? "border-daun-700 bg-daun-700 text-white"
                    : "border-daun-200 bg-white text-daun-800 hover:border-daun-400"
                }`}
              >
                {Ikon && <Ikon size={17} aria-hidden />}
                {k.nama}
              </button>
            );
          })}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 font-semibold text-tinta-lembut">
        Menampilkan {hasil.length} cara pemakaian
      </p>

      {hasil.length === 0 ? (
        <p className="mt-4 rounded-3xl border border-surya-200/70 bg-surya-50 p-6 text-lg">
          Belum ada yang cocok dengan pencarian Anda. Coba kata lain, atau pilih
          &ldquo;Semua&rdquo; untuk melihat seluruh daftar.
        </p>
      ) : (
        <ul className="mt-4 grid gap-5 md:grid-cols-2">
          {hasil.map((p) => {
            const kat = daftarKategori.find((k) => k.id === p.kategori);
            const Ikon = kat ? ikon[kat.ikon] : undefined;
            return (
              <li
                key={p.id}
                className="angkat flex flex-col rounded-4xl border border-garis bg-white p-6 shadow-lembut hover:border-daun-200"
              >
                <div className="flex items-start gap-3.5">
                  {Ikon && (
                    <Ikon
                      size={24}
                      className="mt-1 shrink-0 text-daun-500"
                      aria-hidden
                    />
                  )}
                  <div>
                    <h3 className="text-xl tracking-[-0.01em] text-daun-900">
                      {p.nama}
                    </h3>
                    <p className="text-sm font-bold text-daun-700">
                      {kat?.nama}
                    </p>
                  </div>
                </div>

                <p className="mt-5 border-l-4 border-air-300 bg-air-50/60 py-3 pl-4 font-display text-lg font-extrabold text-air-800">
                  {p.takaran}
                </p>
                <p className="mt-2.5 text-tinta-lembut">
                  <span className="font-bold text-tinta">Contoh: </span>
                  {p.contoh}
                </p>
                <p className="mt-2.5 text-tinta-lembut">
                  <span className="font-bold text-tinta">Gunanya: </span>
                  {p.manfaat}
                </p>

                {p.perluHatiHati && (
                  <p className="mt-4 rounded-2xl border border-surya-200/70 bg-surya-50 px-4 py-3 text-sm text-surya-900">
                    Bersentuhan dengan tubuh. Coba dulu sedikit pada kulit, dan
                    hentikan bila terasa perih atau gatal. Bukan pengganti obat
                    atau perawatan dokter.
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
