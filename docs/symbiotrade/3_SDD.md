# System Design Document (SDD) - SymbioTrade

## 1. Pendahuluan
Dokumen ini mendeskripsikan arsitektur sistem, desain *database*, dan pilihan *tech stack* untuk membangun platform SymbioTrade.

## 2. Arsitektur Sistem (System Architecture)
SymbioTrade (MVP) akan dibangun menggunakan arsitektur **Monolith Modern (Modular Monolith)**. Keputusan ini diambil untuk mempercepat pengembangan awal (Go-To-Market) dengan kompleksitas infrastruktur yang rendah, namun tetap mudah dipecah menjadi *microservices* di masa depan.

### 2.1 Komponen Tingkat Tinggi
*   **Frontend (Web Client):** Aplikasi *Single Page Application* (SPA) yang diakses oleh pengguna.
*   **Backend API (Server):** Pusat logika bisnis yang menangani permintaan RESTful API.
*   **Database Relasional:** Menyimpan data terstruktur (User, Produk, Transaksi).
*   **Layanan Pihak Ketiga (External Integrations):**
    *   *Payment Gateway* (misal: Xendit / Midtrans untuk VA B2B)
    *   *Geolocation/Maps API* (misal: Google Maps API / Mapbox untuk kalkulasi jarak)
    *   *Cloud Storage* (misal: AWS S3 / Cloudinary untuk menyimpan foto/dokumen)

### 2.2 Diagram Arsitektur Dasar (Konseptual)
```text
[ Web Browser ]  <-- HTTPS -->  [ Load Balancer ]
                                      |
                               [ Backend API (Node.js/Next.js API) ]
                                 /    |    \
                                /     |     \
                       [ DB (PostgreSQL) ]  [ S3 (Files) ]  [ External APIs (Payment/Maps) ]
```

## 3. Rekomendasi Tech Stack (Tumpukan Teknologi)

*   **Frontend:**
    *   Framework: **Next.js (React)** atau **Vue.js (Nuxt)**. Next.js disarankan jika SEO *listing* limbah diperlukan secara publik.
    *   Styling: **Tailwind CSS**.
*   **Backend:**
    *   Framework: **Node.js dengan Express/NestJS** atau **Next.js API Routes** (jika menggunakan tumpukan penuh Next.js). Disarankan NestJS untuk skalabilitas B2B.
    *   Language: **TypeScript** untuk stabilitas *codebase*.
*   **Database:**
    *   RDBMS: **PostgreSQL**. Pilihan terbaik karena dukungan ekstensi **PostGIS** yang sangat kuat untuk kalkulasi lokasi/jarak (*Smart Matching*).
    *   ORM: **Prisma** atau **TypeORM**.
*   **Infrastruktur/Hosting (MVP):**
    *   Server: Vercel (Frontend) + Render/Heroku (Backend) atau AWS EC2/DigitalOcean Droplet.
    *   Database: Supabase (Managed Postgres) atau AWS RDS.

## 4. Desain Database (Schema Inti - Konseptual)

Berikut adalah tabel-tabel utama yang diperlukan:

1.  **Users / Companies:**
    *   `id` (UUID, PK)
    *   `company_name` (String)
    *   `role` (Enum: SELLER, BUYER)
    *   `email` (String, Unique)
    *   `password_hash` (String)
    *   `legal_doc_url` (String)
    *   `location` (Geography Point - Lat, Long) -> Menggunakan PostGIS
    *   `verification_status` (Enum: PENDING, VERIFIED)

2.  **Listings (Produk Limbah):**
    *   `id` (UUID, PK)
    *   `seller_id` (UUID, FK -> Users)
    *   `title` (String)
    *   `category` (String - e.g., 'Wood', 'Organic', 'Plastic')
    *   `description` (Text)
    *   `volume_kg` (Decimal)
    *   `price_per_kg` (Decimal)
    *   `image_url` (String)
    *   `status` (Enum: ACTIVE, SOLD, DRAFT)
    *   `created_at` (Timestamp)

3.  **Transactions (Pesanan):**
    *   `id` (UUID, PK)
    *   `listing_id` (UUID, FK -> Listings)
    *   `buyer_id` (UUID, FK -> Users)
    *   `total_amount` (Decimal)
    *   `status` (Enum: PENDING_PAYMENT, PAID_ESCROW, IN_TRANSIT, COMPLETED, CANCELLED)
    *   `created_at` (Timestamp)

## 5. Algoritma Inti: Smart Matching System

Untuk MVP, pencocokan didasarkan pada *query* spasial (lokasi) dan kategori.

**Alur Logika Sederhana:**
1.  *Buyer* menyimpan "Kebutuhan Bahan Baku" di profilnya (misal: mencari "Serbuk Kayu", Max Radius "50km").
2.  Ketika *Seller* baru memposting *Listing* "Serbuk Kayu":
    *   Backend melakukan *query* ke tabel *Users (Buyers)* menggunakan fungsi spasial PostGIS (misal: `ST_DWithin`).
    *   Mencari *Buyers* yang butuh "Serbuk Kayu" dan berada dalam radius 50km dari lokasi *Seller*.
3.  Kirimkan notifikasi ke daftar *Buyers* yang cocok.
