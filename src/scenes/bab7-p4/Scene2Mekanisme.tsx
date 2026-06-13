import { useState } from 'react'
import { STEPS } from './data'
import styles from './ui.module.css'
export function Scene2Mekanisme() {
  const [s, setS] = useState(0)
  const op = (n: number) => (s === n ? 1 : 0.18)
  return (
    <>
      <p className={styles.prompt}>Bagaimana mekanismenya? Klik tiap <em>tahap.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 300 180" className={styles.ghSvg}>
            <defs>
              <marker id="dy" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#f4b73d" /></marker>
              <marker id="dr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#e07a52" /></marker>
              <marker id="do" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0l6 3-6 3z" fill="#d6603a" /></marker>
            </defs>
            <circle cx="40" cy="28" r="15" fill="#f4b73d" />
            <rect x="0" y="150" width="300" height="30" fill="#6b8f5a" />
            <g opacity={op(2)}><line x1="20" y1="78" x2="285" y2="78" stroke="#9aa0b0" strokeDasharray="5 4" strokeWidth="1.5" /><text x="150" y="70" textAnchor="middle" fontSize="10" fill="#c5c9da">gas rumah kaca: CO2 · CH4 · uap air</text></g>
            <g opacity={op(0)}><line x1="55" y1="40" x2="130" y2="148" stroke="#f4b73d" strokeWidth="2.4" markerEnd="url(#dy)" /><line x1="70" y1="40" x2="200" y2="148" stroke="#f4b73d" strokeWidth="2.4" markerEnd="url(#dy)" /></g>
            <g opacity={op(1)}><line x1="150" y1="148" x2="150" y2="84" stroke="#e07a52" strokeWidth="2.4" markerEnd="url(#dr)" /><line x1="215" y1="148" x2="215" y2="84" stroke="#e07a52" strokeWidth="2.4" markerEnd="url(#dr)" /></g>
            <g opacity={op(2)}><line x1="150" y1="76" x2="150" y2="146" stroke="#d6603a" strokeWidth="2.4" markerEnd="url(#do)" /><line x1="120" y1="76" x2="95" y2="146" stroke="#d6603a" strokeWidth="2.4" markerEnd="url(#do)" /></g>
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.stepTabs}>
            {STEPS.map((x, i) => <button key={i} className={`${styles.stepTab} ${s === i ? styles.on : ''}`} onClick={() => setS(i)}>{x.t}</button>)}
          </div>
          <div className={styles.detail}>{STEPS[s].d}</div>
        </div>
      </div>
    </>
  )
}
