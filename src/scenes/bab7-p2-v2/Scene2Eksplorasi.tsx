import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [posisi, setPosisi] = useState(0)
  const [unlocked, setU] = useState(false)
  const musim = posisi < 25 ? 'Musim Semi (Utara) / Gugur (Selatan)' :
                posisi < 50 ? 'Musim Panas (Utara) / Dingin (Selatan)' :
                posisi < 75 ? 'Musim Gugur (Utara) / Semi (Selatan)' :
                'Musim Dingin (Utara) / Panas (Selatan)'

  const handle = (v: number) => {
    setPosisi(v)
    if (!unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser posisi bumi mengelilingi matahari — amati kemiringan sumbu yang tetap menyebabkan musim berganti.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Posisi orbit</span>
          <input type="range" min={0} max={100} value={posisi} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{posisi}%</span>
        </div>
        <div className={local.musimBox}>{musim}</div>
      </div>
      <div className={local.orbitViz}>
        <div className={local.sunCenter}>☀️</div>
        <div className={local.earthOrbit} style={{ transform: `rotate(${posisi * 3.6}deg)` }}>
          <div className={local.earthTilted}>🌍</div>
        </div>
        <div className={local.tiltNote}>Sumbu bumi miring 23,5° — kemiringan ini TETAP sepanjang orbit</div>
      </div>
    </div>
  )
}
