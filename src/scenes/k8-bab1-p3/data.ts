export interface Komp { id: string; nama: string; desc: string; layer: 'top' | 'mid' | 'bottom' }
export const KOMP: Komp[] = [
  { id: 'plasma', nama: 'Plasma darah', desc: 'Cairan kekuningan (~55% darah) yang mengangkut sari makanan, hormon, dan sisa metabolisme.', layer: 'top' },
  { id: 'eritrosit', nama: 'Sel darah merah', desc: 'Mengandung hemoglobin yang mengikat & mengangkut oksigen. Jumlahnya paling banyak.', layer: 'bottom' },
  { id: 'leukosit', nama: 'Sel darah putih', desc: 'Melawan kuman & penyakit - bagian dari sistem kekebalan tubuh.', layer: 'mid' },
  { id: 'trombosit', nama: 'Keping darah', desc: 'Berperan dalam pembekuan darah ketika tubuh terluka.', layer: 'mid' },
]
export interface Ruang { id: string; nama: string; sisi: 'kanan' | 'kiri'; baris: 'serambi' | 'bilik'; desc: string }
export const RUANG: Ruang[] = [
  { id: 'ska', nama: 'Serambi kanan', sisi: 'kanan', baris: 'serambi', desc: 'Menerima darah kotor (miskin oksigen) dari seluruh tubuh.' },
  { id: 'ski', nama: 'Serambi kiri', sisi: 'kiri', baris: 'serambi', desc: 'Menerima darah bersih (kaya oksigen) dari paru-paru.' },
  { id: 'bka', nama: 'Bilik kanan', sisi: 'kanan', baris: 'bilik', desc: 'Memompa darah kotor ke paru-paru untuk mengambil oksigen.' },
  { id: 'bki', nama: 'Bilik kiri', sisi: 'kiri', baris: 'bilik', desc: 'Memompa darah bersih ke seluruh tubuh - dindingnya paling tebal.' },
]
