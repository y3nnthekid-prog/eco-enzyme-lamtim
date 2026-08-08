import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Info, Lightbulb } from "lucide-react";

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
    <section id={id} className={`scroll-mt-28 py-14 sm:py-20 ${gaya} ${className}`}>
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
  const posisi = rata === "tengah" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-3xl ${posisi}`}>
      {label && (
        <p className="mb-3 inline-block rounded-full bg-daun-100 px-4 py-1.5 text-sm font-extrabold tracking-wide text-daun-800 uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl text-daun-900 sm:text-4xl">{judul}</h2>
      {ringkasan && (
        <p className="mt-4 text-lg text-tinta-lembut sm:text-xl">{ringkasan}</p>
      )}
    </div>
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
    putih: "bg-white border-daun-100",
    hijau: "bg-daun-50 border-daun-200",
    biru: "bg-air-50 border-air-200",
    surya: "bg-surya-50 border-surya-200",
  }[warna];
  return (
    <div
      className={`rounded-4xl border-2 p-6 shadow-lembut sm:p-7 ${gaya} ${className}`}
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
    daun: "bg-daun-100 text-daun-700",
    air: "bg-air-100 text-air-700",
    surya: "bg-surya-100 text-surya-700",
  }[warna];
  return (
    <div className="h-full rounded-4xl border-2 border-daun-100 bg-white p-6 shadow-lembut transition-shadow hover:shadow-angkat">
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${gaya}`}
        aria-hidden
      >
        {ikon}
      </span>
      <h3 className="mt-5 text-xl text-daun-900">{judul}</h3>
      <div className="mt-2 text-tinta-lembut">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------- Catatan ---- */

const jenisCatatan = {
  tips: {
    ikon: Lightbulb,
    gaya: "border-surya-300 bg-surya-50",
    warnaIkon: "text-surya-600",
    judulBawaan: "Tips",
  },
  penting: {
    ikon: AlertTriangle,
    gaya: "border-red-300 bg-red-50",
    warnaIkon: "text-red-600",
    judulBawaan: "Perhatian",
  },
  info: {
    ikon: Info,
    gaya: "border-air-300 bg-air-50",
    warnaIkon: "text-air-600",
    judulBawaan: "Tahukah Anda",
  },
  aman: {
    ikon: CheckCircle2,
    gaya: "border-daun-300 bg-daun-50",
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
    <div className={`rounded-3xl border-2 p-5 sm:p-6 ${gaya}`}>
      <p className="flex items-center gap-2.5 font-display text-lg font-extrabold text-tinta">
        <Ikon size={24} className={warnaIkon} aria-hidden />
        {judul ?? judulBawaan}
      </p>
      <div className="mt-2 text-tinta">{children}</div>
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
    utama:
      "bg-daun-600 text-white hover:bg-daun-700 shadow-lembut border-2 border-daun-600",
    kedua:
      "bg-surya-400 text-surya-900 hover:bg-surya-300 shadow-lembut border-2 border-surya-400",
    garis: "bg-white text-daun-800 border-2 border-daun-300 hover:bg-daun-50",
  }[varian];
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center font-display text-lg font-extrabold transition-colors ${gaya} ${className}`}
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
    <div className="pola-daun border-b-2 border-daun-100 bg-daun-50/60">
      <Wadah lebar="normal" className="py-14 sm:py-20">
        <p className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-extrabold tracking-wide text-daun-700 uppercase shadow-lembut">
          {label}
        </p>
        <h1 className="mt-5 text-4xl text-daun-900 sm:text-5xl">{judul}</h1>
        <p className="mt-5 max-w-3xl text-lg text-tinta-lembut sm:text-xl">
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
    <div className="rounded-4xl border-2 border-daun-100 bg-white p-6 text-center shadow-lembut">
      <p className={`font-display text-5xl font-black sm:text-6xl ${gaya}`}>
        {angka}
        {satuan && <span className="text-2xl sm:text-3xl"> {satuan}</span>}
      </p>
      <p className="mt-3 font-semibold text-tinta-lembut">{keterangan}</p>
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
