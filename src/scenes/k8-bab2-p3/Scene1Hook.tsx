import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Berkeringat saat panas - itu sebenarnya tubuh sedang <em>membuang sesuatu.</em> Lewat organ apa saja tubuh membuang zat sisa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookGrid}><span>Ginjal</span><span>Kulit</span><span>Paru-paru</span><span>Hati</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Membuang zat sisa metabolisme disebut <b>ekskresi</b>. Tubuh punya <b>4 organ ekskresi</b>: ginjal, kulit, paru-paru, dan hati - masing-masing membuang zat yang berbeda.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Lewat organ apa? →</button>}
        </div>
      </div>
    </>
  )
}
