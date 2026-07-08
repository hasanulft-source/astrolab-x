import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [posisi, setPosisi] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const ep = 100 - posisi
  const ek = posisi

  const handle = (v: number) => {
    setPosisi(v)
    if (v > 0 && !unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser posisi bola dari puncak (0%) ke dasar (100%) — amati Ep dan Ek berubah, totalnya tetap.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Posisi bukit</span>
          <input type="range" min={0} max={100} value={posisi} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{posisi}%</span>
        </div>
        <div className={local.barRow}>
          <span className={local.barLabel}>Ep (potensial)</span>
          <div className={local.barTrack}><div className={local.barFillEp} style={{ width: `${ep}%` }} /></div>
          <span className={local.barVal}>{ep}</span>
        </div>
        <div className={local.barRow}>
          <span className={local.barLabel}>Ek (kinetik)</span>
          <div className={local.barTrack}><div className={local.barFillEk} style={{ width: `${ek}%` }} /></div>
          <span className={local.barVal}>{ek}</span>
        </div>
        <div className={local.totalBox}>Total energi mekanik: <strong>{ep + ek}</strong> (selalu tetap)</div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.hillTrack}>
          <div className={local.hillLine} />
          <div className={local.ballOnHill} style={{ left: `${posisi}%`, top: `${posisi * 0.6}%` }}>⚫</div>
        </div>
      </div>
    </div>
  )
}
