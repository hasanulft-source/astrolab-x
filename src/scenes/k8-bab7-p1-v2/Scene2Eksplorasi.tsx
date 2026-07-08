import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [dikocok, setDikocok] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const kocok = () => {
    setDikocok(true)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Uji kocok: tanah dimasukkan ke botol berisi air, dikocok kuat, lalu didiamkan. Amati hasilnya.</p>
        {!dikocok ? (
          <button className={styles.revealBtn} onClick={kocok}>Kocok dan diamkan →</button>
        ) : (
          <div className={local.hasilBox}>
            <div className={local.hasilTitle}>Setelah didiamkan, terbentuk lapisan-lapisan:</div>
            <div className={local.hasilRow}><span>Paling bawah</span>Pasir (partikel terbesar, mengendap dulu)</div>
            <div className={local.hasilRow}><span>Tengah</span>Debu (partikel sedang)</div>
            <div className={local.hasilRow}><span>Atas</span>Liat (partikel terkecil, mengendap paling lambat)</div>
            <div className={local.hasilRow}><span>Mengapung</span>Bahan organik (sisa tumbuhan, lebih ringan dari air)</div>
          </div>
        )}
      </div>
      <div className={local.vizCenter}>
        <div className={local.bottleViz}>
          {!dikocok ? (
            <div className={local.bottleShaking}>🧪</div>
          ) : (
            <div className={local.bottleLayers}>
              <div className={local.layerOrganik}>bahan organik</div>
              <div className={local.layerLiat}>liat</div>
              <div className={local.layerDebu}>debu</div>
              <div className={local.layerPasir}>pasir</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
