import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [celsius, setCelsius] = useState(25)
  const [unlocked, setU] = useState(false)

  const fahrenheit = celsius * 9/5 + 32
  const kelvin = celsius + 273.15
  const reamur = celsius * 4/5

  const handle = (v: number) => {
    setCelsius(v)
    if (!unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser suhu Celsius — amati bagaimana ketiga skala lain berubah serempak.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Celsius</span>
          <input type="range" min={-20} max={100} value={celsius} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{celsius}°C</span>
        </div>
        <div className={local.skalaGrid}>
          <div className={local.skalaCard}><span>Celsius</span><strong>{celsius}°C</strong></div>
          <div className={local.skalaCard}><span>Fahrenheit</span><strong>{fahrenheit.toFixed(1)}°F</strong></div>
          <div className={local.skalaCard}><span>Kelvin</span><strong>{kelvin.toFixed(1)} K</strong></div>
          <div className={local.skalaCard}><span>Reamur</span><strong>{reamur.toFixed(1)}°R</strong></div>
        </div>
      </div>
      <div className={local.thermoViz}>
        <div className={local.thermoTube}>
          <div className={local.thermoFill} style={{ height: `${Math.min(Math.max((celsius+20)/120*100,3),98)}%` }} />
        </div>
        <div className={local.thermoLabel}>{celsius}°C = {fahrenheit.toFixed(0)}°F</div>
      </div>
    </div>
  )
}
