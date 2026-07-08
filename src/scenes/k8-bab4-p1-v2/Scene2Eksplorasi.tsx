import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [gaya, setGaya] = useState(50)
  const [luas, setLuas] = useState(10)
  const [unlocked, setUnlocked] = useState(false)
  const tekanan = gaya / luas

  const handle = (g: number, l: number) => {
    setGaya(g); setLuas(l)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur gaya dan luas permukaan — amati bagaimana tekanan berubah.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Gaya (F)</span>
          <input type="range" min={10} max={100} value={gaya} onChange={e => handle(+e.target.value, luas)} className={styles.slider} />
          <span className={styles.sliderVal}>{gaya} N</span>
        </div>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Luas (A)</span>
          <input type="range" min={1} max={50} value={luas} onChange={e => handle(gaya, +e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{luas} cm²</span>
        </div>
        <div className={local.formulaBox}>
          <span className={local.formulaText}>P = F ÷ A = {gaya} ÷ {luas} = <strong>{tekanan.toFixed(1)} N/cm²</strong></span>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.pressureBox} style={{ width: `${20 + luas * 3}px`, height: `${20 + luas * 3}px` }}>
          <span className={local.pressureIcon}>⬇️</span>
        </div>
        <div className={local.pressureNote}>{luas < 10 ? 'Luas kecil → tekanan besar' : luas > 30 ? 'Luas besar → tekanan kecil' : 'Luas sedang'}</div>
      </div>
    </div>
  )
}
