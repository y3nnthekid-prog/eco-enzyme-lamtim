import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { Bagian, Kartu, KepalaLaman, Wadah } from "@/components/ui";
import { semuaBerita, tanggalIndonesia } from "@/lib/berita";
import { situs } from "@/lib/situs";

export const metadata: Metadata = {
  title: "Berita Eco Enzyme Lampung Timur",
  description:
    "Kabar kegiatan, pelatihan, dan gerakan eco enzyme di Kabupaten Lampung Timur.",
};

export default function DaftarBerita() {
  const berita = semuaBerita();
  const [utama, ...sisanya] = berita;

  return (
    <>
      <KepalaLaman
        label="Kabar Terbaru"
        judul="Berita Eco Enzyme Lampung Timur"
        ringkasan="Pelatihan di desa dan sekolah, panen bersama, aksi bersih sungai, dan kabar lain dari gerakan eco enzyme di Kabupaten Lampung Timur."
      />

      <Bagian>
        <Wadah lebar="lebar">
          {berita.length === 0 ? (
            <Kartu warna="hijau">
              <h2 className="text-2xl text-daun-900">Belum ada berita</h2>
              <p className="mt-3 text-tinta-lembut">
                Halaman ini akan diisi dengan kabar kegiatan eco enzyme di
                Kabupaten Lampung Timur. Punya kabar untuk dimuat? Kirimkan ke{" "}
                <a
                  className="font-bold text-air-700 underline"
                  href={`mailto:${situs.email}`}
                >
                  {situs.email}
                </a>
                .
              </p>
            </Kartu>
          ) : (
            <>
              {/* Berita paling baru ditampilkan besar */}
              <Link
                href={`/berita/${utama.slug}`}
                className="group block rounded-5xl border border-daun-200/70 bg-white p-7 shadow-lembut angkat sm:p-10"
              >
                <p className="flex flex-wrap items-center gap-3 text-sm font-bold">
                  <span className="rounded-full bg-surya-400 px-3 py-1 text-surya-900">
                    Terbaru
                  </span>
                  <span className="rounded-full bg-daun-100 px-3 py-1 text-daun-800">
                    {utama.kategori}
                  </span>
                  <span className="flex items-center gap-1.5 text-tinta-lembut">
                    <CalendarDays size={16} aria-hidden />
                    {tanggalIndonesia(utama.tanggal)}
                  </span>
                  {utama.lokasi && (
                    <span className="flex items-center gap-1.5 text-tinta-lembut">
                      <MapPin size={16} aria-hidden />
                      {utama.lokasi}
                    </span>
                  )}
                </p>
                <h2 className="mt-4 text-3xl text-daun-900 group-hover:text-daun-700 sm:text-4xl">
                  {utama.judul}
                </h2>
                <p className="mt-4 max-w-3xl text-lg text-tinta-lembut">
                  {utama.ringkasan}
                </p>
                <span className="mt-5 inline-block font-display text-lg font-extrabold text-air-700">
                  Baca selengkapnya →
                </span>
              </Link>

              {sisanya.length > 0 && (
                <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {sisanya.map((b) => (
                    <li key={b.slug}>
                      <Link
                        href={`/berita/${b.slug}`}
                        className="group flex h-full flex-col rounded-4xl border border-garis bg-white p-6 shadow-lembut angkat"
                      >
                        <p className="flex flex-wrap items-center gap-2 text-sm font-bold">
                          <span className="rounded-full bg-daun-100 px-3 py-1 text-daun-800">
                            {b.kategori}
                          </span>
                          <span className="text-tinta-lembut">
                            {tanggalIndonesia(b.tanggal)}
                          </span>
                        </p>
                        <h2 className="mt-3 text-xl text-daun-900 group-hover:text-daun-700">
                          {b.judul}
                        </h2>
                        <p className="mt-2 flex-1 text-tinta-lembut">
                          {b.ringkasan}
                        </p>
                        <span className="mt-4 font-display font-extrabold text-air-700">
                          Baca selengkapnya →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <Kartu warna="hijau" className="mt-10">
                <h2 className="text-xl text-daun-900">
                  Punya kabar kegiatan eco enzyme?
                </h2>
                <p className="mt-2 text-tinta-lembut">
                  Kirim foto dan ceritanya ke{" "}
                  <a
                    className="font-bold text-air-700 underline"
                    href={`mailto:${situs.email}`}
                  >
                    {situs.email}
                  </a>{" "}
                  agar bisa kami muat di halaman ini.
                </p>
              </Kartu>
            </>
          )}
        </Wadah>
      </Bagian>
    </>
  );
}
