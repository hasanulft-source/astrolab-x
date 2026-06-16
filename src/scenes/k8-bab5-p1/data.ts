export interface Jenis { id: string; nama: string; arah: string; contoh: string }
export const JENIS: Jenis[] = [
  { id: 'trans', nama: 'Gelombang transversal', arah: 'Arah getar tegak lurus arah rambat.', contoh: 'Gelombang tali, riak air, gelombang cahaya.' },
  { id: 'long', nama: 'Gelombang longitudinal', arah: 'Arah getar searah dengan arah rambat (rapatan & regangan).', contoh: 'Gelombang bunyi, gelombang pada pegas (slinki).' },
]
