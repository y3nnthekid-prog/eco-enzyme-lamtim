export type Masalah = {
  tanya: string;
  jawab: string[];
  parah: "aman" | "perbaiki" | "bahaya";
};

/**
 * Panduan mengamati dan memperbaiki larutan.
 * Mengikuti Modul Dasar Pembuatan Eco Enzyme bagi Pemula (Eco Enzyme
 * Nusantara, revisi Juni 2023), dilengkapi Modul Kelas Belajar Eco-Enzyme
 * (Ngajaga Bumi, 2020).
 */
export const daftarMasalah: Masalah[] = [
  {
    tanya: "Wadah menggembung pada minggu-minggu pertama",
    parah: "aman",
    jawab: [
      "Itu gas hasil fermentasi, tanda larutan Anda hidup dan bekerja.",
      "Kalau wadah bermulut lebar dan tutupnya kuat, biarkan saja.",
      "Kalau memakai botol bermulut kecil, buka tutupnya sebentar untuk membuang gas lalu segera tutup rapat kembali. Lakukan hanya selama bulan pertama.",
    ],
  },
  {
    tanya: "Larutan berbau alkohol atau seperti tape",
    parah: "aman",
    jawab: [
      "Normal pada bulan pertama.",
      "Aromanya akan berubah menjadi asam segar seperti cuka menjelang bulan ketiga.",
    ],
  },
  {
    tanya: "Ada lapisan jamur putih halus di permukaan",
    parah: "aman",
    jawab: [
      "Itu jamur ragi — jamur yang baik. Fermentasi Anda berjalan normal.",
      "Saat panen, jamurnya bisa dipisahkan dan dimanfaatkan.",
      "Tidak perlu diaduk atau dibuang.",
    ],
  },
  {
    tanya: "Ada lapisan kenyal seperti jeli di permukaan",
    parah: "aman",
    jawab: [
      "Selamat, itu Mama Enzyme — koloni bakteri dan ragi yang bersimbiosis. Tanda fermentasi berjalan sangat baik.",
      "Mama Enzyme tidak selalu muncul, jadi rawatlah bila Anda mendapatkannya.",
    ],
  },
  {
    tanya: "Bahan buah/sayur mengambang di atas permukaan air",
    parah: "aman",
    jawab: [
      "Wajar dan tidak perlu dikhawatirkan.",
      "Modul 2023 menegaskan tidak ada keharusan membuka wadah untuk mengaduk atau menekan bahan. Yang jauh lebih penting adalah wadah tetap tertutup rapat.",
    ],
  },
  {
    tanya: "Muncul belatung di dalam wadah",
    parah: "perbaiki",
    jawab: [
      "Penyebabnya wadah kurang tertutup rapat sehingga lalat bisa masuk. Perbaiki dulu kerapatan tutupnya.",
      "Jemur wadah dalam keadaan tertutup di bawah sinar matahari pagi selama 30 menit, tiga hari berturut-turut.",
      "Periksa kembali setelah 7 hari.",
    ],
  },
  {
    tanya: "Larutan berbau got, atau muncul jamur hitam",
    parah: "bahaya",
    jawab: [
      "Penyebabnya kontaminasi mikroba yang tidak baik — biasanya karena lokasi penyimpanan wadah kurang bersih atau terlalu dekat dengan WC, tong sampah, atau bahan kimia.",
      "Larutan seperti ini sebaiknya tidak dipakai untuk keperluan rumah tangga.",
      "Jangan dibuang percuma: manfaatkan untuk menyuburkan lahan kosong yang tandus, atau campurkan ke dalam pembuatan pupuk organik.",
      "Untuk wadah berikutnya, pindahkan lokasi penyimpanan ke tempat yang lebih bersih dan berudara baik.",
    ],
  },
  {
    tanya: "Ada jamur hijau atau abu-abu seperti beludru",
    parah: "bahaya",
    jawab: [
      "Sama seperti jamur hitam, ini jamur kapang tanda kontaminasi.",
      "Larutannya dialihkan saja untuk memperbaiki lahan tandus atau dicampur ke pupuk organik, bukan untuk dipakai di rumah.",
    ],
  },
];

export type Faq = { tanya: string; jawab: string };

