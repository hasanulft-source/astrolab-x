export interface KM { id: string; nama: string; rumus: string; ket: string }
export const KM_DATA: KM[] = [
  { id: 'tuas', nama: 'Tuas', rumus: 'KM = lengan kuasa ÷ lengan beban', ket: 'Makin panjang lengan kuasa, makin besar keuntungan mekanisnya.' },
  { id: 'bidang', nama: 'Bidang miring', rumus: 'KM = panjang lintasan ÷ tinggi', ket: 'Makin landai bidangnya, makin besar KM - mendorong terasa lebih ringan.' },
  { id: 'ktetap', nama: 'Katrol tetap', rumus: 'KM = 1', ket: 'Tidak memperingan gaya, hanya mengubah arah tarikan.' },
  { id: 'kbergerak', nama: 'Katrol bergerak', rumus: 'KM = 2', ket: 'Gaya angkat menjadi setengah dari berat beban.' },
]
