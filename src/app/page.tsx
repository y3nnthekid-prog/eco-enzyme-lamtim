import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Droplets,
  Leaf,
  Recycle,
  Sparkles,
  Sprout,
  SprayCan,
  Wind,
  WashingMachine,
} from "lucide-react";
import {
  Angka,
  Bagian,
  Catatan,
  JudulBagian,
  Kartu,
  KartuIkon,
  TautanLanjut,
  Tombol,
  Wadah,
} from "@/components/ui";
import { TombolWhatsApp } from "@/components/tombol-whatsapp";
import { Muncul } from "@/components/muncul";
import { semuaBerita, tanggalIndonesia } from "@/lib/berita";
import { situs } from "@/lib/situs";

export default function Beranda() {
  const berita = semuaBerita().slice(0, 3);

  return (
    <>
      {/* ============================================ HERO ============ */}
      <div className="pola-daun relative overflow-hidden">
        <Wadah lebar="lebar" className="pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="kicker masuk">
                <Leaf size={15} aria-hidden />
                Gerakan warga Kabupaten Lampung Timur
              </p>
              <h1 className="masuk mt-6 text-[2.75rem] leading-[1.03] tracking-[-0.03em] text-daun-900 sm:text-6xl lg:text-[4.25rem] [--jeda:70ms]">
                Sampah dapur bisa jadi{" "}
                {/* Warna frasa ini mengalir pelan menembus oranye, hijau, dan
                    biru — tiga warna logo, sekaligus kiasan cairannya sendiri.
                    Karena efeknya menempel pada teks, bukan elemen terpisah,
                    frasa boleh pecah ke baris mana pun tanpa merusak apa pun. */}
                <em className="teks-cairan not-italic">cairan serba guna</em>
              </h1>
              <p className="masuk mt-8 max-w-xl text-lg leading-relaxed text-tinta-lembut sm:text-xl [--jeda:140ms]">
                Namanya <strong className="text-tinta">eco enzyme</strong>. Cuma
                dari kulit buah, gula merah, dan air. Bisa dipakai mengepel
                lantai, mencuci piring, menyuburkan tanaman, sampai menjernihkan
                air.
              </p>
              <div className="masuk mt-9 flex flex-wrap items-center gap-3 [--jeda:210ms]">
                <Tombol href="/cara-membuat">Mulai dari sini</Tombol>
                <Tombol href="/apa-itu-eco-enzyme" varian="garis">
                  Apa itu eco enzyme?
                </Tombol>
              </div>
              <p className="masuk mt-7 text-tinta-lembut [--jeda:280ms]">
                Butuh huruf lebih besar? Tekan tombol{" "}
                <span className="font-bold text-daun-700">A</span> di pojok
                kanan atas.
              </p>
            </div>

            {/* Kartu resep 1 : 3 : 10 */}
            <div className="masuk [--jeda:340ms]">
              <div className="rounded-4xl border border-garis bg-white/85 p-7 shadow-angkat backdrop-blur-sm sm:p-9">
                <div className="flex items-center gap-4 border-b border-garis pb-6">
                  <Image
                    src="/logo-een-lamtim.png"
                    alt="Logo Eco Enzyme Nusantara Kabupaten Lampung Timur"
                    width={72}
                    height={72}
                    priority
                    className="h-14 w-14 shrink-0"
                  />
                  <p className="font-display leading-tight font-extrabold text-daun-900">
                    <span className="block text-xs tracking-[0.14em] text-tinta-lembut uppercase">
                      Resepnya cuma satu
                    </span>
                    <span className="mt-1 block text-2xl tracking-[-0.02em]">
                      1 &middot; 3 &middot; 10
                    </span>
                  </p>
                </div>

                <ul className="divide-y divide-garis">
                  <BahanBaris
                    angka="1"
                    nama="bagian gula merah"
                    keterangan="atau molase (tetes tebu)"
                    warna="surya"
                  />
                  <BahanBaris
                    angka="3"
                    nama="bagian sisa buah & sayur"
                    keterangan="kulit buah, potongan sayur mentah"
                    warna="daun"
                  />
                  <BahanBaris
                    angka="10"
                    nama="bagian air bersih"
                    keterangan="air sumur, air hujan, atau air keran"
                    warna="air"
                  />
                </ul>

                <p className="mt-6 flex items-center gap-2.5 border-t border-garis pt-6 font-display font-extrabold text-daun-800">
                  <Clock size={19} className="text-daun-500" aria-hidden />
                  Diamkan 90 hari, lalu panen
                </p>
              </div>
            </div>
          </div>
        </Wadah>
      </div>

      {/* ==================================== APA ITU (RINGKAS) ======== */}
      <Bagian>
        <Wadah lebar="lebar">
          <JudulBagian
            rata="tengah"
            label="Kenalan dulu"
            judul="Jadi, eco enzyme itu apa?"
            ringkasan="Bayangkan seperti membuat asinan, tapi bukan untuk dimakan. Sisa buah dan sayur dicampur gula dan air, lalu didiamkan 90 hari di wadah tertutup. Mikroba bekerja dan menghasilkan cairan kaya enzim yang serba guna."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <KartuIkon ikon={<Recycle size={28} />} judul="Sampah jadi berguna">
              Kulit buah dan potongan sayur yang biasanya dibuang berubah jadi
              cairan yang dipakai setiap hari di rumah.
            </KartuIkon>
            <KartuIkon
              ikon={<Sparkles size={28} />}
              judul="Aman & murah"
              warna="surya"
            >
              Bahan-bahannya ada di dapur. Tidak perlu bahan kimia, dan
              pengeluaran bulanan rumah tangga ikut hemat.
            </KartuIkon>
            <KartuIkon ikon={<Sprout size={28} />} judul="Bumi ikut sehat" warna="air">
              Sampah organik tidak menumpuk di TPA, sehingga gas metana penyebab
              pemanasan global berkurang.
            </KartuIkon>
          </div>

          <div className="mt-10 text-center">
            <TautanLanjut href="/apa-itu-eco-enzyme">
              Baca penjelasan lengkapnya
            </TautanLanjut>
          </div>
        </Wadah>
      </Bagian>

      {/* ============================================== ANGKA ========= */}
      <Bagian latar="hijau">
        <Wadah lebar="lebar">
          <JudulBagian
            rata="tengah"
            label="Kenapa ini penting"
            judul="Tiga angka yang perlu kita tahu"
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
            <Muncul>
              <Angka
                angka="60"
                satuan="%"
                keterangan="Sampah yang menumpuk di TPA adalah sampah organik — sisa dapur kita"
              />
            </Muncul>
            <Muncul jeda={110}>
              <Angka
                angka="21"
                satuan="×"
                keterangan="Gas metana dari sampah busuk memerangkap panas 21 kali lebih kuat dari CO₂"
                warna="surya"
              />
            </Muncul>
            <Muncul jeda={220}>
              <Angka
                angka="10"
                satuan="pohon"
                keterangan="Satu tong eco enzyme diperkirakan setara manfaat 10 pohon bagi udara"
                warna="air"
              />
            </Muncul>
          </div>
          <div className="mt-8">
            <Catatan jenis="info" judul="Bukan sekadar teori">
              Tahun 2005, TPA Leuwigajah di Bandung meledak akibat gas dari
              sampah organik. Kejadian itu menghilangkan 157 nyawa, 137 rumah,
              dan 2 desa. Mengelola sampah dapur sendiri di rumah adalah cara
              paling sederhana untuk ikut mencegah hal seperti itu terulang.
            </Catatan>
          </div>
        </Wadah>
      </Bagian>

      {/* ============================================= 3 LANGKAH ====== */}
      <Bagian>
        <Wadah lebar="lebar">
          <JudulBagian
            label="Gampang kok"
            judul="Cukup 3 langkah, lalu tunggu"
            ringkasan="Tidak perlu alat mahal. Wadah plastik bertutup, timbangan, dan pisau sudah cukup."
          />

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            <LangkahKartu
              nomor={1}
              judul="Campur"
              isi="Masukkan air 60% dari isi wadah, tambahkan gula 10% dari berat air, lalu potongan sisa buah/sayur 30% dari berat air."
            />
            <LangkahKartu
              nomor={2}
              judul="Tutup & tunggu"
              isi="Tutup rapat, beri label tanggal. Aduk di minggu ke-1, periksa di minggu ke-3, lalu jangan dibuka lagi setelah 30 hari."
            />
            <LangkahKartu
              nomor={3}
              judul="Panen"
              isi="Setelah 90 hari, saring dan simpan cairannya di botol tertutup. Eco enzyme tidak punya tanggal kedaluwarsa."
            />
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Tombol href="/cara-membuat" varian="kedua">
              Buka panduan + kalkulator takaran
            </Tombol>
            <p className="text-tinta-lembut">
              Bingung menghitung? Kalkulator kami yang menghitung untuk Anda.
            </p>
          </div>
        </Wadah>
      </Bagian>

      {/* ============================================== MANFAAT ======= */}
      <Bagian latar="biru">
        <Wadah lebar="lebar">
          <JudulBagian
            label="Sudah jadi, lalu dipakai apa?"
            judul="Satu botol untuk banyak keperluan"
            ringkasan="Eco enzyme hampir selalu diencerkan dulu dengan air. Takarannya berbeda-beda menurut keperluan."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <KartuIkon ikon={<WashingMachine size={28} />} judul="Cuci & bersih-bersih">
              Cuci piring, cuci pakaian, pel lantai, dan bersihkan kloset tanpa
              pembersih kimia.
            </KartuIkon>
            <KartuIkon ikon={<Sprout size={28} />} judul="Kebun & sawah" warna="daun">
              Pupuk organik dan pengendali hama alami dengan takaran 1 : 1.000.
            </KartuIkon>
            <KartuIkon ikon={<Wind size={28} />} judul="Udara lebih segar" warna="air">
              Disemprotkan sebagai penjernih udara alami di dalam ruangan.
            </KartuIkon>
            <KartuIkon ikon={<Droplets size={28} />} judul="Air & selokan" warna="air">
              Membantu mengurangi bau selokan dan memperbaiki kualitas air kolam.
            </KartuIkon>
            <KartuIkon ikon={<SprayCan size={28} />} judul="Merendam sayur" warna="surya">
              2 sendok makan per 1 liter air, rendam 45 menit untuk meluruhkan
              sisa pestisida.
            </KartuIkon>
            <KartuIkon ikon={<Recycle size={28} />} judul="Ampasnya pun berguna" warna="surya">
              Bisa jadi pupuk, campuran kompos, pengharum, atau pembersih saluran
              air.
            </KartuIkon>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Tombol href="/cara-memakai">Lihat semua takaran pemakaian</Tombol>
            <Tombol href="/manfaat" varian="garis">
              Daftar manfaat lengkap
            </Tombol>
          </div>
        </Wadah>
      </Bagian>

      {/* =============================================== BERITA ======= */}
      <Bagian>
        <Wadah lebar="lebar">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <JudulBagian
              label="Kabar terbaru"
              judul="Berita Eco Enzyme Lampung Timur"
              ringkasan="Kegiatan pelatihan, panen bersama, dan gerakan warga di Kabupaten Lampung Timur."
            />
            <TautanLanjut href="/berita">Semua berita</TautanLanjut>
          </div>

          {berita.length === 0 ? (
            <Kartu className="mt-10" warna="hijau">
              <p className="font-display text-xl font-extrabold text-daun-900">
                Belum ada berita yang dimuat.
              </p>
              <p className="mt-2 text-tinta-lembut">
                Punya kabar kegiatan eco enzyme di desa atau sekolah Anda? Kirim
                ke{" "}
                <a
                  className="font-bold text-air-700 underline"
                  href={`mailto:${situs.email}`}
                >
                  {situs.email}
                </a>{" "}
                agar kami muat di sini.
              </p>
            </Kartu>
          ) : (
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {berita.map((b) => (
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
                    <h3 className="mt-3 text-xl text-daun-900 group-hover:text-daun-700">
                      {b.judul}
                    </h3>
                    <p className="mt-2 flex-1 text-tinta-lembut">{b.ringkasan}</p>
                    <span className="mt-4 font-display font-extrabold text-air-700">
                      Baca selengkapnya →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Wadah>
      </Bagian>

      {/* ================================================== CTA ======= */}
      <div className="pola-titik border-y-2 border-daun-200 bg-daun-50">
        <Wadah lebar="normal" className="py-16 text-center sm:py-20">
          <h2 className="text-3xl text-daun-900 sm:text-4xl">
            Mulai dari dapur Anda sendiri
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-tinta-lembut sm:text-xl">
            Tidak perlu menunggu program besar. Satu ember di dapur, sisa kulit
            buah hari ini, dan 90 hari kesabaran — itu sudah menjadi sumbangan
            nyata untuk Lampung Timur.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Tombol href="/cara-membuat">Saya mau coba membuat</Tombol>
            <TombolWhatsApp
              pesan="Halo, saya ingin belajar membuat eco enzyme."
              label="Tanya lewat WhatsApp"
            />
          </div>
          <p className="mt-6 text-tinta-lembut">
            Ada pendamping yang siap membantu bila Anda bingung di tengah jalan.
          </p>
        </Wadah>
      </div>
    </>
  );
}

/* -------------------------------------------------------- pendukung ---- */

function BahanBaris({
  angka,
  nama,
  keterangan,
  warna,
}: {
  angka: string;
  nama: string;
  keterangan: string;
  warna: "daun" | "air" | "surya";
}) {
  const gaya = {
    daun: "text-daun-500",
    air: "text-air-500",
    surya: "text-surya-400",
  }[warna];
  return (
    <li className="flex items-baseline gap-5 py-4">
      {/* Angka takaran dibiarkan besar dan telanjang, bukan dijejalkan ke
          dalam kotak berwarna. Lebar tetap supaya "1", "3", "10" rata kanan. */}
      <span
        className={`w-12 shrink-0 text-right font-display text-[2.1rem] leading-none font-black tracking-[-0.03em] tabular-nums ${gaya}`}
        aria-hidden
      >
        {angka}
      </span>
      <span>
        <span className="block font-display font-extrabold text-tinta">
          <span className="sr-only">{angka} </span>
          {nama}
        </span>
        <span className="mt-0.5 block text-sm text-tinta-lembut">
          {keterangan}
        </span>
      </span>
    </li>
  );
}

function LangkahKartu({
  nomor,
  judul,
  isi,
}: {
  nomor: number;
  judul: string;
  isi: string;
}) {
  return (
    // Nomor besar tipis di atas garis, tanpa kartu maupun lingkaran hijau.
    // Tiga langkah berjajar jadi terbaca seperti urutan, bukan tiga kotak.
    // Jeda bertingkat membuatnya masuk satu per satu, mengikuti urutan baca.
    <Muncul
      sebagai="li"
      jeda={(nomor - 1) * 110}
      className="border-t-2 border-daun-200 pt-6"
    >
      <span
        className="font-display text-5xl leading-none font-black tracking-[-0.04em] text-daun-200"
        aria-hidden
      >
        {String(nomor).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-2xl tracking-[-0.015em] text-daun-900">
        <span className="sr-only">Langkah {nomor}: </span>
        {judul}
      </h3>
      <p className="mt-2.5 leading-relaxed text-tinta-lembut">{isi}</p>
    </Muncul>
  );
}
