import { useState } from 'react'
import { MotionGraph } from '../../components/MotionGraph'
import styles from './ui.module.css'
import { Frac } from '../../components/Frac'

export function Scene2Percepatan() {
  const [a, setA] = useState(4)
  return (
    <>
      <p className={styles.prompt}>Pada GLBB, grafik v-t berupa garis miring. <em>Kemiringannya = percepatan</em>. Geser nilai a:</p>
      <div className={styles.main}>
        <div className={styles.graphBox}><MotionGraph series={[{ points: [[0, 0], [8, a * 8]] }]} xMax={8} yMax={80} xLabel="waktu (s) →" yLabel="kecepatan v (m/s)" /></div>
        <div className={styles.side}>
          <div className={styles.ctrl}><span className={styles.cLabel}>a</span><input className={styles.range} type="range" min={1} max={10} value={a} onChange={e => setA(+e.target.value)} /><span className={styles.cv}>{a} m/s²</span></div>
          <div className={styles.readout}><div className={styles.rVal}>a = {a} m/s²</div><div className={styles.rSub}><Frac top="Δv" bottom="Δt" /> = <Frac top={`${a * 8} m/s`} bottom="8 s" /></div></div>
          <div className={styles.note}>Makin curam garis v-t, makin besar <b>percepatannya</b>. Garis datar = kecepatan tetap (GLB, a=0).</div>
        </div>
      </div>
    </>
  )
}
