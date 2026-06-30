import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [v0, setV0] = useState(20)
  const [t, setT]    = useState(2)
  const [unlocked, setU] = useState(false)
  const a = -v0 / t

  const handle = (val0: number, val1: number) => {
    setV0(val0); setT(val1)
    if (!unlocked) { setU(true); onUnlock() }
  }

  const points = Array.from({ length: 11 }, (_, i) => {
    const tt = (t / 10) * i
    const vv = Math.max(v0 + a * tt, 0)
    return { t: tt, v: vv }
  })

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur kecepatan awal dan waktu pengereman — amati bentuk grafik v-t-nya.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>v₀</span>
          <input type="range" min={5} max={30} value={v0} onChange={e => handle(+e.target.value, t)} className={styles.slider} />
          <span className={styles.sliderVal}>{v0} m/s</span>
        </div>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>waktu rem</span>
          <input type="range" min={1} max={5} step={0.5} value={t} onChange={e => handle(v0, +e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{t} s</span>
        </div>
        <div className={local.infoBox}>
          <div className={local.infoRow}><span>Percepatan (a)</span><strong>{a.toFixed(1)} m/s²</strong></div>
          <div className={local.infoRow}><span>Jarak (luas segitiga)</span><strong>{(0.5 * v0 * t).toFixed(1)} m</strong></div>
        </div>
      </div>
      <div className={local.chartCenter}>
        <svg viewBox="0 0 200 150" className={local.glbChart}>
          <line x1="20" y1="130" x2="190" y2="130" stroke="#9ca3af" strokeWidth="1" />
          <line x1="20" y1="10" x2="20" y2="130" stroke="#9ca3af" strokeWidth="1" />
          <text x="100" y="145" fontSize="9" fill="#6b7280" textAnchor="middle">waktu (s)</text>
          <polygon points={`20,130 ${points.map(p => `${20 + p.t*30},${130-p.v*4}`).join(' ')} ${20+t*30},130`} fill="#0d6b7a" opacity="0.15" />
          <polyline points={points.map(p => `${20 + p.t*30},${130-p.v*4}`).join(' ')} fill="none" stroke="#0d6b7a" strokeWidth="2.5" />
        </svg>
        <div className={local.slopeNote}>Luas segitiga (area gelap) = jarak tempuh</div>
      </div>
    </div>
  )
}
