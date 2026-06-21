export interface Kategori { id: string; nama: string; fungsi: string; contoh: string }
export const KATEGORI: Kategori[] = [
  { id: 'input', nama: 'Input', fungsi: 'Memasukkan data atau perintah ke komputer.', contoh: 'Keyboard, mouse, mikrofon, kamera, scanner.' },
  { id: 'proses', nama: 'Proses', fungsi: 'Mengolah data - "otak" komputer.', contoh: 'CPU (prosesor) dan RAM.' },
  { id: 'output', nama: 'Output', fungsi: 'Menampilkan atau mengeluarkan hasil olahan.', contoh: 'Monitor, speaker, printer, proyektor.' },
  { id: 'simpan', nama: 'Penyimpanan', fungsi: 'Menyimpan data secara permanen.', contoh: 'Harddisk, SSD, flashdisk, kartu memori.' },
]
export interface Soal { alat: string; jawab: string }
export const SOAL: Soal[] = [
  { alat: 'Monitor', jawab: 'output' },
  { alat: 'Keyboard', jawab: 'input' },
  { alat: 'Harddisk', jawab: 'simpan' },
  { alat: 'CPU / Prosesor', jawab: 'proses' },
  { alat: 'Speaker', jawab: 'output' },
  { alat: 'Mouse', jawab: 'input' },
]
