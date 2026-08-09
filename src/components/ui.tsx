import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Info, Lightbulb } from "lucide-react";
import { Muncul } from "@/components/muncul";

/* -------------------------------------------------------------- Wadah ---- */

export function Wadah({
  children,
  lebar = "normal",
  className = "",
}: {
  children: ReactNode;
  lebar?: "sempit" | "normal" | "lebar";
  className?: string;
}) {
  const maks = {
    sempit: "max-w-3xl",
    normal: "max-w-5xl",
    lebar: "max-w-7xl",
  }[lebar];
  return (
    <div className={`mx-auto w-full ${maks} px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------- Bagian ---- */

export function Bagian({
  id,
  children,
  latar = "polos",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  latar?: "polos" | "hijau" | "biru" | "krem";
  className?: string;
}) {
  const gaya = {
    polos: "",
    hijau: "bg-daun-50",
    biru: "bg-air-50",
    krem: "bg-surya-50",
  }[latar];
  return (
    // Tanpa scroll-mt: jarak dari header sudah diatur sekali saja lewat
    // `scroll-padding-top` pada <html>. Dipasang di dua tempat, offsetnya
    // bertumpuk dan judul tujuan mendarat jauh di bawah header.
    <section id={id} className={`py-14 sm:py-20 ${gaya} ${className}`}>
      {children}
    </section>
  );
}

export function JudulBagian({
  label,
  judul,
  ringkasan,
  rata = "kiri",
}: {
  label?: string;
  judul: ReactNode;
  ringkasan?: ReactNode;
  rata?: "kiri" | "tengah";
}) {
  const tengah = rata === "tengah";
  return (
    <Muncul className={`max-w-3xl ${tengah ? "mx-auto text-center" : ""}`}>
      {label && (
        <p className={`kicker mb-4 ${tengah ? "justify-center" : ""}`}>
          {label}
        </p>
      )}
      <h2 className="text-[2rem] leading-[1.12] tracking-[-0.02em] text-daun-900 sm:text-[2.6rem]">
        {judul}
      </h2>
      {ringkasan && (
        <p className="mt-5 text-lg leading-relaxed text-tinta-lembut sm:text-xl">
          {ringkasan}
        </p>
      )}
    </Muncul>
  );
}

/* --------------------------------------------------------------- Kartu ---- */

export function Kartu({
  children,
  className = "",
  warna = "putih",
}: {
  children: ReactNode;
  className?: string;
  warna?: "putih" | "hijau" | "biru" | "surya";
}) {
  const gaya = {
    putih: "bg-white border-garis",
    hijau: "bg-daun-50/70 border-daun-200/60",
    biru: "bg-air-50/70 border-air-200/60",
    surya: "bg-surya-50/70 border-surya-200/60",
  }[warna];
  return (
    <div
      className={`rounded-4xl border p-6 shadow-lembut sm:p-8 ${gaya} ${className}`}
    >
      {children}
    </div>
  );
}

export function KartuIkon({
  ikon,
  judul,
  children,
  warna = "daun",
}: {
  ikon: ReactNode;
  judul: string;
  children: ReactNode;
  warna?: "daun" | "air" | "surya";
}) {
  const gaya = {
    daun: "text-daun-600",
    air: "text-air-600",
    surya: "text-surya-500",
  }[warna];
  return (
    <div className="angkat h-full rounded-4xl border border-garis bg-white p-7 shadow-lembut hover:border-daun-200">
      {/* Ikon dibiarkan telanjang di atas judul. Lingkaran berwarna di balik
          setiap ikon adalah pola yang paling cepat membuat halaman terasa
          seperti templat. */}
      <span className={`block ${gaya}`} aria-hidden>
        {ikon}
      </span>
      <h3 className="mt-5 text-xl tracking-[-0.01em] text-daun-900">{judul}</h3>
      <div className="mt-2.5 leading-relaxed text-tinta-lembut">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------- Catatan ---- */

const jenisCatatan = {
  tips: {
    ikon: Lightbulb,
    gaya: "border-surya-400 bg-surya-50/60",
    warnaIkon: "text-surya-600",
    judulBawaan: "Tips",
  },
  penting: {
    ikon: AlertTriangle,
    gaya: "border-red-400 bg-red-50/60",
    warnaIkon: "text-red-600",
    judulBawaan: "Perhatian",
  },
  info: {
    ikon: Info,
    gaya: "border-air-400 bg-air-50/60",
    warnaIkon: "text-air-600",
    judulBawaan: "Tahukah Anda",
  },
  aman: {
    ikon: CheckCircle2,
    gaya: "border-daun-400 bg-daun-50/60",
    warnaIkon: "text-daun-600",
    judulBawaan: "Boleh dilakukan",
  },
} as const;

export function Catatan({
  jenis = "info",
  judul,
  children,
}: {
  jenis?: keyof typeof jenisCatatan;
  judul?: string;
  children: ReactNode;
}) {
  const { ikon: Ikon, gaya, warnaIkon, judulBawaan } = jenisCatatan[jenis];
  return (
    // Pita warna di tepi kiri, bukan bingkai penuh — mata langsung menangkap
    // "ini sisipan", tanpa menambah satu kotak lagi ke halaman.
    <div className={`rounded-r-3xl rounded-l-lg border-l-4 py-5 pr-5 pl-5 sm:pr-7 ${gaya}`}>
      <p className="flex items-center gap-2.5 font-display text-lg font-extrabold text-tinta">
        <Ikon size={22} className={`shrink-0 ${warnaIkon}`} aria-hidden />
        {judul ?? judulBawaan}
      </p>
      <div className="mt-2 leading-relaxed text-tinta">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------- Tombol ---- */

type TombolProps = {
  children: ReactNode;
  href: string;
  varian?: "utama" | "kedua" | "garis";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function Tombol({
  children,
  href,
  varian = "utama",
  className = "",
  ...sisa
}: TombolProps) {
  const gaya = {
    utama: "bg-daun-700 text-white hover:bg-daun-800 shadow-lembut",
    kedua: "bg-surya-400 text-surya-900 hover:bg-surya-300 shadow-lembut",
    garis: "bg-white text-daun-800 border border-daun-300 hover:border-daun-500",
  }[varian];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center font-display text-lg font-extrabold transition-[background-color,border-color,transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 ${gaya} ${className}`}
      {...sisa}
    >
      {children}
    </Link>
  );
}

