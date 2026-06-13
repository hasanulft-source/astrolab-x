export interface Planet { id: string; nama: string; jenis: 'dalam' | 'luar'; warna: string; r: number; ciri: string; fakta: string }
export const PLANETS: Planet[] = [
  { id: 'mer', nama: 'Merkurius', jenis: 'dalam', warna: '#9b8e83', r: 7, ciri: 'Terkecil & terdekat dari Matahari', fakta: 'Hampir tanpa atmosfer, sehingga suhunya berubah ekstrem antara siang dan malam.' },
  { id: 'ven', nama: 'Venus', jenis: 'dalam', warna: '#d9a441', r: 9, ciri: 'Planet terpanas', fakta: 'Atmosfer CO2-nya sangat tebal - efek rumah kaca membuatnya lebih panas dari Merkurius meski lebih jauh.' },
  { id: 'bum', nama: 'Bumi', jenis: 'dalam', warna: '#3b82c4', r: 9, ciri: 'Satu-satunya yang berpenghuni', fakta: 'Punya air cair dan atmosfer pelindung yang menopang kehidupan.' },
  { id: 'mar', nama: 'Mars', jenis: 'dalam', warna: '#c1502e', r: 8, ciri: 'Si Planet Merah', fakta: 'Permukaannya berkarat oleh besi oksida; punya dua bulan kecil.' },
  { id: 'jup', nama: 'Jupiter', jenis: 'luar', warna: '#c89b6c', r: 17, ciri: 'Planet terbesar', fakta: 'Raksasa gas dengan badai Bintik Merah Raksasa yang lebih besar dari Bumi.' },
  { id: 'sat', nama: 'Saturnus', jenis: 'luar', warna: '#cdb892', r: 15, ciri: 'Bercincin paling jelas', fakta: 'Cincinnya tersusun dari bongkahan es dan batuan; tergolong raksasa gas.' },
  { id: 'ura', nama: 'Uranus', jenis: 'luar', warna: '#8fd3d6', r: 12, ciri: 'Berputar nyaris rebah', fakta: 'Sumbu rotasinya hampir sejajar bidang orbit; tergolong raksasa es.' },
  { id: 'nep', nama: 'Neptunus', jenis: 'luar', warna: '#3f63c0', r: 12, ciri: 'Terjauh & paling berangin', fakta: 'Memiliki angin tercepat di tata surya; tergolong raksasa es.' },
]
export interface Anggota { id: string; nama: string; desc: string }
export const ANGGOTA: Anggota[] = [
  { id: 'mat', nama: 'Matahari', desc: 'Bintang sekaligus pusat tata surya. Gravitasinya mengikat semua anggota.' },
  { id: 'sat', nama: 'Satelit / Bulan', desc: 'Benda yang mengorbit planet. Bumi punya 1, Jupiter punya puluhan.' },
  { id: 'ast', nama: 'Asteroid', desc: 'Bongkahan batuan kecil; kebanyakan di sabuk asteroid antara Mars dan Jupiter.' },
  { id: 'kom', nama: 'Komet', desc: 'Bola es & debu yang berekor panjang saat mendekati Matahari.' },
  { id: 'met', nama: 'Meteor', desc: 'Serpihan yang terbakar saat masuk atmosfer - tampak sebagai "bintang jatuh".' },
  { id: 'krd', nama: 'Planet kerdil', desc: 'Mirip planet tapi belum "membersihkan" orbitnya, contohnya Pluto.' },
]
