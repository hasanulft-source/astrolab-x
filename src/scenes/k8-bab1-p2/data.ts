export interface Organ { id: string; nama: string; fungsi: string; enzim: string }
export const ORGAN: Organ[] = [
  { id: 'mulut', nama: 'Mulut', fungsi: 'Mengunyah & mencampur makanan dengan air liur.', enzim: 'Amilase (ptialin) - memecah amilum jadi gula.' },
  { id: 'kerongkongan', nama: 'Kerongkongan', fungsi: 'Menyalurkan makanan ke lambung lewat gerak peristaltik.', enzim: '-' },
  { id: 'lambung', nama: 'Lambung', fungsi: 'Meremas makanan & mencampurnya dengan getah lambung.', enzim: 'Pepsin (memecah protein) + asam klorida (HCl).' },
  { id: 'usushalus', nama: 'Usus halus', fungsi: 'Tempat utama pencernaan & penyerapan sari makanan.', enzim: 'Lipase & tripsin (pankreas) + empedu (hati).' },
  { id: 'ususbesar', nama: 'Usus besar', fungsi: 'Menyerap air & membentuk feses.', enzim: '-' },
  { id: 'anus', nama: 'Anus', fungsi: 'Mengeluarkan sisa pencernaan berupa feses.', enzim: '-' },
]
export const AKSESORI = 'Organ aksesori: hati (menghasilkan empedu untuk lemak) & pankreas (menghasilkan enzim) - membantu pencernaan di usus halus.'
export interface Item { t: string; jenis: 'mekanik' | 'kimiawi' }
export const ITEMS: Item[] = [
  { t: 'Gigi mengunyah makanan', jenis: 'mekanik' },
  { t: 'Enzim ptialin memecah amilum', jenis: 'kimiawi' },
  { t: 'Lambung meremas makanan', jenis: 'mekanik' },
  { t: 'Pepsin memecah protein', jenis: 'kimiawi' },
  { t: 'Empedu mengemulsi lemak', jenis: 'kimiawi' },
  { t: 'Lidah membolak-balik makanan', jenis: 'mekanik' },
]
