import { useState } from 'react'
import { MotionGraph } from '../../components/MotionGraph'
import styles from './ui.module.css'

export function Scene3Luas() {
  const [t, setT] = useState(6)
  const a = 4
  const v = a * t
  const s = 0.5 * a * t * t
  return (
    <>
      <p className={styles.prompt}>Trik penting v-t: <em>luas di bawah grafik = jarak tempuh</em>. Geser waktu, lihat luasnya tumbuh.</p>
      <div className={styles.main}>
        <div className={styles.graphBox}><MotionGraph series={[{ points: [[0, 0], [t, v]], area: true }]} xMax={8} yMax={36} xLabel="waktu (s) →" yLabel="kecepatan v (m/s)" /></div>
        <div className={styles.side}>
          <div className={styles.ctrl}><span className={styles.cLabel}>waktu</span><input className={styles.range} type="range" min={1} max={8} value={t} onChange={e => setT(+e.target.value)} /><span className={styles.cv}>{t} s</span></div>
          <div className={styles.readout}><div className={styles.rVal}>s = {s} m</div><div className={styles.rSub}>luas segitiga = ½ × alas × tinggi = ½ × {t} × {v}</div></div>
          <div className={styles.note}>Untuk GLBB dari diam, luasnya segitiga → <b>s = ½ · a · t²</b>. (a = {a} m/s²)</div>
        </div>
      </div>
    </>
  )
}
