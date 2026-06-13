export interface Flow { id: string; n: string; sub: string; pct: string; w: number; detail: string }
export const FLOW: Flow[] = [
  { id: 'p', n: 'Produsen', sub: 'Padi', pct: '100%', w: 100, detail: 'Energi awal hasil fotosintesis - kita jadikan patokan 100%.' },
  { id: 'k1', n: 'Konsumen I', sub: 'Belalang', pct: '10%', w: 60, detail: 'Hanya ~10% energi padi tersimpan jadi tubuh belalang. 90% sisanya hilang sebagai panas, untuk bernapas & bergerak.' },
  { id: 'k2', n: 'Konsumen II', sub: 'Katak', pct: '1%', w: 36, detail: 'Berkurang 90% lagi - tersisa ~1% dari energi awal.' },
  { id: 'k3', n: 'Konsumen III', sub: 'Ular', pct: '0,1%', w: 18, detail: 'Hanya ~0,1% energi awal yang sampai ke sini. Itulah sebabnya predator puncak sedikit.' },
]
export interface Tier { id: string; n: string; sub: string; e: string; yb: number; yt: number; wb: number; wt: number; note: string }
export const PYR: Tier[] = [
  { id: 'p', n: 'Produsen', sub: 'Padi', e: '10.000', yb: 200, yt: 152, wb: 122, wt: 97, note: 'Paling banyak - menopang seluruh piramida.' },
  { id: 'k1', n: 'Konsumen I', sub: 'Belalang', e: '1.000', yb: 152, yt: 104, wb: 97, wt: 72, note: 'Jumlah & energinya sepersepuluh produsen.' },
  { id: 'k2', n: 'Konsumen II', sub: 'Katak', e: '100', yb: 104, yt: 56, wb: 72, wt: 47, note: 'Makin ke atas makin sedikit.' },
  { id: 'k3', n: 'Konsumen puncak', sub: 'Ular / Elang', e: '10', yb: 56, yt: 16, wb: 47, wt: 20, note: 'Paling sedikit & paling rentan bila ekosistem terganggu.' },
]
