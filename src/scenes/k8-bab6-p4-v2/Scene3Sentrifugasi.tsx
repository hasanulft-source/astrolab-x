import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene3Sentrifugasi({ onUnlock }: DiscoverySceneProps) {
  const [berputar, setBerputar] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const putar = () => {
    setBerputar(true)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Sentrifugasi memisahkan berdasarkan kepadatan, dengan bantuan putaran cepat. Coba pada campuran pasir-air ini.</p>
        <div className={local.beforeBox}>
          <div className={local.mixLabel}>Sebelum diputar</div>
          <div className={local.mixVisual}>Pasir dan air tercampur merata, keruh</div>
        </div>
        {!berputar
          ? <button className={styles.revealBtn} onClick={putar}>Putar dengan sentrifugal →</button>
          : <div className={local.afterBox}>
              <div className={local.mixLabel}>Setelah diputar cepat</div>
              <div className={local.mixVisual}>Pasir (lebih padat) terlempar ke dasar, air (kurang padat) di atas — proses yang jauh lebih cepat dari sekadar didiamkan</div>
            </div>}
      </div>
      <div className={local.vizCenter}>
        <div className={`${local.tubeViz} ${berputar ? local.tubeSpin : ''}`}>
          {!berputar ? (
            <div className={local.mixedContent}>🏖️💧</div>
          ) : (
            <>
              <div className={local.waterLayer}>💧</div>
              <div className={local.sandLayer}>🏖️</div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
