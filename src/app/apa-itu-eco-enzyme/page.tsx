import type { Metadata } from "next";
import {
  Apple,
  Candy,
  Droplets,
  Factory,
  Flame,
  Trash2,
  Wallet,
} from "lucide-react";
import {
  Bagian,
  Catatan,
  JudulBagian,
  Kartu,
  KartuIkon,
  KepalaLaman,
  Tombol,
  Wadah,
} from "@/components/ui";
import { Akordeon, ItemAkordeon } from "@/components/akordeon";
import { daftarFaq } from "@/data/masalah";

export const metadata: Metadata = {
  title: "Apa Itu Eco Enzyme",
  description:
    "Pengertian eco enzyme, siapa penemunya, cara kerjanya, dan alasan mengapa warga perlu membuatnya. Dijelaskan dengan bahasa sederhana.",
};

export default function ApaItuEcoEnzyme() {
  return (
    <>
      <KepalaLaman
        label="Edukasi Dasar"
        judul="Apa Itu Eco Enzyme?"
        ringkasan="Sebelum membuat, kenali dulu apa yang sedang kita buat, siapa yang menemukannya, dan mengapa hal sesederhana ini bisa sangat berarti bagi Bumi."
      />

      {/* ============================================= PENGERTIAN ===== */}
      <Bagian>
        <Wadah>
          <JudulBagian
            label="Pengertian"
            judul="Cairan hasil fermentasi 90 hari"
            ringkasan="Eco enzyme adalah cairan serba guna hasil fermentasi selama 90 hari dari tiga bahan yang ada di dapur kita."
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            <BahanKartu
              ikon={<Apple size={30} aria-hidden />}
              judul="Sisa buah & sayur"
              isi="Kulit buah, potongan sayur, buah afkir, buah memar — asalkan masih mentah."
              warna="daun"
            />
            <BahanKartu
              ikon={<Candy size={30} aria-hidden />}
              judul="Gula"
              isi="Gula merah atau molase (tetes tebu). Bukan gula pasir putih."
              warna="surya"
            />
            <BahanKartu
              ikon={<Droplets size={30} aria-hidden />}
              judul="Air"
              isi="Air sumur, air hujan, air buangan AC, atau air keran yang sudah didiamkan."
              warna="air"
            />
          </ul>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Kartu warna="hijau">
              <h3 className="text-2xl text-daun-900">Kenapa disebut “enzyme”?</h3>
              <p className="mt-3 text-tinta">
                Selama fermentasi, mikroba bekerja mengurai bahan organik dan
                menghasilkan bermacam-macam enzim alami. Setiap jenis enzim punya
                tugas berbeda dalam proses biokimia — ada yang menguraikan lemak,
                ada yang menguraikan protein, ada yang melawan kuman.
              </p>
              <p className="mt-3 text-tinta">
                Karena itulah satu botol eco enzyme bisa berguna untuk banyak hal
                sekaligus: kebersihan rumah, pertanian, sampai perbaikan kualitas
                lingkungan.
              </p>
            </Kartu>

            <Kartu warna="biru">
              <h3 className="text-2xl text-air-900">Bagaimana prosesnya?</h3>
              <ol className="mt-4 grid gap-3 text-tinta">
                <li>
                  <strong>Gula</strong> menjadi makanan bagi mikroba baik.
                </li>
                <li>
                  Mikroba bekerja dalam <strong>kondisi anaerob</strong> — minim
                  oksigen — karena itu wadah harus ditutup rapat.
                </li>
                <li>
                  Bahan organik terurai perlahan dan{" "}
                  <strong>melepaskan enzim, CO₂, dan hidrogen</strong>.
                </li>
                <li>
                  Setelah 90 hari, cairannya berwarna cokelat dan{" "}
                  <strong>beraroma asam segar</strong> seperti cuka.
                </li>
              </ol>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================ PENEMU ====== */}
      <Bagian latar="hijau">
        <Wadah>
          <JudulBagian
            label="Sejarah"
            judul="Siapa yang menemukan eco enzyme?"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Kartu>
              <p className="font-display text-sm font-extrabold tracking-wide text-daun-700 uppercase">
                Penemu
              </p>
              <h3 className="mt-1 text-2xl text-daun-900">
                Dr. Rosukon Poompanvong
              </h3>
              <p className="mt-3 text-tinta-lembut">
                Pendiri Asosiasi Pertanian Organik Thailand. Beliau meneliti eco
                enzyme selama <strong className="text-tinta">30 tahun</strong> dan
                membagikan seluruh hasil penelitiannya secara cuma-cuma, dengan
                harapan semua orang tergerak menyelamatkan Bumi.
              </p>
            </Kartu>
            <Kartu>
              <p className="font-display text-sm font-extrabold tracking-wide text-daun-700 uppercase">
                Penyebar
              </p>
              <h3 className="mt-1 text-2xl text-daun-900">Dr. Joean Oon</h3>
              <p className="mt-3 text-tinta-lembut">
                Peneliti naturopati dari Penang, Malaysia. Beliau yang
                memperkenalkan eco enzyme secara lebih luas hingga sampai ke
                Indonesia dan akhirnya ke Lampung Timur.
              </p>
            </Kartu>
          </div>

          <div className="mt-8">
            <Catatan jenis="penting" judul="Amanah yang kami jaga">
              Karena ilmu ini diberikan cuma-cuma, komunitas eco enzyme mendorong
              semua pihak untuk <strong>tidak memperjualbelikan eco enzyme</strong>.
              Bagikan cairannya, ajarkan cara membuatnya. Itulah bentuk
              penghargaan tertinggi kepada Dr. Rosukon.
            </Catatan>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================ MENGAPA ===== */}
      <Bagian>
        <Wadah>
          <JudulBagian
            label="Alasan"
            judul="Mengapa kita perlu membuat eco enzyme?"
            ringkasan="Ada empat alasan yang saling berkaitan — dan semuanya dimulai dari tempat sampah di dapur kita."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <KartuIkon ikon={<Trash2 size={28} />} judul="1. Mengurangi beban TPA">
              <p>
                Sekitar <strong className="text-tinta">60% sampah</strong> yang
                dibuang ke TPA adalah sampah organik. Pengelolaan yang buruk
                menimbulkan bau busuk, air lindi hitam, banjir, hingga pencemaran
                sungai di sekitar TPA.
              </p>
              <p className="mt-3">
                Kalau sisa dapur kita olah sendiri jadi eco enzyme, sampah itu
                tidak pernah sampai ke TPA.
              </p>
            </KartuIkon>

            <KartuIkon
              ikon={<Flame size={28} />}
              judul="2. Mencegah pemanasan global"
              warna="surya"
            >
              <p>
                Sampah organik yang membusuk di TPA menghasilkan{" "}
                <strong className="text-tinta">gas metana</strong> — salah satu
                gas rumah kaca yang memerangkap panas matahari{" "}
                <strong className="text-tinta">21 kali lebih kuat</strong>{" "}
                daripada CO₂.
              </p>
              <p className="mt-3">
                Fermentasi eco enzyme menghasilkan CO₂ dan hidrogen, bukan metana.
                CO₂ masih bisa diserap tumbuhan, sehingga jauh lebih ringan
                dampaknya.
              </p>
            </KartuIkon>

            <KartuIkon
              ikon={<Factory size={28} />}
              judul="3. Mengganti produk kimia sintetis"
              warna="air"
            >
              <p>
                Hampir semua produk pembersih rumah tangga di pasaran dibuat dari
                bahan kimia sintetis agar harganya murah. Bahan itu bisa
                mengiritasi kulit dan mencemari perairan, sementara kemasan
                plastiknya bertahan sangat lama di Bumi.
              </p>
            </KartuIkon>

            <KartuIkon ikon={<Wallet size={28} />} judul="4. Menghemat pengeluaran">
              <p>
                Satu botol eco enzyme bisa menggantikan sabun pel, pembersih
                kloset, pengharum ruangan, pupuk cair, dan pelembut pakaian.
                Bahannya pun dari sisa dapur yang selama ini dibuang.
              </p>
            </KartuIkon>
          </div>

          <div className="mt-10">
            <Catatan jenis="penting" judul="Pelajaran dari Leuwigajah">
              Pada 21 Februari 2005, timbunan sampah TPA Leuwigajah di Bandung
              longsor dan meledak akibat gas yang terkumpul di dalamnya. Bencana
              itu menghilangkan 157 nyawa, 137 rumah, 2 desa, dan 8,4 hektar lahan
              pertanian. Sampah dapur yang tidak dikelola bukan perkara sepele.
            </Catatan>
          </div>
        </Wadah>
      </Bagian>

      {/* =================================================== FAQ ====== */}
      <Bagian latar="hijau">
        <Wadah>
          <JudulBagian
            label="Tanya jawab"
            judul="Pertanyaan yang sering diajukan"
          />
          <div className="mt-10">
            <Akordeon>
              {daftarFaq.map((f) => (
                <ItemAkordeon key={f.tanya} tanya={f.tanya}>
                  <p>{f.jawab}</p>
                </ItemAkordeon>
              ))}
            </Akordeon>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Tombol href="/cara-membuat">Lanjut: Cara Membuat</Tombol>
            <Tombol href="/manfaat" varian="garis">
              Lihat daftar manfaat
            </Tombol>
          </div>
        </Wadah>
      </Bagian>
    </>
  );
}

function BahanKartu({
  ikon,
  judul,
  isi,
  warna,
}: {
  ikon: React.ReactNode;
  judul: string;
  isi: string;
  warna: "daun" | "air" | "surya";
}) {
  const gaya = {
    daun: "border-daun-200 bg-daun-50 text-daun-700",
    air: "border-air-200 bg-air-50 text-air-700",
    surya: "border-surya-200 bg-surya-50 text-surya-700",
  }[warna];
  return (
    <li className={`rounded-4xl border-2 p-6 ${gaya}`}>
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
        {ikon}
      </span>
      <h3 className="mt-4 text-xl text-tinta">{judul}</h3>
      <p className="mt-2 text-tinta-lembut">{isi}</p>
    </li>
  );
}
