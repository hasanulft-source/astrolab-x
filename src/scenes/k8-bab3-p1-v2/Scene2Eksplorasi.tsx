import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [gaya, setGaya] = useState(50)
  const [jarak, setJarak] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const usaha = gaya * jarak

  const handle = (g: number, j: number) => {
    setGaya(g); setJarak(j)
    if (j > 0 && !unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur gaya dan jarak perpindahan — amati bagaimana usaha (W) berubah.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Gaya (F)</span>
          <input type="range" min={0} max={200} value={gaya} onChange={e => handle(+e.target.value, jarak)} className={styles.slider} />
          <span className={styles.sliderVal}>{gaya} N</span>
        </div>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Jarak (s)</span>
          <input type="range" min={0} max={10} value={jarak} onChange={e => handle(gaya, +e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{jarak} m</span>
        </div>
        <div className={local.formulaBox}>
          <span className={local.formulaText}>W = F × s</span>
          <span className={local.formulaCalc}>{gaya} N × {jarak} m = <strong>{usaha} J</strong></span>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.pushViz}>
          <div className={local.pushPerson}>💪</div>
          <div className={local.pushTrack}>
            <div className={local.pushBox} style={{ left: `${jarak * 8}%` }}>📦</div>
          </div>
        </div>
        <div className={local.resultLabel}>{jarak === 0 ? 'Tidak berpindah = W = 0, berapa pun gayanya' : `Usaha dilakukan: ${usaha} Joule`}</div>
      </div>
    </div>
  )
}
