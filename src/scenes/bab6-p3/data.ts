export interface Org { id: string; nama: string; peran: string; makan: string; dimakan: string }
export const CHAIN: Org[] = [
  { id: 'padi', nama: 'Padi', peran: 'Produsen', makan: 'Membuat makanan sendiri lewat fotosintesis', dimakan: 'Belalang' },
  { id: 'belalang', nama: 'Belalang', peran: 'Konsumen I', makan: 'Padi', dimakan: 'Katak' },
  { id: 'katak', nama: 'Katak', peran: 'Konsumen II', makan: 'Belalang', dimakan: 'Ular' },
  { id: 'ular', nama: 'Ular', peran: 'Konsumen III', makan: 'Katak', dimakan: 'Elang' },
  { id: 'elang', nama: 'Elang', peran: 'Konsumen puncak', makan: 'Ular', dimakan: 'Tidak ada pemangsa alami' },
]
export interface WNode { id: string; nama: string; x: number; y: number }
export const NODES: WNode[] = [
  { id: 'padi', nama: 'Padi', x: 180, y: 212 },
  { id: 'belalang', nama: 'Belalang', x: 86, y: 150 },
  { id: 'tikus', nama: 'Tikus', x: 274, y: 150 },
  { id: 'katak', nama: 'Katak', x: 64, y: 84 },
  { id: 'burung', nama: 'Burung', x: 196, y: 84 },
  { id: 'ular', nama: 'Ular', x: 120, y: 26 },
  { id: 'elang', nama: 'Elang', x: 286, y: 36 },
]
// [mangsa, pemangsa] - panah mengalir dari mangsa ke pemangsa (arah energi)
export const EDGES: [string, string][] = [
  ['padi', 'belalang'], ['padi', 'tikus'],
  ['belalang', 'katak'], ['belalang', 'burung'],
  ['tikus', 'ular'], ['tikus', 'elang'],
  ['katak', 'ular'], ['burung', 'elang'], ['ular', 'elang'],
]
export const NAMA: Record<string, string> = Object.fromEntries(NODES.map(n => [n.id, n.nama]))
