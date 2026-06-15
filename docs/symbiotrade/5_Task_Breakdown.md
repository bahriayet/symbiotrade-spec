# Task Breakdown - SymbioTrade (MVP)

Dokumen ini membagi proses pengembangan MVP menjadi *Sprint* yang dapat dieksekusi oleh tim *engineering* menggunakan metodologi Agile (misal: Jira/Trello).

## Sprint 1: Setup & Autentikasi Pengguna B2B
**Goal:** Memiliki basis infrastruktur dan memungkinkan perusahaan mendaftar serta diverifikasi.

*   **Task 1.1: Inisialisasi Repositori & CI/CD**
    *   Setup *monorepo* (Next.js frontend, NestJS/Express backend).
    *   Konfigurasi *linter*, Prettier, dan *Git hooks*.
    *   Setup *database* PostgreSQL dan Prisma ORM.
*   **Task 1.2: Skema Database Awal**
    *   Buat migrasi untuk tabel `Users` dan `Companies`.
    *   Integrasi ekstensi PostGIS ke dalam *database*.
*   **Task 1.3: API Autentikasi**
    *   Buat *endpoint* Register, Login, dan verifikasi JWT.
    *   Buat *endpoint* profil perusahaan dan penentuan peran (Seller/Buyer).
*   **Task 1.4: UI Autentikasi & Onboarding**
    *   Bangun halaman Login & Register.
    *   Bangun form unggah dokumen legalitas (terintegrasi dengan *cloud storage* S3).
    *   Bangun form untuk memilih titik lokasi pabrik pada peta (Google Maps API).

## Sprint 2: Core Marketplace (Listing & Pencarian)
**Goal:** Seller dapat menjual limbah, Buyer dapat melihat katalog umum.

*   **Task 2.1: Skema Database Listing**
    *   Buat migrasi untuk tabel `Listings`.
*   **Task 2.2: API Manajemen Listing (CRUD)**
    *   Buat *endpoint* POST `/api/listings` (termasuk unggah gambar).
    *   Buat *endpoint* GET `/api/listings` dengan dukungan filter standar (kategori, harga).
*   **Task 2.3: UI Dashboard Seller**
    *   Bangun antarmuka Manajemen Listing.
    *   Integrasi form tambah *listing* limbah dengan validasi data.
*   **Task 2.4: UI Marketplace Publik**
    *   Bangun halaman pencarian katalog limbah dengan *grid view*.
    *   Bangun komponen *filter sidebar* (kategori, rentang harga).
    *   Bangun halaman "Detail Listing".

## Sprint 3: Smart Matching Engine (Geospasial)
**Goal:** Algoritma yang menghubungkan *Buyer* dan *Seller* berdasarkan lokasi dan kebutuhan.

*   **Task 3.1: Logika Jarak (PostGIS)**
    *   Tulis *raw query* atau ekstensi Prisma untuk menghitung jarak antara lokasi *Buyer* dan *Seller* (menggunakan `ST_Distance` atau `ST_DWithin`).
*   **Task 3.2: API Smart Matching**
    *   Buat *endpoint* GET `/api/matches` yang mengambil "Kebutuhan Material" *Buyer* dan mengembalikan *Listing* terdekat yang sesuai.
*   **Task 3.3: UI Rekomendasi**
    *   Bangun *widget* "Rekomendasi Terdekat" di *Dashboard Buyer*.
    *   Tambahkan *filter radius* (misal: "Hanya tampilkan < 20km") pada halaman Marketplace publik.

## Sprint 4: Transaksi B2B & Escrow
**Goal:** Pengguna dapat melakukan negosiasi, membeli, dan membayar secara aman.

*   **Task 4.1: Skema Database Transaksi & Pesan**
    *   Buat migrasi untuk tabel `Transactions` dan `Messages` (Chat).
*   **Task 4.2: Fitur In-App Chat**
    *   Setup WebSockets (misal: Socket.io) untuk obrolan *real-time* antara *Buyer* dan *Seller*.
    *   Bangun UI *Chat Window*.
*   **Task 4.3: Alur Pemesanan (Purchase Order)**
    *   Buat *endpoint* untuk membuat PO (Purchase Order) baru berdasarkan *Listing*.
    *   Bangun UI konfirmasi pesanan (Checkout).
*   **Task 4.4: Integrasi Payment Gateway (Escrow)**
    *   Integrasi dengan API Xendit/Midtrans untuk membuat *Virtual Account* B2B saat *Checkout*.
    *   Buat *Webhook listener* untuk memperbarui status transaksi menjadi "PAID" secara otomatis.
    *   Terapkan logika sistem Escrow: dana tidak dicairkan ke dompet *Seller* sebelum status transaksi "COMPLETED".

## Sprint 5: Finishing & Pelaporan ESG
**Goal:** Laporan otomatis untuk nilai tambah B2B dan *deployment*.

*   **Task 5.1: Modul Laporan ESG**
    *   Buat fungsi yang menghitung total tonase limbah yang sukses ditransaksikan per *user*.
    *   Buat UI *Dashboard ESG* sederhana berupa grafik (Chart.js) yang menunjukkan kontribusi net-zero perusahaan.
*   **Task 5.2: UAT (User Acceptance Testing) & Bug Fixing**
    *   Uji alur penuh dari registrasi hingga transaksi selesai.
*   **Task 5.3: Deployment (Go-Live)**
    *   *Deploy Database* dan API ke *production server*.
    *   *Deploy Frontend* ke Vercel.
    *   Konfigurasi *domain* khusus.
