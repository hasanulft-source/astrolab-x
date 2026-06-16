import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Bola dilepas dari puncak bukit. Makin ke bawah makin cepat. <em>Dari mana datangnya kecepatan itu?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookHill}><span className={styles.ball} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Dari <b>energi potensial</b> (karena ketinggian) yang berubah jadi <b>energi kinetik</b> (gerak). Energinya tidak hilang - hanya <b>berubah bentuk</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Dari mana? →</button>}
        </div>
      </div>
    </>
  )
}
