export interface Jenis { id: string; nama: string; ket: string; contoh: string }
export const JENIS: Jenis[] = [
  { id: 'os', nama: 'Sistem Operasi', ket: 'Perangkat lunak utama yang mengatur seluruh kerja komputer dan menjadi tempat aplikasi berjalan.', contoh: 'Windows, macOS, Linux, Android, iOS.' },
  { id: 'app', nama: 'Aplikasi', ket: 'Program untuk tugas tertentu yang dijalankan di atas sistem operasi.', contoh: 'Microsoft Word, peramban, game, aplikasi chat.' },
]
export interface Folder { nama: string; isi: string[] }
export const FOLDER: Folder[] = [
  { nama: 'Sekolah', isi: ['Tugas-IPA.docx', 'Catatan-Informatika.docx', 'Jadwal.xlsx'] },
  { nama: 'Foto', isi: ['Liburan.jpg', 'Keluarga.jpg'] },
  { nama: 'Musik', isi: ['Lagu-1.mp3', 'Lagu-2.mp3'] },
]
