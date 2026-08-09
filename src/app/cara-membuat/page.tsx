import type { Metadata } from "next";
import {
  Boxes,
  Droplets,
  FlaskConical,
  MapPin,
  PencilLine,
  Scale,
  UtensilsCrossed,
} from "lucide-react";
import {
  Bagian,
  Catatan,
  DaftarCeklis,
  JudulBagian,
  Kartu,
  Langkah,
  Tombol,
  Wadah,
} from "@/components/ui";
import { Akordeon, ItemAkordeon } from "@/components/akordeon";
import { KalkulatorTakaran } from "@/components/kalkulator-takaran";
import { TombolWhatsApp } from "@/components/tombol-whatsapp";
import { daftarMasalah } from "@/data/masalah";

export const metadata: Metadata = {
  title: "Cara Membuat Eco Enzyme",
  description:
    "Panduan lengkap membuat eco enzyme dengan takaran 1 : 3 : 10, dilengkapi kalkulator takaran otomatis, jadwal 90 hari, dan cara memperbaiki larutan yang bermasalah.",
};

const daftarIsi = [
  { href: "#alat", label: "Alat yang dibutuhkan" },
  { href: "#wadah", label: "Memilih wadah" },
  { href: "#bahan", label: "Memilih bahan" },
  { href: "#takaran", label: "Takaran & kalkulator" },
  { href: "#langkah", label: "Langkah pembuatan" },
  { href: "#jadwal", label: "Jadwal 90 hari" },
  { href: "#simpan", label: "Lokasi penyimpanan" },
  { href: "#periksa", label: "Memeriksa & memperbaiki" },
  { href: "#panen", label: "Panen & tanda berhasil" },
  { href: "#lanjutan", label: "Mama Enzyme & jamur" },
];

