"use client";

import { useMemo, useState } from "react";
import { CalendarCheck, Droplets, Apple, Candy, RotateCcw } from "lucide-react";

const PRESET = [
  { label: "Ember kecil", liter: 5 },
  { label: "Ember cucian", liter: 10 },
  { label: "Jerigen", liter: 20 },
  { label: "Tong sedang", liter: 30 },
  { label: "Tong besar", liter: 60 },
  { label: "Drum", liter: 100 },
];

function angka(n: number): string {
  const dibulatkan = Math.round(n * 100) / 100;
  return dibulatkan.toLocaleString("id-ID", { maximumFractionDigits: 2 });
}

/**
 * Takaran kecil ditampilkan dalam gram/mililiter, bukan pecahan kilogram.
 * Selain lebih mudah ditakar di dapur, ini juga menjaga perbandingan 1 : 3 : 10
 * tetap terlihat benar — "0,1 kg gula dan 0,2 kg buah" akan tampak keliru,
 * sedangkan "60 gram dan 180 gram" jelas tiga kali lipatnya.
 */
function berat(kg: number): string {
  return kg < 1 ? `${Math.round(kg * 1000)} gram` : `${angka(kg)} kg`;
}

function volume(liter: number): string {
  return liter < 1 ? `${Math.round(liter * 1000)} ml` : `${angka(liter)} liter`;
}

function hariIni(): string {
  return new Date().toISOString().slice(0, 10);
}

function tambahHari(iso: string, hari: number): string {
  const t = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(t.getTime())) return "Isi dulu tanggal mulainya";
  t.setDate(t.getDate() + hari);
  return t.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Kalkulator takaran 1 : 3 : 10.
 * Air maksimal 60% dari volume wadah, gula 10% dari berat air,
 * sisa buah/sayur 30% dari berat air.
 */
