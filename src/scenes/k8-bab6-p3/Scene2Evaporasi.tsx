import { useState } from 'react'
import styles from './ui.module.css'
const SALT = [[42, 0], [54, 1], [66, 0], [78, 1], [90, 0], [102, 1], [48, 1], [72, 0], [96, 1], [60, 1], [84, 0]]
export function Scene2Evaporasi() {
  const [t, setT] = useState(0)
  const waterH = (1 - t / 100) * 56
  const saltVisible = t > 55
  return (
    <>
      <p className={styles.prompt}>Geser waktu pemanasan - amati air <em>menguap</em> dan garam tertinggal.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 150 110" className={styles.evapSvg}>
            <path d="M20 30 H130 L122 92 H28 Z" fill="none" stroke="#8a99a6" strokeWidth="2" />
            <rect x="29" y={88 - waterH} width="92" height={waterH} fill="#cdeeff" opacity="0.8" />
            {saltVisible && SALT.map((s, i) => <rect key={i} x={s[0]} y={86 - s[1] * 3} width="5" height="5" rx="1" fill="#e8edf2" stroke="#b9c4cf" strokeWidth="0.5" opacity={(t - 55) / 45} />)}
            {Array.from({ length: 4 }).map((_, i) => t < 95 && <line key={i} x1={45 + i * 20} y1={88 - waterH - 4} x2={45 + i * 20} y2={88 - waterH - 14} stroke="#bcd" strokeWidth="1.5" opacity="0.5" />)}
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Waktu pemanasan</label><input type="range" min={0} max={100} value={t} onChange={e => setT(+e.target.value)} /><span className={styles.val}>{t}%</span></div>
          <div className={styles.note}>{t < 55 ? 'Air masih banyak - garam tetap terlarut, belum terlihat.' : t < 95 ? 'Air berkurang, larutan makin pekat - kristal garam mulai muncul.' : 'Air habis menguap - tersisa garam padat murni.'}</div>
        </div>
      </div>
    </>
  )
}
