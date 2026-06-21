export interface Jaringan { id: string; nama: string; skala: string; ket: string }
export const JARINGAN: Jaringan[] = [
  { id: 'lan', nama: 'LAN', skala: 'Lokal', ket: 'Local Area Network - menghubungkan perangkat dalam satu ruang atau gedung, seperti lab komputer sekolah.' },
  { id: 'wan', nama: 'WAN', skala: 'Luas', ket: 'Wide Area Network - menghubungkan banyak jaringan lokal antar kota atau bahkan negara.' },
  { id: 'internet', nama: 'Internet', skala: 'Global', ket: 'Jaringan terbesar di dunia - menyambungkan miliaran perangkat di seluruh planet menjadi satu.' },
]
export const LANGKAH: string[] = [
  'Perangkatmu (client) mengirim permintaan: "buka halaman".',
  'Permintaan melaju lewat internet menuju server tujuan.',
  'Server memproses lalu mengirim balasan berisi data halaman.',
  'Perangkatmu menerima balasan dan menampilkan halamannya.',
]
