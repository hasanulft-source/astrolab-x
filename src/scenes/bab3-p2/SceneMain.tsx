import { useState } from 'react'
import styles from './Scene.module.css'

function r1(n: number) { return Math.round(n * 10) / 10 }
const RATIOS = [
  {label:"1:1",vHot:50,vCold:50},{label:"1:2",vHot:33,vCold:67},
  {label:"1:3",vHot:25,vCold:75},{label:"2:1",vHot:67,vCold:33},
]

export default function Scene() {
  const [tHot,setTHot]=useState(80)
  const [tCold,setTCold]=useState(20)
  const [ratio,setRatio]=useState(0)
  const [revealed,setRevealed]=useState(false)
  const r=RATIOS[ratio]
  const avgArith=r1((tHot*r.vHot+tCold*r.vCold)/100)
  const actual=r1(avgArith-1.5)
  const deviation=r1(Math.abs(actual-avgArith))
  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>Jika air panas dan dingin dicampur — apakah suhunya selalu tepat <em>rata-rata aritmatika</em>?</p>
      <div className={styles.main}>
        <div className={styles.controls}>
          <div className={styles.ctrlGroup}>
            <div className={styles.ctrlLabel}>Suhu air panas (T₁): {tHot}°C</div>
            <input type="range" min={50} max={100} value={tHot}
              onChange={e=>{setTHot(+e.target.value);setRevealed(false)}} className={styles.slider}/>
          </div>
          <div className={styles.ctrlGroup}>
            <div className={styles.ctrlLabel}>Suhu air dingin (T₂): {tCold}°C</div>
            <input type="range" min={0} max={30} value={tCold}
              onChange={e=>{setTCold(+e.target.value);setRevealed(false)}} className={styles.slider}/>
          </div>
          <div className={styles.ctrlGroup}>
            <div className={styles.ctrlLabel}>Perbandingan volume (panas:dingin)</div>
            <div className={styles.ratioRow}>
              {RATIOS.map((r,i)=>(
                <button key={i} className={i===ratio?styles.ratioBtnActive:styles.ratioBtn}
                  onClick={()=>{setRatio(i);setRevealed(false)}}>{r.label}</button>
              ))}
            </div>
          </div>
          <button className={styles.revealBtn} onClick={()=>setRevealed(true)}>Ukur suhu campuran →</button>
        </div>
        <div className={styles.results}>
          <div className={styles.beakerRow}>
            <div className={styles.beaker} style={{height:`${r.vHot}px`,background:"#f97316"}}><span className={styles.blabel}>Panas {r.vHot}mL</span></div>
            <span className={styles.plus}>+</span>
            <div className={styles.beaker} style={{height:`${r.vCold}px`,background:"#60a5fa"}}><span className={styles.blabel}>Dingin {r.vCold}mL</span></div>
            <span className={styles.plus}>→</span>
            <div className={styles.resultBeaker} style={{opacity:revealed?1:0.2}}>
              <span className={styles.rbVal}>{revealed?`${actual}°C`:"?°C"}</span>
            </div>
          </div>
          {revealed&&(
            <div className={styles.compare}>
              <div className={styles.cRow}><span>Rata-rata aritmatika:</span><span className={styles.cVal}>{avgArith}°C</span></div>
              <div className={styles.cRow}><span>Suhu aktual campuran:</span><span className={styles.cVal}>{actual}°C</span></div>
              <div className={styles.cRow}><span>Deviasi:</span><span className={styles.cDev}>{deviation}°C</span></div>
              <div className={styles.note}>Deviasi terjadi karena kehilangan kalor ke lingkungan. Semakin cepat mengukur, semakin kecil deviasi.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
