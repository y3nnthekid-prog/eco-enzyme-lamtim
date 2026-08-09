export type Kategori =
  | "dapur"
  | "bersih-bersih"
  | "cuci"
  | "kebun"
  | "lingkungan"
  | "diri"
  | "hewan";

export type Pemakaian = {
  id: string;
  nama: string;
  kategori: Kategori;
  takaran: string;
  /** Terjemahan takaran ke ukuran dapur sehari-hari. */
  contoh: string;
  manfaat: string;
  /** Ditandai bila pemakaiannya menyentuh tubuh / kesehatan. */
  perluHatiHati?: boolean;
};

/**
 * Nama ikon lucide untuk tiap kategori. Sengaja memakai ikon garis, bukan
 * emoji: emoji tampil berbeda-beda di tiap perangkat, ukurannya sulit
 * disamakan dengan teks di sebelahnya, dan membuat antarmuka terlihat seperti
 * templat siap pakai.
 */
export const daftarKategori: {
  id: Kategori;
  nama: string;
  ikon: string;
  keterangan: string;
}[] = [
  {
    id: "dapur",
    nama: "Dapur",
    ikon: "UtensilsCrossed",
    keterangan: "Cuci piring, kompor, dan merendam sayur",
  },
  {
    id: "bersih-bersih",
    nama: "Bersih-bersih Rumah",
    ikon: "SprayCan",
    keterangan: "Pel lantai, kamar mandi, dan kloset",
  },
  {
    id: "cuci",
    nama: "Cuci Pakaian",
    ikon: "Shirt",
    keterangan: "Merendam dan mencuci baju",
  },
  {
    id: "kebun",
    nama: "Kebun & Sawah",
    ikon: "Sprout",
    keterangan: "Pupuk dan pengendali hama alami",
  },
  {
    id: "lingkungan",
    nama: "Udara & Air",
    ikon: "Droplets",
    keterangan: "Penjernih udara, selokan, dan kolam",
  },
  {
    id: "diri",
    nama: "Perawatan Diri",
    ikon: "Bath",
    keterangan: "Mandi, keramas, dan berkumur",
  },
  {
    id: "hewan",
    nama: "Hewan Peliharaan",
    ikon: "PawPrint",
    keterangan: "Memandikan dan menghilangkan bau",
  },
];

/**
 * Takaran mengikuti tabel "Takaran Eco-Enzyme dalam Aplikasi Sehari-hari"
 * dari Persatuan Enzim Alam Sekitar Malaysia, sebagaimana dimuat dalam
 * Modul Kelas Belajar Eco-Enzyme (Ngajaga Bumi, 2020).
 */
