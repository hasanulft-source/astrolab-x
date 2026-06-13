export type Mode = 'konduksi' | 'konveksi' | 'radiasi'
export interface Cara { id: Mode; name: string; medium: string; partikel: string; desc: string; contoh: string }
export const CARA: Cara[] = [
  { id: 'konduksi', name: 'Konduksi', medium: 'Zat padat',       partikel: 'Tidak berpindah',      desc: 'Panas merambat lewat zat padat tanpa partikelnya ikut pindah — partikel hanya bergetar & menularkan energi ke tetangganya.', contoh: 'Sendok logam dalam air panas.' },
  { id: 'konveksi', name: 'Konveksi', medium: 'Zat cair / gas',  partikel: 'Ikut berpindah',       desc: 'Partikel fluida yang panas bergerak naik, yang dingin turun — membentuk arus yang membawa kalor.', contoh: 'Air mendidih, angin laut & darat.' },
  { id: 'radiasi',  name: 'Radiasi',  medium: 'Tanpa medium',    partikel: 'Tidak (gelombang)',    desc: 'Panas berpindah sebagai gelombang, tanpa perlu zat perantara — bisa menembus ruang hampa.', contoh: 'Panas matahari, api unggun.' },
]
export interface Fenomena { id: string; teks: string; mode: Mode }
export const FENOMENA: Fenomena[] = [
  { id: 'p1', teks: 'Pegangan panci logam ikut panas',        mode: 'konduksi' },
  { id: 'p2', teks: 'Air mendidih, gelembung naik-turun',     mode: 'konveksi' },
  { id: 'p3', teks: 'Hangat matahari terasa di kulit',        mode: 'radiasi' },
  { id: 'p4', teks: 'Setrika memanaskan kain baju',           mode: 'konduksi' },
  { id: 'p5', teks: 'Angin laut berhembus di siang hari',     mode: 'konveksi' },
  { id: 'p6', teks: 'Api unggun terasa panas dari jauh',      mode: 'radiasi' },
]
export const MODE_NAME: Record<Mode, string> = { konduksi: 'Konduksi', konveksi: 'Konveksi', radiasi: 'Radiasi' }
