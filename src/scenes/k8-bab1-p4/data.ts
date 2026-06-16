export interface Pembuluh { id: string; nama: string; arah: string; dinding: string; ciri: string }
export const PEMBULUH: Pembuluh[] = [
  { id: 'arteri', nama: 'Arteri (pembuluh nadi)', arah: 'Membawa darah keluar dari jantung', dinding: 'Tebal & elastis', ciri: 'Denyutnya terasa; umumnya kaya oksigen.' },
  { id: 'vena', nama: 'Vena (pembuluh balik)', arah: 'Membawa darah kembali ke jantung', dinding: 'Lebih tipis', ciri: 'Punya katup agar darah tidak mengalir balik.' },
  { id: 'kapiler', nama: 'Kapiler', arah: 'Menghubungkan arteri & vena di jaringan', dinding: 'Sangat tipis (satu lapis sel)', ciri: 'Tempat pertukaran oksigen, CO2, & sari makanan.' },
]
