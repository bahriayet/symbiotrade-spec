# Product Requirements Document (PRD) - SymbioTrade

## 1. Ringkasan Eksekutif (Executive Summary)
**SymbioTrade** adalah platform *Business-to-Business* (B2B) marketplace inovatif yang dirancang untuk mendukung ekonomi sirkular. Platform ini memfasilitasi transaksi jual-beli di mana "sampah" atau limbah produksi dari Perusahaan A dapat dijual dan dimanfaatkan sebagai "bahan baku" oleh Perusahaan B. Platform akan menggunakan algoritma pencocokan cerdas berbasis lokasi untuk menekan biaya logistik dan jejak karbon.

## 2. Visi Produk
Menjadi platform global terdepan dalam ekonomi sirkular industri, memberantas limbah yang tidak dimanfaatkan, dan mendukung perusahaan di seluruh dunia mencapai target emisi net-zero dengan mengubah sampah menjadi aset bernilai.

## 3. Masalah yang Diselesaikan (Problem Statement)
* **Regulasi Ketat & Denda Tinggi:** Pemerintah secara global menerapkan regulasi pembuangan limbah yang semakin ketat. Perusahaan menghadapi biaya tinggi dan denda jika membuang limbah sembarangan.
* **Inefisiensi Pasokan:** Banyak perusahaan membutuhkan bahan baku yang sebenarnya merupakan hasil sampingan (by-product) dari industri lain, namun tidak ada jembatan informasi antara penghasil limbah dan pembeli potensial.
* **Dampak Lingkungan:** TPA (Tempat Pembuangan Akhir) semakin penuh oleh limbah industri yang sebenarnya bisa didaur ulang atau digunakan kembali.

## 4. Target Pengguna (Target Audience)
1. **Penjual (Penghasil Limbah):** Pabrik atau perusahaan manufaktur yang menghasilkan limbah sampingan (misal: pabrik mebel, pabrik kopi, pabrik garmen).
2. **Pembeli (Pengolah Limbah/Bahan Baku):** Pabrik atau produsen yang dapat menggunakan limbah tersebut sebagai bahan baku produk mereka (misal: pabrik kertas, produsen pupuk, produsen bio-briket).

## 5. Fitur Utama MVP (Minimum Viable Product)
* **Registrasi & Verifikasi B2B:** Sistem *onboarding* khusus perusahaan dengan verifikasi legalitas (NIB/SIUP) untuk menjaga kepercayaan.
* **Smart Matching System:** Algoritma untuk mencocokkan ketersediaan limbah (jenis, volume) dengan kebutuhan bahan baku secara otomatis, diprioritaskan berdasarkan jarak lokasi (geolocation) terdekat.
* **Manajemen Transaksi & Kontrak:** Fasilitas negosiasi harga, pembuatan kontrak B2B cerdas, dan sistem pembayaran Escrow (rekening bersama) untuk keamanan.
* **Manajemen Logistik (Pihak Ketiga):** Integrasi API dengan penyedia logistik kargo B2B untuk mengangkut limbah dari titik A ke titik B.
* **Dashboard Laporan ESG (Environmental, Social, and Governance):** Menyediakan sertifikat atau laporan otomatis mengenai berapa banyak limbah yang berhasil dialihkan dari TPA dan pengurangan emisi karbon.

## 6. Metrik Keberhasilan (Success Metrics)
* **Gross Merchandise Value (GMV):** Total nilai transaksi limbah yang terjadi di platform.
* **Match Rate:** Persentase limbah yang diunggah berhasil menemukan pembeli dalam waktu 30 hari.
* **Volume Limbah yang Teralihkan:** Total tonase limbah yang berhasil didaur ulang/digunakan ulang.
* **Customer Acquisition Cost (CAC) & Retention Rate:** Mengukur efisiensi akuisisi perusahaan baru dan loyalitas mereka dalam melakukan transaksi berulang.

## 7. Batasan & Asumsi (Constraints & Assumptions)
* **Asumsi:** Perusahaan bersedia secara transparan melaporkan jenis limbah yang mereka miliki jika ada jaminan keamanan data kompetitif.
* **Batasan:** Membutuhkan edukasi pasar B2B; pengiriman limbah berat/berbahaya membutuhkan lisensi logistik khusus.
