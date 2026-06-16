import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Tarik napas. Udara masuk lewat hidung. <em>Lewat mana saja sampai oksigennya tiba di darah?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookFlow}><span>Hidung</span><span className={styles.ar}>↓</span><span>?</span><span className={styles.ar}>↓</span><span>O2 masuk darah</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Udara menempuh <b>saluran pernapasan</b>: hidung → faring → laring → trakea → bronkus → bronkiolus → <b>alveolus</b>. Di alveolus-lah oksigen berpindah ke darah.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Lewat mana? →</button>}
        </div>
      </div>
    </>
  )
}
