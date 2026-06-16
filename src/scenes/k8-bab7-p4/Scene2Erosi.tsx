import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Erosi() {
  const [veg, setVeg] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Bandingkan lereng <em>dengan</em> dan <em>tanpa</em> vegetasi saat hujan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 170 140" className={styles.erosiSvg}>
            <path d="M10 30 L130 105 L10 105 Z" fill={veg ? '#8a6234' : '#9c7b52'} />
            {[20, 45, 70, 95].map(x => <line key={x} x1={x} y1="8" x2={x - 6} y2="28" stroke="#9cc8e0" strokeWidth="1.5" />)}
            {veg
              ? [[28, 78], [50, 64], [72, 50], [94, 37]].map((t, i) => <g key={i}><rect x={t[0] - 1} y={t[1]} width="2.5" height="9" fill="#6b4f30" /><circle cx={t[0]} cy={t[1] - 2} r="6" fill="#3a8a4a" /></g>)
              : [[40, 70], [60, 80], [80, 88], [50, 90], [70, 95]].map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#7a5a32" opacity="0.8" />)}
            <rect x="10" y="105" width="150" height="14" fill={veg ? '#bcd9e8' : '#9c7b52'} opacity="0.75" />
            <text x="135" y="100" fontSize="9" fontWeight="700" fill={veg ? '#2a7d52' : '#c0492f'}>{veg ? 'jernih' : 'lumpur'}</text>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.toggle}>
            <button className={`${styles.tBtn} ${!veg ? styles.tOn : ''}`} onClick={() => setVeg(false)}>Gundul</button>
            <button className={`${styles.tBtn} ${veg ? styles.tOn : ''}`} onClick={() => setVeg(true)}>Bervegetasi</button>
          </div>
          <div className={styles.detail}>{veg
            ? 'Akar tumbuhan mengikat tanah dan memperlambat aliran air. Tanah tertahan, air yang mengalir tetap jernih.'
            : 'Tanpa akar penahan, butiran tanah terbawa air hujan menuruni lereng. Tanah subur hilang dan air menjadi keruh berlumpur.'}</div>
        </div>
      </div>
    </>
  )
}
