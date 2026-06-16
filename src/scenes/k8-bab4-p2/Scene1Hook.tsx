import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Saat menyelam, makin dalam kamu turun, makin sakit telinga terasa. <em>Apa yang menekan begitu kuat?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookWater}><span className={styles.diver}>↓</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Itu <b>tekanan hidrostatis</b> - tekanan zat cair yang makin besar seiring kedalaman. Rumusnya <b>P = ρ × g × h</b>: makin dalam (h besar), makin besar tekanannya.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa yang menekan? →</button>}
        </div>
      </div>
    </>
  )
}
