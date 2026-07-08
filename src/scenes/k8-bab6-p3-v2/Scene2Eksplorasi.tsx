import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [hari, setHari] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const sisaAir = Math.max(100 - hari * 20, 5)
  const kristalTerlihat = hari >= 4

  const handle = (v: number) => {
    setHari(v)
    if (v > 0 && !unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser hari penjemuran — amati air berkurang dan kristal garam mulai terlihat.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Hari ke-</span>
          <input type="range" min={0} max={5} value={hari} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{hari}</span>
        </div>
        <div className={local.statusBox}>
          <div>Sisa air: <strong>{sisaAir}%</strong></div>
          <div>Garam terlihat: <strong>{kristalTerlihat ? 'Ya' : 'Belum'}</strong></div>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.pondViz}>
          <div className={local.pondWater} style={{ height: `${sisaAir * 0.6}%` }} />
          {kristalTerlihat && <div className={local.saltCrystals}>🧂🧂🧂</div>}
        </div>
      </div>
    </div>
  )
}