export const daftarPemakaian: Pemakaian[] = [
  {
    id: "cuci-piring",
    nama: "Mencuci piring",
    kategori: "dapur",
    takaran: "Eco enzyme : sabun : air = 1 : 1 : 5 sampai 10",
    contoh: "1 gelas eco enzyme + 1 gelas sabun cuci + 5–10 gelas air",
    manfaat: "Melunturkan minyak dan menghilangkan bau amis",
  },
  {
    id: "kompor",
    nama: "Membersihkan kompor & meja dapur",
    kategori: "dapur",
    takaran: "Eco enzyme : sabun : air = 1 : 1 : 5 sampai 10",
    contoh: "Masukkan ke botol semprot, semprot lalu lap",
    manfaat: "Mengangkat kerak minyak yang membandel",
  },
  {
    id: "rendam-sayur",
    nama: "Merendam sayur & buah",
    kategori: "dapur",
    takaran: "2 sendok makan eco enzyme : 1 liter air — rendam 45 menit",
    contoh: "1 tutup botol untuk 1 baskom air",
    manfaat:
      "Membantu meluruhkan sisa pestisida dan kotoran; sayur terasa lebih segar",
  },
  {
    id: "pel-lantai",
    nama: "Mengepel lantai",
    kategori: "bersih-bersih",
    takaran: "1–2 tutup botol eco enzyme : 1 ember air",
    contoh: "1 ember ± 10 liter air",
    manfaat: "Membasmi kuman dan minyak, mengurangi serangga dan tikus",
  },
  {
    id: "kamar-mandi",
    nama: "Membersihkan kamar mandi & kloset",
    kategori: "bersih-bersih",
    takaran: "Eco enzyme murni (tanpa dicampur air)",
    contoh: "Siramkan langsung, diamkan, lalu sikat",
    manfaat:
      "Mudah dibersihkan, bau hilang, saluran tidak mudah tersumbat, membantu kerja bakteri di septic tank",
  },
  {
    id: "saluran-mampet",
    nama: "Melancarkan saluran mampet",
    kategori: "bersih-bersih",
    takaran: "Eco enzyme murni + ampas yang diblender halus",
    contoh: "Tuang malam hari, biarkan bekerja sampai pagi",
    manfaat: "Menguraikan lemak yang menyumbat pipa",
  },
  {
    id: "pembersih-logam",
    nama: "Membersihkan logam kusam & berkarat",
    kategori: "bersih-bersih",
    takaran: "Eco enzyme murni, rendam atau gosok",
    contoh: "Cocok untuk peralatan dapur, engsel, dan perkakas",
    manfaat: "Mengangkat karat dan mengembalikan kilap logam yang kusam",
  },
  {
    id: "cuci-pakaian",
    nama: "Mencuci pakaian",
    kategori: "cuci",
    takaran: "Eco enzyme : air = 1 : 500 sampai 1.000 — rendam beberapa menit",
    contoh: "1 tutup botol untuk 1 mesin cuci / 1 ember rendaman",
    manfaat: "Mengangkat noda dan menjaga warna kain tetap awet",
  },
  {
    id: "pengganti-pelembut",
    nama: "Pengganti pemutih & pelembut pakaian",
    kategori: "cuci",
    takaran: "Tambahkan 1 tutup botol pada air bilasan terakhir",
    contoh: "Tanpa pewangi kimia tambahan",
    manfaat: "Pakaian bersih tanpa zat fluoresens dan pewangi sintetis",
  },
  {
    id: "pupuk",
    nama: "Pupuk tanaman",
    kategori: "kebun",
    takaran: "Eco enzyme : air = 1 : 1.000",
    contoh: "1 sendok makan untuk 10 liter air — siramkan ke tanah",
    manfaat: "Menyuburkan tanah dan memperbaiki tanah yang gersang",
  },
  {
    id: "pestisida",
    nama: "Pengendali hama alami",
    kategori: "kebun",
    takaran: "Eco enzyme : air = 1 : 1.000",
    contoh: "Semprotkan langsung ke bagian tanaman yang terkena hama",
    manfaat: "Mengurangi hama tanpa racun kimia",
  },
  {
    id: "ampas-pupuk",
    nama: "Ampas eco enzyme untuk tanah",
    kategori: "kebun",
    takaran: "Kubur langsung di tanah atau masukkan ke lubang biopori",
    contoh: "Bisa juga dicampur ke dalam kompos",
    manfaat: "Menambah bahan organik dan menggemburkan tanah",
  },
  {
    id: "penjernih-udara",
    nama: "Penjernih & pewangi udara",
    kategori: "lingkungan",
    takaran: "Eco enzyme : air = 1 : 1.000 sampai 1 : 100.000",
    contoh: "1 ml (± 1/5 sendok teh) untuk 1 liter air di botol semprot",
    manfaat: "Menyegarkan ruangan dan mengurangi bau serta asap dalam ruangan",
  },
  {
    id: "diffuser",
    nama: "Diffuser atau humidifier",
    kategori: "lingkungan",
    takaran: "Eco enzyme : air = 1 : 1.000, sesuaikan dengan alat",
    contoh: "Alternatif selain botol semprot, untuk ruangan tertutup",
    manfaat: "Menyebarkan uap eco enzyme merata ke seluruh ruangan",
  },
  {
    id: "ranjang-eco-enzyme",
    nama: "“Ranjang eco enzyme” di kamar tidur",
    kategori: "lingkungan",
    takaran: "Wadah larutan utuh, usia larutan minimal 45 hari",
    contoh: "Letakkan wadah tertutup di kamar tidur",
    manfaat:
      "Praktik komunitas untuk menyegarkan udara kamar. Bukan pengganti pengobatan.",
    perluHatiHati: true,
  },
  {
    id: "selokan",
    nama: "Membersihkan selokan & sungai",
    kategori: "lingkungan",
    takaran: "Eco enzyme murni atau encer, tuang merata",
    contoh: "Cocok juga untuk hasil panen yang kualitasnya kurang bagus",
    manfaat: "Mengurangi bau, memperbaiki kualitas air, mengurangi lumut",
  },
  {
    id: "kolam",
    nama: "Menjernihkan kolam & danau",
    kategori: "lingkungan",
    takaran: "Eco enzyme : air = 1 : 50.000 sampai 1 : 100.000, sebulan sekali",
    contoh:
      "Pak Joni Oei di Batam menjernihkan kolam air hujan dengan 1.200 liter selama 6 bulan",
    manfaat: "Air lebih jernih dan ekosistem air berangsur pulih",
  },
  {
    id: "mandi",
    nama: "Mandi & cuci tangan",
    kategori: "diri",
    takaran: "Eco enzyme : sabun : air = 1 : 1 : 5 sampai 10",
    contoh: "Campur dalam botol sabun: 10% sabun + 10% eco enzyme + 80% air",
    manfaat: "Melembapkan kulit dan mengurangi rasa gatal",
    perluHatiHati: true,
  },
  {
    id: "keramas",
    nama: "Keramas",
    kategori: "diri",
    takaran: "Eco enzyme : sampo : air = 1 : 1 : 5 sampai 10",
    contoh: "Campurkan langsung di botol sampo",
    manfaat: "Membantu mengurangi ketombe dan rambut rontok",
    perluHatiHati: true,
  },
  {
    id: "kumur",
    nama: "Obat kumur",
    kategori: "diri",
    takaran: "10 ml eco enzyme : setengah gelas air",
    contoh: "10 ml ± 1 tutup botol air mineral",
    manfaat: "Menyegarkan mulut dan membantu meredakan sariawan",
    perluHatiHati: true,
  },
  {
    id: "hand-sanitizer",
    nama: "Cairan pembersih tangan",
    kategori: "diri",
    takaran: "Eco enzyme : air = 1 ml : 400 ml",
    contoh: "± 1/5 sendok teh untuk 2 gelas air",
    manfaat: "Membersihkan tangan tanpa alkohol",
    perluHatiHati: true,
  },
  {
    id: "rendam-kaki",
    nama: "Merendam kaki",
    kategori: "diri",
    takaran: "30 ml eco enzyme : 1 baskom air hangat (30–40 °C), rendam 20–30 menit",
    contoh: "30 ml ± 2 sendok makan",
    manfaat: "Membantu tubuh terasa rileks dan mengurangi bau kaki",
    perluHatiHati: true,
  },
  {
    id: "pasta-gigi",
    nama: "Pengganti pasta gigi",
    kategori: "diri",
    takaran: "Celupkan sikat gigi ke eco enzyme yang sudah diencerkan",
    contoh: "Jangan ditelan — kumur lalu buang",
    manfaat: "Alternatif alami bagi yang ingin mengurangi bahan kimia sintetis",
    perluHatiHati: true,
  },
  {
    id: "toner",
    nama: "Toner wajah",
    kategori: "diri",
    takaran: "Encerkan sangat tipis, mulai dari 1 : 100",
    contoh: "Coba dulu di kulit lengan sebelum dipakai di wajah",
    manfaat: "Dipakai sebagian warga sebagai perawatan kulit alami",
    perluHatiHati: true,
  },
  {
    id: "hewan",
    nama: "Memandikan hewan peliharaan",
    kategori: "hewan",
    takaran: "Eco enzyme : air = 1 : 5 sampai 10",
    contoh: "1 gelas eco enzyme untuk 5–10 gelas air",
    manfaat: "Mengurangi bau badan dan kutu pada hewan",
  },
  {
    id: "kandang",
    nama: "Menyemprot kandang",
    kategori: "hewan",
    takaran: "Eco enzyme : air = 1 : 100 sampai 1 : 500",
    contoh: "Semprotkan merata ke lantai dan dinding kandang",
    manfaat: "Menghilangkan bau amonia dan lalat berkurang",
  },
];
