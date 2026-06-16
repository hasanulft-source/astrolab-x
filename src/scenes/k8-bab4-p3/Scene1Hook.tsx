import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Seorang montir mengangkat mobil seberat 1 ton hanya dengan menekan tuas kecil. <em>Bagaimana mungkin?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookCar}>🚗</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Lewat <b>Hukum Pascal</b>: tekanan pada zat cair diteruskan <b>sama besar ke segala arah</b>. Gaya kecil pada pengisap kecil menjadi gaya besar pada pengisap yang luasnya jauh lebih besar.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bagaimana bisa? →</button>}
        </div>
      </div>
    </>
  )
}
