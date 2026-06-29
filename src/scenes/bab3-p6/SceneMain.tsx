import { useState } from 'react'
import styles from './Scene.module.css'

const MATERIALS=[
  {name:'Baja/Besi',alpha:12e-6},{name:'Aluminium',alpha:24e-6},
  {name:'Tembaga',alpha:17e-6},{name:'Beton',alpha:12e-6},{name:'Kaca',alpha:9e-6},
]
const PRESETS=[
  {label:'Rel kereta 25m, ΔT=40°C',L0:25,dT:40,mat:0},
  {label:'Kabel tembaga 200m, ΔT=30°C',L0:200,dT:30,mat:2},
  {label:'Jembatan beton 500m, ΔT=30°C',L0:500,dT:30,mat:3},
  {label:'Kabel listrik Al 50m, ΔT=13°C',L0:50,dT:13,mat:1},
]
function r4(n: number){return Math.round(n*10000)/10000}

export default function Scene(){
  const [L0,setL0]=useState(25)
  const [dT,setDT]=useState(40)
  const [matIdx,setMatIdx]=useState(0)
  const [step,setStep]=useState(0)
  const mat=MATERIALS[matIdx]
  const dL=r4(L0*mat.alpha*dT)
  const dLcm=r4(dL*100)
  const dLmm=r4(dL*1000)
  const load=(p: typeof PRESETS[0])=>{setL0(p.L0);setDT(p.dT);setMatIdx(p.mat);setStep(0)}
  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>Kalkulator <em>ΔL = L₀ × α × ΔT</em> — langkah demi langkah.</p>
      <div className={styles.main}>
        <div className={styles.controls}>
          <div className={styles.ctrlLabel}>Preset:</div>
          {PRESETS.map((p,i)=><button key={i} className={styles.preset} onClick={()=>load(p)}>{p.label}</button>)}
          <div className={styles.ctrlLabel}>Material</div>
          <div className={styles.matGrid}>
            {MATERIALS.map((m,i)=>(
              <button key={i} className={i===matIdx?styles.matActive:styles.matBtn}
                onClick={()=>{setMatIdx(i);setStep(0)}}>
                {m.name}<br/><span className={styles.alpha}>α={m.alpha*1e6}×10⁻⁶</span>
              </button>
            ))}
          </div>
          <div className={styles.ctrlLabel}>L₀: {L0} m</div>
          <input type="range" min={1} max={1000} value={L0} onChange={e=>{setL0(+e.target.value);setStep(0)}} className={styles.slider}/>
          <div className={styles.ctrlLabel}>ΔT: {dT}°C</div>
          <input type="range" min={1} max={100} value={dT} onChange={e=>{setDT(+e.target.value);setStep(0)}} className={styles.slider}/>
        </div>
        <div className={styles.calcPanel}>
          <div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>1</span>Diketahui</div>
            <div className={styles.formula}>L₀={L0}m · α={mat.alpha*1e6}×10⁻⁶/°C · ΔT={dT}°C</div>
          </div>
          {step>=1&&<div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>2</span>Substitusi</div>
            <div className={styles.formula}>ΔL = {L0} × {mat.alpha*1e6}×10⁻⁶ × {dT}</div>
          </div>}
          {step>=2&&<div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>3</span>Hasil</div>
            <div className={styles.ans}><span className={styles.av}>{dL.toFixed(4)}</span><span className={styles.au}>m</span></div>
            <div className={styles.conv}>= {dLcm.toFixed(2)} cm = {dLmm.toFixed(1)} mm</div>
          </div>}
          {step>=3&&<div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>4</span>Interpretasi</div>
            <div className={styles.note}>{dLmm>50?`${dLmm.toFixed(1)} mm — celah ekspansi diperlukan!`:`${dLmm.toFixed(1)} mm — perlu dipertimbangkan dalam desain.`}</div>
          </div>}
          {step<3&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>
            {['Substitusi ke rumus','Hitung hasilnya','Interpretasi'][step]} →
          </button>}
        </div>
      </div>
    </div>
  )
}
