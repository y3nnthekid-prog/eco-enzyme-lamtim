export type Masalah = {
  tanya: string;
  jawab: string[];
  parah: "aman" | "perbaiki" | "bahaya";
};

/** Panduan "Mengamati & Memperbaiki Larutan" pada usia 3 minggu. */
export const daftarMasalah: Masalah[] = [
  {
    tanya: "Bahan buah/sayur mengambang di atas permukaan air",
    parah: "perbaiki",
    jawab: [
      "Ini wajar terjadi. Cukup aduk supaya semua bahan kembali terendam cairan.",
      "Setelah diaduk, tutup rapat lagi seperti semula.",
    ],
  },
  {
    tanya: "Muncul belatung di dalam wadah",
    parah: "perbaiki",
    jawab: [
      "Tandanya wadah kurang rapat sehingga lalat bisa masuk. Perbaiki dulu kerapatan tutupnya.",
      "Aduk rata, lalu jemur wadah dalam keadaan tertutup di bawah sinar matahari pagi selama 30 menit setiap hari, 2–3 hari berturut-turut.",
      "Periksa lagi pada hari ke-7 setelah penjemuran.",
    ],
  },
  {
    tanya: "Larutan berwarna hitam dan berbau seperti got",
    parah: "bahaya",
    jawab: [
      "Fermentasi sedang gagal. Perbaiki kerapatan wadah dan pindahkan ke lokasi penyimpanan yang lebih baik.",
      "Aduk rata, lalu jemur wadah tertutup di bawah matahari pagi 30 menit selama 2–3 hari.",
      "Jika pada hari ke-7 bau got masih ada, tambahkan gula sebanyak takaran awal, lalu perpanjang waktu fermentasi 1 bulan lagi.",
    ],
  },
  {
    tanya: "Ada jamur hitam, hijau, atau abu-abu seperti beludru",
    parah: "bahaya",
    jawab: [
      "Itu jamur kapang yang berbahaya. Buang jamurnya terlebih dahulu.",
      "Lakukan perbaikan yang sama: rapatkan wadah, aduk, dan jemur tertutup 30 menit selama 2–3 hari.",
      "Bila masih muncul, tambahkan gula sesuai takaran awal dan perpanjang fermentasi 1 bulan.",
    ],
  },
  {
    tanya: "Ada lapisan jamur putih atau cokelat di permukaan",
    parah: "aman",
    jawab: [
      "Itu jamur ragi — jamur yang baik. Fermentasi Anda berjalan normal.",
      "Tidak perlu diaduk. Biarkan saja sampai waktu panen tiba.",
    ],
  },
  {
    tanya: "Ada lapisan kenyal seperti jeli di permukaan",
    parah: "aman",
    jawab: [
      "Selamat! Itu Mama Enzyme — koloni bakteri dan ragi yang bersimbiosis. Tanda fermentasi sangat baik.",
      "Tidak perlu diaduk. Mama Enzyme tidak selalu muncul, jadi rawatlah bila Anda mendapatkannya.",
    ],
  },
  {
    tanya: "Wadah menggembung pada minggu pertama",
    parah: "aman",
    jawab: [
      "Itu gas hasil fermentasi. Buka tutup sebentar untuk membuang gas, lalu tutup rapat kembali.",
      "Lakukan hanya pada bulan pertama. Setelah usia 30 hari, wadah sebaiknya tidak dibuka sama sekali.",
    ],
  },
  {
    tanya: "Larutan berbau alkohol",
    parah: "aman",
    jawab: [
      "Normal pada bulan pertama. Aromanya akan berubah menjadi asam seperti cuka setelah 3 bulan.",
    ],
  },
];

export type Faq = { tanya: string; jawab: string };

export const daftarFaq: Faq[] = [
  {
    tanya: "Apakah eco enzyme punya tanggal kedaluwarsa?",
    jawab:
      "Tidak. Eco enzyme yang berhasil justru semakin baik kualitasnya bila disimpan makin lama. Simpan di wadah tertutup dan jauh dari sinar matahari langsung.",
  },
  {
    tanya: "Bolehkah pakai gula pasir putih?",
    jawab:
      "Tidak dianjurkan. Gunakan molase (tetes tebu) atau gula merah — gula tebu, aren, kelapa, atau lontar. Gula pasir sudah kehilangan banyak senyawa alami yang dibutuhkan mikroba.",
  },
  {
    tanya: "Bolehkah memakai wadah kaca?",
    jawab:
      "Tidak boleh. Gas fermentasi bisa membuat wadah kaca pecah. Gunakan wadah plastik bertutup dengan mulut lebar.",
  },
  {
    tanya: "Kulit buah apa yang tidak boleh dipakai?",
    jawab:
      "Hindari bahan berlemak seperti daging alpukat, durian, dan kelapa. Hindari juga bahan yang sudah dimasak, kering, keras, busuk, berjamur, atau berulat.",
  },
  {
    tanya: "Apakah eco enzyme boleh diminum?",
    jawab:
      "Situs ini tidak menganjurkan meminum eco enzyme. Fokuskan pemakaian pada kebersihan rumah, pertanian, dan perbaikan lingkungan. Untuk urusan kesehatan, konsultasikan dengan tenaga medis.",
  },
  {
    tanya: "Bagaimana kalau saya belum punya cukup sisa buah?",
    jawab:
      "Bisa dicicil. Siapkan air dan gula sesuai takaran, lalu tambahkan sisa buah sedikit demi sedikit selama maksimal 2 minggu. Catat beratnya setiap kali menambah. Hitung tanggal pembuatan dari hari saat takaran bahan akhirnya terpenuhi.",
  },
  {
    tanya: "Apakah eco enzyme boleh diperjualbelikan?",
    jawab:
      "Dr. Rosukon Poompanvong membagikan ilmu ini secara cuma-cuma agar semua orang tergerak menyelamatkan Bumi. Komunitas eco enzyme mendorong agar cairan ini tidak diperjualbelikan, melainkan dibagikan.",
  },
  {
    tanya: "Apa bedanya eco enzyme dengan kompos?",
    jawab:
      "Kompos adalah proses aerob (butuh udara) dan menghasilkan pupuk padat. Eco enzyme adalah proses anaerob (minim udara) dan menghasilkan cairan serba guna. Ampas eco enzyme sendiri masih bisa dijadikan bahan kompos.",
  },
];
