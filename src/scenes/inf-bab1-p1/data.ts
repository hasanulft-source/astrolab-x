export interface Pondasi { id: string; nama: string; def: string; contoh: string }
export const PONDASI: Pondasi[] = [
  { id: 'dekomposisi', nama: 'Dekomposisi', def: 'Memecah masalah besar yang rumit menjadi bagian-bagian kecil yang lebih mudah diselesaikan.', contoh: 'Membuat nasi goreng dipecah jadi: siapkan bahan, potong, tumis, lalu sajikan.' },
  { id: 'pola', nama: 'Pengenalan Pola', def: 'Mencari kesamaan atau pola yang berulang di antara berbagai masalah.', contoh: 'Semua resep masakan punya pola sama: bahan → proses → hidangan.' },
  { id: 'abstraksi', nama: 'Abstraksi', def: 'Fokus pada informasi penting dan mengabaikan detail yang tidak relevan.', contoh: 'Peta rute bus hanya menampilkan jalur & halte, bukan setiap gedung di kota.' },
  { id: 'algoritma', nama: 'Algoritma', def: 'Menyusun langkah-langkah berurutan dan jelas untuk menyelesaikan masalah.', contoh: 'Langkah mencuci tangan: basahi → sabun → gosok → bilas → keringkan.' },
]
export interface Soal { teks: string; jawab: string }
export const SOAL: Soal[] = [
  { teks: 'Memecah tugas kelompok besar menjadi tugas kecil per anggota', jawab: 'dekomposisi' },
  { teks: 'Menyadari beberapa soal ini bisa diselesaikan dengan cara yang mirip', jawab: 'pola' },
  { teks: 'Membuat denah evakuasi yang hanya menampilkan pintu & jalur keluar', jawab: 'abstraksi' },
  { teks: 'Menuliskan urutan langkah memasang tenda dari awal sampai selesai', jawab: 'algoritma' },
]
