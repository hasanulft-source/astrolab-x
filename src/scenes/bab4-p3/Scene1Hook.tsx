import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Bola dijatuhkan. Tiap detik kecepatannya: <em>0 → 10 → 20 → 30 → 40 m/s</em>. <em>Apa polanya?</em></p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.dataRow}>
            {[0, 10, 20, 30, 40].map((v, i) => <span key={i} className={styles.dCell}>{i}s: {v} m/s</span>)}
          </div>
          {!show && <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa polanya? →</button>}
        </div>
        <div className={styles.side}>
          {show && <div className={styles.hl}>Kecepatan bertambah <b>10 m/s tiap detik</b> — konstan! Ini <b>GLBB</b> (Gerak Lurus Berubah Beraturan). Penambahan kecepatan itu disebut <b>percepatan</b> (a = 10 m/s²).</div>}
        </div>
      </div>
    </>
  )
}
