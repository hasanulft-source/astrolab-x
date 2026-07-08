import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [frekuensi, setFrekuensi] = useState(1)
  const [unlocked, setUnlocked] = useState(false)
  const periode = 1 / frekuensi

  const handle = (v: number) => {
    setFrekuensi(v)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  const points = Array.from({ length: 100 }, (_, i) => {
    const x = i * 2
    const y = 50 + 30 * Math.sin((i / 100) * Math.PI * 2 * frekuensi * 2)
    return `${x},${y}`
  }).join(' ')

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur frekuensi gelombang — amati bagaimana periode dan bentuk gelombang berubah.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Frekuensi (f)</span>
          <input type="range" min={0.5} max={5} step={0.5} value={frekuensi} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{frekuensi} Hz</span>
        </div>
        <div className={local.paramGrid}>
          <div className={local.paramCard}><span>Frekuensi (f)</span><strong>{frekuensi} Hz</strong></div>
          <div className={local.paramCard}><span>Periode (T)</span><strong>{periode.toFixed(2)} s</strong></div>
        </div>
        <div className={local.formulaNote}>T = 1/f — frekuensi dan periode berbanding terbalik</div>
      </div>
      <div className={local.vizCenter}>
        <svg viewBox="0 0 200 100" className={local.waveSvg}>
          <line x1="0" y1="50" x2="200" y2="50" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,2" />
          <polyline points={points} fill="none" stroke="var(--discovery-primary)" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  )
}
