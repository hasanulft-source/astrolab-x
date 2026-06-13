export interface Step { t: string; d: string }
export const STEPS: Step[] = [
  { t: '1 · Sinar masuk', d: 'Sinar Matahari menembus atmosfer dan menghangatkan permukaan Bumi.' },
  { t: '2 · Panas dipancarkan', d: 'Permukaan yang hangat memancarkan kembali panas berupa gelombang inframerah ke atas.' },
  { t: '3 · Panas ditahan', d: 'Gas rumah kaca (CO2, metana, uap air) menyerap & memantulkan sebagian panas kembali ke Bumi - membuatnya tetap hangat.' },
]
export interface Dampak { t: string; d: string }
export const DAMPAK: Dampak[] = [
  { t: 'Es kutub mencair', d: 'Suhu yang naik melelehkan es di kutub dan gletser pegunungan.' },
  { t: 'Permukaan laut naik', d: 'Air lelehan menambah volume laut - pulau kecil & pesisir rendah terancam tenggelam.' },
  { t: 'Cuaca ekstrem', d: 'Badai, banjir, dan kekeringan menjadi lebih sering dan lebih parah.' },
  { t: 'Krisis pangan & ekosistem', d: 'Pola musim berubah, panen gagal, dan banyak spesies kehilangan habitat.' },
]
export const PENYEBAB = ['Pembakaran bahan bakar fosil', 'Kendaraan bermotor', 'Penggundulan hutan', 'Industri & peternakan']
export const SOLUSI = ['Beralih ke energi terbarukan', 'Hemat listrik & air', 'Tanam & jaga hutan', 'Transportasi umum / sepeda', 'Kurangi & daur ulang sampah']
