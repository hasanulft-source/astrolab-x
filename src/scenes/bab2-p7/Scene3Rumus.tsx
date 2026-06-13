import { useState } from 'react'
import styles from './ui.module.css'
import { Frac } from '../../components/Frac'

export function Scene3Rumus() {
  const [m, setM] = useState(50)
  const [v, setV] = useState(40)
  const rho = m / v
  const float = rho < 1
  return (
    <>
      <p className={styles.prompt}>Massa jenis dihitung dari <em>massa</em> dibagi <em>volume</em>. Ukur massa pakai neraca, volume pakai gelas ukur (perpindahan air).</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.formula}>ρ = <Frac top={<b>m</b>} bottom={<b>V</b>} /></div>
          <div className={styles.ctrl}><span className={styles.cLabel}>massa (m)</span><input className={styles.range} type="range" min={1} max={100} value={m} onChange={e => setM(+e.target.value)} /><span className={styles.cVal}>{m} g</span></div>
          <div className={styles.ctrl}><span className={styles.cLabel}>volume (V)</span><input className={styles.range} type="range" min={1} max={100} value={v} onChange={e => setV(+e.target.value)} /><span className={styles.cVal}>{v} cm³</span></div>
        </div>
        <div className={styles.side}>
          <div className={styles.result}>
            <span className={styles.rhoVal}>ρ = {rho.toFixed(2)} g/cm³</span>
            <span className={`${styles.verdict} ${float ? styles.vFloat : styles.vSink}`}>{float ? 'Lebih kecil dari air → Mengapung' : rho > 1 ? 'Lebih besar dari air → Tenggelam' : 'Sama dengan air → Melayang'}</span>
          </div>
          <div className={styles.rule}>Bandingkan dengan <b>air = 1,00 g/cm³</b>. Itulah garis batas mengapung vs tenggelam.</div>
        </div>
      </div>
    </>
  )
}
