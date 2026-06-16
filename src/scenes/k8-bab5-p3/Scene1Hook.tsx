import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Masukkan sedotan ke gelas berisi air - sedotan tampak <em>patah</em> di batas permukaan. Padahal utuh. Mengapa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookGlass}><div className={styles.water} /><div className={styles.strawTop} /><div className={styles.strawBot} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Karena cahaya <b>dibelokkan</b> (dibiaskan) saat berpindah dari air ke udara. Hari ini kita pelajari dua peristiwa cahaya: <b>pemantulan</b> dan <b>pembiasan</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa patah? →</button>}
        </div>
      </div>
    </>
  )
}
