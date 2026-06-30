import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [pressure, setPressure] = useState(0)
  const [medium, setMedium]     = useState<'gas'|'cair'|'padat'>('gas')
  const [unlocked, setU]        = useState(false)

  const compress = medium === 'gas' ? pressure * 0.7 : medium === 'cair' ? pressure * 0.02 : pressure * 0.001
  const particleGap = medium === 'gas' ? 60 - pressure * 0.3 : medium === 'cair' ? 20 - pressure * 0.05 : 8

  const handlePressure = (v: number) => {
    setPressure(v)
    if (v > 30 && !unlocked) { setU(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Pilih medium, lalu tekan dengan tekanan tertentu. Amati seberapa besar ia termampatkan.</p>
        <div className={local.mediumTabs}>
          {(['gas','cair','padat'] as const).map(m => (
            <button key={m} className={`${local.mediumTab} ${medium === m ? local.mediumTabOn : ''}`} onClick={() => setMedium(m)}>{m}</button>
          ))}
        </div>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Tekanan</span>
          <input type="range" min={0} max={100} value={pressure} onChange={e => handlePressure(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{pressure}%</span>
        </div>
        <div className={local.compressResult}>
          <span>Termampatkan:</span>
          <strong style={{ color: compress > 5 ? '#0d6b7a' : '#dc2626' }}>{compress.toFixed(2)}%</strong>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.compressBox}>
          {Array.from({ length: medium === 'gas' ? 10 : medium === 'cair' ? 14 : 16 }, (_, i) => (
            <div key={i} className={local.cParticle} style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${10 + Math.floor(i / 4) * (particleGap > 30 ? 25 : particleGap)}%`,
            }} />
          ))}
        </div>
        <div className={local.gapLabel}>Jarak antar-partikel: {medium === 'gas' ? 'besar' : medium === 'cair' ? 'sedang' : 'sangat rapat'}</div>
      </div>
    </div>
  )
}
