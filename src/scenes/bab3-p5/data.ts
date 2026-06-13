export interface Alpha { id: string; name: string; a: number }
export const ALPHA: Alpha[] = [
  { id: 'besi',      name: 'Besi',      a: 0.000012 },
  { id: 'aluminium', name: 'Aluminium', a: 0.000024 },
  { id: 'tembaga',   name: 'Tembaga',   a: 0.000017 },
  { id: 'kaca',      name: 'Kaca',      a: 0.000009 },
  { id: 'beton',     name: 'Beton',     a: 0.000012 },
]
export interface Terap { n: string; p: string }
export const TERAP: Terap[] = [
  { n: 'Rel kereta api',   p: 'Diberi celah antar sambungan agar tidak melengkung saat memuai di siang panas.' },
  { n: 'Termometer',       p: 'Cairan memuai naik saat suhu naik — dasar kerja pengukur suhu.' },
  { n: 'Keping bimetal',   p: 'Dua logam beda muai menempel — membengkok saat panas; dipakai di saklar otomatis & setrika.' },
  { n: 'Ban kendaraan',    p: 'Udara di dalam memuai saat panas — tekanan naik, maka tak diisi terlalu penuh.' },
  { n: 'Kabel listrik',    p: 'Dipasang agak kendur agar tidak putus saat menyusut di malam yang dingin.' },
  { n: 'Sambungan beton',  p: 'Jalan & jembatan diberi celah ekspansi agar tidak retak saat memuai.' },
]
