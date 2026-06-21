export const HARI = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum']
export interface Tanya { teks: string; opsi: string[]; jawab: string }
export const TANYA: Tanya[] = [
  { teks: 'Hari apa penjualan tertinggi?', opsi: ['Selasa', 'Kamis', 'Jumat'], jawab: 'Kamis' },
  { teks: 'Hari apa penjualan terendah?', opsi: ['Senin', 'Rabu', 'Jumat'], jawab: 'Senin' },
  { teks: 'Berapa total buku terjual sepekan?', opsi: ['135', '155', '175'], jawab: '155' },
]
export const FIXED = [20, 35, 28, 42, 30]
