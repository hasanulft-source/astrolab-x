import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [lk, setLk] = useState(2)
  const lb = 1
  const beban = 100
  const [unlocked, setUnlocked] = useState(false)
  const km = lk / lb
  const fKuasa = beban / km

  const handle = (v: number) => {
    setLk(v)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser panjang lengan kuasa (Lk) — amati gaya yang dibutuhkan untuk mengangkat beban 100 N berubah.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Lengan kuasa (Lk)</span>
          <input type="range" min={1} max={5} step={0.5} value={lk} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{lk} m</span>
        </div>
        <div className={local.formulaBox}>
          <span className={local.formulaText}>KM = Lk ÷ Lb = {lk} ÷ {lb} = <strong>{km.toFixed(1)}</strong></span>
        </div>
        <div className={local.resultBox}>
          <span>Gaya kuasa dibutuhkan:</span>
          <strong>{fKuasa.toFixed(1)} N</strong>
          <span className={local.resultNote}>(beban tetap {beban} N)</span>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.leverViz}>
          <div className={local.fulcrum} />
          <div className={local.beam} style={{ width: `${(lk + lb) * 40}px` }}>
            <div className={local.bebanEnd}>⚖️ {beban}N</div>
            <div className={local.kuasaEnd} style={{ right: `${-lk * 40 + 20}px` }}>👉 {fKuasa.toFixed(0)}N</div>
          </div>
        </div>
      </div>
    </div>
  )
}
