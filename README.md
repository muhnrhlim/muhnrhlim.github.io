# Portfolio Pribadi — Muhammad Nurhalim

Website portfolio pribadi ini dibuat sebagai bentuk presentasi diri secara singkat namun tetap modern dan rapi. Proyek ini dibuat dengan HTML, Bootstrap, CSS, dan JavaScript, dengan fokus pada tampilan satu halaman yang responsif dan mudah dibaca.

## Tujuan proyek
Project ini dibuat untuk:
- menampilkan biodata singkat
- memperkenalkan minat dan keahlian
- menyediakan informasi kontak dan link sosial
- menjadi landing page yang siap dipakai untuk presentasi profil pribadi

## Fitur utama
- desain satu halaman yang modern
- layout responsif untuk desktop dan mobile
- navigasi antar section yang smooth
- section tentang diri, keahlian, bahasa, minat, dan kontak
- tombol CTA ke email dan GitHub
- footer otomatis menampilkan tahun saat ini

## Struktur file
```bash
portofolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── foto-profil.jpg
```

## Cara menjalankan
1. Pastikan file sudah ada di folder project.
2. Buka file `index.html` di browser.
3. Jika ingin ditampilkan secara lokal via server, jalankan:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Penyesuaian sebelum dipakai
Agar portfolio sesuai dengan identitas Anda, sesuaikan beberapa bagian berikut:
- nama dan bio di `index.html`
- email kontak
- link GitHub
- foto profil di folder `assets/foto-profil.jpg`
- daftar skill, bahasa, dan minat sesuai kemampuan Anda

## Deploy ke GitHub Pages
1. Upload project ke repository GitHub.
2. Masuk ke menu `Settings` → `Pages`.
3. Pilih `Deploy from a branch`.
4. Branch: `main`, Folder: `/ (root)`.
5. Save dan tunggu proses publish.

## Catatan
Project ini memanfaatkan Bootstrap dan Bootstrap Icons melalui CDN. Jadi, saat halaman dibuka, dibutuhkan koneksi internet untuk memuat asset dari CDN tersebut.

## Lisensi
Proyek ini dibuat untuk keperluan pribadi dan dapat dimodifikasi sesuai kebutuhan.

