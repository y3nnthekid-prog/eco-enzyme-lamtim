import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, HandHeart, Mail, School, Users } from "lucide-react";
import {
  Bagian,
  Catatan,
  JudulBagian,
  Kartu,
  KepalaLaman,
  Wadah,
} from "@/components/ui";
import { situs } from "@/lib/situs";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Tentang komunitas Eco Enzyme Nusantara Kabupaten Lampung Timur, kegiatan yang kami lakukan, sumber materi, dan cara menghubungi kami.",
};

export default function Tentang() {
  return (
    <>
      <KepalaLaman
        label="Tentang"
        judul="Eco Enzyme Nusantara Kabupaten Lampung Timur"
        ringkasan="Gerakan warga yang mengajak masyarakat Lampung Timur mengolah sampah organik rumah tangga menjadi eco enzyme — dimulai dari dapur masing-masing."
      />

      {/* ============================================== SIAPA KAMI ==== */}
      <Bagian>
        <Wadah lebar="lebar">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <Image
              src="/logo-een-lamtim.png"
              alt="Logo Eco Enzyme Nusantara Kabupaten Lampung Timur"
              width={240}
              height={240}
              className="mx-auto h-44 w-44 sm:h-56 sm:w-56"
            />
            <div>
              <h2 className="text-3xl text-daun-900">Siapa kami</h2>
              <p className="mt-4 text-lg text-tinta-lembut">
                Kami adalah bagian dari jaringan Eco Enzyme Nusantara yang
                bergerak di Kabupaten Lampung Timur. Kegiatan kami sederhana:
                mengenalkan eco enzyme kepada warga, mendampingi yang baru mulai
                membuat, dan mengajak semua orang ikut mengurangi sampah organik
                yang berakhir di tempat pembuangan akhir.
              </p>
              <p className="mt-4 text-lg text-tinta-lembut">
                Semua yang kami bagikan — pelatihan, materi, maupun cairan eco
                enzyme itu sendiri — diberikan cuma-cuma, mengikuti amanah
                Dr. Rosukon Poompanvong.
              </p>
            </div>
          </div>
        </Wadah>
      </Bagian>

      {/* =============================================== KEGIATAN ===== */}
      <Bagian latar="hijau">
        <Wadah lebar="lebar">
          <JudulBagian label="Kegiatan" judul="Apa saja yang kami lakukan" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Kartu>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-daun-100 text-daun-700">
                <School size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-daun-900">
                Pelatihan & sosialisasi
              </h3>
              <p className="mt-2 text-tinta-lembut">
                Kelas belajar eco enzyme untuk warga desa, sekolah, kelompok
                PKK, majelis taklim, dan kantor pemerintahan.
              </p>
            </Kartu>
            <Kartu>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-daun-100 text-daun-700">
                <HandHeart size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-daun-900">Pendampingan</h3>
              <p className="mt-2 text-tinta-lembut">
                Mendampingi warga yang baru mulai membuat — dari memilih wadah,
                menakar bahan, sampai memperbaiki larutan yang bermasalah.
              </p>
            </Kartu>
            <Kartu>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-daun-100 text-daun-700">
                <Users size={28} aria-hidden />
              </span>
              <h3 className="mt-4 text-xl text-daun-900">Aksi bersama</h3>
              <p className="mt-2 text-tinta-lembut">
                Panen bersama dan penuangan eco enzyme ke sungai, selokan, serta
                lahan pertanian di wilayah Lampung Timur.
              </p>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================= KONTAK ===== */}
      <Bagian>
        <Wadah>
          <JudulBagian
            label="Hubungi kami"
            judul="Mari belajar bersama"
            ringkasan="Ingin mengundang kami mengadakan pelatihan, bertanya soal larutan yang bermasalah, atau mengirim kabar kegiatan untuk dimuat di halaman berita?"
          />
          <div className="mt-8">
            <Kartu warna="hijau">
              <a
                href={`mailto:${situs.email}`}
                className="inline-flex max-w-full items-center gap-3 rounded-3xl bg-daun-600 px-6 py-4 font-display text-lg font-extrabold break-all text-white transition-colors hover:bg-daun-700"
              >
                <Mail size={24} className="shrink-0" aria-hidden />
                {situs.email}
              </a>
              <p className="mt-5 text-tinta-lembut">
                Sertakan nama desa/kecamatan, perkiraan jumlah peserta, dan
                waktu yang Anda inginkan agar kami mudah menindaklanjuti.
              </p>
            </Kartu>
          </div>
        </Wadah>
      </Bagian>

      {/* ================================================ SUMBER ====== */}
      <Bagian latar="biru">
        <Wadah>
          <JudulBagian
            label="Sumber materi"
            judul="Dari mana materi di situs ini berasal"
          />
          <Kartu className="mt-8">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-air-100 text-air-700">
              <BookOpen size={28} aria-hidden />
            </span>
            <ul className="mt-5 grid gap-3 text-tinta">
              <li>
                <strong>Modul Kelas Belajar Eco-Enzyme</strong> — Tim Ngajaga
                Bumi (Agustus 2020), sumber utama materi edukasi di situs ini.
              </li>
              <li>
                <strong>Dr. Rosukon Poompanvong</strong> — pendiri Asosiasi
                Pertanian Organik Thailand, penemu eco enzyme.
              </li>
              <li>
                <strong>Dr. Joean Oon</strong> — peneliti naturopati, Penang,
                Malaysia.
              </li>
              <li>
                <strong>Persatuan Enzim Alam Sekitar Malaysia</strong> — sumber
                tabel takaran pemakaian sehari-hari.
              </li>
              <li>
                <strong>Pak Joni Oei</strong> — praktik penjernihan kolam di
                Batam.
              </li>
              <li>Rekan-rekan penggiat eco enzyme di seluruh Nusantara.</li>
            </ul>
          </Kartu>

          <div className="mt-8 grid gap-6">
            <Catatan jenis="penting" judul="Catatan penting soal kesehatan">
              <p>
                Situs ini disusun untuk keperluan edukasi lingkungan. Sebagian
                manfaat eco enzyme — terutama yang berkaitan dengan kesehatan
                tubuh — berasal dari pengalaman komunitas dan{" "}
                <strong>belum semuanya diuji secara ilmiah.</strong>
              </p>
              <p className="mt-3">
                Informasi di sini <strong>bukan nasihat medis</strong> dan tidak
                menggantikan pemeriksaan dokter. Bila Anda sakit, silakan
                berkonsultasi dengan tenaga kesehatan.
              </p>
            </Catatan>

            <Catatan jenis="aman" judul="Silakan disebarluaskan">
              Materi di situs ini boleh dibagikan, dicetak, dan diajarkan kembali
              secara cuma-cuma. Hanya satu pesan kami: jangan memperjualbelikan
              eco enzyme.
            </Catatan>
          </div>
        </Wadah>
      </Bagian>
    </>
  );
}
