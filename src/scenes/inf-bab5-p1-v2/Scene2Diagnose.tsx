import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene2Diagnose.module.css'
const COMPONENTS = [
  {nama:'RAM (Memori)', analogi:'Meja kerja', fungsi:'Menyimpan data yang sedang dipakai. Makin besar, makin banyak aplikasi bisa jalan bersamaan tanpa lambat.', masalah:'2GB → meja terlalu kecil, tidak muat banyak pekerjaan sekaligus → hang', upgrade:'Tambah ke 8GB — prioritas #1'},
  {nama:'Storage (HDD/SSD)', analogi:'Lemari arsip', fungsi:'Menyimpan semua file permanen: dokumen, foto, aplikasi, sistem operasi. HDD lambat, SSD cepat.', masalah:'95% penuh → tidak ada ruang file baru + swap terganggu', upgrade:'Ganti ke SSD + bersihkan file — prioritas #2'},
  {nama:'CPU (Prosesor)', analogi:'Otak', fungsi:'Melakukan semua perhitungan dan menjalankan instruksi. Kecepatan diukur dalam GHz + jumlah core.', masalah:'i3 2014 masih layak untuk tugas ringan, bukan penyebab utama', upgrade:'Tidak mendesak — prioritas #4'},
  {nama:'GPU (Kartu Grafis)', analogi:'Seniman', fungsi:'Memproses tampilan visual, game, video editing. Ada yang terintegrasi (onboard) dan terpisah (dedicated).', masalah:'Untuk tugas kantoran, GPU onboard cukup', upgrade:'Tidak perlu — prioritas #3'},
]
export function Scene2Diagnose({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const c = COMPONENTS[sel]
  const pick = (i: number) => { setSel(i); if (!unlocked) { setUnlocked(true); onUnlock() } }
  return (
    <>
      <p className={styles.prompt}>Setiap komponen punya peran. <em>Klik untuk paham fungsi + analogi + diagnosa.</em></p>
      <div className={styles.main}>
        <div className={styles.list}>
          {COMPONENTS.map((c,i)=>(
            <button key={i} className={`${styles.item} ${sel===i?styles.itemSel:''}`} onClick={()=>pick(i)}>
              <div className={styles.iNama}>{c.nama}</div>
              <div className={styles.iAnalogi}>≈ {c.analogi}</div>
            </button>
          ))}
        </div>
        <div className={styles.detail}>
          <div className={styles.dNama}>{c.nama} <span className={styles.dAnalogi}>≈ {c.analogi}</span></div>
          <div className={styles.dRow}><b>Fungsi:</b> {c.fungsi}</div>
          <div className={styles.dRow} style={{background:'#fff1f2',borderColor:'#fca5a5'}}><b>Di kasus ini:</b> {c.masalah}</div>
          <div className={styles.dRow} style={{background:'#f0fdf4',borderColor:'#86efac'}}><b>Rekomendasi:</b> {c.upgrade}</div>
        </div>
      </div>
    </>
  )
}
