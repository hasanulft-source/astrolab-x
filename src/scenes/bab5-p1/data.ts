export interface Obj { id: string; nama: string; hidup: boolean }
export const HOOK_OBJS: Obj[] = [
  { id: 'kristal', nama: 'Batu kristal', hidup: false },
  { id: 'api', nama: 'Api unggun', hidup: false },
  { id: 'robot', nama: 'Robot', hidup: false },
  { id: 'kucing', nama: 'Kucing', hidup: true },
]

export interface Ciri { id: string; nama: string; contoh: string }
export const CIRI: Ciri[] = [
  { id: 'gerak', nama: 'Bergerak', contoh: 'Kucing berlari; tumbuhan tumbuh ke arah cahaya.' },
  { id: 'napas', nama: 'Bernapas (respirasi)', contoh: 'Menghirup O2 dan melepas CO2 untuk menghasilkan energi.' },
  { id: 'nutrisi', nama: 'Butuh nutrisi', contoh: 'Hewan makan; tumbuhan membuat makanannya sendiri (fotosintesis).' },
  { id: 'tumbuh', nama: 'Tumbuh & berkembang', contoh: 'Dari kecil menjadi besar - bertambah ukuran dari dalam tubuh.' },
  { id: 'peka', nama: 'Peka terhadap rangsang', contoh: 'Daun putri malu mengatup saat disentuh.' },
  { id: 'biak', nama: 'Berkembang biak', contoh: 'Menghasilkan keturunan agar jenisnya lestari.' },
  { id: 'ekskresi', nama: 'Mengeluarkan zat sisa', contoh: 'Berkeringat, mengeluarkan urine; tumbuhan melepas O2.' },
]

export interface Kasus { id: string; nama: string; punya: Record<string, boolean>; mh: 'ya' | 'tidak' | 'batas'; verdict: string }
export const KASUS: Kasus[] = [
  { id: 'api', nama: 'Api unggun', mh: 'tidak',
    punya: { gerak: true, napas: false, nutrisi: false, tumbuh: true, peka: false, biak: false, ekskresi: true },
    verdict: 'Api membesar dan butuh oksigen, tapi tak bernapas sejati, tak makan, dan tak berkembang biak. Hanya meniru sebagian ciri - bukan makhluk hidup.' },
  { id: 'kristal', nama: 'Kristal garam', mh: 'tidak',
    punya: { gerak: false, napas: false, nutrisi: false, tumbuh: true, peka: false, biak: false, ekskresi: false },
    verdict: 'Kristal "tumbuh" dengan menempelkan zat dari luar, bukan dari dalam tubuh. Hanya satu ciri semu - bukan makhluk hidup.' },
  { id: 'virus', nama: 'Virus', mh: 'batas',
    punya: { gerak: false, napas: false, nutrisi: false, tumbuh: false, peka: false, biak: true, ekskresi: false },
    verdict: 'Virus bisa berkembang biak - tetapi hanya di dalam sel inang. Di luar inang ia seperti benda mati. Itulah sebabnya virus berada di perbatasan hidup dan tak hidup.' },
]
