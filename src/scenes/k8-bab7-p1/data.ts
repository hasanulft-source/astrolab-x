export interface Komp { id: string; nama: string; persen: string; fungsi: string }
export const KOMP: Komp[] = [
  { id: 'mineral', nama: 'Mineral (butiran batuan)', persen: '~45%', fungsi: 'Kerangka utama tanah; menyediakan unsur hara dari pelapukan batuan.' },
  { id: 'organik', nama: 'Bahan organik (humus)', persen: '~5%', fungsi: 'Sisa makhluk hidup yang lapuk; menyuburkan & menyimpan air.' },
  { id: 'air', nama: 'Air', persen: '~25%', fungsi: 'Melarutkan unsur hara agar dapat diserap akar tumbuhan.' },
  { id: 'udara', nama: 'Udara', persen: '~25%', fungsi: 'Mengisi pori tanah; menyediakan oksigen bagi akar & mikroba.' },
]
