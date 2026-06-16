export interface Pakai { id: string; nama: string; ket: string }
export const PAKAI: Pakai[] = [
  { id: 'tinta', nama: 'Uji tinta & pewarna', ket: 'Memisahkan komponen warna pada tinta atau pewarna makanan (kromatografi).' },
  { id: 'darah', nama: 'Uji darah', ket: 'Memisahkan plasma dari sel darah berdasarkan massa jenis (sentrifugasi).' },
  { id: 'forensik', nama: 'Forensik', ket: 'Mengidentifikasi zat dalam sampel dari TKP lewat pola pemisahan komponennya.' },
  { id: 'susu', nama: 'Pengolahan susu', ket: 'Memisahkan krim/lemak dari susu dengan pemutaran cepat (sentrifugasi).' },
]
