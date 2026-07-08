import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene3pH({ onUnlock }: DiscoverySceneProps) {
  const [ph, setPh] = useState(7)
  const [unlocked, setUnlocked] = useState(false)
  const kategori = ph < 6 ? 'Asam' : ph > 8 ? 'Basa' : 'Netral'
  const cocokTanaman = ph >= 6 && ph <= 7.5

  const handle = (v: number) => {
    setPh(v)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Geser nilai pH tanah — amati bagaimana ini memengaruhi kecocokan untuk tanaman.</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>pH tanah</span>
          <input type="range" min={3} max={11} step={0.5} value={ph} onChange={e => handle(+e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{ph}</span>
        </div>
        <div className={local.phBox} style={{ background: cocokTanaman ? '#dcfce7' : '#fee2e2', borderColor: cocokTanaman ? '#16a34a' : '#dc2626' }}>
          <span>Kategori: <strong>{kategori}</strong></span>
          <span>{cocokTanaman ? 'Umumnya cocok untuk sebagian besar tanaman' : 'Sebagian besar tanaman kesulitan menyerap nutrisi pada pH ini'}</span>
        </div>
        <div className={local.noteText}>pH tanah memengaruhi ketersediaan nutrisi bagi tanaman — meski tiap jenis tanaman punya rentang toleransi berbeda.</div>
      </div>
      <div className={local.vizCenter}>
        <div className={local.phScale}>
          <div className={local.phBar}>
            <div className={local.phIndicator} style={{ left: `${((ph - 3) / 8) * 100}%` }} />
          </div>
          <div className={local.phLabels}><span>3 asam</span><span>7 netral</span><span>11 basa</span></div>
        </div>
      </div>
    </div>
  )
}
