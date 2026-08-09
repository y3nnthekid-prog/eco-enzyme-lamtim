import type { Metadata } from "next";
import {
  Bug,
  Car,
  Fish,
  HeartPulse,
  Home,
  Leaf,
  MapPin,
  Recycle,
  Shirt,
  Sprout,
  Waves,
  Wind,
} from "lucide-react";
import {
  Angka,
  Bagian,
  Catatan,
  JudulBagian,
  Kartu,
  KepalaLaman,
  Tombol,
  Wadah,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Manfaat Eco Enzyme",
  description:
    "Manfaat eco enzyme untuk rumah tangga, pertanian, udara, air, dan lingkungan — beserta manfaat ampasnya.",
};

export default function Manfaat() {
  return (
    <>
      <KepalaLaman
        label="Manfaat"
        judul="Satu Cairan, Banyak Kegunaan"
        ringkasan="Karena mengandung bermacam enzim alami, eco enzyme berguna di banyak tempat sekaligus — dari bak cuci piring sampai sawah dan sungai."
      />

      {/* ================================================= RUMAH ====== */}
      <Bagian>
        <Wadah lebar="lebar">
          <JudulBagian
            label="Di rumah"
            judul="Menggantikan pembersih kimia"
            ringkasan="Ini manfaat yang paling cepat terasa. Satu botol bisa menggantikan beberapa produk yang biasa kita beli tiap bulan."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ManfaatKartu
              ikon={<Home size={26} />}
              judul="Pel lantai & pembersih dapur"
              isi="Membasmi kuman dan minyak. Serangga dan tikus pun berkurang."
            />
            <ManfaatKartu
              ikon={<Waves size={26} />}
              judul="Kamar mandi & kloset"
              isi="Bau hilang, kerak mudah dibersihkan, dan saluran tidak mudah tersumbat. Membantu kerja bakteri di septic tank."
            />
            <ManfaatKartu
              ikon={<Shirt size={26} />}
              judul="Cuci pakaian"
              isi="Mengangkat noda dan menjaga warna kain, tanpa pemutih dan pelembut kimia."
            />
            <ManfaatKartu
              ikon={<Wind size={26} />}
              judul="Penjernih udara"
              isi="Disemprotkan untuk menyegarkan ruangan dan mengurangi bau serta asap dapur."
              warna="air"
            />
            <ManfaatKartu
              ikon={<Bug size={26} />}
              judul="Merendam sayur & buah"
              isi="Membantu meluruhkan sisa pestisida sebelum bahan dimasak."
              warna="air"
            />
            <ManfaatKartu
              ikon={<Car size={26} />}
              judul="Hewan peliharaan & kandang"
              isi="Mengurangi bau badan hewan, kutu, dan bau amonia di kandang."
              warna="air"
            />
          </ul>
        </Wadah>
      </Bagian>

      {/* =============================================== KEBUN ======== */}
      <Bagian latar="hijau">
        <Wadah lebar="lebar">
          <JudulBagian
            label="Di kebun & sawah"
            judul="Pupuk dan pengendali hama alami"
            ringkasan="Petani di berbagai daerah memakai eco enzyme dengan takaran 1 : 1.000 untuk pupuk maupun pengendali hama."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Kartu>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-daun-100 text-daun-700">
                <Sprout size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-daun-900">Sebagai pupuk</h3>
              <p className="mt-2 text-tinta-lembut">
                Encerkan 1 : 1.000 lalu siramkan langsung ke tanah. Tanah yang
                semula gersang berangsur bisa ditanami kembali.
              </p>
            </Kartu>
            <Kartu>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-daun-100 text-daun-700">
                <Bug size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-daun-900">
                Sebagai pengendali hama
              </h3>
              <p className="mt-2 text-tinta-lembut">
                Semprotkan langsung ke bagian tanaman yang terkena hama — tanpa
                racun kimia yang membahayakan petani dan tanah.
              </p>
            </Kartu>
            <Kartu>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-daun-100 text-daun-700">
                <Recycle size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-daun-900">Ampasnya pun terpakai</h3>
              <p className="mt-2 text-tinta-lembut">
                Dikubur di tanah atau dimasukkan ke lubang biopori sebagai pupuk
                organik, dan bisa dicampurkan ke kompos.
              </p>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ========================================== LINGKUNGAN ======== */}
      <Bagian>
        <Wadah lebar="lebar">
          <JudulBagian
            label="Untuk lingkungan"
            judul="Udara, air, dan tanah"
            ringkasan="Manfaat terbesar eco enzyme justru bukan di rumah kita, melainkan di lingkungan sekitar."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Kartu warna="biru">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-air-700">
                <Fish size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-2xl text-air-900">Memperbaiki air</h3>
              <ul className="mt-3 grid gap-2.5 text-tinta">
                <li>
                  Mengurangi bau dan lumut di <strong>selokan dan sungai</strong>.
                </li>
                <li>
                  Menjernihkan <strong>kolam dan danau</strong> yang tercemar
                  dengan takaran 1 : 20.000 hingga 1 : 100.000, dituang berkala.
                </li>
                <li>
                  Dituangkan ke <strong>saluran irigasi sawah</strong> untuk
                  memperbaiki kualitas air pengairan.
                </li>
              </ul>
            </Kartu>

            <Kartu warna="hijau">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-daun-700">
                <Leaf size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-2xl text-daun-900">
                Mengurangi gas rumah kaca
              </h3>
              <p className="mt-3 text-tinta">
                Sampah organik yang difermentasi jadi eco enzyme tidak
                menghasilkan gas metana seperti saat membusuk di TPA. Fermentasi
                melepaskan CO₂ dan hidrogen — CO₂ masih bisa diserap tumbuhan dan
                21 kali lebih lemah dari metana dalam memerangkap panas.
              </p>
            </Kartu>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Angka
              angka="1 : 1.000"
              keterangan="Takaran untuk pupuk dan pengendali hama tanaman"
            />
            <Angka
              angka="1 : 1.000"
              keterangan="Takaran untuk penjernih udara dalam ruangan"
              warna="air"
            />
            <Angka
              angka="1 tong"
              keterangan="Diperkirakan setara manfaat 10 pohon bagi kualitas udara"
              warna="surya"
            />
          </div>
        </Wadah>
      </Bagian>

      {/* ============================================ LAPANGAN ======== */}
      <Bagian latar="hijau">
        <Wadah lebar="lebar">
          <JudulBagian
            label="Bukti di lapangan"
            judul="Sudah dicoba di berbagai daerah"
            ringkasan="Bukan sekadar teori. Ini beberapa penerapan yang tercatat dalam modul resmi Eco Enzyme Nusantara."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            <LapanganKartu
              tempat="Embung Langensari, Yogyakarta"
              apa="Penjernihan embung"
              isi="Eco enzyme dituangkan sebanyak 4 kali, seminggu sekali, masing-masing 20 liter."
            />
            <LapanganKartu
              tempat="Batam — Pak Joni Oei"
              apa="Penjernihan kolam air hujan"
              isi="Takaran 1 : 50.000 hingga 1 : 100.000, dituang sebulan sekali. Total 1.200 liter selama 6 bulan, dan air kolamnya berangsur jernih."
            />
            <LapanganKartu
              tempat="TPA Banyuroto, Kulon Progo"
              apa="Mengurangi bau tempat pembuangan"
              isi="Sepuluh sampai lima belas menit setelah penyemprotan, bau di sekitar TPA hilang dan udara terasa lebih segar."
            />
            <LapanganKartu
              tempat="Lahan bekas pabrik plastik"
              apa="Memulihkan tanah gersang"
              isi="Lahan gersang berbatu yang dirawat dengan eco enzyme akhirnya bisa ditumbuhi tanaman kacang panjang."
            />
          </ul>
        </Wadah>
      </Bagian>

      {/* ============================================ PERAWATAN ======= */}
      <Bagian latar="krem">
        <Wadah>
          <JudulBagian
            label="Perawatan diri"
            judul="Dipakai sebagian warga, dengan catatan"
          />

          <div className="mt-8 grid gap-6">
            <Catatan jenis="penting" judul="Baca ini dulu">
              <p>
                Modul resmi Eco Enzyme Nusantara sendiri menutup dengan aturan
                yang tegas:{" "}
                <strong>
                  eco enzyme hanya untuk pemakaian luar, tidak untuk
                  dikonsumsi.
                </strong>{" "}
                Jangan diminum dalam bentuk apa pun.
              </p>
              <p className="mt-3">
                Di kalangan komunitas, cairan ini juga dipakai untuk mandi,
                keramas, berkumur, dan merendam kaki. Kami memuatnya di sini
                karena banyak ditanyakan — <strong>bukan sebagai anjuran
                pengobatan.</strong>
              </p>
              <p className="mt-3">
                Sebagian besar klaim kesehatan eco enzyme belum diuji secara
                ilmiah. Bila Anda sedang sakit, punya luka, atau punya kondisi
                kulit tertentu, <strong>periksakan diri ke dokter atau puskesmas
                terlebih dahulu.</strong> Jangan mengganti pengobatan medis dengan
                eco enzyme.
              </p>
            </Catatan>

            <Kartu>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surya-100 text-surya-700">
                <HeartPulse size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-2xl text-daun-900">
                Yang biasa dilakukan warga
              </h3>
              <ul className="mt-4 grid gap-3 text-tinta">
                <li>
                  <strong>Mandi &amp; cuci tangan</strong> — campuran sabun cair
                  10%, eco enzyme 10%, dan air 80%.
                </li>
                <li>
                  <strong>Keramas</strong> — dicampurkan ke sampo dengan
                  perbandingan 1 : 1 : 5 sampai 10.
                </li>
                <li>
                  <strong>Berkumur</strong> — 10 ml eco enzyme dalam setengah
                  gelas air, tidak ditelan.
                </li>
                <li>
                  <strong>Merendam kaki</strong> — 30 ml dalam satu baskom air
                  hangat 30–40 °C selama 20–30 menit.
                </li>
              </ul>
              <p className="mt-5 rounded-2xl bg-daun-50 px-5 py-4 text-tinta-lembut">
                Selalu coba dulu sedikit di kulit. Hentikan bila terasa perih,
                gatal, atau memerah.
              </p>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================= AMPAS ====== */}
      <Bagian>
        <Wadah lebar="lebar">
          <JudulBagian
            label="Jangan dibuang"
            judul="Enam kegunaan ampas eco enzyme"
            ringkasan="Setelah cairannya dipanen, ampas sisa saringan masih punya banyak fungsi."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AmpasKartu
              nomor={1}
              judul="Membersihkan kloset"
              isi="Diblender halus lalu dituang ke kloset pada malam hari."
            />
            <AmpasKartu
              nomor={2}
              judul="Tambahan pembuatan berikutnya"
              isi="Dimasukkan ke wadah eco enzyme baru — tidak dihitung sebagai bahan."
            />
            <AmpasKartu
              nomor={3}
              judul="Mengusir tikus"
              isi="Dikeringkan lalu ditaruh di tempat yang biasa dilewati tikus."
            />
            <AmpasKartu
              nomor={4}
              judul="Mengharumkan mobil"
              isi="Dikeringkan lalu dimasukkan ke kantong kain kecil."
            />
            <AmpasKartu
              nomor={5}
              judul="Pupuk tanaman"
              isi="Dikubur di dalam tanah atau dimasukkan ke lubang biopori."
            />
            <AmpasKartu
              nomor={6}
              judul="Campuran kompos"
              isi="Dicampurkan ke tumpukan kompos untuk memperkaya bahan organik."
            />
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Tombol href="/cara-memakai">Lihat takaran pemakaian</Tombol>
            <Tombol href="/cara-membuat" varian="garis">
              Mulai membuat sendiri
            </Tombol>
          </div>
        </Wadah>
      </Bagian>
    </>
  );
}

