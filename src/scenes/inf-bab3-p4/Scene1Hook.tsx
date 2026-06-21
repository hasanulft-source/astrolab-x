import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu menemukan dua artikel tentang topik yang sama. Isinya bertentangan. <em>Mana yang harus kamu percaya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookDocs}><div className={styles.doc} /><div className={styles.vs}>?</div><div className={styles.doc} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Jangan menebak. Periksa <b>kredibilitas sumbernya</b> - siapa penulisnya, kapan ditulis, di situs apa, dan apakah ada bukti pendukung.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Mana yang dipercaya? →</button>}
        </div>
      </div>
    </>
  )
}