export default function CaraMembuat() {
  return (
    <>
      <div className="pola-daun border-b-2 border-daun-100 bg-daun-50/60">
        <Wadah lebar="lebar" className="py-14 sm:py-20">
          <p className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-extrabold tracking-wide text-daun-700 uppercase shadow-lembut">
            Panduan Praktik
          </p>
          <h1 className="mt-5 text-4xl text-daun-900 sm:text-5xl">
            Cara Membuat Eco Enzyme
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-tinta-lembut sm:text-xl">
            Ikuti urutannya dari atas ke bawah. Kalau bingung menghitung takaran,
            gunakan kalkulator di bawah — tinggal isi ukuran wadah, sisanya kami
            hitungkan.
          </p>

          <nav aria-label="Daftar isi halaman" className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {daftarIsi.map((d, i) => (
                <li key={d.href}>
                  <a
                    href={d.href}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-daun-200 bg-white px-4 py-2 font-bold text-daun-800 transition-colors hover:bg-daun-100"
                  >
                    <span className="font-display text-daun-700">{i + 1}</span>
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Wadah>
      </div>

      {/* ================================================== ALAT ====== */}
      <Bagian id="alat">
        <Wadah>
          <JudulBagian
            label="Persiapan"
            judul="Alat yang dibutuhkan"
            ringkasan="Sebagian besar sudah ada di rumah. Yang bertanda “bila ada” sifatnya tidak wajib."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AlatKartu ikon={<Boxes size={26} />} nama="Wadah plastik bertutup" />
            <AlatKartu
              ikon={<UtensilsCrossed size={26} />}
              nama="Pisau dan talenan"
            />
            <AlatKartu ikon={<Scale size={26} />} nama="Timbangan" />
            <AlatKartu
              ikon={<Droplets size={26} />}
              nama="Botol bekas untuk hasil panen"
            />
            <AlatKartu
              ikon={<PencilLine size={26} />}
              nama="Spidol, lakban, dan kertas label"
            />
            <AlatKartu
              ikon={<FlaskConical size={26} />}
              nama="Kertas lakmus / pH meter / TDS meter"
              opsional
            />
          </ul>
        </Wadah>
      </Bagian>

      {/* ================================================= WADAH ====== */}
      <Bagian id="wadah" latar="hijau">
        <Wadah>
          <JudulBagian
            label="Langkah 0"
            judul="Memilih wadah yang benar"
            ringkasan="Ini bagian yang paling sering keliru — dan paling berisiko kalau salah."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Kartu>
              <h3 className="text-xl text-daun-800">Wadah yang dianjurkan</h3>
              <div className="mt-4">
                <DaftarCeklis
                  butir={[
                    <>
                      Berbahan <strong>plastik</strong>
                    </>,
                    <>
                      <strong>Bermulut lebar</strong>, supaya bahan mudah
                      dimasukkan dan ampas mudah dikeluarkan saat panen
                    </>,
                    <>
                      Bisa <strong>ditutup rapat dan kedap</strong>
                    </>,
                    <>Boleh ukuran besar maupun kecil, sesuai kebutuhan</>,
                    <>Wadah bekas cat, ember, jerigen, atau tong plastik</>,
                  ]}
                />
              </div>
            </Kartu>
            <Kartu>
              <h3 className="text-xl text-red-700">Wadah yang harus dihindari</h3>
              <div className="mt-4">
                <DaftarCeklis
                  jenis="jangan"
                  butir={[
                    <>
                      <strong>Wadah kaca</strong> — rentan pecah karena tekanan
                      gas
                    </>,
                    <>
                      <strong>Wadah aluminium atau logam lain</strong> — mudah
                      berkarat
                    </>,
                    <>Wadah bekas bahan kimia yang belum benar-benar bersih</>,
                  ]}
                />
              </div>
              <p className="mt-5 rounded-2xl bg-daun-50 px-5 py-4 text-tinta">
                Wadah kaca justru <strong>bagus dipakai setelah panen</strong>,
                yaitu untuk mengemas cairan jadinya.
              </p>
            </Kartu>
          </div>

          {/* ---- Wadah bermulut kecil ---- */}
          <div className="mt-6">
            <Kartu warna="surya">
              <h3 className="text-2xl text-surya-900">
                Bagaimana kalau wadah saya bermulut kecil?
              </h3>
              <p className="mt-3 text-tinta">
                Botol bermulut kecil masih bisa dipakai, tapi{" "}
                <strong>harus dimodifikasi.</strong> Pada bulan pertama
                fermentasi menghasilkan banyak sekali gas — tanpa jalan keluar,
                botol mudah meledak. Panen juga lebih repot karena ampas sulit
                dikeluarkan.
              </p>
              <p className="mt-5 font-bold text-tinta">
                Pilih salah satu dari empat cara ini:
              </p>
              <ol className="mt-4 grid gap-4">
                <CaraModifikasi
                  nomor={1}
                  judul="Buka-tutup berkala"
                  isi="Buka sedikit tutup botol untuk mengeluarkan gas, lalu segera tutup kembali. Lakukan beberapa kali sehari sampai gasnya berkurang — maksimal selama 1 bulan. Setelah itu tidak boleh dibuka lagi."
                />
                <CaraModifikasi
                  nomor={2}
                  judul="Ganti tutup dengan balon"
                  isi="Pasang balon atau sarung tangan medis (handscoon) sebagai pengganti tutup. Gas akan mengembangkannya. Bila balonnya pecah, segera ganti."
                />
                <CaraModifikasi
                  nomor={3}
                  judul="Tutup plastik berlubang jarum"
                  isi="Tutup mulut botol dengan plastik, ikat dengan karet, lalu tusuk sekitar 5 lubang halus dengan jarum. Setelah 2 minggu (maksimal 1 bulan), ganti dengan tutup asli dan rapatkan."
                />
                <CaraModifikasi
                  nomor={4}
                  judul="Pasang selang atau klep"
                  isi="Sambungkan selang dari tutup botol ke botol lain yang berisi air, atau pasang klep satu arah pada tutupnya. Klep bisa dibeli di toko daring."
                />
              </ol>
            </Kartu>
          </div>
          <div className="mt-8">
            <Catatan jenis="penting" judul="Kenapa soal wadah begitu penting?">
              Fermentasi menghasilkan gas. Kalau gas tidak punya ruang atau tidak
              bisa keluar, wadah bisa menggembung sampai pecah. Karena itu air
              hanya diisi 60% dan sisa ruangnya dibiarkan kosong.
            </Catatan>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================= BAHAN ====== */}
      <Bagian id="bahan">
        <Wadah>
          <JudulBagian
            label="Bahan"
            judul="Memilih buah, gula, dan air"
          />

          <div className="mt-10 grid gap-6">
            <Kartu warna="hijau">
              <h3 className="text-2xl text-daun-900">Sisa buah &amp; sayur</h3>
              <p className="mt-2 text-tinta-lembut">
                Semua jenis buah dan sayur boleh dipakai, asalkan memenuhi empat
                syarat ini:
              </p>
              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <DaftarCeklis
                  butir={[
                    <>
                      <strong>Belum dimasak</strong> — masih mentah
                    </>,
                    <>
                      <strong>Tidak kering dan tidak keras</strong>
                    </>,
                  ]}
                />
                <DaftarCeklis
                  jenis="jangan"
                  butir={[
                    <>
                      <strong>Berlemak</strong> — jangan pakai daging alpukat,
                      durian, atau kelapa
                    </>,
                    <>
                      <strong>Busuk, berjamur, atau berulat</strong>
                    </>,
                  ]}
                />
              </div>
              <p className="mt-5 rounded-2xl bg-white px-5 py-4 text-tinta">
                <strong>Semakin beragam jenis bahannya, semakin kaya hasil eco
                enzyme-nya.</strong>{" "}
                Potong-potong bahan sesuai waktu yang Anda punya — tidak harus
                kecil-kecil sekali.
              </p>
            </Kartu>

            <div className="grid gap-6 md:grid-cols-2">
              <Kartu warna="surya">
                <h3 className="text-2xl text-surya-900">Gula</h3>
                <div className="mt-4">
                  <DaftarCeklis
                    butir={[
                      <>
                        <strong>Molase</strong> (tetes tebu) — paling murah karena
                        merupakan limbah produksi gula putih, dan menghasilkan eco
                        enzyme paling pekat
                      </>,
                      <>
                        <strong>Gula merah</strong> — gula tebu, aren, kelapa,
                        atau lontar
                      </>,
                    ]}
                  />
                </div>
                <p className="mt-5 rounded-2xl bg-white px-5 py-4 text-tinta">
                  <strong>Gula pasir putih</strong> hanya dipakai kalau gula
                  merah dan molase benar-benar tidak tersedia. Boleh, tapi
                  hasilnya tidak maksimal.
                </p>
                <p className="mt-3 rounded-2xl bg-white px-5 py-4 text-sm text-tinta">
                  Hati-hati saat membeli gula merah di pasaran — ada gula merah
                  palsu yang kualitasnya sangat buruk.
                </p>
              </Kartu>

              <Kartu warna="biru">
                <h3 className="text-2xl text-air-900">Air</h3>
                <div className="mt-4">
                  <DaftarCeklis
                    butir={[
                      <>Air sumur</>,
                      <>
                        Air buangan AC — <strong>ditampung dan diendapkan
                        dulu</strong> sebelum dipakai
                      </>,
                      <>
                        Air PAM/keran — sebaiknya <strong>didiamkan dulu
                        minimal 24 jam</strong>
                      </>,
                      <>
                        Air hujan yang ditampung <strong>langsung dari langit</strong>{" "}
                        — bukan lewat genting dan pipa
                      </>,
                      <>Air isi ulang atau air galon</>,
                    ]}
                  />
                </div>
              </Kartu>
            </div>
          </div>
        </Wadah>
      </Bagian>

      {/* =============================================== TAKARAN ====== */}
      <Bagian id="takaran" latar="hijau">
        <Wadah lebar="lebar">
          <JudulBagian
            label="Takaran"
            judul="Rumusnya cuma 1 : 3 : 10"
            ringkasan="Satu bagian gula, tiga bagian sisa buah dan sayur, sepuluh bagian air. Air diisi maksimal 60% dari isi wadah supaya gas punya ruang."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
            <Kartu warna="putih">
              <h3 className="text-xl text-daun-900">Cara menghitung manual</h3>
              <ol className="mt-4 grid gap-4">
                <RumusBaris
                  nomor={1}
                  rumus="Volume wadah × 60%"
                  hasil="= jumlah air"
                />
                <RumusBaris nomor={2} rumus="Jumlah air ÷ 10" hasil="= jumlah gula" />
                <RumusBaris
                  nomor={3}
                  rumus="Jumlah gula × 3"
                  hasil="= jumlah sisa buah/sayur"
                />
              </ol>
              <p className="mt-5 rounded-2xl bg-daun-50 px-5 py-4 text-tinta">
                <strong>Contoh:</strong> wadah 100 liter → air 60 liter → gula
                6 kg → sisa buah 18 kg.
                <span className="mt-2 block text-tinta-lembut">
                  Ingat: 1 liter air beratnya kira-kira 1 kg, jadi liter dan kg
                  bisa dianggap sama untuk air.
                </span>
              </p>
            </Kartu>

            <KalkulatorTakaran />
          </div>
        </Wadah>
      </Bagian>

      {/* =============================================== LANGKAH ====== */}
      <Bagian id="langkah">
        <Wadah>
          <JudulBagian label="Praktik" judul="Langkah pembuatan" />
          <ol className="mt-10">
            <Langkah nomor={1} judul="Bersihkan wadah">
              Pastikan wadah bebas dari sisa sabun atau bahan kimia. Sisa sabun
              bisa membunuh mikroba yang justru kita butuhkan.
            </Langkah>
            <Langkah nomor={2} judul="Ukur volume wadah, lalu isi air 60%">
              Misalnya wadah 20 liter, isi air sebanyak 12 liter. Sisa 8 liter
              dibiarkan kosong sebagai ruang gas.
            </Langkah>
            <Langkah nomor={3} judul="Masukkan gula, aduk sampai larut">
              Takarannya 10% dari berat air. Untuk 12 liter air berarti 1,2 kg
              gula merah atau molase.
            </Langkah>
            <Langkah nomor={4} judul="Masukkan potongan sisa buah & sayur">
              Takarannya 30% dari berat air — untuk 12 liter air berarti 3,6 kg.
              Aduk rata sampai semua bahan terendam cairan.
            </Langkah>
            <Langkah nomor={5} judul="Tutup rapat sampai panen, beri label tanggal">
              Tulis tanggal pembuatan dan tanggal panen di lakban atau kertas
              label. Setelah ditutup, wadah dibiarkan saja sampai 90 hari.
            </Langkah>
          </ol>

          <div className="mb-6">
            <Catatan jenis="info" judul="Tidak perlu repot mengaduk">
              <p>
                Ini yang sering membuat pemula khawatir. Modul terbaru Eco
                Enzyme Nusantara menegaskan tiga hal:
              </p>
              <ul className="mt-3 grid gap-2">
                <li>
                  • <strong>Tidak ada keharusan membuka wadah untuk
                  mengaduk.</strong>
                </li>
                <li>
                  • <strong>Tidak ada keharusan meremas bahan organiknya.</strong>
                </li>
                <li>
                  • Yang penting justru{" "}
                  <strong>pastikan wadah tertutup serapat mungkin.</strong>
                </li>
              </ul>
              <p className="mt-3">
                Jadi kalau potongan buah mengambang di permukaan, biarkan saja.
                Membuka wadah terlalu sering malah memasukkan oksigen dan
                mengganggu kerja mikroba.
              </p>
              <p className="mt-3">
                Pengecualiannya hanya untuk <strong>wadah bermulut kecil</strong>{" "}
                yang perlu dibuang gasnya selama bulan pertama.
              </p>
            </Catatan>
          </div>

          <Catatan jenis="tips" judul="Belum punya cukup sisa buah? Dicicil saja">
            <p>
              Siapkan dulu air dan gula sesuai takaran. Lalu tambahkan sisa buah
              atau sayur sedikit demi sedikit sesuai ketersediaan, selama{" "}
              <strong>maksimal 2 minggu</strong>. Catat beratnya setiap kali
              menambah. Saat takaran bahan akhirnya terpenuhi, catat hari itu
              sebagai tanggal pembuatan.
            </p>
          </Catatan>
        </Wadah>
      </Bagian>

      {/* ================================================ JADWAL ====== */}
      <Bagian id="jadwal" latar="biru">
        <Wadah lebar="lebar">
          <JudulBagian
            label="Perawatan"
            judul="Jadwal 90 hari"
            ringkasan="Setelah ditutup, tugas Anda tinggal sedikit. Ini yang perlu dilakukan dan kapan."
          />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <JadwalKartu
              waktu="Bulan ke-1"
              judul="Awasi gasnya"
              isi="Wadah bermulut lebar: biarkan saja. Wadah bermulut kecil: buang gasnya secara berkala supaya tidak meledak."
            />
            <JadwalKartu
              waktu="Minggu ke-3"
              judul="Periksa dari luar"
              isi="Amati warna dan aromanya tanpa perlu banyak membuka. Bila ada masalah, lakukan perbaikan sekarang — masih sempat."
            />
            <JadwalKartu
              waktu="Hari ke-30"
              judul="Jangan dibuka lagi"
              isi="Setelah usia 30 hari, wadah tidak dibuka sama sekali agar mikroba bekerja dalam kondisi anaerob."
              tekankan
            />
            <JadwalKartu
              waktu="Hari ke-90"
              judul="Waktunya panen"
              isi="Saring cairannya dan simpan di wadah tertutup. Ampasnya jangan dibuang — masih banyak gunanya."
            />
          </ol>
        </Wadah>
      </Bagian>

      {/* ================================================ SIMPAN ====== */}
      <Bagian id="simpan">
        <Wadah>
          <JudulBagian label="Penyimpanan" judul="Di mana wadah sebaiknya diletakkan?" />
          <div className="mt-10 grid gap-6 md:grid-cols-[auto_1fr]">
            <span
              className="flex h-16 w-16 items-center justify-center rounded-3xl bg-daun-100 text-daun-700"
              aria-hidden
            >
              <MapPin size={30} />
            </span>
            <div>
              <DaftarCeklis
                butir={[
                  <>
                    Tempat yang <strong>tidak terkena sinar matahari
                    langsung</strong>
                  </>,
                  <>
                    Punya <strong>sirkulasi udara yang baik</strong>
                  </>,
                  <>
                    Setelah usia 1,5 bulan, wadah justru bagus diletakkan di
                    sekitar tempat tidur — larutannya membantu menyegarkan udara
                    kamar
                  </>,
                ]}
              />
              <div className="mt-5">
                <DaftarCeklis
                  jenis="jangan"
                  butir={[
                    <>
                      Jauhkan dari <strong>Wi-Fi, listrik, WC, tong sampah,
                      tempat pembakaran sampah, dan bahan kimia</strong>
                    </>,
                  ]}
                />
              </div>
            </div>
          </div>
        </Wadah>
      </Bagian>

      {/* =============================================== PERIKSA ====== */}
      <Bagian id="periksa" latar="hijau">
        <Wadah>
          <JudulBagian
            label="Pemecahan masalah"
            judul="Larutan saya kenapa ya?"
            ringkasan="Buka pertanyaan yang sesuai dengan kondisi larutan Anda. Sebagian besar masalah masih bisa diperbaiki."
          />
          <div className="mt-10">
            <Akordeon>
              {daftarMasalah.map((m) => (
                <ItemAkordeon key={m.tanya} tanya={m.tanya} lencana={m.parah}>
                  <ol className="grid gap-2.5">
                    {m.jawab.map((j, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span className="font-display font-extrabold text-daun-700">
                          {i + 1}.
                        </span>
                        <span>{j}</span>
                      </li>
                    ))}
                  </ol>
                </ItemAkordeon>
              ))}
            </Akordeon>
          </div>

          <div className="mt-8 grid gap-6">
            <Catatan jenis="info" judul="Larutan yang gagal pun masih berguna">
              <p>
                Larutan yang <strong>berhasil diperbaiki</strong> boleh dipakai
                untuk membersihkan selokan/sungai dan untuk pertanian.
              </p>
              <p className="mt-2">
                Larutan yang <strong>tetap berbau got atau berjamur hitam</strong>{" "}
                jangan dipakai untuk keperluan rumah tangga — tetapi jangan
                dibuang percuma. Manfaatkan untuk menyuburkan lahan kosong yang
                tandus, atau campurkan ke dalam pembuatan pupuk organik.
              </p>
            </Catatan>

            <Kartu warna="hijau">
              <h3 className="text-xl text-daun-900">
                Masih bingung dengan larutan Anda?
              </h3>
              <p className="mt-2 text-tinta-lembut">
                Foto larutannya dan kirim ke pendamping kami. Sering kali
                masalahnya bisa dikenali langsung dari foto.
              </p>
              <div className="mt-4">
                <TombolWhatsApp
                  pesan="Halo, saya mau bertanya soal larutan eco enzyme saya."
                  label="Tanya lewat WhatsApp"
                />
              </div>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================= PANEN ====== */}
      <Bagian id="panen">
        <Wadah>
          <JudulBagian
            label="Panen"
            judul="Tanda eco enzyme yang berhasil"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Kartu warna="hijau">
              <h3 className="text-xl text-daun-900">Ciri larutan yang normal</h3>
              <ul className="mt-4 grid gap-3 text-tinta">
                <li>
                  Berwarna <strong>cokelat</strong> dengan{" "}
                  <strong>aroma asam yang segar</strong>. Warna dan aroma
                  tergantung jenis bahan yang dipakai.
                </li>
                <li>
                  Beraroma <strong>alkohol pada bulan pertama</strong>, lalu
                  berubah menjadi <strong>aroma cuka setelah 3 bulan</strong>.
                </li>
                <li>
                  Kadang muncul lapisan jamur putih atau lapisan jeli. Ini normal,
                  tapi bukan patokan keberhasilan.
                </li>
              </ul>
            </Kartu>
            <Kartu warna="biru">
              <h3 className="text-xl text-air-900">Standar eco enzyme yang baik</h3>
              <p className="mt-3 text-tinta-lembut">
                Modul 2023 menyebut dua syarat utama:
              </p>
              <ul className="mt-3 grid gap-3 text-tinta">
                <li>
                  Nilai <strong>pH di bawah 4,0</strong>
                </li>
                <li>
                  Beraroma <strong>asam segar khas fermentasi</strong>, bukan bau
                  busuk
                </li>
              </ul>
              <p className="mt-4 text-tinta-lembut">
                Sebagai tambahan untuk keperluan pertanian, sebagian penggiat
                juga mengacu pada nilai TDS di atas 5.000 ppm. Semakin lama
                disimpan, kualitasnya justru semakin baik — dan tidak punya
                tanggal kedaluwarsa.
              </p>
            </Kartu>
          </div>

          <div className="mt-6">
            <Kartu warna="hijau">
              <h3 className="text-2xl text-daun-900">Mengemas hasil panen</h3>
              <div className="mt-4 grid gap-5 md:grid-cols-2">
                <div>
                  <DaftarCeklis
                    butir={[
                      <>
                        Saring dengan kain bersih, lalu simpan di{" "}
                        <strong>botol kaca atau plastik</strong> yang bertutup
                        rapat
                      </>,
                      <>
                        Dianjurkan dikemas dalam{" "}
                        <strong>botol-botol kecil</strong> — lebih praktis
                        dipakai dan kualitasnya lebih terjaga
                      </>,
                      <>Simpan jauh dari sinar matahari langsung</>,
                    ]}
                  />
                </div>
                <p className="rounded-2xl bg-white px-5 py-4 text-tinta">
                  Setelah fermentasi selesai, gas sudah tidak diproduksi lagi.
                  Karena itu <strong>botol kaca aman dipakai untuk mengemas</strong>,
                  meskipun tadi dilarang untuk wadah fermentasinya.
                </p>
              </div>
            </Kartu>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Catatan jenis="aman" judul="Jamur putih saat panen">
              Kalau di permukaan muncul jamur putih halus, jangan panik. Itu
              jamur baik — pisahkan saja, dan ia masih bisa dimanfaatkan.
            </Catatan>
            <Catatan jenis="tips" judul="Ampasnya jangan dibuang">
              Ampas bisa diblender untuk membersihkan kloset, dikeringkan untuk
              mengharumkan mobil, atau dikubur sebagai pupuk tanaman yang
              ditanam langsung di tanah — bukan tanaman pot.
            </Catatan>
          </div>
        </Wadah>
      </Bagian>

      {/* ============================================== LANJUTAN ====== */}
      <Bagian id="lanjutan" latar="hijau">
        <Wadah>
          <JudulBagian
            label="Pengetahuan tambahan"
            judul="Jamur dan Mama Enzyme"
            ringkasan="Tidak semua yang tumbuh di permukaan larutan itu buruk. Ini cara membedakannya."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Kartu warna="putih">
              <h3 className="text-xl text-daun-800">Jamur yang baik</h3>
              <p className="mt-3 text-tinta-lembut">
                <strong className="text-tinta">Jamur ragi</strong> dan{" "}
                <strong className="text-tinta">jakaba</strong> — biasanya berwarna
                putih atau cokelat muda. Biarkan saja, tanda fermentasi berjalan
                baik.
              </p>
              <h3 className="mt-6 text-xl text-red-700">Jamur yang berbahaya</h3>
              <p className="mt-3 text-tinta-lembut">
                <strong className="text-tinta">Jamur kapang</strong> — berwarna
                hitam, hijau, atau abu-abu, dan terlihat seperti beludru. Segera
                buang jamurnya lalu lakukan perbaikan larutan.
              </p>
            </Kartu>

            <Kartu warna="putih">
              <h3 className="text-xl text-daun-800">
                Mama Enzyme (lapisan seperti jeli)
              </h3>
              <p className="mt-3 text-tinta-lembut">
                Lapisan kenyal seperti jeli yang terbentuk di permukaan larutan.
                Ini koloni bakteri dan ragi yang bersimbiosis — tidak selalu
                muncul, jadi rawat baik-baik bila Anda mendapatkannya.
              </p>
              <p className="mt-4 font-bold text-tinta">Cara merawatnya:</p>
              <ol className="mt-2 grid gap-2 text-tinta-lembut">
                <li>
                  1. Campur <strong>1 bagian gula merah/molase</strong> dengan{" "}
                  <strong>10 bagian air layak minum</strong> di wadah bertutup
                  yang bening.
                </li>
                <li>2. Aduk rata, lalu masukkan Mama Enzyme.</li>
                <li>
                  3. Tunggu 4 jam. Bila tenggelam, tambahkan sedikit molase sampai
                  Mama Enzyme melayang.
                </li>
                <li>
                  4. Tutup rapat dan simpan di kamar tidur atau ruang keluarga —
                  Mama Enzyme juga membantu menyaring udara.
                </li>
              </ol>
            </Kartu>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Tombol href="/cara-memakai">Lanjut: Cara Memakai</Tombol>
            <Tombol href="/manfaat" varian="garis">
              Lihat manfaatnya
            </Tombol>
          </div>
        </Wadah>
      </Bagian>
    </>
  );
}

/* -------------------------------------------------------- pendukung ---- */

function CaraModifikasi({
  nomor,
  judul,
  isi,
}: {
  nomor: number;
  judul: string;
  isi: string;
}) {
  return (
    <li className="flex gap-4 rounded-3xl bg-white p-5">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surya-400 font-display font-black text-surya-900"
        aria-hidden
      >
        {nomor}
      </span>
      <span>
        <span className="block font-display text-lg font-extrabold text-surya-900">
          {judul}
        </span>
        <span className="mt-1 block text-tinta-lembut">{isi}</span>
      </span>
    </li>
  );
}

function AlatKartu({
  ikon,
  nama,
  opsional,
}: {
  ikon: React.ReactNode;
  nama: string;
  opsional?: boolean;
}) {
  return (
    <li className="flex items-center gap-4 rounded-3xl border-2 border-daun-100 bg-white p-5 shadow-lembut">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-daun-100 text-daun-700"
        aria-hidden
      >
        {ikon}
      </span>
      <span>
        <span className="block font-display font-extrabold text-tinta">
          {nama}
        </span>
        {opsional && (
          <span className="block text-sm font-bold text-surya-600">
            Bila ada — tidak wajib
          </span>
        )}
      </span>
    </li>
  );
}

function RumusBaris({
  nomor,
  rumus,
  hasil,
}: {
  nomor: number;
  rumus: string;
  hasil: string;
}) {
  return (
    <li className="flex flex-wrap items-center gap-3">
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-daun-600 font-display font-extrabold text-white"
        aria-hidden
      >
        {nomor}
      </span>
      <span className="rounded-xl bg-daun-50 px-3 py-1.5 font-display font-extrabold text-daun-900">
        {rumus}
      </span>
      <span className="font-display font-extrabold text-air-700">{hasil}</span>
    </li>
  );
}

function JadwalKartu({
  waktu,
  judul,
  isi,
  tekankan,
}: {
  waktu: string;
  judul: string;
  isi: string;
  tekankan?: boolean;
}) {
  return (
    <li
      className={`rounded-4xl border-2 p-6 ${
        tekankan
          ? "border-surya-300 bg-surya-50"
          : "border-daun-100 bg-white"
      }`}
    >
      <p className="font-display text-sm font-extrabold tracking-wide text-air-700 uppercase">
        {waktu}
      </p>
      <h3 className="mt-1 text-xl text-daun-900">{judul}</h3>
      <p className="mt-2 text-tinta-lembut">{isi}</p>
    </li>
  );
}
