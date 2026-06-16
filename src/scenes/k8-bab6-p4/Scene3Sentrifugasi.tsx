import { useState } from 'react'
import styles from './ui.module.css'
export function Scene3Sentrifugasi() {
  const [spun, setSpun] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sentrifugasi memutar campuran sangat cepat - yang <em>lebih berat terlempar ke dasar.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 100 160" className={styles.tubeSvg}>
            <path d="M35 12 H65 V130 a15 15 0 0 1 -30 0 Z" fill="none" stroke="#8a99a6" strokeWidth="2" />
            {!spun
              ? <path d="M37 40 H63 V130 a13 13 0 0 1 -26 0 Z" fill="#c98b6e" opacity="0.6" />
              : <>
                  <path d="M37 92 H63 V130 a13 13 0 0 1 -26 0 Z" fill="#b23a3a" opacity="0.8" />
                  <rect x="37" y="40" width="26" height="52" fill="#f0dca8" opacity="0.75" />
                  <line x1="37" y1="92" x2="63" y2="92" stroke="#8a99a6" strokeWidth="1" />
                </>}
          </svg>
        </div>
        <div className={styles.side}>
          {!spun
            ? <button className={styles.btn} onClick={(e) => { setSpun(true); (e.currentTarget as HTMLButtonElement).blur() }}>Putar tabung →</button>
            : <div className={styles.detail}>Komponen berat (sel darah merah) mengendap di <b>dasar</b>, komponen ringan (plasma) berada di <b>atas</b>. Pemisahan terjadi karena perbedaan <b>massa jenis</b>.</div>}
        </div>
      </div>
    </>
  )
}
