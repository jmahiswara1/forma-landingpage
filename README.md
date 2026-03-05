# Forma Landing Page

Platform publikasi untuk **Forma** — perangkat lunak manajemen *Design System* untuk tim kreatif. Landing page ini dibangun menggunakan arsitektur modern web untuk mendemonstrasikan kapabilitas antarmuka Forma.

## Tech Stack
- Framework: Next.js 14 (App Router)
- Bahasa: TypeScript
- Penataan Gaya: Tailwind CSS
- Animasi: GSAP (GreenSock) & ScrollTrigger

## Menjalankan Proyek Lokal

Pastikan Anda memiliki [Node.js](https://nodejs.org/) terinstal sebelum memulai:

```bash
# 1. Pasang semua dependensi
npm install

# 2. Jalankan server development lokal
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di peramban Anda untuk melihat situs.

## Struktur Folder Utama
- `src/app`: Konfigurasi *layout*, meta-data, *font*, dan gaya global Next.js
- `src/components`: Komponen antarmuka mandiri (`Navbar`, `Button`, `Cursor`, dll.)
- `src/sections`: Blok konten ukuran layar-penuh yang membentuk situs utama (`Hero`, `Pricing`, `Marquee`)
- `src/hooks`: Logika khusus (*custom hooks*) untuk mengoptimalkan siklus animasi GSAP
