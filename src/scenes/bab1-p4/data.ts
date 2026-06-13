export interface Symbol { id: string; name: string; arti: string; contoh: string }
export const SYMBOLS: Symbol[] = [
  { id: 'flame',     name: 'Mudah Terbakar', arti: 'Zat gampang terbakar oleh api atau panas.',        contoh: 'Spiritus, alkohol, gas.' },
  { id: 'corrosive', name: 'Korosif',        arti: 'Dapat merusak/membakar kulit dan logam.',          contoh: 'Asam kuat, basa kuat.' },
  { id: 'toxic',     name: 'Beracun',        arti: 'Berbahaya bila tertelan atau terhirup.',           contoh: 'Merkuri, beberapa larutan.' },
  { id: 'explosive', name: 'Mudah Meledak',  arti: 'Dapat meledak karena panas atau benturan.',        contoh: 'Bahan reaktif tertentu.' },
  { id: 'irritant',  name: 'Iritan',         arti: 'Menyebabkan iritasi kulit, mata, atau napas.',     contoh: 'Banyak bahan pembersih.' },
]

export interface Scenario { id: string; title: string; steps: string[] }
export const SCENARIOS: Scenario[] = [
  { id: 'spill', title: 'Tumpahan bahan kimia', steps: ['Beri tahu guru segera, jangan panik.', 'Jangan sentuh dengan tangan kosong.', 'Serap/tutup area sesuai prosedur (pasir atau penyerap).', 'Bersihkan, lalu cuci tangan.'] },
  { id: 'fire',  title: 'Kebakaran kecil',      steps: ['Tetap tenang, beri tahu guru.', 'Matikan sumber gas/api bila aman dijangkau.', 'Tutup api dengan kain basah/penutup (batasi oksigen).', 'Jangan disiram air bila sumbernya minyak atau listrik.'] },
  { id: 'glass', title: 'Luka pecahan kaca',    steps: ['Jangan pegang pecahan dengan tangan telanjang.', 'Beri tahu guru; cuci luka dengan air mengalir.', 'Tekan luka dengan kain bersih untuk hentikan darah.', 'Buang pecahan ke wadah khusus, bukan tempat sampah biasa.'] },
]

export const HAZARDS = [
  { act: 'Mencicipi bahan kimia untuk menebak isinya', why: 'Bahan bisa beracun/korosif — identifikasi lewat label, bukan lidah.' },
  { act: 'Memanaskan tabung dengan mulut menghadap teman', why: 'Cipratan panas bisa melukai wajah — arahkan ke ruang kosong.' },
  { act: 'Rambut panjang dibiarkan terurai dekat pembakar', why: 'Rambut mudah tersulut api — selalu diikat.' },
  { act: 'Makan camilan sambil praktikum', why: 'Bahan kimia bisa tertelan lewat makanan — dilarang makan di lab.' },
]

export const DOS = ['Pakai jas lab & ikat rambut panjang.', 'Baca label bahan sebelum dipakai.', 'Cuci tangan sebelum & sesudah praktikum.', 'Segera lapor bila terjadi kecelakaan.']
export const DONTS = ['Makan atau minum di dalam lab.', 'Mencicipi/mencium bahan secara langsung.', 'Berlari atau bermain di area lab.', 'Mencampur bahan tanpa instruksi guru.']
