export interface OrganEks { id: string; nama: string; zat: string; cara: string }
export const ORGAN: OrganEks[] = [
  { id: 'ginjal', nama: 'Ginjal', zat: 'Urine (urea, air, garam)', cara: 'Menyaring darah & membuang sisa dalam bentuk urine.' },
  { id: 'kulit', nama: 'Kulit', zat: 'Keringat (air, garam, sedikit urea)', cara: 'Kelenjar keringat membuang sisa sekaligus mengatur suhu tubuh.' },
  { id: 'paru', nama: 'Paru-paru', zat: 'Karbon dioksida & uap air', cara: 'Membuang CO2 hasil pernapasan saat mengembuskan napas.' },
  { id: 'hati', nama: 'Hati', zat: 'Empedu & urea', cara: 'Merombak sel darah merah tua & mengubah amonia menjadi urea.' },
]
export interface Zat { zat: string; jawab: string }
export const ZAT: Zat[] = [
  { zat: 'Urine', jawab: 'ginjal' },
  { zat: 'Keringat', jawab: 'kulit' },
  { zat: 'Karbon dioksida', jawab: 'paru' },
  { zat: 'Urea (dari amonia)', jawab: 'hati' },
]
