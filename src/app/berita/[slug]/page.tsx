import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MapPin, User } from "lucide-react";
import { Bagian, Kartu, Tombol, Wadah } from "@/components/ui";
import {
  beritaBerdasarkanSlug,
  keHtml,
  semuaBerita,
  tanggalIndonesia,
} from "@/lib/berita";

export function generateStaticParams() {
  return semuaBerita().map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/berita/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const berita = beritaBerdasarkanSlug(slug);
  if (!berita) return { title: "Berita tidak ditemukan" };
  return {
    title: berita.judul,
    description: berita.ringkasan,
    openGraph: {
      type: "article",
      title: berita.judul,
      description: berita.ringkasan,
      publishedTime: berita.tanggal,
    },
  };
}

export default async function HalamanBerita({
  params,
}: PageProps<"/berita/[slug]">) {
  const { slug } = await params;
  const berita = beritaBerdasarkanSlug(slug);
  if (!berita) notFound();

  const html = await keHtml(berita.isiMarkdown);
  const lainnya = semuaBerita()
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <div className="pola-daun overflow-hidden border-b border-garis">
        <Wadah lebar="sempit" className="py-12 sm:py-16">
          <Link
            href="/berita"
            className="group inline-flex items-center gap-2 font-display font-extrabold text-air-700"
          >
            <ArrowLeft
              size={20}
              className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-1 motion-reduce:group-hover:translate-x-0"
              aria-hidden
            />
            <span className="group-hover:underline">Semua berita</span>
          </Link>

          <p className="kicker masuk mt-8">{berita.kategori}</p>
          <h1 className="masuk mt-4 text-[2.1rem] leading-[1.1] tracking-[-0.025em] text-daun-900 sm:text-5xl [--jeda:70ms]">
            {berita.judul}
          </h1>
          <p className="masuk mt-5 text-lg leading-relaxed text-tinta-lembut [--jeda:140ms]">
            {berita.ringkasan}
          </p>

          <dl className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-tinta-lembut">
            <div className="flex items-center gap-2">
              <CalendarDays size={18} className="text-daun-600" aria-hidden />
              <dt className="sr-only">Tanggal</dt>
              <dd className="font-semibold">
                <time dateTime={berita.tanggal}>
                  {tanggalIndonesia(berita.tanggal)}
                </time>
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-daun-600" aria-hidden />
              <dt className="sr-only">Penulis</dt>
              <dd className="font-semibold">{berita.penulis}</dd>
            </div>
            {berita.lokasi && (
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-daun-600" aria-hidden />
                <dt className="sr-only">Lokasi</dt>
                <dd className="font-semibold">{berita.lokasi}</dd>
              </div>
            )}
          </dl>
        </Wadah>
      </div>

      <Bagian>
        <Wadah lebar="sempit">
          <article
            className="artikel"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <div className="mt-14 border-t border-garis pt-10">
            <Tombol href="/berita" varian="garis">
              ← Kembali ke daftar berita
            </Tombol>
          </div>
        </Wadah>
      </Bagian>

      {lainnya.length > 0 && (
        <Bagian latar="hijau">
          <Wadah lebar="lebar">
            <h2 className="text-2xl text-daun-900 sm:text-3xl">
              Berita lainnya
            </h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {lainnya.map((b) => (
                <li key={b.slug}>
                  <Link href={`/berita/${b.slug}`} className="group block h-full">
                    <Kartu className="flex h-full flex-col angkat">
                      <p className="text-sm font-bold text-tinta-lembut">
                        {tanggalIndonesia(b.tanggal)}
                      </p>
                      <h3 className="mt-2 text-lg text-daun-900 group-hover:text-daun-700">
                        {b.judul}
                      </h3>
                      <p className="mt-2 flex-1 text-tinta-lembut">
                        {b.ringkasan}
                      </p>
                    </Kartu>
                  </Link>
                </li>
              ))}
            </ul>
          </Wadah>
        </Bagian>
      )}
    </>
  );
}
