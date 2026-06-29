import { useState } from 'react'
import styles from './Scene5Newton.module.css'
function r2(n: number){return Math.round(n*100)/100}
export function Scene5Newton(){
  const [F,setF]=useState(30)
  const [m,setM]=useState(6)
  const [friction,setFriction]=useState(false)
  const [mu,setMu]=useState(0.2)
  const [g]=useState(10)
  const [step,setStep]=useState(0)
  const f=friction?r2(mu*m*g):0
  const Fnet=r2(F-f)
  const a=r2(Fnet/m)
  return (
    <>
      <p className={styles.prompt}>Kalkulator <em>F = ma</em> — ubah gaya dan massa, lihat percepatan.</p>
      <div className={styles.main}>
        <div className={styles.panel}>
          {[["Gaya F (N)",F,1,200,setF],["Massa m (kg)",m,1,50,setM]].map(([lbl,val,mn,mx,set]: any[],i)=>(
            <div key={i} className={styles.ctrl}>
              <div className={styles.ctrlLabel}>{lbl}: <span className={styles.ctrlVal}>{val}</span></div>
              <input type="range" min={mn} max={mx} value={val} onChange={e=>{set(+e.target.value);setStep(0)}} className={styles.slider}/>
            </div>
          ))}
          <div className={styles.ctrl}>
            <label className={styles.toggle}>
              <input type="checkbox" checked={friction} onChange={e=>{setFriction(e.target.checked);setStep(0)}}/>
              <span>Ada gaya gesek (μ = {mu})</span>
            </label>
            {friction&&<input type="range" min={0.1} max={0.8} step={0.1} value={mu}
              onChange={e=>{setMu(+e.target.value);setStep(0)}} className={styles.slider}/>}
          </div>
          <button className={styles.nextBtn} onClick={()=>setStep(s=>Math.min(s+1,3))}>
            {step===0?"Hitung F_net":step===1?"Hitung a = F/m":step===2?"Interpretasi":"✓ Selesai"}
          </button>
        </div>
        <div className={styles.solution}>
          <div className={styles.sTitle}>Penyelesaian — Newton II</div>
          <div className={styles.sStep}><b>Diketahui:</b> F = {F} N · m = {m} kg{friction?` · μ = ${mu} · f = μmg = ${f} N`:""}</div>
          {step>=1&&<>
            <div className={styles.sStep}><b>ΣF = F {friction?`− f = ${F} − ${f}`:""}= {Fnet} N</b></div>
          </>}
          {step>=2&&<>
            <div className={styles.sStep}><b>a = ΣF/m = {Fnet}/{m}</b></div>
            <div className={styles.ans}><span className={styles.av}>{a}</span><span className={styles.au}>m/s²</span></div>
          </>}
          {step>=3&&<div className={styles.summary}>
            {Fnet===0?
              <div className={styles.verdictZero}>ΣF = 0 → a = 0 → benda diam atau GLB (Newton I)</div>:
              <div className={styles.verdictNon}>ΣF = {Fnet} N → a = {a} m/s² → benda dipercepat</div>
            }
            <div className={styles.note}>Semakin besar massa dengan gaya yang sama → percepatan semakin kecil.</div>
          </div>}
        </div>
      </div>
    </>
  )
}
