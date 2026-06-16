import { useState } from 'react'
import styles from './ui.module.css'
const topY = 28, groundY = 150
function pt(t: number) {
  const x = (1 - t) ** 2 * 24 + 2 * (1 - t) * t * 70 + t ** 2 * 216
  const y = (1 - t) ** 2 * topY + 2 * (1 - t) * t * 158 + t ** 2 * groundY
  return { x, y }
}
export function Scene2Konversi() {
  const [pos, setPos] = useState(0)
  const t = pos / 100
  const b = pt(t)
  const ep = Math.round(100 * (groundY - b.y) / (groundY - topY))
  const ek = 100 - ep
  return (
    <>
      <p className={styles.prompt}>Geser bola menuruni lintasan. Lihat <em>energi berpindah bentuk</em> - tapi totalnya tetap.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 240 170" className={styles.hillSvg}>
            <path d="M24 28Q70 158 216 150 L216 165 L24 165 Z" fill="#eef4ef" />
            <path d="M24 28Q70 158 216 150" fill="none" stroke="#9bb4a0" strokeWidth="2.5" />
            <circle cx={b.x} cy={b.y - 6} r="9" fill="#c47d1a" stroke="#fff" strokeWidth="2" />
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.bars}>
            <div className={styles.barCol}><div className={styles.barTrack}><div className={styles.barFillEp} style={{ height: `${ep}%` }} /></div><span className={styles.barLbl}>Ep</span><span className={styles.barVal}>{ep}</span></div>
            <div className={styles.barCol}><div className={styles.barTrack}><div className={styles.barFillEk} style={{ height: `${ek}%` }} /></div><span className={styles.barLbl}>Ek</span><span className={styles.barVal}>{ek}</span></div>
            <div className={styles.totalCol}><div className={styles.totalNum}>{ep + ek}</div><span className={styles.barLbl}>Total</span></div>
          </div>
          <input type="range" min={0} max={100} value={pos} onChange={e => setPos(+e.target.value)} className={styles.slider} />
          <div className={styles.note}>{pos < 15 ? 'Di puncak: Ep maksimum, bola hampir diam.' : pos > 85 ? 'Di dasar: Ek maksimum, bola tercepat.' : 'Ep berubah jadi Ek - total selalu sama.'}</div>
        </div>
      </div>
    </>
  )
}
