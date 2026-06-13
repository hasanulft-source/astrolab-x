import { useState } from 'react'
import styles from './ui.module.css'
import { Frac } from '../../components/Frac'

export function Scene4Kecepatan() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Mobil menempuh lintasan 400 m (bolak-balik, kembali ke awal) dalam 40 detik. <em>Kelajuan & kecepatannya?</em></p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>kelajuan = jarak ÷ waktu</span><p>Pakai jarak total lintasan.</p></div>
          <div className={styles.field}><span className={styles.fLabel}>kecepatan = perpindahan ÷ waktu</span><p>Pakai perpindahan (lurus awal→akhir).</p></div>
          {!show && <button className={styles.btn} style={{ alignSelf: 'flex-start' }} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Hitung →</button>}
        </div>
        <div className={styles.side}>
          {show && <>
            <div className={styles.vals}><div className={styles.val}><span className={`${styles.valK} ${styles.valKj}`}>KELAJUAN</span><span className={styles.valV}><Frac top="400" bottom="40" /> = 10 m/s</span></div></div>
            <div className={styles.vals}><div className={styles.val}><span className={`${styles.valK} ${styles.valKp}`}>KECEPATAN</span><span className={styles.valV}><Frac top="0" bottom="40" /> = 0 m/s</span></div></div>
            <div className={styles.note}>Kembali ke titik awal → perpindahan 0 → kecepatan rata-rata 0, walau mobil jelas bergerak (kelajuan 10 m/s).</div>
          </>}
        </div>
      </div>
    </>
  )
}
