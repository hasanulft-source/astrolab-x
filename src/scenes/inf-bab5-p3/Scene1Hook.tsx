import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sebuah komputer dengan perangkat keras lengkap, tapi tanpa program apa pun, hanyalah <em>kotak logam yang diam.</em> Apa yang menghidupkannya?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookBox}><span>?</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}><b>Perangkat lunak (software)</b> - kumpulan perintah yang memberi tahu perangkat keras apa yang harus dilakukan. Tanpa software, hardware tak berguna.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa yang menghidupkan? →</button>}
        </div>
      </div>
    </>
  )
}
