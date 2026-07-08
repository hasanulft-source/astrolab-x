import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [vegetasi, setVegetasi] = useState(0)
  const [unlocked, setUnlocked] = useState(false)
  const erosiRate = 100 - vegetasi

  const handle = (v: number) => {
    setVegetasi(v)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur tutupan vegetasi lereng — amati bagaimana ini memengaruhi laju erosi saat hujan.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Tutupan vegetasi</span>
          <input type="range" min={0} max={100} value={vegetasi} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{vegetasi}%</span>
        </div>
        <div className={local.erosiBox} style={{ background: erosiRate > 60 ? '#fee2e2' : erosiRate > 30 ? '#fef3c7' : '#dcfce7' }}>
          <span>Tingkat risiko erosi:</span>
          <strong>{erosiRate > 60 ? 'Tinggi' : erosiRate > 30 ? 'Sedang' : 'Rendah'}</strong>
        </div>
        <div className={local.explainText}>Akar tanaman mengikat partikel tanah dan memperlambat aliran air permukaan — semakin banyak vegetasi, semakin kecil risiko erosi.</div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.hillViz}>
          <div className={local.hillShape}>⛰️</div>
          <div className={local.treeRow}>{Array.from({length: Math.round(vegetasi/20)}).map((_,i)=><span key={i}>🌳</span>)}</div>
        </div>
      </div>
    </div>
  )
}
