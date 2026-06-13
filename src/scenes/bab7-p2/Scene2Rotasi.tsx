import { useState } from 'react'
import { ROTASI } from './data'
import styles from './ui.module.css'
export function Scene2Rotasi() {
  const [sel, setSel] = useState(0)
  return (
    <>
      <p className={styles.prompt}>Rotasi: Bumi berputar pada porosnya. Klik tiap <em>akibatnya.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 220 170" className={styles.earthSvg}>
            <g><line x1="6" y1="85" x2="58" y2="85" stroke="#f4b73d" strokeWidth="2" /><line x1="6" y1="60" x2="58" y2="60" stroke="#f4b73d" strokeWidth="2" /><line x1="6" y1="110" x2="58" y2="110" stroke="#f4b73d" strokeWidth="2" /></g>
            <defs><clipPath id="e"><circle cx="130" cy="85" r="52" /></clipPath></defs>
            <circle cx="130" cy="85" r="52" fill="#2b3149" />
            <rect x="78" y="33" width="52" height="104" fill="#3b82c4" clipPath="url(#e)" />
            <circle cx="130" cy="85" r="52" fill="none" stroke="#1f2638" strokeWidth="1.5" />
            <text x="104" y="150" textAnchor="middle" fontSize="11" fill="#3b82c4" fontWeight="600">siang</text>
            <text x="158" y="150" textAnchor="middle" fontSize="11" fill="#6b7280" fontWeight="600">malam</text>
            <path d="M130 22a63 63 0 0 1 30 12" fill="none" stroke="#7AB2B2" strokeWidth="2" markerEnd="url(#ar)" />
            <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#7AB2B2" /></marker></defs>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.tabs}>
            {ROTASI.map((a, i) => <button key={i} className={`${styles.tab} ${sel === i ? styles.on : ''}`} onClick={() => setSel(i)}>{a.t}</button>)}
          </div>
          <div className={styles.detail}>{ROTASI[sel].d}</div>
        </div>
      </div>
    </>
  )
}
