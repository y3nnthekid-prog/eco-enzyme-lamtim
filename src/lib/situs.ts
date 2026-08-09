export const situs = {
  nama: "Eco Enzyme Nusantara",
  wilayah: "Kabupaten Lampung Timur",
  namaPendek: "EEN Lampung Timur",
  tagline: "Sampah dapur jadi cairan serba guna untuk rumah, kebun, dan Bumi.",
  deskripsi:
    "Pusat belajar eco enzyme untuk warga Kabupaten Lampung Timur. Belajar apa itu eco enzyme, manfaatnya, cara membuat, dan cara memakainya — dengan bahasa yang mudah dipahami semua umur.",
  url: "https://ecoenzymelamtim.com",
  email: "ecoenzymelampungtimur@gmail.com",
  /** Format internasional tanpa tanda baca, dipakai untuk tautan wa.me */
  whatsapp: "6281210418003",
  whatsappTampil: "+62 812-1041-8003",
  instagram: "",
  facebook: "",
} as const;

/** Tautan WhatsApp lengkap dengan pesan pembuka yang sudah terisi. */
export function tautanWhatsApp(
  pesan = "Halo, saya ingin bertanya tentang eco enzyme.",
): string {
  return `https://wa.me/${situs.whatsapp}?text=${encodeURIComponent(pesan)}`;
}

export type ItemNav = {
  label: string;
  href: string;
  keterangan: string;
};

export const navigasi: ItemNav[] = [
  { label: "Beranda", href: "/", keterangan: "Halaman depan" },
  {
    label: "Apa Itu Eco Enzyme",
    href: "/apa-itu-eco-enzyme",
    keterangan: "Pengertian, penemu, dan alasan kita membuatnya",
  },
  {
    label: "Manfaat",
    href: "/manfaat",
    keterangan: "Manfaat untuk rumah, kebun, dan lingkungan",
  },
  {
    label: "Cara Membuat",
    href: "/cara-membuat",
    keterangan: "Panduan lengkap 1 : 3 : 10 dan kalkulator takaran",
  },
  {
    label: "Cara Memakai",
    href: "/cara-memakai",
    keterangan: "Takaran pengenceran untuk tiap keperluan",
  },
  { label: "Berita", href: "/berita", keterangan: "Kabar kegiatan Lampung Timur" },
  { label: "Tentang", href: "/tentang", keterangan: "Tentang komunitas dan kontak" },
];
