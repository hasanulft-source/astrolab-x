export interface Fase { id: string; p: number; nama: string; pos: string }
export const FASE: Fase[] = [
  { id: 'baru', p: 0, nama: 'Bulan Baru', pos: 'Bulan berada di antara Bumi dan Matahari; sisi gelapnya menghadap kita.' },
  { id: 'sabit1', p: 0.125, nama: 'Sabit Awal', pos: 'Sedikit sisi tersinari mulai terlihat di sebelah kanan.' },
  { id: 'paruh1', p: 0.25, nama: 'Paruh Awal (Kuartal I)', pos: 'Tepat separuh kanan Bulan tampak terang.' },
  { id: 'cembung1', p: 0.375, nama: 'Cembung Awal', pos: 'Lebih dari separuh terang, menuju purnama.' },
  { id: 'purnama', p: 0.5, nama: 'Purnama', pos: 'Bumi berada di antara Matahari dan Bulan; seluruh sisi terang menghadap kita.' },
  { id: 'cembung2', p: 0.625, nama: 'Cembung Akhir', pos: 'Mulai menyusut dari sisi kanan.' },
  { id: 'paruh2', p: 0.75, nama: 'Paruh Akhir (Kuartal III)', pos: 'Tepat separuh kiri Bulan tampak terang.' },
  { id: 'sabit2', p: 0.875, nama: 'Sabit Akhir', pos: 'Tinggal sabit tipis di sebelah kiri sebelum kembali gelap.' },
]
