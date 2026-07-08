import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [kedalaman, setKedalaman] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const rho = 1000
  const g = 10
  const tekanan = rho * g * kedalaman

  const handle = (v: number) => {
    setKedalaman(v)
    if (v > 0 && !unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser kedalaman — amati tekanan hidrostatis bertambah secara konsisten.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Kedalaman (h)</span>
          <input type="range" min={0} max={10} step={0.5} value={kedalaman} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{kedalaman} m</span>
        </div>
        <div className={local.formulaBox}>
          <span className={local.formulaText}>P = ρ × g × h</span>
          <span className={local.formulaCalc}>{rho} × {g} × {kedalaman} = <strong>{tekanan.toLocaleString()} Pa</strong></span>
        </div>
        <div className={styles.sliderHint}>ρ (massa jenis air) dan g (gravitasi) tetap — hanya kedalaman yang berubah</div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.waterColumn}>
          <div className={local.waterLevel} style={{ height: `${kedalaman * 10}%` }} />
          <div className={local.depthMarker} style={{ top: `${100 - kedalaman * 10}%` }}>🤿</div>
        </div>
      </div>
    </div>
  )
}
