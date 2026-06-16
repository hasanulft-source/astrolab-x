export interface Metode { id: string; nama: string; prinsip: string; contoh: string }
export const METODE: Metode[] = [
  { id: 'evaporasi', nama: 'Evaporasi', prinsip: 'Menguapkan pelarut sehingga zat terlarut tertinggal.', contoh: 'Membuat garam dari air laut.' },
  { id: 'kristalisasi', nama: 'Kristalisasi', prinsip: 'Membentuk kristal padat dari larutan yang dipekatkan lalu didinginkan.', contoh: 'Pembuatan gula pasir, tawas, dan garam dapur murni.' },
  { id: 'sublimasi', nama: 'Sublimasi', prinsip: 'Memisahkan zat yang dapat menyublim (padat → gas) tanpa mencair.', contoh: 'Memurnikan kapur barus, iodin, dan kafein.' },
]
