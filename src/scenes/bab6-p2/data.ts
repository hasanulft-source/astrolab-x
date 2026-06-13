export interface Simb { id: string; nama: string; a: string; b: string; ket: string; ex: string }
export const SIMB: Simb[] = [
  { id: 'mut', nama: 'Mutualisme', a: '+', b: '+', ket: 'Kedua pihak sama-sama untung.', ex: 'Lebah mendapat nektar, bunga terbantu penyerbukan.' },
  { id: 'kom', nama: 'Komensalisme', a: '+', b: '0', ket: 'Satu untung, satu tidak terpengaruh.', ex: 'Anggrek menumpang di pohon demi cahaya; pohon tidak dirugikan.' },
  { id: 'par', nama: 'Parasitisme', a: '+', b: '−', ket: 'Satu untung, satu dirugikan.', ex: 'Benalu menyerap makanan dari pohon inang yang jadi merana.' },
]
export interface Pair { pasangan: string; jawab: string; alasan: string }
export const PAIRS: Pair[] = [
  { pasangan: 'Kerbau & burung jalak', jawab: 'mut', alasan: 'Jalak dapat makan kutu, kerbau bebas dari kutu - sama untung.' },
  { pasangan: 'Benalu & pohon mangga', jawab: 'par', alasan: 'Benalu untung, pohon dirugikan.' },
  { pasangan: 'Ikan remora & hiu', jawab: 'kom', alasan: 'Remora menumpang & dapat sisa makanan; hiu tidak terpengaruh.' },
  { pasangan: 'Kutu & kucing', jawab: 'par', alasan: 'Kutu mengisap darah, kucing dirugikan.' },
  { pasangan: 'Lebah & bunga', jawab: 'mut', alasan: 'Lebah dapat nektar, bunga terbantu penyerbukan.' },
]
