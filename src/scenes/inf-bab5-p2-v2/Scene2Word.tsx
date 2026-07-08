import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Word.module.css'
const FEATURES = [
  {nama:'Heading Styles', apa:'Judul & subjudul dengan gaya konsisten (Heading 1, 2, 3)', kenapa:'Membuat struktur dokumen jelas + otomatis bikin daftar isi', demo:'Judul Utama → Sub-bagian → Detail'},
  {nama:'Bullet & Numbering', apa:'Daftar berpoin atau bernomor', kenapa:'Memecah info jadi mudah dibaca, bukan paragraf panjang', demo:'• Poin A  • Poin B  atau  1. Langkah 1  2. Langkah 2'},
  {nama:'Bold & Italic', apa:'Penekanan pada kata penting', kenapa:'Mengarahkan mata pembaca ke info kunci', demo:'Kata **penting** atau *istilah asing*'},
  {nama:'Alignment & Spacing', apa:'Perataan teks + jarak antar baris', kenapa:'Dokumen rapi & tidak sesak, enak dibaca', demo:'Rata kiri/tengah/kanan + spasi 1.5'},
  {nama:'Tabel', apa:'Menyusun data dalam baris & kolom', kenapa:'Membandingkan info jadi terstruktur', demo:'Nama | Nilai | Status'},
  {nama:'Header/Footer', apa:'Info di atas/bawah tiap halaman', kenapa:'Nomor halaman, judul dokumen, nama otomatis di semua halaman', demo:'Halaman 1 dari 5 · Profil Kelas'},
]
export function Scene2Word({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const f = FEATURES[sel]
  const pick = (i: number) => { setSel(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Brief: buat dokumen <em>Profil Kelas VII</em> dengan 5+ formatting. Pelajari tiap fitur.</p>
      <div className={styles.main}>
        <div className={styles.list}>
          {FEATURES.map((f,i)=>(
            <button key={i} className={`${styles.item} ${sel===i?styles.itemSel:''}`} onClick={()=>pick(i)}>{f.nama}</button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.dNama}>{f.nama}</div>
          <div className={styles.dRow}><b>Apa:</b> {f.apa}</div>
          <div className={styles.dRow}><b>Kenapa penting:</b> {f.kenapa}</div>
          <div className={styles.demo}><span className={styles.demoLabel}>Contoh:</span> {f.demo}</div>
        </div>
      </div>
      <div className={styles.note}>File Word "Profil Kelas" yang kamu buat di sini akan dikirim via email di Level 6 — ini bagian dari 1 alur proyek besar.</div>
    </>
  )
}
