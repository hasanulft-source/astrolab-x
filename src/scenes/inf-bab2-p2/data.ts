export interface Bagian { id: string; nama: string; ket: string }
export const BAGIAN: Bagian[] = [
  { id: 'sel', nama: 'Sel', ket: 'Kotak tempat menyimpan satu data. Alamatnya gabungan kolom & baris, misal B3.' },
  { id: 'kolom', nama: 'Kolom', ket: 'Deret vertikal yang diberi label huruf: A, B, C, dan seterusnya.' },
  { id: 'baris', nama: 'Baris', ket: 'Deret horizontal yang diberi label angka: 1, 2, 3, dan seterusnya.' },
  { id: 'formula', nama: 'Formula bar', ket: 'Tempat menulis rumus. Semua rumus diawali tanda = (sama dengan).' },
]
