export interface Nutrisi { id: string; nama: string; fungsi: string; sumber: string }
export const NUTRISI: Nutrisi[] = [
  { id: 'karbo', nama: 'Karbohidrat', fungsi: 'Sumber energi utama tubuh.', sumber: 'Nasi, roti, kentang, jagung' },
  { id: 'protein', nama: 'Protein', fungsi: 'Bahan pembangun & perbaikan sel dan jaringan.', sumber: 'Telur, ikan, daging, tahu, tempe' },
  { id: 'lemak', nama: 'Lemak', fungsi: 'Cadangan energi & pelindung organ tubuh.', sumber: 'Minyak, mentega, kacang, alpukat' },
  { id: 'vitamin', nama: 'Vitamin', fungsi: 'Mengatur fungsi tubuh & menjaga daya tahan.', sumber: 'Buah dan sayur' },
  { id: 'mineral', nama: 'Mineral', fungsi: 'Membentuk tulang & gigi serta mengatur proses tubuh.', sumber: 'Sayur, susu, garam beryodium' },
  { id: 'air', nama: 'Air', fungsi: 'Pelarut, pengangkut zat, & pengatur suhu tubuh.', sumber: 'Air minum, buah, sayur' },
]
export interface Test { id: string; nama: string; reagen: string; base: string; pos: string; posLabel: string; nutrisi: string; paper?: boolean }
export const TESTS: Test[] = [
  { id: 'amilum', nama: 'Uji Amilum', reagen: 'Lugol', base: '#b5651d', pos: '#16233f', posLabel: 'biru kehitaman', nutrisi: 'amilum (karbohidrat)' },
  { id: 'glukosa', nama: 'Uji Glukosa', reagen: 'Benedict + dipanaskan', base: '#3a78b5', pos: '#c0492f', posLabel: 'endapan merah bata', nutrisi: 'glukosa' },
  { id: 'protein', nama: 'Uji Protein', reagen: 'Biuret', base: '#7fa8d8', pos: '#7b3a9a', posLabel: 'ungu', nutrisi: 'protein' },
  { id: 'lemak', nama: 'Uji Lemak', reagen: 'Kertas HVS', base: '#efe9dd', pos: '#cdbf9f', posLabel: 'noda transparan', nutrisi: 'lemak', paper: true },
]
export interface Food { id: string; nama: string; pos: string }
export const FOODS: Food[] = [
  { id: 'nasi', nama: 'Nasi', pos: 'amilum' },
  { id: 'telur', nama: 'Putih telur', pos: 'protein' },
  { id: 'minyak', nama: 'Minyak', pos: 'lemak' },
  { id: 'gula', nama: 'Air gula', pos: 'glukosa' },
]
