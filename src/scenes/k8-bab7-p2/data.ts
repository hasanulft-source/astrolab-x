export interface Horizon { id: string; nama: string; warna: string; ket: string }
export const HORIZON: Horizon[] = [
  { id: 'O', nama: 'Horizon O · Organik', warna: '#4a3a22', ket: 'Lapisan paling atas, berisi serasah daun & sisa organik yang sedang membusuk.' },
  { id: 'A', nama: 'Horizon A · Topsoil', warna: '#6b4f30', ket: 'Tanah lapisan atas kaya humus - tempat utama akar tumbuh & kehidupan tanah.' },
  { id: 'B', nama: 'Horizon B · Subsoil', warna: '#9c7b52', ket: 'Lebih padat & sedikit humus; tempat menumpuk mineral yang tercuci dari atas.' },
  { id: 'C', nama: 'Horizon C · Bahan induk', warna: '#b09878', ket: 'Batuan yang sedang melapuk - asal-usul mineral pembentuk tanah.' },
  { id: 'R', nama: 'Horizon R · Batuan dasar', warna: '#8a8d92', ket: 'Batuan padat yang belum melapuk (bedrock).' },
]
export interface Soal { ciri: string; jawab: string }
export const SOAL: Soal[] = [
  { ciri: 'Paling kaya humus, tempat akar tumbuh', jawab: 'A' },
  { ciri: 'Serasah daun membusuk di permukaan', jawab: 'O' },
  { ciri: 'Batuan padat yang belum melapuk', jawab: 'R' },
  { ciri: 'Tempat mineral tercuci menumpuk', jawab: 'B' },
]
