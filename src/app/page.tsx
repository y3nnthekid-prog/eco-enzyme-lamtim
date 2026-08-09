import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  Candy,
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
import { semuaBerita, tanggalIndonesia } from "@/lib/berita";
import { situs } from "@/lib/situs";

export default function Beranda() {
  const berita = semuaBerita().slice(0, 3);

  return (
    <>
      {/* ============================================ HERO ============ */}
      <div className="pola-daun relative overflow-hidden border-b-2 border-daun-100">
        <Wadah lebar="lebar" className="py-14 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-daun-700 shadow-lembut">
                <Leaf size={18} aria-hidden />
                Gerakan warga Kabupaten Lampung Timur
              </p>
              <h1 className="mt-6 text-4xl text-daun-900 sm:text-5xl lg:text-6xl">
                Sampah dapur bisa jadi{" "}
                <span className="text-surya-500">cairan serba guna</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-tinta-lembut sm:text-xl">
                Namanya <strong className="text-tinta">eco enzyme</strong>. Cuma
                dari kulit buah, gula merah, dan air. Bisa dipakai untuk mengepel
                lantai, mencuci piring, menyuburkan tanaman, sampai menjernihkan
                air — dan membantu Bumi jadi lebih sehat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Tombol href="/cara-membuat">Cara Membuat</Tombol>
                <Tombol href="/apa-itu-eco-enzyme" varian="garis">
                  Apa Itu Eco Enzyme?
                </Tombol>
              </div>
              <p className="mt-6 text-tinta-lembut">
                Bisa dibaca anak-anak sampai kakek-nenek. Butuh huruf lebih
                besar? Tekan tombol{" "}
                <span className="font-bold text-daun-700">A</span> di pojok atas.
              </p>
            </div>

            {/* Kartu resep 1 : 3 : 10 */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rotate-3 rounded-5xl bg-daun-100/70" />
              <div className="rounded-5xl border-2 border-daun-200 bg-white p-6 shadow-angkat sm:p-8">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo-een-lamtim.png"
                    alt="Logo Eco Enzyme Nusantara Kabupaten Lampung Timur"
                    width={72}
                    height={72}
                    priority
                    className="h-16 w-16 sm:h-18 sm:w-18"
                  />
                  <p className="font-display text-xl leading-tight font-extrabold text-daun-900">
                    Resepnya cuma satu
                    <span className="block text-base font-bold text-tinta-lembut">
                      Hafalkan angka ini: 1 – 3 – 10
                    </span>
                  </p>
                </div>

                <ul className="mt-7 grid gap-4">
                  <BahanBaris
                    angka="1"
                    ikon={<Candy size={26} aria-hidden />}
                    nama="bagian gula merah"
                    keterangan="atau molase (tetes tebu)"
                    warna="surya"
                  />
                  <BahanBaris
                    angka="3"
                    ikon={<Apple size={26} aria-hidden />}
                    nama="bagian sisa buah & sayur"
                    keterangan="kulit buah, potongan sayur mentah"
                    warna="daun"
                  />
                  <BahanBaris
                    angka="10"
                    ikon={<Droplets size={26} aria-hidden />}
                    nama="bagian air bersih"
                    keterangan="air sumur, air hujan, atau air keran"
                    warna="air"
                  />
                </ul>

                <p className="mt-6 rounded-3xl bg-daun-50 px-5 py-4 text-center font-display text-lg font-extrabold text-daun-800">
                  Diamkan 90 hari 🕒 lalu panen
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
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Angka
              angka="60"
              satuan="%"
              keterangan="Sampah yang menumpuk di TPA adalah sampah organik — sisa dapur kita"
            />
            <Angka
              angka="21"
              satuan="×"
              keterangan="Gas metana dari sampah busuk memerangkap panas 21 kali lebih kuat dari CO₂"
              warna="surya"
            />
            <Angka
              angka="10"
              satuan="pohon"
              keterangan="Satu tong eco enzyme diperkirakan setara manfaat 10 pohon bagi udara"
              warna="air"
            />
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
                    className="group flex h-full flex-col rounded-4xl border-2 border-daun-100 bg-white p-6 shadow-lembut transition-shadow hover:shadow-angkat"
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
  ikon,
  nama,
  keterangan,
  warna,
}: {
  angka: string;
  ikon: React.ReactNode;
  nama: string;
  keterangan: string;
  warna: "daun" | "air" | "surya";
}) {
  const gaya = {
    daun: "bg-daun-100 text-daun-700",
    air: "bg-air-100 text-air-700",
    surya: "bg-surya-100 text-surya-700",
  }[warna];
  return (
    <li className="flex items-center gap-4">
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-2xl font-black ${gaya}`}
      >
        {angka}
      </span>
      <span className={`hidden shrink-0 rounded-xl p-2 sm:block ${gaya}`} aria-hidden>
        {ikon}
      </span>
      <span>
        <span className="block font-display text-lg font-extrabold text-tinta">
          {nama}
        </span>
        <span className="block text-tinta-lembut">{keterangan}</span>
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
    <li className="rounded-4xl border-2 border-daun-100 bg-white p-7 shadow-lembut">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-daun-600 font-display text-2xl font-black text-white">
        {nomor}
      </span>
      <h3 className="mt-5 text-2xl text-daun-900">{judul}</h3>
      <p className="mt-2 text-tinta-lembut">{isi}</p>
    </li>
  );
}
