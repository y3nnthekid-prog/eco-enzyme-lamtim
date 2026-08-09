import type { Metadata } from "next";
import { Beaker, CupSoda, Milk } from "lucide-react";
import {
  Bagian,
  Catatan,
  DaftarCeklis,
  JudulBagian,
  Kartu,
  KepalaLaman,
  Tombol,
  Wadah,
} from "@/components/ui";
import { PencariTakaran } from "@/components/pencari-takaran";
import { daftarPemakaian } from "@/data/pemakaian";

export const metadata: Metadata = {
  title: "Cara Memakai Eco Enzyme",
  description:
    "Takaran pengenceran eco enzyme untuk cuci piring, pel lantai, cuci pakaian, pupuk tanaman, penjernih udara, dan keperluan lainnya.",
};

export default function CaraMemakai() {
  return (
    <>
      <KepalaLaman
        label="Panduan Pemakaian"
        judul="Cara Memakai Eco Enzyme"
        ringkasan="Eco enzyme hampir selalu perlu diencerkan dulu dengan air. Cari keperluan Anda di bawah, lalu ikuti takarannya."
      />

      {/* ============================================= ATURAN DASAR ==== */}
      <Bagian>
        <Wadah lebar="lebar">
          <JudulBagian
            label="Sebelum mulai"
            judul="Tiga aturan yang perlu diingat"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Kartu warna="hijau">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-daun-700">
                <Beaker size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-daun-900">
                1. Encerkan dulu
              </h3>
              <p className="mt-2 text-tinta-lembut">
                Eco enzyme murni bersifat asam (pH di bawah 4). Hanya beberapa
                keperluan yang boleh memakainya murni — misalnya membersihkan
                kloset atau saluran air.
              </p>
            </Kartu>
            <Kartu warna="biru">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-air-700">
                <CupSoda size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-air-900">
                2. Kenali ukuran sehari-hari
              </h3>
              <ul className="mt-2 grid gap-1.5 text-tinta-lembut">
                <li>1 tutup botol air mineral ≈ 10 ml</li>
                <li>1 sendok makan ≈ 15 ml</li>
                <li>1 gelas belimbing ≈ 200 ml</li>
                <li>1 ember cucian ≈ 10 liter</li>
              </ul>
            </Kartu>
            <Kartu warna="surya">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-surya-700">
                <Milk size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-surya-900">
                3. Simpan yang benar
              </h3>
              <p className="mt-2 text-tinta-lembut">
                Simpan di botol plastik tertutup, jauh dari sinar matahari
                langsung. Tidak ada tanggal kedaluwarsa — makin lama malah makin
                baik.
              </p>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================= PENCARI ==== */}
      <Bagian latar="hijau">
        <Wadah lebar="lebar">
          <JudulBagian
            label="Cari takaran"
            judul="Mau dipakai untuk apa hari ini?"
            ringkasan="Ketik keperluan Anda atau pilih kategorinya. Semua takaran mengikuti tabel Persatuan Enzim Alam Sekitar Malaysia."
          />
          <div className="mt-10">
            <PencariTakaran />
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================== RESEP ===== */}
      <Bagian>
        <Wadah lebar="lebar">
          <JudulBagian
            label="Resep lanjutan"
            judul="Dua resep modifikasi yang populer"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Kartu warna="hijau">
              <h3 className="text-2xl text-daun-900">
                Eco enzyme khusus sabun cair
              </h3>
              <p className="mt-2 text-tinta-lembut">
                Dibuat sejak awal dengan tambahan lerak, supaya hasilnya lebih
                berbusa dan cocok untuk sabun.
              </p>
              <ul className="mt-5 grid gap-2.5 font-display text-lg font-extrabold text-daun-800">
                <li>10 bagian air</li>
                <li>3 bagian sisa buah / sayur</li>
                <li>1 bagian gula</li>
                <li>1 bagian lerak kering tanpa biji</li>
              </ul>
              <div className="mt-5">
                <DaftarCeklis
                  jenis="jangan"
                  butir={[
                    <>
                      Jangan pakai <strong>nanas</strong> dan{" "}
                      <strong>cabai</strong> — membuat kulit kering dan pedas
                    </>,
                  ]}
                />
              </div>
              <p className="mt-5 rounded-2xl bg-white px-5 py-4 text-tinta">
                Hasil akhirnya tetap perlu diencerkan dengan air sebelum dipakai.
              </p>
            </Kartu>

            <Kartu warna="surya">
              <h3 className="text-2xl text-surya-900">Eco enzyme aromatik</h3>
              <p className="mt-2 text-tinta-lembut">
                Untuk mendapatkan aroma yang lebih segar. Ada dua cara:
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-3xl bg-white p-5">
                  <p className="font-display text-lg font-extrabold text-surya-800">
                    Cara 1 — sejak awal
                  </p>
                  <p className="mt-1 text-tinta-lembut">
                    Gunakan kulit buah jeruk-jerukan sebagai bahan utama: jeruk
                    lokal, jeruk nipis, lemon, jeruk bali, atau jeruk purut.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-5">
                  <p className="font-display text-lg font-extrabold text-surya-800">
                    Cara 2 — setelah panen
                  </p>
                  <p className="mt-1 text-tinta-lembut">
                    Tambahkan <strong>10% bahan aromatik</strong> ke hasil panen,
                    lalu fermentasi ulang <strong>1 bulan</strong>. Contoh bahan:
                    daun jeruk purut, mint, sereh, daun pinus, rosemary, kemangi,
                    kari, pandan, dan aneka bunga.
                  </p>
                </div>
              </div>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ============================================ TABEL LENGKAP ==== */}
      <Bagian latar="biru">
        <Wadah lebar="lebar">
          <JudulBagian
            label="Ringkasan"
            judul="Tabel takaran lengkap"
            ringkasan="Versi ringkas untuk dicetak atau difoto sebagai catatan di dapur."
          />
          <div className="mt-10 overflow-x-auto rounded-4xl border-2 border-air-200 bg-white">
            <table className="w-full min-w-[44rem] border-collapse text-left">
              <caption className="sr-only">
                Takaran pemakaian eco enzyme untuk berbagai keperluan
              </caption>
              <thead>
                <tr className="bg-air-100">
                  <th scope="col" className="p-4 font-display text-air-900">
                    Keperluan
                  </th>
                  <th scope="col" className="p-4 font-display text-air-900">
                    Takaran
                  </th>
                  <th scope="col" className="p-4 font-display text-air-900">
                    Gunanya
                  </th>
                </tr>
              </thead>
              <tbody>
                {daftarPemakaian.map((p, i) => (
                  <tr
                    key={p.id}
                    className={i % 2 === 1 ? "bg-air-50/60" : undefined}
                  >
                    <th
                      scope="row"
                      className="p-4 align-top font-display font-extrabold text-tinta"
                    >
                      {p.nama}
                    </th>
                    <td className="p-4 align-top font-semibold text-air-800">
                      {p.takaran}
                    </td>
                    <td className="p-4 align-top text-tinta-lembut">
                      {p.manfaat}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-tinta-lembut">
            Sumber takaran: Persatuan Enzim Alam Sekitar Malaysia, dimuat dalam
            Modul Kelas Belajar Eco-Enzyme (Ngajaga Bumi, 2020).
          </p>
        </Wadah>
      </Bagian>

      {/* ============================================== KEAMANAN ====== */}
      <Bagian>
        <Wadah>
          <JudulBagian label="Keamanan" judul="Hal yang perlu diperhatikan" />
          <div className="mt-10 grid gap-6">
            <Catatan jenis="penting" judul="Tidak untuk diminum">
              <p>
                Modul resmi Eco Enzyme Nusantara menegaskan:{" "}
                <strong>
                  eco enzyme hanya untuk pemakaian luar, tidak untuk dikonsumsi.
                </strong>{" "}
                Jangan diminum, dan jangan diberikan kepada anak untuk diminum.
              </p>
            </Catatan>

            <Catatan jenis="penting" judul="Untuk pemakaian yang menyentuh tubuh">
              <p>
                Sebagian warga memakai eco enzyme untuk mandi, keramas, berkumur,
                atau merendam kaki. Bila Anda ingin mencobanya:
              </p>
              <ul className="mt-3 grid gap-2">
                <li>• Selalu encerkan sesuai takaran, jangan dipakai murni.</li>
                <li>
                  • Coba dulu sedikit di kulit. Hentikan bila terasa perih, gatal,
                  atau memerah.
                </li>
                <li>• Jangan kenakan pada mata atau luka terbuka.</li>
                <li>
                  • <strong>Eco enzyme bukan obat.</strong> Bila Anda sedang
                  sakit, tetap periksa ke dokter atau puskesmas. Jangan mengganti
                  pengobatan medis dengan eco enzyme.
                </li>
              </ul>
            </Catatan>

            <Catatan jenis="tips" judul="Untuk pemakaian rumah tangga">
              <ul className="grid gap-2">
                <li>
                  • Jangan campur eco enzyme dengan pemutih atau pembersih kimia
                  keras dalam satu wadah.
                </li>
                <li>
                  • Simpan dalam wadah plastik, bukan kaca, dan beri label yang
                  jelas.
                </li>
                <li>
                  • Untuk permukaan yang mudah tergores oleh asam — seperti marmer
                  — coba dulu di bagian yang tersembunyi.
                </li>
              </ul>
            </Catatan>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Tombol href="/manfaat">Lihat semua manfaat</Tombol>
            <Tombol href="/cara-membuat" varian="garis">
              Kembali ke cara membuat
            </Tombol>
          </div>
        </Wadah>
      </Bagian>
    </>
  );
}
