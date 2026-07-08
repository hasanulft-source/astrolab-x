import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [waktu, setWaktu] = useState(0)
  const [unlocked, setUnlocked] = useState(false)

  const handle = (v: number) => {
    setWaktu(v)
    if (v > 0 && !unlocked) { setUnlocked(true); onUnlock() }
  }

  const pigmen = [
    { warna: '#dc2626', kecepatan: 0.4 },
    { warna: '#f59e0b', kecepatan: 0.7 },
    { warna: '#3b82f6', kecepatan: 1.0 },
  ]

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser waktu perambatan — amati tiap pigmen warna bergerak dengan kecepatan berbeda.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Waktu rambat</span>
          <input type="range" min={0} max={100} value={waktu} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{waktu}%</span>
        </div>
        <div className={local.legendBox}>
          <div className={local.legendItem}><span style={{background:'#3b82f6'}}/>Pigmen paling cepat merambat</div>
          <div className={local.legendItem}><span style={{background:'#f59e0b'}}/>Pigmen sedang</div>
          <div className={local.legendItem}><span style={{background:'#dc2626'}}/>Pigmen paling lambat</div>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.paperStrip}>
          {pigmen.map((p, i) => (
            <div key={i} className={local.pigmentDot} style={{ background: p.warna, bottom: `${5 + waktu * p.kecepatan * 0.8}%` }} />
          ))}
          <div className={local.startLine}>titik awal</div>
        </div>
      </div>
    </div>
  )
}
