import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [massa, setMassa] = useState(50)
  const [volume, setVolume] = useState(50)
  const [unlocked, setU] = useState(false)
  const rho = massa / volume

  const handle = (m: number, v: number) => {
    setMassa(m); setVolume(v)
    if (!unlocked) { setU(true); onUnlock() }
  }

  const isFloat = rho < 1.0
  const boatHeight = isFloat ? 40 : 0

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Ubah massa dan volume objek — amati kapan ia mengapung atau tenggelam di air (ρ air = 1,0 g/mL).</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Massa</span>
          <input type="range" min={10} max={100} value={massa} onChange={e => handle(+e.target.value, volume)} className={styles.slider} />
          <span className={styles.sliderVal}>{massa} g</span>
        </div>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Volume</span>
          <input type="range" min={10} max={100} value={volume} onChange={e => handle(massa, +e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{volume} mL</span>
        </div>
        <div className={local.rhoBox} style={{ background: isFloat ? '#dcfce7' : '#fee2e2', borderColor: isFloat ? '#16a34a' : '#dc2626' }}>
          <span>ρ = m/V = {rho.toFixed(2)} g/mL</span>
          <strong style={{ color: isFloat ? '#14532d' : '#7f1d1d' }}>{isFloat ? 'MENGAPUNG' : 'TENGGELAM'}</strong>
        </div>
      </div>
      <div className={local.tankViz}>
        <div className={local.tank}>
          <div className={local.waterTank} />
          <div className={local.objBox} style={{ bottom: `${4 + boatHeight}%`, width: 30 + volume*0.3, height: 20 + volume*0.2 }}>
            {massa}g/{volume}mL
          </div>
        </div>
      </div>
    </div>
  )
}
