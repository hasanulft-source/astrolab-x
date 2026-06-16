import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Darah dipompa jantung dan beredar tanpa henti. <em>Apakah jalurnya satu lingkaran, atau lebih?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookLoop}>⟳</div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Ada <b>dua peredaran</b>: <b>peredaran kecil</b> (jantung → paru → jantung) untuk mengambil oksigen, dan <b>peredaran besar</b> (jantung → seluruh tubuh → jantung) untuk mengantarkannya.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Satu atau dua? →</button>}
        </div>
      </div>
    </>
  )
}
