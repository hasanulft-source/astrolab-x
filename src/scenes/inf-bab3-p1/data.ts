export interface Tahap { id: string; nama: string; isi: string; ket: string }
export const TAHAP: Tahap[] = [
  { id: 'data', nama: 'DATA', isi: '32', ket: 'Fakta mentah tanpa konteks - hanya sebuah angka yang belum bermakna.' },
  { id: 'info', nama: 'INFORMASI', isi: 'Suhu Banda Aceh hari ini 32°C', ket: 'Data yang diberi konteks sehingga punya makna dan bisa dipahami.' },
  { id: 'konten', nama: 'KONTEN', isi: 'Infografis prakiraan cuaca yang dibagikan di media sosial', ket: 'Informasi yang dikemas (teks, gambar, video) untuk dibagikan ke orang lain.' },
]
export interface Soal { teks: string; jawab: string }
export const SOAL: Soal[] = [
  { teks: 'Angka "150" tanpa keterangan apa pun', jawab: 'data' },
  { teks: 'Video tutorial memasak di YouTube', jawab: 'konten' },
  { teks: 'Tinggi badan Andi adalah 150 cm', jawab: 'info' },
  { teks: 'Artikel blog tentang tips belajar', jawab: 'konten' },
]
