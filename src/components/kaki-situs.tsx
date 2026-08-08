import Image from "next/image";
import Link from "next/link";
import { Mail, Sprout } from "lucide-react";
import { navigasi, situs } from "@/lib/situs";

export function KakiSitus() {
  return (
    <footer className="tanpa-cetak mt-24 border-t-4 border-daun-500 bg-daun-900 text-daun-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white p-1">
              <Image
                src="/logo-een-lamtim.png"
                alt=""
                width={52}
                height={52}
                className="h-13 w-13"
              />
            </span>
            <span className="font-display text-xl leading-tight font-extrabold text-white">
              Eco Enzyme Nusantara
              <span className="block text-sm font-semibold text-daun-200">
                Kabupaten Lampung Timur
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-daun-100">{situs.tagline}</p>
          <p className="mt-5 flex items-start gap-2 rounded-2xl bg-daun-800 p-4 text-sm text-daun-100">
            <Sprout size={20} className="mt-0.5 shrink-0 text-daun-300" aria-hidden />
            <span>
              Ilmu eco enzyme diwariskan cuma-cuma oleh Dr. Rosukon Poompanvong.
              Mari ikut menjaga amanah itu: <strong>bagikan ilmunya, jangan
              diperjualbelikan.</strong>
            </span>
          </p>
        </div>

        <nav aria-label="Peta situs">
          <h2 className="font-display text-lg font-extrabold text-white">
            Isi Situs
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {navigasi.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-daun-100 underline-offset-4 hover:text-white hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-extrabold text-white">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-daun-100">
            Ingin mengadakan pelatihan eco enzyme di desa, sekolah, atau kantor
            Anda? Atau punya kabar kegiatan untuk dimuat di sini?
          </p>
          <a
            href={`mailto:${situs.email}`}
            className="mt-4 inline-flex max-w-full items-center gap-2 rounded-3xl bg-surya-400 px-5 py-3 font-bold break-all text-surya-900 transition-colors hover:bg-surya-300"
          >
            <Mail size={20} className="shrink-0" aria-hidden />
            {situs.email}
          </a>
          <p className="mt-6 text-sm text-daun-200">
            Materi edukasi di situs ini bersumber dari{" "}
            <em>Modul Kelas Belajar Eco-Enzyme</em> Ngajaga Bumi dan Persatuan
            Enzim Alam Sekitar Malaysia.
          </p>
        </div>
      </div>

      <div className="border-t border-daun-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-daun-200 sm:px-6">
          <p>
            © {new Date().getFullYear()} Eco Enzyme Nusantara Kabupaten Lampung
            Timur. Dibuat untuk kepentingan edukasi masyarakat — silakan
            disebarluaskan.
          </p>
        </div>
      </div>
    </footer>
  );
}
