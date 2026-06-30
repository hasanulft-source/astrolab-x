import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './discovery.module.css'

const MATERIALS = [
  { id:'air',   name:'Air',   emoji:'💧', c:4200 },
  { id:'pasir', name:'Pasir', emoji:'🏖', c:840 },
  { id:'besi',  name:'Besi',  emoji:'⚙', c:450 },
  { id:'kayu',  name:'Kayu',  emoji:'🪵', c:1700 },
]
const MAX_ENERGY = 42000

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [energy, setEnergy]   = useState(0)
  const [unlocked, setUnlocked] = useState(false)

  const handleSlide = (v: number) => {
    setEnergy(v)
    if (v > 10000 && !unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>
          Berikan energi panas yang <strong>sama</strong> ke setiap material.<br />
          Geser slider dan amati apa yang terjadi.
        </p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Energi panas</span>
          <input
            type="range" min={0} max={MAX_ENERGY} step={500} value={energy}
            onChange={e => handleSlide(+e.target.value)}
            className={styles.slider}
          />
          <span className={styles.sliderVal}>{(energy / 1000).toFixed(1)} kJ</span>
        </div>
        <div className={styles.sliderHint}>
          {energy === 0 ? 'Geser ke kanan →' : energy < 10000 ? 'Terus geser...' : 'Amati perbedaannya ↓'}
        </div>
      </div>

      <div className={styles.thermGrid}>
        {MATERIALS.map(m => {
          const dT = energy / m.c
          const pct = Math.min(dT / 100, 1)
          const r = Math.round(pct * 220)
          const g = Math.round((1 - pct) * 140 + 60)
          const fillColor = `rgb(${r},${g},80)`
          return (
            <div key={m.id} className={styles.thermCard}>
              <div className={styles.thermEmoji}>{m.emoji}</div>
              <div className={styles.thermBar}>
                <div className={styles.thermFill} style={{ height: `${Math.min(pct * 100, 98)}%`, background: fillColor }} />
              </div>
              <div className={styles.thermTemp} style={{ color: pct > 0.5 ? '#f87171' : '#5eead4' }}>
                {(28 + dT).toFixed(1)}°C
              </div>
              <div className={styles.thermName}>{m.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
