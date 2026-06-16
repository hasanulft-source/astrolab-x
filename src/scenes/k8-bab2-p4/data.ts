export interface Tahap { id: string; nama: string; tempat: string; proses: string; hasil: string }
export const TAHAP: Tahap[] = [
  { id: 'filtrasi', nama: 'Filtrasi', tempat: 'Glomerulus', proses: 'Darah disaring; zat kecil lolos, sedangkan sel darah & protein tertahan.', hasil: 'Urine primer' },
  { id: 'reabsorpsi', nama: 'Reabsorpsi', tempat: 'Tubulus proksimal', proses: 'Zat yang masih berguna (glukosa, air, garam) diserap kembali ke darah.', hasil: 'Urine sekunder' },
  { id: 'augmentasi', nama: 'Augmentasi', tempat: 'Tubulus distal', proses: 'Penambahan zat sisa yang tidak terpakai ke dalam urine.', hasil: 'Urine sebenarnya' },
]
export interface Gangguan { id: string; nama: string; sebab: string; cegah: string }
export const GANGGUAN: Gangguan[] = [
  { id: 'batu', nama: 'Batu ginjal', sebab: 'Endapan garam mineral mengeras di ginjal atau saluran kemih.', cegah: 'Cukup minum air, kurangi garam berlebih.' },
  { id: 'gagal', nama: 'Gagal ginjal', sebab: 'Ginjal tidak mampu menyaring darah dengan baik.', cegah: 'Jaga tekanan & gula darah, cukup cairan.' },
  { id: 'insipidus', nama: 'Diabetes insipidus', sebab: 'Kekurangan hormon pengatur air sehingga urine sangat banyak & encer.', cegah: 'Pemeriksaan & penanganan medis.' },
]