/* -------------------------------------------------------- pendukung ---- */

function ManfaatKartu({
  ikon,
  judul,
  isi,
  warna = "daun",
}: {
  ikon: React.ReactNode;
  judul: string;
  isi: string;
  warna?: "daun" | "air";
}) {
  const gaya =
    warna === "daun"
      ? "bg-daun-100 text-daun-700"
      : "bg-air-100 text-air-700";
  return (
    <li className="rounded-4xl border-2 border-daun-100 bg-white p-6 shadow-lembut">
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${gaya}`}
        aria-hidden
      >
        {ikon}
      </span>
      <h3 className="mt-4 text-lg text-daun-900">{judul}</h3>
      <p className="mt-2 text-tinta-lembut">{isi}</p>
    </li>
  );
}

function LapanganKartu({
  tempat,
  apa,
  isi,
}: {
  tempat: string;
  apa: string;
  isi: string;
}) {
  return (
    <li className="rounded-4xl border-2 border-daun-200 bg-white p-6 shadow-lembut">
      <p className="flex items-center gap-2 font-display text-sm font-extrabold tracking-wide text-air-700 uppercase">
        <MapPin size={16} aria-hidden />
        {tempat}
      </p>
      <h3 className="mt-2 text-xl text-daun-900">{apa}</h3>
      <p className="mt-2 text-tinta-lembut">{isi}</p>
    </li>
  );
}

function AmpasKartu({
  nomor,
  judul,
  isi,
}: {
  nomor: number;
  judul: string;
  isi: string;
}) {
  return (
    <li className="rounded-4xl border-2 border-surya-200 bg-surya-50 p-6">
      <span
        className="flex h-11 w-11 items-center justify-center rounded-full bg-surya-400 font-display text-xl font-black text-surya-900"
        aria-hidden
      >
        {nomor}
      </span>
      <h3 className="mt-4 text-lg text-surya-900">{judul}</h3>
      <p className="mt-2 text-tinta-lembut">{isi}</p>
    </li>
  );
}
