import { useState } from 'react'
import styles from './Scene6Numerasi.module.css'

const C_VALUES: Record<string,number> = {Air:4200,Aluminium:900,Besi:460,Tembaga:385,Kayu:1700}

export function Scene6Numerasi() {
  const [m,setM]=useState(200)
  const [mat,setMat]=useState('Air')
  const [t1,setT1]=useState(25)
  const [t2,setT2]=useState(75)
  const [revealed,setRevealed]=useState(false)
  const c=C_VALUES[mat]
  const mKg=m/1000
  const dT=t2-t1
  const Q=Math.round(mKg*c*dT)
  return (
    <>
      <p className={styles.prompt}>Hitung <em>Q = mcΔT</em> — ubah variabel dan lihat penyelesaian sistematis.</p>
      <div className={styles.main}>
        <div className={styles.leftPanel}>
          <div className={styles.ctrlLabel}>Material</div>
          <select value={mat} onChange={e=>{setMat(e.target.value);setRevealed(false)}} className={styles.select}>
            {Object.keys(C_VALUES).map(k=><option key={k}>{k}</option>)}
          </select>
          <div className={styles.ctrlSub}>c = {c} J/kg°C</div>
          <div className={styles.ctrlLabel}>Massa: {m} g</div>
          <input type="range" min={100} max={2000} step={50} value={m}
            onChange={e=>{setM(+e.target.value);setRevealed(false)}} className={styles.slider}/>
          <div className={styles.ctrlLabel}>Suhu awal T₁: {t1}°C</div>
          <input type="range" min={0} max={80} value={t1}
            onChange={e=>{setT1(+e.target.value);setRevealed(false)}} className={styles.slider}/>
          <div className={styles.ctrlLabel}>Suhu akhir T₂: {t2}°C</div>
          <input type="range" min={t1+1} max={200} value={t2}
            onChange={e=>{setT2(+e.target.value);setRevealed(false)}} className={styles.slider}/>
          <button className={styles.revealBtn} onClick={()=>setRevealed(true)}>Hitung Q →</button>
        </div>
        <div className={styles.solution}>
          <div className={styles.solTitle}>Penyelesaian Sistematis</div>
          <div className={styles.solStep}><b>Diketahui:</b> m = {m}g = {mKg}kg · c = {c} J/kg°C · ΔT = {dT}°C</div>
          <div className={styles.solStep}><b>Ditanya:</b> Q = ?</div>
          <div className={styles.solStep}><b>Rumus:</b> Q = m × c × ΔT</div>
          <div className={styles.solStep}><b>Substitusi:</b> Q = {mKg} × {c} × {dT}</div>
          <div className={styles.answer} style={{opacity:revealed?1:0.1}}>
            <span className={styles.ansVal}>{Q.toLocaleString()}</span>
            <span className={styles.ansUnit}>J</span>
          </div>
        </div>
      </div>
    </>
  )
}
