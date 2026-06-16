export interface Tahap { id: string; nama: string; ket: string }
export const TAHAP: Tahap[] = [
  { id: 'panas', nama: '1. Pemanasan', ket: 'Campuran dipanaskan. Komponen dengan titik didih lebih rendah menguap lebih dulu.' },
  { id: 'uap', nama: '2. Penguapan', ket: 'Uap zat yang menguap naik ke atas, meninggalkan zat lain di labu.' },
  { id: 'embun', nama: '3. Pengembunan', ket: 'Uap melewati pendingin (kondensor) dan mengembun kembali menjadi cairan murni.' },
  { id: 'tampung', nama: '4. Penampungan', ket: 'Cairan murni hasil distilasi (distilat) ditampung di wadah terpisah.' },
]
