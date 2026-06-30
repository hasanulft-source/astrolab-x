import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const FASE = ['🌑 Baru', '🌒 Sabit Awal', '🌓 Kuartal Awal', '🌔 Cembung Awal', '🌕 Purnama', '🌖 Cembung Akhir', '🌗 Kuartal Akhir', '🌘 Sabit Akhir']

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [hari, setHari] = useState(0)
  const [unlocked, setU] = useState(false)
  const faseIdx = Math.floor((hari / 29.5) * 8) % 8

  const handle = (v: number) => {
    setHari(v)
    if (v > 14 && !unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser hari dalam siklus bulan — amati posisi bulan dan bagaimana fase terlihat dari bumi.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Hari ke-</span>
          <input type="range" min={0} max={29} value={hari} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{hari}</span>
        </div>
        <div className={local.faseDisplay}>
          <div className={local.faseBig}>{FASE[faseIdx]}</div>
        </div>
      </div>
      <div className={local.orbitViz2}>
        <div className={local.earthFixed}>🌍</div>
        <div className={local.moonOrbit} style={{ transform: `rotate(${(hari/29.5)*360}deg)` }}>
          <div className={local.moonDot}>🌙</div>
        </div>
        <div className={local.sunArrow2}>☀️ Cahaya matahari dari sini →</div>
      </div>
    </div>
  )
}
