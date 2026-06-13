export interface TLevel { takson: string; nilai: string; jumlah: string; alamat: string }
export const HARIMAU: TLevel[] = [
  { takson: 'Kingdom', nilai: 'Animalia', jumlah: 'jutaan spesies', alamat: 'Negara' },
  { takson: 'Filum', nilai: 'Chordata', jumlah: 'puluhan ribu', alamat: 'Provinsi' },
  { takson: 'Kelas', nilai: 'Mammalia', jumlah: 'ribuan', alamat: 'Kota' },
  { takson: 'Ordo', nilai: 'Carnivora', jumlah: 'ratusan', alamat: 'Kecamatan' },
  { takson: 'Famili', nilai: 'Felidae', jumlah: 'puluhan', alamat: 'Kelurahan' },
  { takson: 'Genus', nilai: 'Panthera', jumlah: '5 spesies', alamat: 'Jalan' },
  { takson: 'Spesies', nilai: 'Panthera tigris', jumlah: '1 (harimau)', alamat: 'Rumah' },
]

export interface King { id: string; nama: string; ciri: string; contoh: string }
export const KINGDOMS: King[] = [
  { id: 'monera', nama: 'Monera', ciri: 'Bersel satu, TANPA membran inti (prokariot).', contoh: 'Bakteri, ganggang hijau-biru' },
  { id: 'protista', nama: 'Protista', ciri: 'Bersel satu/sederhana, PUNYA membran inti (eukariot).', contoh: 'Amoeba, Paramecium, alga' },
  { id: 'fungi', nama: 'Fungi', ciri: 'Eukariot, menyerap makanan, dinding sel dari kitin.', contoh: 'Jamur, kapang, ragi' },
  { id: 'plantae', nama: 'Plantae', ciri: 'Eukariot, berfotosintesis (autotrof), dinding sel selulosa.', contoh: 'Lumut, paku, tumbuhan berbiji' },
  { id: 'animalia', nama: 'Animalia', ciri: 'Eukariot, makan makhluk lain (heterotrof), umumnya bergerak.', contoh: 'Serangga, ikan, mamalia' },
]

export interface SortItem { n: string; g: string }
export const SORT_ITEMS: SortItem[] = [
  { n: 'Kucing', g: 'Hewan' }, { n: 'Mawar', g: 'Tumbuhan' }, { n: 'Jamur tiram', g: 'Jamur & Mikroba' },
  { n: 'Ikan', g: 'Hewan' }, { n: 'Pohon mangga', g: 'Tumbuhan' }, { n: 'Bakteri', g: 'Jamur & Mikroba' },
  { n: 'Elang', g: 'Hewan' }, { n: 'Lumut', g: 'Tumbuhan' }, { n: 'Amoeba', g: 'Jamur & Mikroba' },
]
export const GROUPS = ['Hewan', 'Tumbuhan', 'Jamur & Mikroba']
