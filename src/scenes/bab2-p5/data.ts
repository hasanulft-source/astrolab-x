export interface Ciri { id: string; ciri: string; contoh: string }
export const CIRI: Ciri[] = [
  { id: 'zatbaru', ciri: 'Terbentuk zat baru',   contoh: 'Kayu dibakar menjadi abu & asap — zat yang berbeda.' },
  { id: 'warna',   ciri: 'Perubahan warna',       contoh: 'Besi berubah coklat saat berkarat.' },
  { id: 'gas',     ciri: 'Timbul gas',            contoh: 'Cuka + soda kue menghasilkan gelembung gas.' },
  { id: 'endapan', ciri: 'Terbentuk endapan',     contoh: 'Dua larutan dicampur memunculkan padatan.' },
]

export type Jenis = 'fisika' | 'kimia'
export interface Contoh { id: string; teks: string; jenis: Jenis; alasan: string }
export const CONTOH: Contoh[] = [
  { id: 'c1', teks: 'Es batu mencair',         jenis: 'fisika', alasan: 'Hanya berubah wujud; zatnya tetap air dan bisa dibekukan lagi.' },
  { id: 'c2', teks: 'Kertas dirobek',          jenis: 'fisika', alasan: 'Tetap kertas — hanya berubah bentuk dan ukuran.' },
  { id: 'c3', teks: 'Gula larut dalam air',    jenis: 'fisika', alasan: 'Gula masih bisa didapat kembali dengan menguapkan airnya.' },
  { id: 'c4', teks: 'Lilin meleleh',           jenis: 'fisika', alasan: 'Berubah wujud, masih lilin; bisa membeku kembali.' },
  { id: 'c5', teks: 'Kertas dibakar',          jenis: 'kimia',  alasan: 'Menjadi abu & asap — zat baru, tidak bisa dikembalikan.' },
  { id: 'c6', teks: 'Besi berkarat',           jenis: 'kimia',  alasan: 'Terbentuk karat (oksida besi) — zat yang baru.' },
  { id: 'c7', teks: 'Gula jadi karamel',       jenis: 'kimia',  alasan: 'Dipanaskan menghasilkan zat baru berwarna coklat.' },
  { id: 'c8', teks: 'Nasi membusuk',           jenis: 'kimia',  alasan: 'Mikroorganisme membentuk zat baru; bau & rupa berubah.' },
]
