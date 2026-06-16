import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Rumus() {
  const [h, setH] = useState(2)
  const P = 1000 * 10 * h
  const yPos = 30 + (h / 10) * 130
  const arrowLen = 6 + (h / 10) * 22
  return (
    <>
      <p className={styles.prompt}>Geser kedalaman penyelam. Lihat <em>tekanan</em> melonjak makin dalam.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 200 180" className={styles.tankSvg}>
            <rect x="20" y="28" width="160" height="146" rx="4" fill="#dcefff" stroke="#9cc8e0" strokeWidth="2" />
            <line x1="20" y1="28" x2="180" y2="28" stroke="#7fb0d6" strokeWidth="2" />
            <circle cx="100" cy={yPos} r="9" fill="#c0492f" />
            <line x1={100 - 14} y1={yPos} x2={100 - 14 - arrowLen} y2={yPos} stroke="#2b6f9e" strokeWidth="2.5" markerEnd="url(#hl)" />
            <line x1={100 + 14} y1={yPos} x2={100 + 14 + arrowLen} y2={yPos} stroke="#2b6f9e" strokeWidth="2.5" markerEnd="url(#hr)" />
            <defs>
              <marker id="hl" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M6 0L0 3l6 3z" fill="#2b6f9e" /></marker>
              <marker id="hr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#2b6f9e" /></marker>
            </defs>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.readout}><span>Tekanan hidrostatis</span><b>{P.toLocaleString('id-ID')} Pa</b></div>
          <div className={styles.sliderRow}><label>Kedalaman (h)</label><input type="range" min={0} max={10} value={h} onChange={e => setH(+e.target.value)} /><span className={styles.val}>{h} m</span></div>
          <div className={styles.note}>P = ρ × g × h = 1000 × 10 × {h} = {P.toLocaleString('id-ID')} Pa</div>
        </div>
      </div>
    </>
  )
}
