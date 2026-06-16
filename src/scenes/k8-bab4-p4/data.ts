export interface Aplik { id: string; nama: string; ket: string }
export const APLIK: Aplik[] = [
  { id: 'kapal', nama: 'Kapal laut', ket: 'Berongga & berisi udara sehingga massa jenis rata-ratanya lebih kecil dari air - tetap mengapung walau dari baja.' },
  { id: 'selam', nama: 'Kapal selam', ket: 'Mengatur air dalam tangki agar massa jenisnya berubah - bisa terapung, melayang, atau menyelam.' },
  { id: 'balon', nama: 'Balon udara', ket: 'Diisi gas yang lebih ringan dari udara, sehingga "terapung" di lautan udara.' },
  { id: 'hidro', nama: 'Hidrometer', ket: 'Alat ukur massa jenis zat cair berdasarkan seberapa dalam ia terapung.' },
]
