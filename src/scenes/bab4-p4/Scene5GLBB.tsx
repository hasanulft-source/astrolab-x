import { useState } from 'react'
import styles from './Scene5GLBB.module.css'
function r2(n: number){return Math.round(n*100)/100}
export function Scene5GLBB(){
  const [v0,setV0]=useState(0)
  const [a,setA]=useState(3)
  const [t,setT]=useState(5)
  const [step,setStep]=useState(0)
  const v=r2(v0+a*t)
  const s=r2(v0*t+0.5*a*t*t)
  return (
    <>
      <p className={styles.prompt}>Kalkulator <em>v = v₀ + at</em> dan <em>s = v₀t + ½at²</em> — input variabel, lihat penyelesaian.</p>
      <div className={styles.main}>
        <div className={styles.panel}>
          {[["v₀ (m/s)",v0,-20,50,setV0],["a (m/s²)",a,-10,10,setA],["t (s)",t,1,20,setT]].map(([lbl,val,mn,mx,set]: any[],i)=>(
            <div key={i} className={styles.ctrl}>
              <div className={styles.ctrlLabel}>{lbl}: <span className={styles.ctrlVal}>{val}</span></div>
              <input type="range" min={mn} max={mx} value={val} onChange={e=>{set(+e.target.value);setStep(0)}} className={styles.slider}/>
            </div>
          ))}
          <button className={styles.nextBtn} onClick={()=>setStep(s=>Math.min(s+1,3))}>
            {step===0?"Hitung v":step===1?"Hitung s":step===2?"Lihat ringkasan":"✓ Selesai"}
          </button>
          {step>0&&<button className={styles.resetBtn} onClick={()=>setStep(0)}>Reset langkah</button>}
        </div>
        <div className={styles.solution}>
          <div className={styles.sTitle}>Penyelesaian Sistematis</div>
          <div className={styles.sStep}><b>Diketahui:</b> v₀={v0} m/s · a={a} m/s² · t={t} s</div>
          {step>=1&&<>
            <div className={styles.sStep}><b>Cari v:</b> v = v₀ + at = {v0} + {a}×{t}</div>
            <div className={styles.ans}><span className={styles.av}>{v}</span><span className={styles.au}>m/s</span></div>
          </>}
          {step>=2&&<>
            <div className={styles.sStep}><b>Cari s:</b> s = v₀t + ½at² = {v0}×{t} + ½×{a}×{t}²</div>
            <div className={styles.ans}><span className={styles.av}>{s}</span><span className={styles.au}>m</span></div>
          </>}
          {step>=3&&<div className={styles.summary}>
            <div className={styles.sRow}><span>Kecepatan akhir</span><span className={styles.sVal}>{v} m/s</span></div>
            <div className={styles.sRow}><span>Jarak tempuh</span><span className={styles.sVal}>{s} m</span></div>
            <div className={styles.sRow}><span>Percepatan</span><span className={styles.sVal}>{a} m/s²</span></div>
            {v===0&&<div className={styles.note}>v = 0 → benda berhenti tepat di t = {t} s</div>}
          </div>}
        </div>
      </div>
    </>
  )
}
