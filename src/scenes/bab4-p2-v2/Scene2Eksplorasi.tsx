import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [v, setV] = useState(20)
  const [unlocked, setU] = useState(false)
  const points = Array.from({ length: 6 }, (_, t) => ({ t, s: v * t }))

  const handle = (val: number) => {
    setV(val)
    if (!unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur kecepatan mobil — amati bagaimana grafik s-t berubah kemiringannya.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Kecepatan</span>
          <input type="range" min={5} max={40} value={v} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{v} m/s</span>
        </div>
        <div className={local.tableBox}>
          {points.map(p => (
            <div key={p.t} className={local.tRow}><span>t={p.t}s</span><strong>{p.s}m</strong></div>
          ))}
        </div>
      </div>
      <div className={local.chartCenter}>
        <svg viewBox="0 0 200 150" className={local.glbChart}>
          <line x1="20" y1="130" x2="190" y2="130" stroke="#9ca3af" strokeWidth="1" />
          <line x1="20" y1="10" x2="20" y2="130" stroke="#9ca3af" strokeWidth="1" />
          <text x="100" y="145" fontSize="9" fill="#6b7280" textAnchor="middle">waktu (s)</text>
          <text x="10" y="70" fontSize="9" fill="#6b7280" textAnchor="middle" transform="rotate(-90,10,70)">jarak (m)</text>
          <polyline points={points.map(p => `${20 + p.t*28},${130 - p.s*0.6}`).join(' ')} fill="none" stroke="#0d6b7a" strokeWidth="2.5" />
        </svg>
        <div className={local.slopeNote}>Kemiringan grafik = kecepatan</div>
      </div>
    </div>
  )
}
