export interface Pernyataan { teks: string; jawab: 'fakta' | 'opini' }
export const PERNYATAAN: Pernyataan[] = [
  { teks: 'Air membeku pada suhu 0°C.', jawab: 'fakta' },
  { teks: 'Bakso adalah makanan paling enak.', jawab: 'opini' },
  { teks: 'Matahari terbit di sebelah timur.', jawab: 'fakta' },
  { teks: 'Liburan ke pantai lebih seru daripada ke gunung.', jawab: 'opini' },
]
export interface Flag { teks: string; ket: string }
export const FLAGS: Flag[] = [
  { teks: 'Judul penuh huruf kapital & tanda seru berlebihan', ket: 'Dibuat heboh agar kamu panik dan tidak berpikir jernih.' },
  { teks: 'Sumber tidak jelas ("dari grup sebelah")', ket: 'Informasi benar selalu menyebut sumber yang bisa dicek.' },
  { teks: 'Memaksa segera menyebarkan ke semua orang', ket: 'Hoaks ingin cepat viral sebelum sempat diperiksa.' },
  { teks: 'Memancing rasa takut atau panik', ket: 'Bermain dengan emosi agar kamu langsung percaya.' },
  { teks: 'Tidak ada konfirmasi dari pihak resmi', ket: 'Pengumuman penting selalu ada di kanal resmi sekolah/pemerintah.' },
]
