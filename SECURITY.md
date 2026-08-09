# Keamanan & Runbook Respons Insiden

Dokumen ini punya dua bagian:

1. **Cara melaporkan kerentanan** — untuk siapa pun yang menemukan celah.
2. **Runbook respons insiden** — langkah baku saat situs (ecoenzymelamtim.com) diserang atau bermasalah.

---

## 1. Melaporkan kerentanan

**Jangan** membuka issue publik untuk kerentanan keamanan. Gunakan pelaporan privat GitHub:

> Repo ini → tab **Security** → **Report a vulnerability**

Laporan hanya terlihat oleh pemilik repo. Sertakan langkah reproduksi dan dampaknya. Kami usahakan membalas dalam 72 jam.

---

## 2. Runbook respons insiden

> **Cara tercepat:** buka sesi Claude Code lalu bilang **"jalankan runbook: \<jenis insiden\>"**. Claude bisa mengerjakan langkah kode (revert, ubah config, redeploy lewat git). Langkah yang butuh **memasukkan kredensial atau menekan tombol di dashboard** harus kamu lakukan sendiri — Claude tidak memasukkan kunci/token atas namamu.

Situs ini **sebagian besar statis** (konten dari `content/berita/*.md`, tanpa API publik yang menyimpan data pengguna), jadi permukaan serangnya kecil. Skenario paling relevan:

### Tanda-tanda insiden
- CI "Keamanan" tiba-tiba gagal, atau alert Dependabot kritikal.
- Lonjakan trafik/errors tak wajar di Vercel Analytics.
- Tampilan situs berubah (defacement) atau muncul kode/skrip asing.
- Ada laporan kunci/token bocor.

---

### A. Defacement / kode berbahaya ter-deploy (akun/repo dikompromi) — ⏱️ PALING MENDESAK

1. **Rollback instan:** Vercel → **Deployments** → pilih deploy bersih terakhir → **Promote to Production**. Tidak perlu build ulang.
2. **Revert** commit jahat di git lalu push. *(Claude bisa bantu.)*
3. **Rotasi kredensial GitHub & Vercel** (anggap akun bocor). Cek **Settings → Security log** GitHub.
4. Periksa ruleset "Lindungi main" masih aktif & tak ada kolaborator/aksi mencurigakan.

### B. Banjir trafik / DDoS

1. **Vercel → Firewall → Attack Challenge Mode: ON** (tantang semua pengunjung sementara).
2. Tambah **rate-limit rule** di Vercel Firewall untuk path/asal yang digempur.
3. Matikan Challenge Mode setelah reda (ia menambah friksi bagi pengguna asli).

### C. Secret bocor (bila ada env/token yang tersimpan)

Anggap secret yang pernah bocor **sudah dikuasai orang** — rotasi, jangan cuma dihapus.

1. Rotasi token terkait di dashboard-nya (Vercel/penyedia terkait).
2. Pasang nilai baru di Vercel → **Settings → Environment Variables** → **Redeploy**.
3. Bila secret ter-commit: revert + (opsional) bersihkan history. *(Claude bisa bantu revert.)*

### D. Kerentanan dependensi kritikal

1. Merge PR Dependabot yang relevan (sudah lolos CI), atau jalankan `npm audit fix` lalu deploy. *(Claude bisa bantu.)*

---

## Referensi cepat

| Sumber daya | Tautan | Untuk |
|---|---|---|
| Vercel — Deployments | vercel.com/dashboard | Rollback |
| Vercel — Firewall | Project → Firewall | Challenge Mode, blokir IP |
| Vercel — Env Vars | Project → Settings → Environment Variables | Pasang nilai baru |
| GitHub Security | repo → tab Security | Alert, laporan kerentanan, secret scanning |
