export interface Jenis { id: string; nama: string; otot: string; proses: string }
export const JENIS: Jenis[] = [
  { id: 'dada', nama: 'Pernapasan dada', otot: 'Otot antar tulang rusuk', proses: 'Otot rusuk berkontraksi → tulang rusuk terangkat → rongga dada membesar → udara masuk.' },
  { id: 'perut', nama: 'Pernapasan perut', otot: 'Diafragma', proses: 'Diafragma berkontraksi & mendatar → rongga dada membesar ke bawah → udara masuk.' },
]
