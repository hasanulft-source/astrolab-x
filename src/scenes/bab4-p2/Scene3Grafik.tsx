import { useState } from 'react'
import { MotionGraph } from '../../components/MotionGraph'
import styles from './ui.module.css'
import { Frac } from '../../components/Frac'

export function Scene3Grafik() {
  const [v, setV] = useState(5)
  return (
    <>
      <p className={styles.prompt}>Geser kecepatan — perhatikan garis makin <em>curam</em> saat makin cepat. Kemiringan = kecepatan.</p>
      <div className={styles.main}>
        <div className={styles.graphBox}><MotionGraph series={[{ points: [[0, 0], [10, v * 10]] }]} xMax={10} yMax={100} xLabel="waktu (s) →" yLabel="posisi s (m)" /></div>
        <div className={styles.side}>
          <div className={styles.ctrl}><span className={styles.cLabel}>kecepatan</span><input className={styles.range} type="range" min={1} max={10} value={v} onChange={e => setV(+e.target.value)} /><span className={styles.cv}>{v} m/s</span></div>
          <div className={styles.readout}><div className={styles.rVal}>v = {v} m/s</div><div className={styles.rSub}><Frac top="Δs" bottom="Δt" /> = <Frac top={`${v * 10} m`} bottom="10 s" /></div></div>
          <div className={styles.note}>Kemiringan garis = perubahan posisi ÷ perubahan waktu = <b>kecepatan</b>.</div>
        </div>
      </div>
    </>
  )
}
