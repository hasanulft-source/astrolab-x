import { useState } from 'react'
import styles from './ui.module.css'
const COMP = [{ rf: 0.45, c: '#2a6fb0' }, { rf: 0.72, c: '#8a4bbf' }, { rf: 0.96, c: '#d9a13a' }]
const START = 158, RISE = 132
export function Scene2Kromato() {
  const [t, setT] = useState(0)
  const front = START - (t / 100) * RISE
  return (
    <>
      <p className={styles.prompt}>Geser waktu - amati pelarut naik dan tinta <em>terurai jadi warna-warna.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 130 190" className={styles.kromSvg}>
            <rect x="40" y="10" width="50" height="168" rx="3" fill="#fcfbf6" stroke="#d8d2c4" strokeWidth="1.5" />
            <line x1="40" y1={front} x2="90" y2={front} stroke="#bcd3e0" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="40" y1={START} x2="90" y2={START} stroke="#c9c2b2" strokeWidth="1" />
            {COMP.map((b, i) => {
              const y = START - (t / 100) * RISE * b.rf
              return <ellipse key={i} cx="65" cy={y} rx="13" ry="6" fill={t < 6 ? '#2a2a2a' : b.c} opacity={t < 6 ? 0.9 : 0.82} />
            })}
            <path d="M30 178 H100 V186 H30 Z" fill="#cdeeff" opacity="0.7" />
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Waktu</label><input type="range" min={0} max={100} value={t} onChange={e => setT(+e.target.value)} /><span className={styles.val}>{t}%</span></div>
          <div className={styles.note}>{t < 6 ? 'Awal: setetes tinta tampak hitam pekat di garis start.' : t < 70 ? 'Pelarut naik membawa warna - komponen mulai terpisah.' : 'Tiap warna berhenti di ketinggian berbeda sesuai kecepatannya.'}</div>
        </div>
      </div>
    </>
  )
}
