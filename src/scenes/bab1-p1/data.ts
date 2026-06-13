export interface Branch { id: string; name: string; icon: string; short: string; dipelajari: string; manfaat: string }

export const BRANCHES: Branch[] = [
  { id: 'fisika',    name: 'Fisika',    icon: '⚛️', short: 'Ilmu tentang materi, energi, gerak, dan gaya.',                 dipelajari: 'Gerak, gaya, energi, cahaya, listrik, dan panas.',       manfaat: 'Listrik di rumah, kendaraan, sampai gadget — semua kerja fisika.' },
  { id: 'kimia',     name: 'Kimia',     icon: '🧪', short: 'Ilmu tentang susunan, sifat, dan perubahan zat.',             dipelajari: 'Atom, molekul, reaksi, dan perubahan materi.',           manfaat: 'Obat, sabun, makanan kemasan, dan bahan bakar.' },
  { id: 'biologi',   name: 'Biologi',   icon: '🧬', short: 'Ilmu tentang makhluk hidup dan kehidupannya.',               dipelajari: 'Sel, tumbuhan, hewan, manusia, dan mikroorganisme.',     manfaat: 'Kesehatan, pertanian, dan pengembangan vaksin.' },
  { id: 'astronomi', name: 'Astronomi', icon: '🪐', short: 'Ilmu tentang benda langit dan alam semesta.',                 dipelajari: 'Planet, bintang, galaksi, dan tata surya.',             manfaat: 'Navigasi, kalender, satelit, dan cuaca antariksa.' },
  { id: 'bumi',      name: 'Ilmu Bumi', icon: '🌋', short: 'Ilmu tentang Bumi: batuan, tanah, dan dinamikanya.',          dipelajari: 'Batuan, gempa, gunung api, dan lapisan Bumi.',           manfaat: 'Mitigasi bencana, tambang, dan pencarian sumber air.' },
  { id: 'ekologi',   name: 'Ekologi',   icon: '🌿', short: 'Ilmu tentang hubungan makhluk hidup dengan lingkungannya.',   dipelajari: 'Rantai makanan, ekosistem, dan keseimbangan alam.',      manfaat: 'Konservasi, menjaga lingkungan, dan pertanian berkelanjutan.' },
]

export const byId = (id: string) => BRANCHES.find(b => b.id === id)

export interface Combo { a: string; b: string; name: string; desc: string }
export const COMBOS: Combo[] = [
  { a: 'biologi',   b: 'kimia',  name: 'Biokimia',    desc: 'Reaksi kimia di dalam tubuh makhluk hidup — misalnya bagaimana tubuh mencerna makanan jadi energi.' },
  { a: 'astronomi', b: 'fisika', name: 'Astrofisika', desc: 'Hukum fisika dipakai untuk menjelaskan bintang, galaksi, dan lubang hitam.' },
  { a: 'bumi',      b: 'fisika', name: 'Geofisika',   desc: 'Fisika dipakai untuk mempelajari gempa, medan magnet, dan isi dalam Bumi.' },
]

export interface Phenomenon { id: string; label: string; icon: string; branch: string; note: string }
export const PHENOMENA: Phenomenon[] = [
  { id: 'langit', label: 'Langit berwarna biru',  icon: '🌌', branch: 'fisika',    note: 'Cahaya matahari dihamburkan oleh partikel udara.' },
  { id: 'gempa',  label: 'Gempa bumi',            icon: '🌍', branch: 'bumi',      note: 'Pergerakan lempeng dan lapisan Bumi.' },
  { id: 'virus',  label: 'Penyebaran virus',      icon: '🦠', branch: 'biologi',   note: 'Makhluk hidup mikro dan penyakit.' },
  { id: 'karat',  label: 'Besi berkarat',         icon: '🔩', branch: 'kimia',     note: 'Perubahan zat akibat reaksi dengan udara dan air.' },
  { id: 'roket',  label: 'Roket ke Mars',         icon: '🚀', branch: 'astronomi', note: 'Menjelajahi planet dan benda langit.' },
  { id: 'hutan',  label: 'Rantai makanan hutan',  icon: '🌳', branch: 'ekologi',   note: 'Hubungan makhluk hidup dengan lingkungannya.' },
]
