export interface Organ { id: string; nama: string; fungsi: string }
export const ORGAN: Organ[] = [
  { id: 'hidung', nama: 'Hidung', fungsi: 'Menyaring, menghangatkan, & melembapkan udara yang masuk.' },
  { id: 'faring', nama: 'Faring (tekak)', fungsi: 'Persimpangan saluran napas dengan saluran makanan.' },
  { id: 'laring', nama: 'Laring', fungsi: 'Pangkal tenggorok berisi pita suara; epiglotis mencegah makanan masuk.' },
  { id: 'trakea', nama: 'Trakea', fungsi: 'Batang tenggorok berselia yang menyaring kotoran udara.' },
  { id: 'bronkus', nama: 'Bronkus & bronkiolus', fungsi: 'Cabang saluran yang membawa udara masuk ke paru-paru.' },
  { id: 'alveolus', nama: 'Alveolus', fungsi: 'Gelembung kecil tempat pertukaran O2 dan CO2 dengan darah.' },
]
