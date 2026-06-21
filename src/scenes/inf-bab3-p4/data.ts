export const SIGNALS: string[] = [
  'Ada nama penulis & keahliannya',
  'Ada tanggal terbit yang jelas',
  'Domain resmi (.go.id, .ac.id, media tepercaya)',
  'Mencantumkan sumber / referensi',
  'Bahasa netral, bukan provokatif',
]
export interface Tip { nama: string; ket: string }
export const TIPS: Tip[] = [
  { nama: 'Bookmark & folder', ket: 'Simpan tautan penting sebagai bookmark, lalu kelompokkan dalam folder bertema agar mudah ditemukan lagi.' },
  { nama: 'Catat sumbernya', ket: 'Selalu tulis judul, penulis, dan tautan asal agar bisa dirujuk kembali - ini disebut sitasi.' },
  { nama: 'Verifikasi dulu', ket: 'Pastikan informasi kredibel sebelum disimpan. Jangan menyimpan apalagi menyebarkan hoaks.' },
  { nama: 'Hindari plagiarisme', ket: 'Saat memakai karya orang lain, sebutkan sumbernya - jangan mengaku sebagai karya sendiri.' },
]
