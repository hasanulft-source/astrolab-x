import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Komputer sangat cepat, tapi ia <em>tidak bisa berpikir sendiri.</em> Ia hanya menjalankan perintah persis seperti yang kita berikan. Lalu bagaimana cara kita "mengajari" komputer memecahkan masalah?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookChip}><span>{'</>'}</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Dengan <b>Berpikir Komputasional</b> - cara memecahkan masalah secara runut agar bisa dikerjakan langkah demi langkah. Ia berdiri di atas <b>4 pondasi</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bagaimana caranya? →</button>}
        </div>
      </div>
    </>
  )
}
