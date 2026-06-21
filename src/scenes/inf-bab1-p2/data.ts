export interface Bagian { nama: string; sub: string[] }
export const MASALAH = 'Mengadakan pentas seni kelas'
export const BAGIAN: Bagian[] = [
  { nama: 'Acara', sub: ['Susun rundown', 'Daftar pengisi acara', 'Jadwalkan latihan'] },
  { nama: 'Perlengkapan', sub: ['Sewa sound system', 'Siapkan panggung', 'Atur kursi penonton'] },
  { nama: 'Konsumsi', sub: ['Hitung jumlah tamu', 'Pesan snack', 'Sediakan air minum'] },
  { nama: 'Publikasi', sub: ['Buat poster', 'Sebar undangan', 'Siapkan dokumentasi'] },
]
export interface Pola { seq: string[]; jawab: string; opsi: string[] }
export const POLA: Pola[] = [
  { seq: ['b', 'r', 'b', 'r'], jawab: 'b', opsi: ['b', 'r', 'g'] },
  { seq: ['g', 'g', 'b', 'g', 'g', 'b'], jawab: 'g', opsi: ['g', 'b', 'r'] },
  { seq: ['r', 'b', 'g', 'r', 'b', 'g'], jawab: 'r', opsi: ['g', 'r', 'b'] },
]
