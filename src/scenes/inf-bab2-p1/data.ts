export interface Jenis { id: string; nama: string; contoh: string }
export const JENIS: Jenis[] = [
  { id: 'angka', nama: 'Data angka (numerik)', contoh: 'Nilai ujian, tinggi badan, harga barang.' },
  { id: 'teks', nama: 'Data teks', contoh: 'Nama siswa, alamat, nama kota.' },
  { id: 'tanggal', nama: 'Data tanggal/waktu', contoh: 'Tanggal lahir, jam masuk sekolah.' },
  { id: 'logika', nama: 'Data logika (boolean)', contoh: 'Hadir / tidak hadir, lulus / belum.' },
]
export interface Soal { teks: string; jawab: string }
export const SOAL: Soal[] = [
  { teks: '081234567890 (nomor HP)', jawab: 'teks' },
  { teks: '17 Agustus 1945', jawab: 'tanggal' },
  { teks: '92,5', jawab: 'angka' },
  { teks: 'YA / TIDAK', jawab: 'logika' },
]
