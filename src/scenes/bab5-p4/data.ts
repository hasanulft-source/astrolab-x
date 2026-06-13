export interface KNode { q: string; ya: string; tidak: string }
export const KEY: Record<string, KNode> = {
  n1: { q: 'Apakah hewan ini punya sayap?', ya: 'n2', tidak: 'n3' },
  n2: { q: 'Apakah tubuhnya ditutupi bulu?', ya: 'r:Burung', tidak: 'r:Capung (serangga)' },
  n3: { q: 'Apakah ia hidup di air dan bernapas dengan insang?', ya: 'r:Ikan', tidak: 'n4' },
  n4: { q: 'Apakah ia punya kaki?', ya: 'n5', tidak: 'r:Ular' },
  n5: { q: 'Apakah kulitnya lembap dan bertelur di air?', ya: 'r:Katak', tidak: 'r:Kucing' },
}
export const START = 'n1'

export interface Couplet { no: string; a: string; aGo: string; b: string; bGo: string }
export const COUPLETS: Couplet[] = [
  { no: '1', a: 'Bersayap', aGo: 'lanjut ke 2', b: 'Tidak bersayap', bGo: 'lanjut ke 3' },
  { no: '2', a: 'Tubuh berbulu', aGo: 'Burung', b: 'Tubuh tidak berbulu', bGo: 'Capung' },
  { no: '3', a: 'Hidup di air, berinsang', aGo: 'Ikan', b: 'Tidak hidup di air', bGo: 'lanjut ke 4' },
  { no: '4', a: 'Punya kaki', aGo: 'lanjut ke 5', b: 'Tidak berkaki', bGo: 'Ular' },
  { no: '5', a: 'Kulit lembap, bertelur di air', aGo: 'Katak', b: 'Kulit kering, menyusui', bGo: 'Kucing' },
]

export const HEWAN = ['Burung', 'Capung', 'Ikan', 'Ular', 'Katak', 'Kucing']
