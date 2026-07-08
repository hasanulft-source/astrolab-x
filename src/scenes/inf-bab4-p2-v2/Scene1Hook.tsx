import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [guess, setGuess] = useState<number|null>(null)
  const [shown, setShown] = useState(false)
  const reveal = () => { setShown(true); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Rata-rata remaja Indonesia menghabiskan waktu di layar HP sekitar...
        <em> berapa jam per hari menurutmu?</em></p>
      <div className={styles.guessArea}>
        <div className={styles.guessLabel}>Tebakanmu: <b>{guess||6} jam/hari</b></div>
        <input type="range" min={1} max={12} value={guess||6} disabled={shown} onChange={e=>setGuess(+e.target.value)} className={styles.slider}/>
        <div className={styles.marks}><span>1 jam</span><span>12 jam</span></div>
      </div>
      {guess&&!shown&&<button className={styles.revBtn} onClick={reveal}>Lihat perkiraan →</button>}
      {shown&&<div className={styles.reveal}>
        <div className={styles.stat}>Perkiraan survei: <b>6–8 jam per hari</b> [perlu verifikasi — angka bervariasi antar survei]</div>
        <div className={styles.calc}>
          <div className={styles.calcRow}>6 jam/hari × 7 hari = <b>42 jam/minggu</b></div>
          <div className={styles.calcRow}>= <b>~91 hari penuh per tahun</b> di depan layar</div>
          <div className={styles.calcRow}>= <b>hampir 3 bulan</b> setiap tahun</div>
        </div>
        <div className={styles.note}>Ini bukan untuk menghakimi — layar punya banyak fungsi positif (belajar, koneksi, hiburan). Tapi angka ini layak disadari. Level ini: kamu jadi auditor kehidupan digitalmu sendiri.</div>
      </div>}
    </>
  )
}