export const daftarFaq: Faq[] = [
  {
    tanya: "Berapa lama fermentasinya?",
    jawab:
      "Di wilayah tropis seperti Indonesia, 3 bulan atau 90 hari. Di wilayah sub-tropis butuh 6 bulan. Jadi untuk kita di Lampung Timur, patokannya 90 hari sejak tanggal pembuatan.",
  },
  {
    tanya: "Apakah larutannya harus diaduk setiap minggu?",
    jawab:
      "Tidak. Modul terbaru Eco Enzyme Nusantara (2023) menegaskan tidak ada keharusan membuka wadah untuk mengaduk, dan tidak ada keharusan meremas bahan organiknya. Yang paling penting justru memastikan wadah tertutup serapat mungkin sampai waktu panen. Membuka wadah terlalu sering malah memasukkan oksigen dan mengganggu fermentasi.",
  },
  {
    tanya: "Bolehkah pakai gula pasir putih?",
    jawab:
      "Boleh, tapi hanya bila gula merah atau molase benar-benar tidak tersedia — dan hasilnya tidak akan maksimal. Urutan yang paling dianjurkan: molase (tetes tebu), lalu gula merah tebu, gula aren, gula kelapa, atau gula lontar.",
  },
  {
    tanya: "Wadah apa yang tidak boleh dipakai?",
    jawab:
      "Hindari wadah kaca karena mudah pecah oleh tekanan gas, dan wadah aluminium atau logam lain karena mudah berkarat. Pakailah wadah plastik bermulut lebar yang bisa ditutup rapat dan kedap. Wadah kaca baru boleh dipakai setelah panen, yaitu untuk mengemas cairan jadinya.",
  },
  {
    tanya: "Bagaimana kalau wadah saya bermulut kecil?",
    jawab:
      "Masih bisa, asalkan dimodifikasi supaya gas punya jalan keluar — kalau tidak, botol mudah meledak di bulan pertama. Lihat bagian “Wadah bermulut kecil” di halaman Cara Membuat untuk empat cara modifikasinya.",
  },
  {
    tanya: "Kulit buah apa yang tidak boleh dipakai?",
    jawab:
      "Empat kategori yang harus dihindari: berminyak (seperti kelapa dan ampasnya), sudah dimasak (direbus, digoreng, ditumis), kering atau keras seperti kayu, serta yang sudah busuk, berulat, atau berjamur. Selain itu semua sisa buah dan sayur segar boleh dipakai.",
  },
  {
    tanya: "Apakah eco enzyme boleh diminum?",
    jawab:
      "Tidak. Modul resmi Eco Enzyme Nusantara menyatakan dengan tegas: eco enzyme hanya untuk pemakaian luar, tidak untuk dikonsumsi. Untuk urusan kesehatan, konsultasikan dengan tenaga medis.",
  },
  {
    tanya: "Apakah eco enzyme punya tanggal kedaluwarsa?",
    jawab:
      "Tidak. Eco enzyme yang berhasil justru semakin baik kualitasnya bila disimpan makin lama. Simpan di wadah tertutup rapat dan jauh dari sinar matahari langsung. Dianjurkan dikemas dalam botol-botol kecil supaya praktis dipakai dan kualitasnya lebih terjaga.",
  },
  {
    tanya: "Bagaimana kalau saya belum punya cukup sisa buah?",
    jawab:
      "Bisa dicicil. Siapkan air dan gula sesuai takaran, lalu tambahkan sisa buah sedikit demi sedikit selama maksimal 2 minggu. Catat beratnya setiap kali menambah. Hitung tanggal pembuatan dari hari saat takaran bahan akhirnya terpenuhi.",
  },
  {
    tanya: "Ampasnya boleh untuk tanaman dalam pot?",
    jawab:
      "Sebaiknya tidak. Ampas eco enzyme dianjurkan untuk tanaman yang ditanam langsung di tanah, bukan tanaman pot. Untuk tanaman pot, gunakan cairan eco enzyme yang sudah diencerkan 1 : 1.000 saja.",
  },
  {
    tanya: "Apakah eco enzyme boleh diperjualbelikan?",
    jawab:
      "Tidak. Dr. Rosukon Poompanvong membagikan ilmu ini secara cuma-cuma agar semua orang tergerak menyelamatkan Bumi, dan modul resmi Eco Enzyme Nusantara menegaskan eco enzyme tidak diperjualbelikan. Bagikan cairannya, ajarkan cara membuatnya.",
  },
  {
    tanya: "Apa bedanya eco enzyme dengan kompos?",
    jawab:
      "Kompos adalah proses aerob (butuh udara) dan menghasilkan pupuk padat. Eco enzyme adalah proses anaerob (minim udara) dan menghasilkan cairan serba guna. Ampas eco enzyme sendiri masih bisa dijadikan bahan kompos.",
  },
];
