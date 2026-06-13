import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Es −10°C dipanaskan terus-menerus sampai jadi uap. <em>Apakah suhunya naik terus?</em></p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.note}>Tebak dulu: kalau kita panaskan es tanpa henti, apakah termometer akan naik mulus dari −10°C terus sampai 120°C?</div>
          {!show && <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Lihat jawaban →</button>}
        </div>
        <div className={styles.side}>
          {show && <div className={styles.hl}>Ternyata <b>tidak</b>. Ada dua saat di mana suhu <b>diam</b> walau terus dipanaskan — yaitu ketika sedang <b>mencair</b> dan <b>mendidih</b>. Kita lihat grafiknya di scene berikut.</div>}
        </div>
      </div>
    </>
  )
}
