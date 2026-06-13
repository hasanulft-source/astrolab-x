import { useState } from 'react'
import { POS } from './data'
import styles from './ui.module.css'
const SPOT = [{ x: 268, y: 90 }, { x: 150, y: 158 }, { x: 32, y: 90 }, { x: 150, y: 22 }]
export function Scene3Revolusi() {
  const [sel, setSel] = useState('jun')
  const m = POS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Revolusi + sumbu miring <em>23,5°</em> = musim. Klik tiap posisi Bumi.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 300 180" className={styles.orbitSvg}>
            <ellipse cx="150" cy="90" rx="124" ry="74" fill="none" stroke="#d4d8ee" strokeWidth="1.2" />
            <circle cx="150" cy="90" r="15" fill="#f4b73d" />
            {POS.map(p => {
              const s = SPOT[p.ax], on = sel === p.id
              return (
                <g key={p.id} onClick={() => setSel(p.id)} style={{ cursor: 'pointer' }}>
                  <circle cx={s.x} cy={s.y} r={on ? 13 : 10} fill="#3b82c4" stroke={on ? '#0d6b7a' : '#fff'} strokeWidth="2" />
                  <line x1={s.x - 5} y1={s.y - 11} x2={s.x + 5} y2={s.y + 11} stroke="#1a1c1e" strokeWidth="1.6" />
                  <text x={s.x} y={s.y + (s.y > 90 ? 26 : -16)} textAnchor="middle" fontSize="11" fontWeight="700" fill={on ? '#0d6b7a' : '#3a3d42'}>{p.bulan}</text>
                </g>
              )
            })}
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.detail2}>
            <div className={styles.dHead}>{m.bulan}</div>
            <div className={styles.hemis}><span className={styles.hemi}>Belahan Utara<br /><b>{m.utara}</b></span><span className={styles.hemi}>Belahan Selatan<br /><b>{m.selatan}</b></span></div>
            <div className={styles.dKet}>{m.ket}</div>
          </div>
        </div>
      </div>
    </>
  )
}
