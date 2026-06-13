import { useState } from 'react'
import { MAT } from './data'
import styles from './ui.module.css'

export function Scene3Rumus() {
  const [m, setM] = useState(2)
  const [matId, setMat] = useState('air')
  const [dt, setDt] = useState(30)
  const c = MAT.find(x => x.id === matId)!.c
  const Q = m * c * dt
  return (
    <>
      <p className={styles.prompt}>Kalor yang dibutuhkan dihitung dengan <em>Q = m · c · ΔT</em>. Atur nilainya:</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.formula}>Q = <b>m</b> · <b>c</b> · <b>ΔT</b></div>
          <div className={styles.ctrl}><span className={styles.cLabel}>massa</span><input className={styles.range} type="range" min={0.1} max={5} step={0.1} value={m} onChange={e => setM(+e.target.value)} /><span className={styles.cv}>{m.toFixed(1)} kg</span></div>
          <div className={styles.chips}>{MAT.map(x => <div key={x.id} role="button" className={matId === x.id ? styles.chipActive : styles.chip} onClick={() => setMat(x.id)}>{x.name}</div>)}</div>
          <div className={styles.ctrl}><span className={styles.cLabel}>ΔT</span><input className={styles.range} type="range" min={1} max={100} value={dt} onChange={e => setDt(+e.target.value)} /><span className={styles.cv}>{dt}°C</span></div>
        </div>
        <div className={styles.side}>
          <div className={styles.result}><div className={styles.qVal}>Q = {Q.toLocaleString('id-ID')} J</div></div>
          <div className={styles.note}>= {m.toFixed(1)} kg × {c} J/kg°C × {dt}°C. Makin besar massa, kalor jenis, atau kenaikan suhu — makin <b>banyak energi</b> yang dibutuhkan.</div>
        </div>
      </div>
    </>
  )
}
