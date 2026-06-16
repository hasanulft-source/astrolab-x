export interface Kasus { id: string; nama: string; contoh: string; w: string; ket: string }
export const KASUS: Kasus[] = [
  { id: 'positif', nama: 'Usaha positif', contoh: 'Mendorong kotak searah gerakannya.', w: 'W > 0', ket: 'Gaya searah perpindahan - energi ditambahkan ke benda.' },
  { id: 'negatif', nama: 'Usaha negatif', contoh: 'Gaya gesek atau rem memperlambat mobil.', w: 'W < 0', ket: 'Gaya berlawanan arah perpindahan - energi diambil dari benda.' },
  { id: 'nol', nama: 'Usaha nol', contoh: 'Mendorong tembok yang tidak bergerak.', w: 'W = 0', ket: 'Tidak ada perpindahan (s = 0), atau gaya tegak lurus arah gerak.' },
]