export function TautanLanjut({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 font-display text-lg font-extrabold text-air-700 underline-offset-4 hover:underline"
    >
      {children}
      <ArrowRight
        size={20}
        className="transition-transform group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}

/* --------------------------------------------------------- Kepala laman ---- */

export function KepalaLaman({
  label,
  judul,
  ringkasan,
  anak,
}: {
  label: string;
  judul: string;
  ringkasan: string;
  anak?: ReactNode;
}) {
  return (
    <div className="pola-daun overflow-hidden border-b border-garis">
      <Wadah lebar="normal" className="relative py-16 sm:py-24">
        <p className="kicker masuk">{label}</p>
        <h1 className="masuk mt-5 max-w-4xl text-[2.5rem] leading-[1.08] tracking-[-0.025em] text-daun-900 sm:text-6xl [--jeda:70ms]">
          {judul}
        </h1>
        <p className="masuk mt-6 max-w-2xl text-lg leading-relaxed text-tinta-lembut sm:text-xl [--jeda:140ms]">
          {ringkasan}
        </p>
        {anak}
      </Wadah>
    </div>
  );
}

/* ------------------------------------------------------------- Langkah ---- */

export function Langkah({
  nomor,
  judul,
  children,
}: {
  nomor: number;
  judul: string;
  children: ReactNode;
}) {
  return (
    <li className="group relative flex gap-5 pb-10 last:pb-0">
      <span
        className="absolute top-14 bottom-0 left-6 w-1 -translate-x-1/2 rounded bg-daun-200 group-last:hidden"
        aria-hidden
      />
      <span
        className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-daun-600 font-display text-xl font-black text-white shadow-lembut"
        aria-hidden
      >
        {nomor}
      </span>
      <div className="pt-1.5">
        <h3 className="text-xl text-daun-900">
          <span className="sr-only">Langkah {nomor}: </span>
          {judul}
        </h3>
        <div className="mt-2 text-tinta-lembut">{children}</div>
      </div>
    </li>
  );
}

/* ---------------------------------------------------------- Angka besar ---- */

export function Angka({
  angka,
  satuan,
  keterangan,
  warna = "daun",
}: {
  angka: string;
  satuan?: string;
  keterangan: string;
  warna?: "daun" | "air" | "surya";
}) {
  const gaya = {
    daun: "text-daun-600",
    air: "text-air-600",
    surya: "text-surya-500",
  }[warna];
  return (
    // Tanpa kotak. Angkanya sendiri yang jadi bentuk visual, dipisahkan
    // garis tipis di atas — cara majalah menyusun statistik.
    <div className="border-t-2 border-daun-200 pt-5">
      <p
        className={`font-display text-[3.25rem] leading-none font-black tracking-[-0.03em] tabular-nums sm:text-6xl ${gaya}`}
      >
        {angka}
        {satuan && <span className="text-2xl sm:text-3xl"> {satuan}</span>}
      </p>
      <p className="mt-4 leading-relaxed text-tinta-lembut">{keterangan}</p>
    </div>
  );
}

/* -------------------------------------------------------------- Daftar ---- */

export function DaftarCeklis({
  butir,
  jenis = "boleh",
}: {
  butir: ReactNode[];
  jenis?: "boleh" | "jangan";
}) {
  const boleh = jenis === "boleh";
  return (
    <ul className="grid gap-3">
      {butir.map((isi, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-black text-white ${
              boleh ? "bg-daun-500" : "bg-red-500"
            }`}
            aria-hidden
          >
            {boleh ? "✓" : "✕"}
          </span>
          <span className="text-tinta">
            <span className="sr-only">{boleh ? "Boleh: " : "Jangan: "}</span>
            {isi}
          </span>
        </li>
      ))}
    </ul>
  );
}
