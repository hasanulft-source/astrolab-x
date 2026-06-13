import { useState } from 'react'
import { PathViz } from '../../components/PathViz'
import { byId } from './data'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  const s = byId('segitiga')
  return (
    <>
      <p className={styles.prompt}>Seseorang berjalan A→B→C lalu kembali ke A (200 m tiap sisi). <em>Berapa jarak tempuhnya? Berapa perpindahannya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><PathViz route={s.route} /></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.hookReveal}>Jarak = <b>600 m</b> (total lintasan). Tapi perpindahan = <b>0 m</b> — karena ia kembali ke titik awal! Dua besaran yang sering tertukar.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Lihat jawaban →</button>}
        </div>
      </div>
    </>
  )
}
