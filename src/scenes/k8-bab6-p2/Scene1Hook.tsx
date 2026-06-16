import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Air sumur yang keruh berisi lumpur bisa menjadi <em>jernih</em> setelah disaring. Ke mana perginya kotoran itu?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookFilter}><div className={styles.funnel} /><div className={styles.drip} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Kotoran tertahan oleh <b>saringan (filter)</b> karena ukurannya lebih besar dari pori-pori, sementara air lolos. Ini disebut <b>filtrasi</b> - salah satu metode pemisahan campuran.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Ke mana kotorannya? →</button>}
        </div>
      </div>
    </>
  )
}
