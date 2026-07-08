import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [frekuensi, setFrekuensi] = useState(50)
  const [amplitudo, setAmplitudo] = useState(50)
  const [unlocked, setUnlocked] = useState(false)

  const handle = (f: number, a: number) => {
    setFrekuensi(f); setAmplitudo(a)
    if (!unlocked) { setUnlocked(true); onUnlock() }
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Atur frekuensi dan amplitudo — amati perbedaan nada (tinggi-rendah) dan kuat bunyi (keras-lembut).</p>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Frekuensi</span>
          <input type="range" min={0} max={100} value={frekuensi} onChange={e => handle(+e.target.value, amplitudo)} className={styles.slider} />
          <span className={styles.sliderVal}>{frekuensi < 33 ? 'Nada rendah' : frekuensi < 67 ? 'Nada sedang' : 'Nada tinggi'}</span>
        </div>
        <div className={styles.sliderWrap}>
          <span className={styles.sliderLabel}>Amplitudo</span>
          <input type="range" min={0} max={100} value={amplitudo} onChange={e => handle(frekuensi, +e.target.value)} className={styles.slider} />
          <span className={styles.sliderVal}>{amplitudo < 33 ? 'Bunyi lembut' : amplitudo < 67 ? 'Bunyi sedang' : 'Bunyi keras'}</span>
        </div>
        <div className={local.noteBox}>Frekuensi menentukan NADA (tinggi/rendah). Amplitudo menentukan KUAT BUNYI (keras/lembut). Keduanya independen.</div>
      </div>
      <div className={local.vizCenter}>
        <svg viewBox="0 0 200 100" className={local.waveSvg}>
          <line x1="0" y1="50" x2="200" y2="50" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,2" />
          <polyline points={Array.from({length:100},(_,i)=>{
            const x=i*2
            const freq=1+(frekuensi/100)*4
            const amp=(amplitudo/100)*40
            const y=50+amp*Math.sin((i/100)*Math.PI*2*freq*2)
            return `${x},${y}`
          }).join(' ')} fill="none" stroke="var(--discovery-primary)" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  )
}
