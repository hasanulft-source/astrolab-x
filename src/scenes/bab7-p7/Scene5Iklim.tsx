import { useState } from 'react'
import styles from './Scene5Iklim.module.css'

const DATA = [
  { year:1880, co2:280, temp:-0.20 },
  { year:1900, co2:295, temp:-0.10 },
  { year:1920, co2:305, temp:-0.10 },
  { year:1940, co2:312, temp:+0.10 },
  { year:1960, co2:317, temp:+0.02 },
  { year:1980, co2:337, temp:+0.26 },
  { year:2000, co2:369, temp:+0.40 },
  { year:2010, co2:390, temp:+0.65 },
  { year:2020, co2:414, temp:+1.02 },
  { year:2024, co2:422, temp:+1.30 },
]

type Mode = 'co2' | 'temp' | 'both'

export function Scene5Iklim() {
  const [mode, setMode] = useState<Mode>('both')
  const [step, setStep] = useState(0)

  const totalTempRise = (DATA[DATA.length-1].temp - DATA[0].temp).toFixed(2)
  const totalCO2Rise = DATA[DATA.length-1].co2 - DATA[0].co2
  const co2Pct = Math.round(totalCO2Rise / DATA[0].co2 * 100)
  const decadeRate = (parseFloat(totalTempRise) / 14.4).toFixed(3)

  const W=540, H=220, PADl=48, PADr=16, PADt=12, PADb=32
  const xS = (yr: number) => PADl + (yr-1880)/(2024-1880) * (W-PADl-PADr)
  const yS_temp = (t: number) => PADt + (1.5-t)/2.0 * (H-PADt-PADb)
  const yS_co2 = (c: number) => PADt + (422-c)/(422-280) * (H-PADt-PADb)

  return (
    <>
      <p className={styles.prompt}>Data <em>CO₂ dan Suhu Global</em> 1880–2024 — temukan polanya.</p>
      <div className={styles.main}>
        <div className={styles.chartPanel}>
          <div className={styles.chartToggle}>
            {(['co2','temp','both'] as Mode[]).map(m => (
              <button key={m} className={m===mode?styles.toggleActive:styles.toggle} onClick={()=>setMode(m)}>
                {m==='co2'?'CO₂':m==='temp'?'Suhu':'Keduanya'}
              </button>
            ))}
          </div>
          <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{width:'100%',height:'auto'}}>
            {/* Grid Y */}
            {[280,320,360,400,420].map(c => (
              <line key={c} x1={PADl} x2={W-PADr} y1={yS_co2(c)} y2={yS_co2(c)} stroke="#e2e6ea" strokeWidth={0.5}/>
            ))}
            {/* Y axis label */}
            {(mode==='co2'||mode==='both') && <text x={PADl-6} y={yS_co2(280)+4} textAnchor="end" fontSize="10" fill="#6b7280" fontFamily="DM Mono">280</text>}
            {(mode==='co2'||mode==='both') && <text x={PADl-6} y={yS_co2(422)+4} textAnchor="end" fontSize="10" fill="#6b7280" fontFamily="DM Mono">422</text>}
            {/* X axis */}
            {[1880,1920,1960,2000,2024].map(yr => (
              <text key={yr} x={xS(yr)} y={H-PADb+12} textAnchor="middle" fontSize="10" fill="#6b7280" fontFamily="DM Mono">{yr}</text>
            ))}
            {/* CO₂ line */}
            {(mode==='co2'||mode==='both') && DATA.slice(0,-1).map((d,i) => {
              const n=DATA[i+1]
              return <line key={i} x1={xS(d.year)} y1={yS_co2(d.co2)} x2={xS(n.year)} y2={yS_co2(n.co2)} stroke="#f59e0b" strokeWidth={2.5}/>
            })}
            {/* Temp line */}
            {(mode==='temp'||mode==='both') && DATA.slice(0,-1).map((d,i) => {
              const n=DATA[i+1]
              return <line key={i} x1={xS(d.year)} y1={yS_temp(d.temp)} x2={xS(n.year)} y2={yS_temp(n.temp)} stroke="#ef4444" strokeWidth={2.5}/>
            })}
            {/* Dots */}
            {DATA.map((d,i) => <>
              {(mode==='co2'||mode==='both') && <circle key={`c${i}`} cx={xS(d.year)} cy={yS_co2(d.co2)} r={3} fill="#f59e0b"/>}
              {(mode==='temp'||mode==='both') && <circle key={`t${i}`} cx={xS(d.year)} cy={yS_temp(d.temp)} r={3} fill="#ef4444"/>}
            </>)}
            {/* Legend */}
            {mode==='both' && <>
              <circle cx={PADl+10} cy={PADt+10} r={5} fill="#f59e0b"/>
              <text x={PADl+20} y={PADt+14} fontSize="11" fill="#f59e0b">CO₂ (ppm)</text>
              <circle cx={PADl+100} cy={PADt+10} r={5} fill="#ef4444"/>
              <text x={PADl+110} y={PADt+14} fontSize="11" fill="#ef4444">Suhu (°C anomali)</text>
            </>}
          </svg>
          <div className={styles.chartNote}>Hover untuk lihat nilai · Data: NASA GISS + NOAA</div>
        </div>
        <div className={styles.calcPanel}>
          <div className={styles.calcTitle}>Hitung Bersama</div>
          <div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>1</span>Total kenaikan suhu</div>
            <div className={styles.formula}>+1,30 − (−0,20) = <strong>{totalTempRise}°C</strong></div>
          </div>
          {step>=1&&<div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>2</span>Rata-rata per dekade</div>
            <div className={styles.formula}>{totalTempRise} ÷ 14,4 dekade = <strong>{decadeRate}°C/dekade</strong></div>
          </div>}
          {step>=2&&<div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>3</span>Kenaikan CO₂</div>
            <div className={styles.formula}>422 − 280 = {totalCO2Rise} ppm</div>
            <div className={styles.formula}>{totalCO2Rise}/280 × 100% = <strong>{co2Pct}%</strong></div>
          </div>}
          {step>=3&&<div className={styles.calcStep}>
            <div className={styles.sh}><span className={styles.badge}>4</span>Korelasi</div>
            <div className={styles.note}>Grafik menunjukkan CO₂ dan suhu naik bersama — korelasi kuat. Ini konsisten dengan mekanisme efek rumah kaca yang diperkuat.</div>
          </div>}
          {step<3&&<button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>
            {['Hitung per dekade','Hitung kenaikan CO₂','Analisis korelasi'][step]} →
          </button>}
        </div>
      </div>
    </>
  )
}