export function KalkulatorTakaran() {
  const [liter, setLiter] = useState(20);
  const [tanggal, setTanggal] = useState(hariIni);

  const hasil = useMemo(() => {
    const air = liter * 0.6; // liter, 1 liter air ≈ 1 kg
    return {
      air,
      gula: air / 10,
      buah: (air / 10) * 3,
      sisaRuang: liter - air,
    };
  }, [liter]);

  const takLazim = liter < 1 || liter > 1000;

  return (
    <div className="overflow-hidden rounded-5xl border-2 border-daun-200 bg-white shadow-angkat">
      {/* ---- Bagian isian ---- */}
      <div className="border-b-2 border-daun-100 bg-daun-50 p-6 sm:p-8">
        <h3 className="text-2xl text-daun-900">Kalkulator Takaran</h3>
        <p className="mt-2 text-tinta-lembut">
          Isi ukuran wadah Anda, dan kalkulator akan menghitung takarannya untuk
          Anda. Tidak perlu pusing berhitung sendiri.
        </p>

        <div className="mt-7 grid gap-7 md:grid-cols-2">
          <div>
            <label
              htmlFor="volume-wadah"
              className="block font-display text-lg font-extrabold text-daun-900"
            >
              1. Berapa liter isi wadah Anda?
            </label>
            <div className="mt-3 flex items-center gap-3">
              <input
                id="volume-wadah"
                type="number"
                min={1}
                max={1000}
                step={1}
                inputMode="numeric"
                value={liter}
                onChange={(e) => setLiter(Number(e.target.value) || 0)}
                className="w-32 rounded-2xl border-2 border-daun-300 bg-white px-4 py-3 text-center font-display text-2xl font-black text-daun-800 tabular-nums focus:border-daun-500"
              />
              <span className="font-display text-xl font-extrabold text-tinta-lembut">
                liter
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={200}
              step={1}
              value={Math.min(liter, 200)}
              onChange={(e) => setLiter(Number(e.target.value))}
              aria-label="Geser untuk mengatur ukuran wadah"
              className="mt-4 w-full accent-daun-600"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {PRESET.map((p) => (
                <button
                  key={p.liter}
                  type="button"
                  onClick={() => setLiter(p.liter)}
                  aria-pressed={liter === p.liter}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${
                    liter === p.liter
                      ? "border-daun-600 bg-daun-600 text-white"
                      : "border-daun-200 bg-white text-daun-800 hover:bg-daun-100"
                  }`}
                >
                  {p.label} {p.liter} L
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="tanggal-mulai"
              className="block font-display text-lg font-extrabold text-daun-900"
            >
              2. Kapan Anda mulai membuat?
            </label>
            <input
              id="tanggal-mulai"
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="mt-3 rounded-2xl border-2 border-daun-300 bg-white px-4 py-3 font-display text-lg font-extrabold text-daun-800 focus:border-daun-500"
            />
            <button
              type="button"
              onClick={() => {
                setLiter(20);
                setTanggal(hariIni());
              }}
              className="mt-4 flex items-center gap-2 rounded-full border-2 border-daun-200 bg-white px-4 py-2 text-sm font-bold text-daun-800 hover:bg-daun-100"
            >
              <RotateCcw size={16} aria-hidden />
              Kembalikan ke awal
            </button>
          </div>
        </div>
      </div>

      {/* ---- Bagian hasil ---- */}
      <div className="p-6 sm:p-8">
        <h4 className="font-display text-lg font-extrabold text-tinta-lembut">
          Takaran untuk wadah {angka(liter)} liter
        </h4>

        {takLazim ? (
          <p className="mt-4 rounded-3xl border-2 border-surya-300 bg-surya-50 p-5 font-semibold text-surya-800">
            Masukkan ukuran wadah antara 1 sampai 1.000 liter ya.
          </p>
        ) : (
          <>
            <div
              aria-live="polite"
              className="mt-4 grid gap-4 sm:grid-cols-3"
            >
              <HasilKartu
                ikon={<Candy size={30} aria-hidden />}
                bagian="1 bagian"
                nama="Gula merah / molase"
                nilai={berat(hasil.gula)}
                warna="surya"
              />
              <HasilKartu
                ikon={<Apple size={30} aria-hidden />}
                bagian="3 bagian"
                nama="Sisa buah & sayur"
                nilai={berat(hasil.buah)}
                warna="daun"
              />
              <HasilKartu
                ikon={<Droplets size={30} aria-hidden />}
                bagian="10 bagian"
                nama="Air bersih"
                nilai={volume(hasil.air)}
                warna="air"
              />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <p className="rounded-3xl border-2 border-daun-100 bg-daun-50 p-5 text-tinta">
                Sisakan <strong>{volume(hasil.sisaRuang)}</strong> ruang
                kosong di wadah (40%) supaya gas fermentasi punya tempat dan
                wadah tidak meledak.
              </p>
              <p className="flex items-start gap-3 rounded-3xl border-2 border-air-200 bg-air-50 p-5 text-tinta">
                <CalendarCheck
                  size={26}
                  className="mt-0.5 shrink-0 text-air-600"
                  aria-hidden
                />
                <span>
                  <strong className="block font-display text-lg text-air-800">
                    Siap dipanen 90 hari lagi
                  </strong>
                  {tambahHari(tanggal, 90)}
                </span>
              </p>
            </div>

            <ol className="mt-5 grid gap-3 sm:grid-cols-3">
              <Jadwal
                judul="Minggu ke-1"
                tanggal={tambahHari(tanggal, 7)}
                isi="Wadah bermulut kecil: buang gasnya. Wadah bermulut lebar: biarkan saja."
              />
              <Jadwal
                judul="Minggu ke-3"
                tanggal={tambahHari(tanggal, 21)}
                isi="Periksa kondisi larutan dari luar. Perbaiki bila ada masalah."
              />
              <Jadwal
                judul="Hari ke-30"
                tanggal={tambahHari(tanggal, 30)}
                isi="Mulai hari ini wadah tidak dibuka lagi sampai panen."
              />
            </ol>
          </>
        )}
      </div>
    </div>
  );
}

function HasilKartu({
  ikon,
  bagian,
  nama,
  nilai,
  warna,
}: {
  ikon: React.ReactNode;
  bagian: string;
  nama: string;
  nilai: string;
  warna: "daun" | "air" | "surya";
}) {
  const gaya = {
    daun: "border-daun-200 bg-daun-50 text-daun-700",
    air: "border-air-200 bg-air-50 text-air-700",
    surya: "border-surya-200 bg-surya-50 text-surya-700",
  }[warna];
  return (
    <div className={`rounded-4xl border-2 p-5 text-center ${gaya}`}>
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
        {ikon}
      </span>
      <p className="mt-3 text-sm font-extrabold tracking-wide uppercase">
        {bagian}
      </p>
      <p className="font-display text-4xl font-black text-tinta tabular-nums">
        {nilai}
      </p>
      <p className="mt-1 font-semibold text-tinta-lembut">{nama}</p>
    </div>
  );
}

function Jadwal({
  judul,
  tanggal,
  isi,
}: {
  judul: string;
  tanggal: string;
  isi: string;
}) {
  return (
    <li className="rounded-3xl border-2 border-daun-100 bg-white p-5">
      <p className="font-display text-lg font-extrabold text-daun-800">{judul}</p>
      <p className="text-sm font-bold text-air-700">{tanggal}</p>
      <p className="mt-1.5 text-sm text-tinta-lembut">{isi}</p>
    </li>
  );
}
