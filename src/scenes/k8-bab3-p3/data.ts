export interface Jenis { id: string; nama: string; cara: string; contoh: string }
export const JENIS: Jenis[] = [
  { id: 'tuas', nama: 'Tuas (pengungkit)', cara: 'Batang yang berputar pada titik tumpu untuk mengangkat beban.', contoh: 'Linggis, gunting, jungkat-jungkit, pembuka botol' },
  { id: 'katrol', nama: 'Katrol', cara: 'Roda beralur yang mengubah arah atau memperingan gaya tarik.', contoh: 'Timba sumur, derek, tiang bendera' },
  { id: 'bidang', nama: 'Bidang miring', cara: 'Permukaan miring agar beban naik dengan gaya lebih kecil.', contoh: 'Tangga, jalan menanjak, sekrup, baji' },
  { id: 'roda', nama: 'Roda berporos', cara: 'Roda besar berputar pada poros kecil untuk memperingan usaha.', contoh: 'Setir mobil, gagang pintu, roda gerobak' },
]
export interface Alat { alat: string; jawab: string }
export const ALAT: Alat[] = [
  { alat: 'Gunting', jawab: 'tuas' },
  { alat: 'Sekrup', jawab: 'bidang' },
  { alat: 'Setir mobil', jawab: 'roda' },
  { alat: 'Tiang bendera', jawab: 'katrol' },
  { alat: 'Tangga', jawab: 'bidang' },
]
