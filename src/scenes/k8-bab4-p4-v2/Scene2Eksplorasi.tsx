import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [rhoAir, setRhoAir] = useState(1.0)
  const rhoTelur = 1.03
  const [unlocked, setUnlocked] = useState(false)
  const terapung = rhoAir > rhoTelur

  const handle = (v: number) => {
    setRhoAir(v)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Tambahkan garam untuk menaikkan massa jenis air — amati kapan telur mulai mengapung.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Massa jenis air</span>
          <input type="range" min={1.0} max={1.15} step={0.01} value={rhoAir} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{rhoAir.toFixed(2)} g/mL</span>
        </div>
        <div className={local.compareBox} style={{ background: terapung ? '#dcfce7' : '#fee2e2', borderColor: terapung ? '#16a34a' : '#dc2626' }}>
          <span>Massa jenis telur: 1,03 g/mL (tetap)</span>
          <strong style={{ color: terapung ? '#14532d' : '#7f1d1d' }}>{terapung ? 'TELUR MENGAPUNG' : 'TELUR TENGGELAM'}</strong>
        </div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.jarViz}>
          <div className={local.jarWater} />
          <div className={local.eggInJar} style={{ bottom: terapung ? '80%' : '5%' }}>🥚</div>
        </div>
      </div>
    </div>
  )
}
