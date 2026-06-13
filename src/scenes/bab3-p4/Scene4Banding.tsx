import { useState } from 'react'
import { Thermometer } from '../../components/Thermometer'
import styles from './ui.module.css'

export function Scene4Banding() {
  const [q, setQ] = useState(0)
  const dtAir = q / 4200, dtBesi = q / 450
  return (
    <>
      <p className={styles.prompt}>Beri <em>energi yang sama</em> ke 1 kg air dan 1 kg besi. Siapa lebih cepat panas? Geser kalornya.</p>
      <div className={styles.cmpMain}>
        <div className={styles.therms}>
          <div className={styles.tWrap}><span className={styles.tCap}>Air (c besar)</span><div className={styles.tViz}><Thermometer celsius={20 + dtAir} scale="C" name="Air" /></div></div>
          <div className={styles.tWrap}><span className={styles.tCap}>Besi (c kecil)</span><div className={styles.tViz}><Thermometer celsius={20 + dtBesi} scale="C" name="Besi" /></div></div>
        </div>
        <div className={styles.ctrl}>
          <span className={styles.cLabel}>Kalor</span>
          <input className={styles.range} type="range" min={0} max={42000} step={500} value={q} onChange={e => setQ(+e.target.value)} />
          <span className={styles.cv}>{(q / 1000).toFixed(1)} kJ</span>
        </div>
      </div>
    </>
  )
}
