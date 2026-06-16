import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Darah tampak merah dan cair seragam. <em>Padahal di dalamnya ada banyak komponen berbeda. Apa saja?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.drop} />
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Darah adalah <b>campuran</b>: cairan <b>plasma</b> ditambah tiga jenis sel - <b>sel darah merah</b>, <b>sel darah putih</b>, dan <b>keping darah</b>. Masing-masing punya tugas sendiri.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa isinya? →</button>}
        </div>
      </div>
    </>
  )
}
