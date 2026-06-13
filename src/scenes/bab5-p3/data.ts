export interface KDetail { id: string; nama: string; inti: string; sel: string; makan: string; dinding: string; contoh: string; plus: string; minus: string }
export const KINGS: KDetail[] = [
  { id: 'monera', nama: 'Monera', inti: 'Tidak ada (prokariot)', sel: 'Bersel satu', makan: 'Autotrof & heterotrof', dinding: 'Peptidoglikan',
    contoh: 'Bakteri, Cyanobacteria', plus: 'Pengurai, bakteri usus, pembuat yoghurt & keju.', minus: 'Sebagian penyebab penyakit (TBC, tifus).' },
  { id: 'protista', nama: 'Protista', inti: 'Ada (eukariot)', sel: 'Bersel satu / sederhana', makan: 'Autotrof & heterotrof', dinding: 'Beragam',
    contoh: 'Amoeba, Paramecium, Euglena, alga', plus: 'Fitoplankton produsen laut; bahan agar-agar.', minus: 'Plasmodium penyebab malaria.' },
  { id: 'fungi', nama: 'Fungi', inti: 'Ada (eukariot)', sel: 'Umumnya bersel banyak', makan: 'Heterotrof (menyerap)', dinding: 'Kitin',
    contoh: 'Jamur, ragi, kapang', plus: 'Pembuat tempe, roti, antibiotik; pengurai.', minus: 'Penyebab panu, kurap, pembusukan.' },
  { id: 'plantae', nama: 'Plantae', inti: 'Ada (eukariot)', sel: 'Bersel banyak', makan: 'Autotrof (fotosintesis)', dinding: 'Selulosa',
    contoh: 'Lumut, paku, tumbuhan berbiji', plus: 'Produsen utama, penghasil oksigen & pangan.', minus: 'Sebagian gulma atau beracun.' },
  { id: 'animalia', nama: 'Animalia', inti: 'Ada (eukariot)', sel: 'Bersel banyak', makan: 'Heterotrof (memakan)', dinding: 'Tidak ada',
    contoh: 'Serangga, ikan, burung, mamalia', plus: 'Sumber pangan, penyerbuk, penyeimbang ekosistem.', minus: 'Sebagian hama / pembawa penyakit.' },
]
export const COLS: { key: keyof KDetail; label: string }[] = [
  { key: 'inti', label: 'Membran inti' }, { key: 'sel', label: 'Jumlah sel' }, { key: 'makan', label: 'Cara makan' }, { key: 'dinding', label: 'Dinding sel' },
]
export interface Quiz { organisme: string; jawab: string; alasan: string }
export const QUIZ: Quiz[] = [
  { organisme: 'Ragi (Saccharomyces)', jawab: 'fungi', alasan: 'Eukariot, menyerap makanan, dinding sel kitin.' },
  { organisme: 'Amoeba', jawab: 'protista', alasan: 'Eukariot bersel satu yang hidup bebas.' },
  { organisme: 'Lumut', jawab: 'plantae', alasan: 'Autotrof, berfotosintesis, dinding selulosa.' },
  { organisme: 'Bakteri E. coli', jawab: 'monera', alasan: 'Prokariot - tanpa membran inti.' },
]
