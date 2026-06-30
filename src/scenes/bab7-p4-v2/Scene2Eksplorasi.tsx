import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [co2, setCo2] = useState(280)
  const [unlocked, setU] = useState(false)
  const suhu = 14 + (co2 - 280) * 0.012

  const handle = (v: number) => {
    setCo2(v)
    if (!unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Naikkan kadar CO₂ di atmosfer — amati bagaimana suhu rata-rata bumi ikut naik.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>CO₂ (ppm)</span>
          <input type="range" min={280} max={500} value={co2} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{co2} ppm</span>
        </div>
        <div className={local.suhuBox}>
          <span>Suhu rata-rata bumi:</span>
          <strong>{suhu.toFixed(1)}°C</strong>
        </div>
        <div className={local.refNote}>(280 ppm = era pra-industri, sebelum 1800-an)</div>
      </div>
      <div className={local.glassEarth}>
        <div className={local.atmoLayer} style={{ opacity: 0.2 + (co2-280)/220*0.6 }} />
        <div className={local.earthInside}>🌍</div>
        <div className={local.glassLabel}>Lapisan CO₂ menahan panas seperti kaca mobil</div>
      </div>
    </div>
  )
}
