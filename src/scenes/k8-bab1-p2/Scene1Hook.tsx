import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sesuap nasi masuk lewat mulut. <em>Apa saja yang ia lewati sebelum jadi energi bagi tubuh?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookFlow}><span>Mulut</span><span className={styles.ar}>↓</span><span>?</span><span className={styles.ar}>↓</span><span>Sari makanan diserap</span></div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Makanan menempuh <b>saluran pencernaan</b>: mulut → kerongkongan → lambung → usus halus → usus besar → anus. Di tiap organ ada proses yang berbeda.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Lewat mana saja? →</button>}
        </div>
      </div>
    </>
  )
}
