import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Darah kotor masuk ke ginjal, keluar menjadi urine. <em>Melalui berapa tahap perubahannya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookFlow}><span>Darah</span><span className={styles.ar}>→</span><span>Ginjal</span><span className={styles.ar}>→</span><span>Urine</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Di dalam unit penyaring ginjal (<b>nefron</b>), urine terbentuk lewat <b>3 tahap</b>: filtrasi, reabsorpsi, dan augmentasi.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Berapa tahap? →</button>}
        </div>
      </div>
    </>
  )
}
