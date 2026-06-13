export type Kat = 'wadah' | 'ukur' | 'pemanas' | 'penunjang'
export const KAT_LABEL: Record<Kat, string> = { wadah: 'Wadah & Reaksi', ukur: 'Alat Ukur', pemanas: 'Pemanas', penunjang: 'Penunjang' }

export interface Tool { id: string; name: string; kat: Kat; fungsi: string; bahan: string; safety: string }

export const TOOLS: Tool[] = [
  { id: 'beaker',      name: 'Gelas Kimia',        kat: 'wadah',     fungsi: 'Menampung & mencampur larutan, boleh dipanaskan.',          bahan: 'Kaca borosilikat', safety: 'Pakai penjepit saat panas; bukan untuk mengukur volume teliti.' },
  { id: 'testtube',    name: 'Tabung Reaksi',      kat: 'wadah',     fungsi: 'Mereaksikan zat dalam jumlah kecil.',                       bahan: 'Kaca',             safety: 'Arahkan mulut tabung menjauh dari wajah saat dipanaskan.' },
  { id: 'erlenmeyer',  name: 'Labu Erlenmeyer',    kat: 'wadah',     fungsi: 'Menampung & mencampur; bentuk kerucut mengurangi tumpah.',  bahan: 'Kaca',             safety: 'Pegang pada leher labu; hati-hati menggoyang larutan panas.' },
  { id: 'cylinder',    name: 'Gelas Ukur',         kat: 'ukur',      fungsi: 'Mengukur volume cairan dengan teliti.',                     bahan: 'Kaca / plastik',   safety: 'Baca skala sejajar meniskus; jangan dipanaskan.' },
  { id: 'dropper',     name: 'Pipet Tetes',        kat: 'ukur',      fungsi: 'Mengambil cairan dalam jumlah tetes.',                      bahan: 'Kaca + karet',     safety: 'Jangan isi cairan sampai masuk ke bagian karet.' },
  { id: 'thermometer', name: 'Termometer',         kat: 'ukur',      fungsi: 'Mengukur suhu zat.',                                        bahan: 'Kaca + cairan',    safety: 'Jangan dipakai mengaduk; sangat mudah pecah.' },
  { id: 'burner',      name: 'Pembakar Spiritus',  kat: 'pemanas',   fungsi: 'Sumber api untuk memanaskan zat.',                          bahan: 'Kaca + sumbu',     safety: 'Jauhkan bahan mudah terbakar; matikan dengan penutup, jangan ditiup.' },
  { id: 'tripod',      name: 'Kaki Tiga & Kasa',   kat: 'pemanas',   fungsi: 'Penyangga wadah di atas pembakar; kasa meratakan panas.',   bahan: 'Logam',            safety: 'Tetap panas setelah dipakai — jangan disentuh langsung.' },
  { id: 'funnel',      name: 'Corong',             kat: 'penunjang', fungsi: 'Membantu menuang cairan atau menyaring.',                   bahan: 'Kaca / plastik',   safety: 'Pastikan posisi stabil agar tidak terguling.' },
  { id: 'clamp',       name: 'Penjepit Tabung',    kat: 'penunjang', fungsi: 'Menjepit tabung reaksi yang panas.',                        bahan: 'Kayu / logam',     safety: 'Pastikan jepitan kuat sebelum mengangkat tabung.' },
]

export const byId = (id: string) => TOOLS.find(t => t.id === id)
