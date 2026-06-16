import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Segenggam tanah terlihat seperti satu benda padat berwarna coklat. Tapi benarkah ia <em>satu bahan saja?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookSoil} /></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Tidak. Tanah adalah <b>campuran</b> dari mineral, bahan organik, air, dan udara. Bahkan ada jutaan mikroba hidup di dalamnya - tanah itu "hidup".</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Satu bahan saja? →</button>}
        </div>
      </div>
    </>
  )
}
