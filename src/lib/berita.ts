import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const DIREKTORI = path.join(process.cwd(), "content", "berita");

export type Berita = {
  slug: string;
  judul: string;
  tanggal: string;
  ringkasan: string;
  kategori: string;
  penulis: string;
  lokasi?: string;
  gambar?: string;
  utama?: boolean;
  isiMarkdown: string;
};

function bacaBerkas(namaBerkas: string): Berita {
  const slug = namaBerkas.replace(/\.md$/, "");
  const mentah = fs.readFileSync(path.join(DIREKTORI, namaBerkas), "utf8");
  const { data, content } = matter(mentah);

  return {
    slug,
    judul: String(data.judul ?? slug),
    tanggal: String(data.tanggal ?? ""),
    ringkasan: String(data.ringkasan ?? ""),
    kategori: String(data.kategori ?? "Kabar"),
    penulis: String(data.penulis ?? "Tim EEN Lampung Timur"),
    lokasi: data.lokasi ? String(data.lokasi) : undefined,
    gambar: data.gambar ? String(data.gambar) : undefined,
    utama: Boolean(data.utama),
    isiMarkdown: content,
  };
}

export function semuaBerita(): Berita[] {
  if (!fs.existsSync(DIREKTORI)) return [];
  return fs
    .readdirSync(DIREKTORI)
    // Berkas berawalan "_" dianggap draf/contoh dan tidak ikut ditampilkan.
    .filter((n) => n.endsWith(".md") && !n.startsWith("_"))
    .map(bacaBerkas)
    .sort((a, b) => b.tanggal.localeCompare(a.tanggal));
}

export function beritaBerdasarkanSlug(slug: string): Berita | undefined {
  return semuaBerita().find((b) => b.slug === slug);
}

export function semuaKategoriBerita(): string[] {
  return [...new Set(semuaBerita().map((b) => b.kategori))].sort();
}

export async function keHtml(markdown: string): Promise<string> {
  return marked.parse(markdown, { async: true, gfm: true, breaks: false });
}

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

/** "2026-08-08" -> "8 Agustus 2026" */
export function tanggalIndonesia(iso: string): string {
  const cocok = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!cocok) return iso;
  const [, tahun, bulan, hari] = cocok;
  return `${Number(hari)} ${namaBulan[Number(bulan) - 1]} ${tahun}`;
}
