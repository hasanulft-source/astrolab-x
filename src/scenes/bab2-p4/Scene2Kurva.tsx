import { useState } from 'react'
import { HeatingCurve, tempAt, zoneAt } from '../../components/HeatingCurve'
import styles from './ui.module.css'

export function Scene2Kurva() {
  const [p, setP] = useState(0)
  return (
    <>
      <p className={styles.prompt}>Geser pemanasan dari awal sampai akhir. Perhatikan kapan <em>suhu berhenti naik</em> walau kalor terus masuk.</p>
      <div className={styles.stageCol}>
        <div className={styles.viz}><HeatingCurve progress={p} /></div>
        <div className={styles.controls}>
          <span className={styles.cLabel}>Kalor</span>
          <input className={styles.range} type="range" min={0} max={1} step={0.01} value={p} onChange={e => setP(+e.target.value)} />
          <div className={styles.readout}>
            <span className={styles.suhu}>{Math.round(tempAt(p))}°C</span>
            <span className={styles.zone}>{zoneAt(p)}</span>
          </div>
        </div>
      </div>
    </>
  )
}
