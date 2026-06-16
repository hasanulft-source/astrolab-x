export interface Tekstur { id: string; nama: string; butir: string; sifat: string }
export const TEKSTUR: Tekstur[] = [
  { id: 'pasir', nama: 'Pasir', butir: 'Butir besar (kasar)', sifat: 'Gembur, air cepat meresap tapi sulit menyimpan air & hara.' },
  { id: 'lempung', nama: 'Lempung (loam)', butir: 'Butir sedang campuran', sifat: 'Paling ideal - seimbang menyimpan air, hara, dan udara.' },
  { id: 'liat', nama: 'Liat (clay)', butir: 'Butir sangat halus', sifat: 'Lengket & padat, menahan air kuat tapi mudah tergenang & sesak udara.' },
]
