import { useState } from 'react'
import { MoonPhase } from '../../components/MoonPhase'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Bentuk Bulan berubah tiap malam - sabit, separuh, lalu purnama. <em>Apa yang sebenarnya terjadi?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookMoons}>
            {[0.05, 0.25, 0.5, 0.75].map((p, i) => <MoonPhase key={i} p={p} size={56} />)}
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Bulan tidak berubah bentuk dan <b>tidak tertutup bayangan Bumi</b>. Yang berubah adalah <b>seberapa banyak sisi terangnya</b> yang menghadap kita - tergantung posisi Bulan terhadap Matahari.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa berubah? →</button>}
        </div>
      </div>
    </>
  )
}
