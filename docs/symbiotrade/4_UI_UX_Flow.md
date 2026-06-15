# UI/UX Flow - SymbioTrade

## 1. Konsep Desain (Design Concept)
Desain antarmuka SymbioTrade mengutamakan kesan profesional, tepercaya (khas B2B), dan ramah lingkungan.
*   **Warna Utama:** Hijau zamrud (mewakili ekologi/keberlanjutan) dan Biru dongker (mewakili profesionalisme korporat).
*   **Tipografi:** Bersih dan modern (misal: Inter atau Roboto), mudah dibaca pada laporan data yang padat.

## 2. User Journey: Seller (Penghasil Limbah)

1.  **Landing Page:**
    *   Melihat *value proposition*: "Ubah Biaya Limbah Menjadi Pendapatan".
    *   Klik tombol "Daftar sebagai Penghasil Limbah".
2.  **Registrasi & KYC:**
    *   Mengisi email, *password*, nama perusahaan.
    *   *(Flow khusus B2B)*: Mengunggah dokumen SIUP/NIB.
    *   Menandai lokasi pabrik di Peta terintegrasi (Google Maps).
3.  **Dashboard Seller (Post-Login):**
    *   Menampilkan ringkasan: Total limbah terjual, potensi pendapatan, pengurangan emisi karbon.
    *   Klik "Tambah Listing Baru".
4.  **Form Tambah Listing (Limbah):**
    *   Mengunggah foto aktual limbah (wajib).
    *   Memilih Kategori (misal: Kertas, Organik, Logam).
    *   Memasukkan Deskripsi, Volume Tersedia (Ton/Kg), dan Harga.
    *   Klik "Publikasikan".
5.  **Manajemen Pesanan:**
    *   Menerima notifikasi *chat* dari calon *Buyer*.
    *   Menyetujui *Purchase Order* (PO) dari *Buyer*.
    *   Mengubah status pesanan menjadi "Siap Dijemput".

## 3. User Journey: Buyer (Pengolah Limbah)

1.  **Landing Page:**
    *   Melihat *value proposition*: "Temukan Bahan Baku Murah & Berkelanjutan di Sekitar Anda".
    *   Klik tombol "Daftar sebagai Pengolah".
2.  **Registrasi & Profil Kebutuhan:**
    *   Mendaftar seperti Seller, mengatur lokasi pabrik.
    *   *(Fitur Kunci)*: Mengisi "Kebutuhan Material", misal: "Saya butuh Serbuk Kayu, minimal 1 Ton/Bulan, radius maksimal 50km".
3.  **Dashboard Buyer (Smart Matches):**
    *   Langsung disajikan dengan "Rekomendasi Terdekat" berdasarkan profil kebutuhan mereka.
    *   *(Alternatif)*: Menggunakan fitur "Cari Limbah" dengan *filter* peta interaktif.
4.  **Halaman Detail Listing:**
    *   Melihat detail limbah, estimasi jarak, dan estimasi biaya logistik kargo.
    *   Klik "Mulai Chat/Negosiasi" atau "Buat Penawaran (PO)".
5.  **Checkout & Escrow:**
    *   Melihat total biaya (Harga Limbah + Estimasi Logistik + Biaya Platform).
    *   Melakukan pembayaran via Virtual Account.
    *   Sistem memunculkan status: "Pembayaran Diamankan. Menunggu Pengiriman dari Seller".
6.  **Penerimaan Barang:**
    *   Limbah tiba di pabrik *Buyer*.
    *   *Buyer* menekan tombol "Barang Diterima & Sesuai".
    *   Dana dilepaskan (Escrow *released*) ke *Seller*.

## 4. Struktur Navigasi Web (Site Map MVP)

*   `/` (Landing Page)
*   `/login` & `/register`
*   `/dashboard`
    *   `/dashboard/listings` (Kelola limbah yang dijual)
    *   `/dashboard/matches` (Lihat rekomendasi AI)
    *   `/dashboard/orders` (Daftar transaksi Beli/Jual)
    *   `/dashboard/chat` (Pesan In-App)
    *   `/dashboard/esg-report` (Laporan pengurangan karbon)
*   `/marketplace` (Halaman pencarian umum dengan filter)
*   `/listing/:id` (Halaman detail sebuah limbah)
