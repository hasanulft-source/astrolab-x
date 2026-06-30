import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [suhu, setSuhu] = useState(25)
  const [unlocked, setU] = useState(false)
  const panjang = 100 + (suhu - 25) * 0.08

  const handle = (v: number) => {
    setSuhu(v)
    if (v > 50 && !unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Panaskan batang logam — amati panjangnya bertambah meski perubahannya kecil.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Suhu</span>
          <input type="range" min={0} max={150} value={suhu} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{suhu}°C</span>
        </div>
        <div className={local.panjangBox}>
          <span>Panjang batang:</span>
          <strong>{panjang.toFixed(3)} cm</strong>
        </div>
        <div className={styles.sliderHint}>{!unlocked ? 'Naikkan suhu hingga lewat 50°C' : 'Lihat — panjangnya memuai meski sedikit ✓'}</div>
      </div>
      <div className={local.barViz}>
        <div className={local.barTrack}>
          <div className={local.barFill} style={{ width: `${Math.min((panjang-99)/2*100+20,98)}%` }} />
        </div>
        <div className={local.barLabel}>Δ panjang: +{(panjang-100).toFixed(3)} cm</div>
      </div>
    </div>
  )
}
