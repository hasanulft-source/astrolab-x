import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [energi, setEnergi] = useState(10000)
  const [unlocked, setU] = useState(false)
  const lv = [
    { nama:'Padi (Produsen)', icon:'🌾', e: energi },
    { nama:'Tikus', icon:'🐭', e: energi * 0.1 },
    { nama:'Ular', icon:'🐍', e: energi * 0.01 },
    { nama:'Elang', icon:'🦅', e: energi * 0.001 },
  ]

  const handle = (v: number) => {
    setEnergi(v)
    if (!unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur energi total dari matahari yang ditangkap padi — amati hanya 10% yang lolos tiap tingkat.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Energi padi</span>
          <input type="range" min={1000} max={50000} step={1000} value={energi} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{energi.toLocaleString()} kkal</span>
        </div>
        <div className={local.flowList}>
          {lv.map((l, i) => (
            <div key={i} className={local.flowItem}>
              <span>{l.icon} {l.nama}</span>
              <strong>{l.e.toLocaleString(undefined, { maximumFractionDigits: 0 })} kkal</strong>
            </div>
          ))}
        </div>
      </div>
      <div className={local.pyramidViz}>
        {lv.slice().reverse().map((l, i) => (
          <div key={i} className={local.pyLevel} style={{ width: `${30 + (3-i) * 22}%`, opacity: 0.4 + i * 0.2 }}>
            {l.icon}
          </div>
        ))}
        <div className={local.lossNote}>Setiap tingkat: hanya ~10% energi yang diteruskan</div>
      </div>
    </div>
  )
}
