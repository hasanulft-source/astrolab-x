export interface Item { teks: string; jawab: 'privat' | 'publik' }
export const ITEM: Item[] = [
  { teks: 'Nama panggilan', jawab: 'publik' },
  { teks: 'Alamat rumah lengkap', jawab: 'privat' },
  { teks: 'Nomor HP & nomor KK', jawab: 'privat' },
  { teks: 'Hobi & makanan favorit', jawab: 'publik' },
  { teks: 'Kata sandi akun', jawab: 'privat' },
  { teks: 'Nama sekolah secara umum', jawab: 'publik' },
]
