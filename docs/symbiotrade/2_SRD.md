# System Requirements Document (SRD) - SymbioTrade

## 1. Pendahuluan
Dokumen ini menguraikan spesifikasi kebutuhan sistem untuk MVP SymbioTrade, platform *marketplace* B2B untuk perdagangan limbah industri.

## 2. Kebutuhan Fungsional (Functional Requirements)

### 2.1 Manajemen Pengguna & Verifikasi
* **REQ-F-01:** Sistem harus menyediakan pendaftaran dan login untuk dua peran utama: Penghasil Limbah (Seller) dan Pengolah Limbah (Buyer).
* **REQ-F-02:** Sistem harus menyediakan fitur unggah dokumen legalitas perusahaan (misal: NIB, NPWP Perusahaan) untuk proses KYC (Know Your Business) manual/otomatis.
* **REQ-F-03:** Sistem harus mengizinkan pengguna untuk mengelola profil perusahaan mereka, termasuk detail lokasi gudang/pabrik (kordinat GPS).

### 2.2 Manajemen Inventaris Limbah & Pencarian
* **REQ-F-04:** *Seller* harus dapat mempublikasikan "Listing Limbah" yang berisi foto, kategori material (misal: organik, kayu, logam), volume/kuantitas (kg/ton), dan harga per satuan.
* **REQ-F-05:** *Buyer* harus dapat mencari listing limbah menggunakan filter seperti kategori, rentang volume, harga, dan radius lokasi (misal: di bawah 50 km).

### 2.3 Smart Matching Engine (Mesin Pencocokan)
* **REQ-F-06:** Sistem secara otomatis akan menampilkan rekomendasi "Limbah Tersedia" kepada *Buyer* berdasarkan kategori bahan yang mereka cari dan kedekatan jarak.
* **REQ-F-07:** Sistem mengirimkan notifikasi push/email kepada *Seller* dan *Buyer* ketika terjadi kecocokan (match) dengan probabilitas tinggi.

### 2.4 Transaksi & Negosiasi
* **REQ-F-08:** Sistem harus menyediakan modul *Chat* real-time (In-App Messaging) untuk negosiasi antara *Seller* dan *Buyer*.
* **REQ-F-09:** *Buyer* dapat membuat *Purchase Order* (PO) secara elektronik.
* **REQ-F-10:** Sistem harus mengelola alur status pesanan: Menunggu Pembayaran -> Diproses -> Dikirim -> Diterima -> Selesai.

### 2.5 Pembayaran
* **REQ-F-11:** Sistem harus mengintegrasikan *Payment Gateway* untuk pembayaran B2B (Virtual Account, Bank Transfer).
* **REQ-F-12:** Dana akan ditahan oleh sistem (Escrow) hingga *Buyer* mengonfirmasi bahwa limbah/material telah diterima dan sesuai deskripsi.

### 2.6 Logistik
* **REQ-F-13:** Sistem harus mengkalkulasi estimasi biaya pengiriman kargo antara titik penjemputan (*Seller*) dan titik pengantaran (*Buyer*).

### 2.7 Pelaporan ESG
* **REQ-F-14:** Sistem menghasilkan laporan bulanan otomatis bagi *Buyer* dan *Seller* tentang metrik karbon dan volume sampah yang diselamatkan.

## 3. Kebutuhan Non-Fungsional (Non-Functional Requirements)

### 3.1 Keamanan (Security)
* **REQ-NF-01:** Semua transmisi data harus dienkripsi menggunakan protokol HTTPS (TLS 1.2+).
* **REQ-NF-02:** Kata sandi pengguna harus di*hash* menggunakan bcrypt atau algoritma setara.
* **REQ-NF-03:** Data transaksi keuangan harus dilindungi sesuai standar keamanan siber B2B.

### 3.2 Kinerja (Performance)
* **REQ-NF-04:** Waktu respons API untuk pencarian dan filter (Smart Matching) harus kurang dari 2 detik dengan beban 10,000 produk.
* **REQ-NF-05:** Sistem harus mampu menangani 1,000 pengguna bersamaan (Concurrent Users) tanpa mengalami degradasi layanan yang signifikan.

### 3.3 Ketersediaan & Keandalan (Availability & Reliability)
* **REQ-NF-06:** *Uptime* sistem ditargetkan sebesar 99.9% per bulan.
* **REQ-NF-07:** *Database* harus dicadangkan (*backup*) secara otomatis minimal 1 kali sehari.

### 3.4 Skalabilitas (Scalability)
* **REQ-NF-08:** Arsitektur sistem harus menggunakan pendekatan *microservices* atau arsitektur modular (*monolith* berbasis modul) agar memudahkan skalabilitas komponen tertentu (misal: skala pada layanan pencocokan saja) seiring pertumbuhan pengguna.
