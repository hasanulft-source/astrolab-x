export interface Komp { id: string; nama: string; jenis: 'biotik' | 'abiotik' }
export const KOMP: Komp[] = [
  { id: 'padi', nama: 'Padi', jenis: 'biotik' },
  { id: 'ikan', nama: 'Ikan', jenis: 'biotik' },
  { id: 'cacing', nama: 'Cacing tanah', jenis: 'biotik' },
  { id: 'air', nama: 'Air', jenis: 'abiotik' },
  { id: 'cahaya', nama: 'Cahaya matahari', jenis: 'abiotik' },
  { id: 'batu', nama: 'Batu', jenis: 'abiotik' },
]
export interface Level { n: string; def: string; ex: string }
export const LEVELS: Level[] = [
  { n: 'Individu', def: 'Satu makhluk hidup tunggal.', ex: 'Seekor ikan nila' },
  { n: 'Populasi', def: 'Kumpulan individu sejenis di satu tempat dan waktu.', ex: 'Sekelompok ikan nila di kolam' },
  { n: 'Komunitas', def: 'Semua populasi berbeda yang hidup bersama.', ex: 'Ikan, teratai, katak, dan plankton di kolam' },
  { n: 'Ekosistem', def: 'Komunitas beserta komponen abiotik yang saling berinteraksi.', ex: 'Seluruh kolam: air, lumpur, cahaya, dan penghuninya' },
  { n: 'Biosfer', def: 'Seluruh ekosistem di permukaan Bumi.', ex: 'Lapisan kehidupan di seluruh Bumi' },
]
