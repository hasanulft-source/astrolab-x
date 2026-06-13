export interface Besaran { id: string; name: string; satuan: string; alat: string; note: string }
export const BESARAN: Besaran[] = [
  { id: 'panjang', name: 'Panjang', satuan: 'meter (m)',     alat: 'Penggaris / mistar', note: 'Jarak antara dua titik — panjang, lebar, tinggi, tebal.' },
  { id: 'massa',   name: 'Massa',   satuan: 'kilogram (kg)', alat: 'Neraca',             note: 'Banyaknya materi pada benda — berbeda dengan berat.' },
  { id: 'waktu',   name: 'Waktu',   satuan: 'sekon (s)',     alat: 'Stopwatch',          note: 'Lama suatu kejadian berlangsung.' },
]

export interface AccCase { id: string; label: string; desc: string; dots: [number, number][] }
export const CASES: AccCase[] = [
  { id: 'both',     label: 'Akurat & Presisi',       desc: 'Hasil rapat satu sama lain (presisi) dan tepat di pusat (akurat). Inilah pengukuran ideal.', dots: [[120,120],[126,116],[114,124],[122,127],[117,114],[125,123]] },
  { id: 'precise',  label: 'Presisi, tidak akurat',  desc: 'Hasil rapat tapi jauh dari pusat. Konsisten namun salah — sering karena alat belum dikalibrasi.', dots: [[158,92],[164,88],[160,96],[166,94],[155,90],[162,99]] },
  { id: 'accurate', label: 'Akurat, tidak presisi',  desc: 'Rata-rata di pusat, tapi hasilnya tersebar. Benar secara rata-rata, tiap ukuran beda-beda.', dots: [[120,118],[96,130],[140,108],[110,145],[138,140],[101,101]] },
  { id: 'neither',  label: 'Tidak keduanya',         desc: 'Tersebar dan jauh dari pusat — pengukuran tidak bisa diandalkan.', dots: [[170,80],[150,62],[185,100],[140,95],[195,76],[165,114]] },
]

export const OSN_DATA = [12.1, 12.3, 12.0, 12.4, 12.2, 12.1, 12.5, 12.2, 12.3, 12.1]
