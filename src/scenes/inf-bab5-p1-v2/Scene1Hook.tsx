import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<string|null>(null)
  const choose = () => { setPick('go'); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Laporan masuk dari lab: <em>komputer sangat lambat, sering hang, tidak bisa simpan file baru.</em> Sebagai teknisi, apa diagnosamu?</p>
      <div className={styles.specCard}>
        <div className={styles.specTitle}>SPESIFIKASI KOMPUTER LAB</div>
        <div className={styles.specGrid}>
          {[['CPU','Intel Core i3 (2014)'],['RAM','2 GB'],['Storage','HDD 500 GB (95% penuh)'],['Monitor','19 inci'],['Input','Keyboard + Mouse USB']].map(([k,v])=>(
            <div key={k} className={styles.specRow}><span className={styles.specK}>{k}</span><span className={styles.specV}>{v}</span></div>
          ))}
        </div>
      </div>
      <div className={styles.q}>Apa penyebab UTAMA komputer ini lambat dan tidak bisa simpan file?</div>
      <div className={styles.opts}>
        {['Monitor terlalu kecil (19 inci)','RAM hanya 2 GB (kurang untuk multitasking) + HDD 95% penuh (tidak ada ruang untuk file baru & swap)','CPU generasi 2014 sudah rusak total','Keyboard/mouse USB terlalu lambat'].map(o=>(
          <button key={o} className={styles.opt} onClick={choose}>{o}</button>
        ))}
      </div>
      {pick&&<div className={styles.reveal}>
        Diagnosa tepat: <b>2 masalah utama.</b> (1) RAM 2GB terlalu kecil — saat buka banyak aplikasi, komputer kehabisan memori kerja → hang. (2) HDD 95% penuh — tidak ada ruang untuk file baru DAN tidak ada ruang untuk "swap" (memori virtual). Solusi: tambah RAM ke 8GB + ganti ke SSD atau bersihkan storage. Untuk mendiagnosa, kamu harus paham fungsi tiap komponen.
      </div>}
    </>
  )
}
