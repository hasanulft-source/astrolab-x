export interface Transisi { id: string; name: string; from: string; to: string; kalor: 'menyerap' | 'melepas'; contoh: string }
export const TRANSISI: Transisi[] = [
  { id: 'mencair',   name: 'Mencair',    from: 'padat', to: 'cair',  kalor: 'menyerap', contoh: 'Es batu meleleh menjadi air.' },
  { id: 'membeku',   name: 'Membeku',    from: 'cair',  to: 'padat', kalor: 'melepas',  contoh: 'Air didinginkan menjadi es.' },
  { id: 'menguap',   name: 'Menguap',    from: 'cair',  to: 'gas',   kalor: 'menyerap', contoh: 'Air mendidih menjadi uap.' },
  { id: 'mengembun', name: 'Mengembun',  from: 'gas',   to: 'cair',  kalor: 'melepas',  contoh: 'Titik air di luar gelas dingin.' },
  { id: 'menyublim', name: 'Menyublim',  from: 'padat', to: 'gas',   kalor: 'menyerap', contoh: 'Kapur barus mengecil lalu hilang.' },
  { id: 'deposisi',  name: 'Menghablur', from: 'gas',   to: 'padat', kalor: 'melepas',  contoh: 'Uap berubah jadi kristal (jelaga/salju).' },
]
export const byId = (id: string) => TRANSISI.find(t => t.id === id)
