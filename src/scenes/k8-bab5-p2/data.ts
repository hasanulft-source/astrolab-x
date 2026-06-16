export interface Medium { id: string; nama: string; cepat: string; ket: string }
export const MEDIUM: Medium[] = [
  { id: 'padat', nama: 'Zat padat (besi)', cepat: '~5000 m/s', ket: 'Partikel sangat rapat, bunyi merambat paling cepat.' },
  { id: 'cair', nama: 'Zat cair (air)', cepat: '~1500 m/s', ket: 'Partikel cukup rapat, bunyi lebih cepat daripada di udara.' },
  { id: 'gas', nama: 'Gas (udara)', cepat: '~340 m/s', ket: 'Partikel renggang, bunyi merambat paling lambat.' },
  { id: 'hampa', nama: 'Ruang hampa', cepat: '0 m/s', ket: 'Tidak ada partikel medium - bunyi tidak dapat merambat sama sekali.' },
]
