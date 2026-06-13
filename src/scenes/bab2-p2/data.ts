export interface Wujud { id: string; name: string; state: 'solid' | 'liquid' | 'gas'; bentuk: string; volume: string; mampat: string; alasan: string }
export const WUJUD: Wujud[] = [
  { id: 'padat', name: 'Padat', state: 'solid',  bentuk: 'Tetap',            volume: 'Tetap',                    mampat: 'Sangat sulit', alasan: 'Partikel sangat rapat dan hanya bergetar di tempat.' },
  { id: 'cair',  name: 'Cair',  state: 'liquid', bentuk: 'Mengikuti wadah',  volume: 'Tetap',                    mampat: 'Sulit',        alasan: 'Partikel berdekatan tapi bisa bergeser bebas.' },
  { id: 'gas',   name: 'Gas',   state: 'gas',    bentuk: 'Mengikuti wadah',  volume: 'Berubah, mengisi ruang',   mampat: 'Mudah',        alasan: 'Partikel berjauhan & bergerak bebas — banyak ruang kosong.' },
]
export const byId = (id: string) => WUJUD.find(w => w.id === id)

export interface Fenomena { id: string; teks: string; wujud: string; alasan: string }
export const FENOMENA: Fenomena[] = [
  { id: 'f1', teks: 'Air mengikuti bentuk gelas yang ditempati', wujud: 'Cair',  alasan: 'Partikel bisa bergeser, jadi bentuk ikut wadah tapi volume tetap.' },
  { id: 'f2', teks: 'Gas LPG dimampatkan ke tabung kecil',       wujud: 'Gas',   alasan: 'Banyak ruang kosong antar partikel, jadi mudah dimampatkan.' },
  { id: 'f3', teks: 'Batu mempertahankan bentuknya',             wujud: 'Padat', alasan: 'Partikel terkunci rapat, bentuk & volume tetap.' },
  { id: 'f4', teks: 'Parfum tercium ke seluruh ruangan',         wujud: 'Gas',   alasan: 'Partikel bergerak bebas & menyebar mengisi ruang.' },
  { id: 'f5', teks: 'Es batu punya bentuk tetap',                wujud: 'Padat', alasan: 'Sebagai padatan, partikelnya hanya bergetar di tempat.' },
  { id: 'f6', teks: 'Minyak dituang memenuhi dasar wadah',       wujud: 'Cair',  alasan: 'Partikel mengalir & menyesuaikan wadah, volume tetap.' },
]
