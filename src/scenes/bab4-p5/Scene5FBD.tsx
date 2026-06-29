import { useState } from 'react'
import styles from './Scene5FBD.module.css'
const SITUATIONS=[
  {label:"Buku di atas meja (diam)",forces:[{name:"Berat W",val:20,dir:"down"},{name:"Normal N",val:20,dir:"up"}]},
  {label:"Benda didorong ke kanan",forces:[{name:"Dorong F",val:40,dir:"right"},{name:"Gesek f",val:15,dir:"left"}]},
  {label:"Dua orang tarik tali berlawanan",forces:[{name:"Tarik A",val:80,dir:"left"},{name:"Tarik B",val:60,dir:"right"}]},
  {label:"Lift bergerak ke atas",forces:[{name:"Tegangan T",val:600,dir:"up"},{name:"Berat W",val:500,dir:"down"}]},
]
export function Scene5FBD(){
  const [idx,setIdx]=useState(0)
  const [revealed,setRevealed]=useState(false)
  const sit=SITUATIONS[idx]
  const vertical=sit.forces.every(f=>f.dir==="up"||f.dir==="down")
  const rightForces=sit.forces.filter(f=>f.dir==="right"||f.dir==="up").reduce((a,f)=>a+f.val,0)
  const leftForces=sit.forces.filter(f=>f.dir==="left"||f.dir==="down").reduce((a,f)=>a+f.val,0)
  const FR=rightForces-leftForces
  const dirLabel=vertical?(FR>0?"ke atas":FR<0?"ke bawah":"seimbang"):(FR>0?"ke kanan":FR<0?"ke kiri":"seimbang")
  return (
    <>
      <p className={styles.prompt}>Free Body Diagram — lihat semua gaya yang bekerja dan hitung resultannya.</p>
      <div className={styles.main}>
        <div className={styles.picker}>
          {SITUATIONS.map((s,i)=>(
            <button key={i} className={i===idx?styles.pickActive:styles.pick}
              onClick={()=>{setIdx(i);setRevealed(false)}}>{s.label}</button>
          ))}
        </div>
        <div className={styles.fbd}>
          <div className={styles.fbdBox}>
            <div className={styles.obj}>Benda</div>
            {sit.forces.map((f,i)=>(
              <div key={i} className={`${styles.arrow} ${styles[f.dir]}`}
                style={{"--len":Math.min(f.val/10,8)+"0px"} as React.CSSProperties}>
                <span className={styles.arrowLabel}>{f.name} = {f.val} N</span>
              </div>
            ))}
          </div>
          <button className={styles.revealBtn} onClick={()=>setRevealed(true)}>
            Hitung Resultan →
          </button>
          {revealed&&(
            <div className={styles.result}>
              <div className={styles.calc}>
                {sit.forces.map((f,i)=>(
                  <span key={i} className={styles.calcTerm}>
                    {i>0?(f.dir==="right"||f.dir==="up"?" + ":" − "):""}{f.val}
                  </span>
                ))} = <span className={styles.calcAns}>{Math.abs(FR)} N</span>
              </div>
              <div className={`${styles.verdict} ${FR===0?styles.verdictZero:styles.verdictNonZero}`}>
                F_R = {FR===0?"0 N — Seimbang!":Math.abs(FR)+" N "+dirLabel}
              </div>
              <div className={styles.note}>
                {FR===0?"ΣF = 0 → benda diam atau GLB (Newton I)":"ΣF ≠ 0 → benda dipercepat ke "+dirLabel+" (Newton II)"}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
