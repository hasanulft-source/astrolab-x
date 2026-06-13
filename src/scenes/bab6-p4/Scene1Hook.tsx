import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Di satu sawah ada ribuan padi, ratusan belalang, tapi cuma <em>segelintir elang.</em> Mengapa predator puncak selalu sedikit?</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookCols}>
            <div className={styles.hCol}><span className={styles.hBig}>~10.000</span><span className={styles.hLbl}>Padi</span></div>
            <div className={styles.hCol}><span className={styles.hBig}>~1.000</span><span className={styles.hLbl}>Belalang</span></div>
            <div className={styles.hCol}><span className={styles.hBig}>~10</span><span className={styles.hLbl}>Elang</span></div>
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Karena <b>energi menyusut</b> di tiap tingkat. Hanya sekitar <b>10%</b> energi yang diteruskan ke pemangsa berikutnya - sisanya habis terpakai. Energi sedikit → hanya bisa menghidupi sedikit predator.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa sebabnya? →</button>}
        </div>
      </div>
    </>
  )
}
