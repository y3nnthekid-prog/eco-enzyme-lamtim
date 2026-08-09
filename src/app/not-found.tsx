import { Tombol, Wadah } from "@/components/ui";
import { navigasi } from "@/lib/situs";
import Link from "next/link";

export default function TidakDitemukan() {
  return (
    <Wadah lebar="normal" className="py-20 text-center sm:py-28">
      <p className="font-display text-7xl font-black text-daun-300">404</p>
      <h1 className="mt-4 text-3xl text-daun-900 sm:text-4xl">
        Halaman yang Anda cari tidak ada
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-tinta-lembut">
        Mungkin alamatnya salah ketik, atau halamannya sudah dipindahkan. Coba
        pilih salah satu halaman di bawah ini.
      </p>

      <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
        {navigasi.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-block rounded-full border border-daun-200/70 bg-white px-5 py-2.5 font-bold text-daun-800 hover:bg-daun-50"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Tombol href="/">Kembali ke beranda</Tombol>
      </div>
    </Wadah>
  );
}
