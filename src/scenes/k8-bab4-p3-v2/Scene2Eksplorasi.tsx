import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [a2, setA2] = useState(5)
  const a1 = 1
  const f1 = 100
  const [unlocked, setUnlocked] = useState(false)
  const f2 = (f1 * a2) / a1

  const handle = (v: number) => {
    setA2(v)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur luas pengisap besar (A₂) — amati gaya yang dihasilkan berlipat ganda.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Luas pengisap besar (A₂)</span>
          <input type="range" min={1} max={20} value={a2} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{a2}× luas pengisap kecil</span>
        </div>
        <div className={local.formulaBox}>
          <span className={local.formulaText}>F₁/A₁ = F₂/A₂</span>
          <span className={local.formulaCalc}>{f1}N ÷ {a1} = F₂ ÷ {a2} → F₂ = <strong>{f2.toFixed(0)} N</strong></span>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.hydraulicViz}>
          <div className={local.pistonSmall}>👉 {f1}N</div>
          <div className={local.hydraulicTube} />
          <div className={local.pistonBig} style={{ width: `${20 + a2 * 4}px` }}>⬆️ {f2.toFixed(0)}N</div>
        </div>
      </div>
    </div>
  )
}
