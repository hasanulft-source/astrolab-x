import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Batu besar yang sulit diangkat tangan jadi mudah dicongkel pakai <em>linggis</em>. Apa rahasianya?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookLever}><div className={styles.beam} /><div className={styles.fulcrum} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Linggis adalah <b>pesawat sederhana</b> - alat yang memudahkan kerja. Ada <b>4 jenis</b>: tuas, katrol, bidang miring, dan roda berporos.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa rahasianya? →</button>}
        </div>
      </div>
    </>
  )
}
