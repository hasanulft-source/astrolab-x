import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Ujung paku dibuat <em>runcing</em>, bukan tumpul. Dengan pukulan yang sama, paku runcing jauh lebih mudah menancap. Mengapa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookNail}><div className={styles.nailHead} /><div className={styles.nailBody} /><div className={styles.nailTip} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Karena tekanan = <b>gaya dibagi luas</b> (<b>P = F/A</b>). Ujung runcing memusatkan gaya pada luas yang sangat kecil, sehingga tekanannya jadi sangat besar.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa runcing? →</button>}
        </div>
      </div>
    </>
  )
}
