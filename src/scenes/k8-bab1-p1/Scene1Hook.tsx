import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sepiring nasi, telur, dan sayur. <em>Zat apa saja di dalamnya, dan untuk apa tubuh memerlukannya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.plate}>
            <div className={styles.plateInner}><span>nasi</span><span>telur</span><span>sayur</span><span>buah</span></div>
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Makanan mengandung <b>6 jenis nutrisi</b>: karbohidrat, protein, lemak, vitamin, mineral, dan air. Masing-masing punya fungsi berbeda - dari sumber energi sampai pembangun tubuh.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Ada zat apa saja? →</button>}
        </div>
      </div>
    </>
  )
}
