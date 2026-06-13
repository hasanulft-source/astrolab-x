import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Suhu rata-rata Bumi sekitar <em>15°C</em> - nyaman untuk hidup. Tanpa atmosfer, suhunya akan <em>-18°C</em>, membeku. Apa yang menjaganya hangat?</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.hookRow}>
            <div className={styles.hCard}><span className={styles.hBig}>+15°C</span><span className={styles.hLbl}>Bumi sekarang</span></div>
            <span className={styles.hVs}>vs</span>
            <div className={styles.hCardCold}><span className={styles.hBig}>-18°C</span><span className={styles.hLbl}>Tanpa atmosfer</span></div>
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Jawabannya: <b>efek rumah kaca alami</b>. Gas-gas tertentu di atmosfer menahan sebagian panas, persis seperti kaca yang menjaga rumah kaca tetap hangat. Tanpa ini, Bumi terlalu dingin untuk kehidupan.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa penjaganya? →</button>}
        </div>
      </div>
    </>
  )
}
