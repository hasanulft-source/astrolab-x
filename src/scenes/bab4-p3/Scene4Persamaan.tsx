import { useState } from 'react'
import styles from './ui.module.css'

export function Scene4Persamaan() {
  const [v0, setV0] = useState(5)
  const [a, setA] = useState(3)
  const [t, setT] = useState(4)
  const v = v0 + a * t
  const s = v0 * t + 0.5 * a * t * t
  return (
    <>
      <p className={styles.prompt}>Dua persamaan GLBB merangkum semuanya. Atur v₀, a, dan t — lihat hasilnya:</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.formula}>v = <b>v₀</b> + <b>a</b>·<b>t</b>     s = <b>v₀</b>·<b>t</b> + ½·<b>a</b>·<b>t</b>²</div>
          <div className={styles.ctrl}><span className={styles.cLabel}>v₀</span><input className={styles.range} type="range" min={0} max={20} value={v0} onChange={e => setV0(+e.target.value)} /><span className={styles.cv}>{v0} m/s</span></div>
          <div className={styles.ctrl}><span className={styles.cLabel}>a</span><input className={styles.range} type="range" min={0} max={10} value={a} onChange={e => setA(+e.target.value)} /><span className={styles.cv}>{a} m/s²</span></div>
          <div className={styles.ctrl}><span className={styles.cLabel}>t</span><input className={styles.range} type="range" min={0} max={10} value={t} onChange={e => setT(+e.target.value)} /><span className={styles.cv}>{t} s</span></div>
        </div>
        <div className={styles.side}>
          <div className={styles.results}>
            <div className={styles.res}><span className={styles.resK}>KECEPATAN AKHIR</span><span className={styles.resV}>v = {v} m/s</span></div>
            <div className={styles.res}><span className={styles.resK}>JARAK TEMPUH</span><span className={styles.resV}>s = {s} m</span></div>
          </div>
          <div className={styles.note}>v₀ = kecepatan awal, a = percepatan, t = waktu. Kalau benda mulai dari diam (v₀=0), rumus s menyusut jadi <b>½·a·t²</b>.</div>
        </div>
      </div>
    </>
  )
}
