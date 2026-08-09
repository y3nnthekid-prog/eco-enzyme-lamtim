# Eco Enzyme Nusantara — Kabupaten Lampung Timur

Situs edukasi dan berita eco enzyme untuk masyarakat umum Kabupaten Lampung Timur.
Dirancang agar mudah dibaca semua umur: huruf besar, warna kontras, bahasa
sederhana, dan ada tombol pembesar teks untuk pengguna lansia.

## Menjalankan di komputer sendiri

```bash
npm install
npm run dev
```

Buka <http://localhost:3000>.

Perintah lain:

| Perintah        | Kegunaan                                  |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Menjalankan situs untuk pengembangan       |
| `npm run build` | Membangun versi produksi                   |
| `npm run start` | Menjalankan hasil build                    |
| `npm run lint`  | Memeriksa kualitas kode                    |

## Menambah berita baru

Semua berita berupa berkas Markdown di folder `content/berita/`.

1. Salin `content/berita/_template.md`.
2. Beri nama baru **tanpa** garis bawah di depan, misalnya
   `pelatihan-desa-sukadana.md`. Nama berkas menjadi alamat halamannya:
   `/berita/pelatihan-desa-sukadana`.
3. Isi bagian di antara tanda `---` (disebut *frontmatter*):

   ```yaml
   ---
   judul: "Judul beritanya"
   tanggal: "2026-08-17"        # wajib format TAHUN-BULAN-TANGGAL
   ringkasan: "Satu dua kalimat untuk daftar berita dan Google."
   kategori: "Kegiatan"          # Kegiatan / Pelatihan / Panen / Edukasi / Pengumuman
   penulis: "Tim EEN Lampung Timur"
   lokasi: "Kecamatan Sukadana"  # boleh dikosongkan
   ---
   ```

4. Tulis isi beritanya di bawah frontmatter memakai Markdown biasa.
5. Simpan. Berita otomatis muncul di `/berita` dan di beranda, terurut dari yang
   paling baru.

Berkas yang namanya diawali `_` dianggap draf dan tidak ditampilkan di situs.

### Memasang foto di berita

Simpan gambarnya di `public/berita/`, lalu tulis di dalam berita:

```markdown
![Keterangan foto](/berita/nama-foto.jpg)
```

## Mengubah isi edukasi

| Yang ingin diubah                        | Berkasnya                              |
| ---------------------------------------- | -------------------------------------- |
| Nama situs, email, alamat, menu          | `src/lib/situs.ts`                     |
| Daftar takaran pemakaian & kategorinya   | `src/data/pemakaian.ts`                |
| Pemecahan masalah larutan & tanya-jawab  | `src/data/masalah.ts`                  |
| Warna, ukuran huruf, gaya artikel        | `src/app/globals.css`                  |
| Isi tiap halaman                         | `src/app/<nama-halaman>/page.tsx`      |

Alamat situs untuk SEO diatur lewat `situs.url` di `src/lib/situs.ts` — ubah ke
domain sebenarnya setelah situs dipasang.

## Struktur halaman

```
/                       Beranda
/apa-itu-eco-enzyme     Pengertian, penemu, dan alasan membuat
/manfaat                Manfaat rumah tangga, kebun, lingkungan
/cara-membuat           Panduan lengkap + kalkulator takaran
/cara-memakai           Takaran pengenceran + tabel lengkap
/berita                 Daftar berita
/berita/<slug>          Halaman satu berita
/tentang                Tentang komunitas, kontak, sumber materi
```

## Menaikkan ke internet (Vercel)

Situs tayang di **<https://ecoenzymelamtim.com>**
(proyek Vercel `yennthekid/eco-enzyme-lamtim`, tersambung ke repositori
GitHub `y3nnthekid-prog/eco-enzyme-lamtim`).

Alamat lain semuanya dialihkan permanen ke alamat utama:

| Alamat                          | Perilaku                     |
| ------------------------------- | ---------------------------- |
| `ecoenzymelamtim.com`           | **alamat utama**             |
| `www.ecoenzymelamtim.com`       | dialihkan ke alamat utama    |
| `ecoenzymelamtim.site`          | dialihkan ke alamat utama    |
| `www.ecoenzymelamtim.site`      | dialihkan ke alamat utama    |
| `eenlamtim.com`                 | dialihkan ke alamat utama    |
| `www.eenlamtim.com`             | dialihkan ke alamat utama    |
| `eenlamtim.site`                | dialihkan ke alamat utama    |
| `www.eenlamtim.site`            | dialihkan ke alamat utama    |
| `eco-enzyme-lamtim.vercel.app`  | tetap hidup sebagai cadangan |

Daftar pengalihan diatur di `next.config.ts` — ubah `DOMAIN_UTAMA` dan
`DOMAIN_ALIHAN` di sana bila alamat resminya berganti lagi, lalu sesuaikan
juga `situs.url` di `src/lib/situs.ts`.

Penayangannya otomatis — cukup dorong perubahan ke GitHub:

```bash
git add -A
git commit -m "Tambah berita pelatihan Desa Sukadana"
git push
```

- Dorongan ke cabang `main` langsung tayang di alamat utama.
- Dorongan ke cabang lain menghasilkan alamat pratinjau untuk diperiksa dulu.

Bila sewaktu-waktu perlu menayangkan tanpa lewat GitHub:

```bash
npx vercel deploy --prod
```

Situs ini seluruhnya statis, jadi tidak perlu basis data maupun server khusus.
Kalau nanti dipasang domain sendiri, ubah `situs.url` di `src/lib/situs.ts`
agar sitemap dan tautan berbagi ikut menyesuaikan.

## Sumber materi

Materi edukasi bersumber dari **Modul Kelas Belajar Eco-Enzyme** (Tim Ngajaga
Bumi, Agustus 2020) dan tabel takaran **Persatuan Enzim Alam Sekitar Malaysia**.

Bagian yang berkaitan dengan kesehatan tubuh disertai penafian: informasi di
situs ini bukan nasihat medis dan tidak menggantikan pemeriksaan dokter.

## Teknologi

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · lucide-react ·
gray-matter + marked untuk berita Markdown.
