import { useState } from 'react'
import { ALPHA } from './data'
import styles from './ui.module.css'

export function Scene4Hitung() {
  const [L0, setL0] = useState(100)
  const [matId, setMat] = useState('besi')
  const [dt, setDt] = useState(20)
  const a = ALPHA.find(x => x.id === matId)!.a
  const dL = L0 * a * dt
  const suramadu = () => { setL0(5438); setMat('besi'); setDt(10) }
  return (
    <>
      <p className={styles.prompt}>Seberapa panjang pemuaiannya? Hitung dengan <em>ΔL = L₀ · α · ΔT</em>.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.formula}>ΔL = <b>L₀</b> · <b>α</b> · <b>ΔT</b></div>
          <div className={styles.ctrl}><span className={styles.cLabel}>L₀</span><input className={styles.range} type="range" min={1} max={6000} value={L0} onChange={e => setL0(+e.target.value)} /><span className={styles.cv}>{L0} m</span></div>
          <div className={styles.chips}>{ALPHA.map(x => <div key={x.id} role="button" className={matId === x.id ? styles.chipActive : styles.chip} onClick={() => setMat(x.id)}>{x.name}</div>)}</div>
          <div className={styles.ctrl}><span className={styles.cLabel}>ΔT</span><input className={styles.range} type="range" min={1} max={60} value={dt} onChange={e => setDt(+e.target.value)} /><span className={styles.cv}>{dt}°C</span></div>
          <button className={styles.preset} onClick={(e) => { suramadu(); (e.currentTarget as HTMLButtonElement).blur() }}>Pakai contoh Jembatan Suramadu</button>
        </div>
        <div className={styles.side}>
          <div className={styles.result}><div className={styles.dlVal}>ΔL = {(dL * 100).toFixed(2)} cm</div></div>
          <div className={styles.note}>= {L0} m × {a} /°C × {dt}°C = <b>{dL.toFixed(3)} m</b>. Koefisien α menentukan seberapa “muai” tiap logam — makin besar α, makin panjang pemuaiannya.</div>
        </div>
      </div>
    </>
  )
}
