import { useState } from 'react'
import styles from './Scene5Piramida.module.css'

function fmt(n: number): string {
  if (n >= 1000000) return (n/1000000).toFixed(1)+"jt"
  if (n >= 1000) return (n/1000).toFixed(0)+"rb"
  return String(n)
}

const TROPIC = ["Produsen","Konsumen I","Konsumen II","Konsumen III","Konsumen IV"]
const COLORS = ["#16a34a","#2563eb","#d97706","#dc2626","#7c3aed"]
const EXAMPLES = ["Padi / Alga","Belalang / Zooplankton","Katak / Ikan kecil","Ular / Ikan tuna","Elang / Lumba-lumba"]

export function Scene5Piramida() {
  const [base, setBase] = useState(100000)
  const [step, setStep] = useState(0)

  const levels = TROPIC.map((_, i) => Math.round(base * Math.pow(0.1, i)))

  return (
    <>
      <p className={styles.prompt}>
        Aturan <em>10%</em> — hanya 10% energi yang berpindah ke tingkat trofik berikutnya.
      </p>
      <div className={styles.main}>
        <div className={styles.leftPanel}>
          <div className={styles.ctrlLabel}>Energi produsen (kkal):</div>
          <input type="range" min={10000} max={1000000} step={10000} value={base}
            onChange={e=>{setBase(+e.target.value);setStep(0)}} className={styles.slider}/>
          <div className={styles.baseVal}>{base.toLocaleString()} kkal</div>
          <div className={styles.pyramid}>
            {levels.map((e,i) => {
              const visible = i <= step
              const maxW = 260
              const w = Math.max(40, maxW - i * 44)
              return (
                <div key={i} className={styles.level} style={{opacity: visible?1:0.15}}>
                  <div className={styles.bar} style={{width:w, background:COLORS[i]}}/>
                  <div className={styles.levelInfo}>
                    <span className={styles.levelName}>{TROPIC[i]}</span>
                    <span className={styles.levelEx}>{EXAMPLES[i]}</span>
                  </div>
                </div>
              )
            })}
          </div>
          {step < 4 && (
            <button className={styles.nextBtn} onClick={()=>setStep(s=>s+1)}>
              Tambah {TROPIC[step+1]} →
            </button>
          )}
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.panelTitle}>Nilai Energi per Tingkat</div>
          {levels.map((e, i) => (
            <div key={i} className={styles.energyRow} style={{opacity: i<=step?1:0.2}}>
              <div className={styles.dot} style={{background:COLORS[i]}}/>
              <div className={styles.eName}>{TROPIC[i]}</div>
              <div className={styles.eVal}>{e.toLocaleString()} kkal</div>
              {i > 0 && <div className={styles.pct}>10%</div>}
            </div>
          ))}

          {step >= 2 && (
            <div className={styles.insightBox}>
              <div className={styles.insightTitle}>Implikasi Pola Makan:</div>
              <div className={styles.insightRow}>
                <span>Makan padi langsung (kons. I):</span>
                <span className={styles.insightVal}>{Math.round(base/10).toLocaleString()} kkal padi → 100 kkal</span>
              </div>
              <div className={styles.insightRow}>
                <span>Makan sapi (kons. II):</span>
                <span className={styles.insightVal}>{Math.round(base/100).toLocaleString()} kkal sapi → {Math.round(base/1000).toLocaleString()} kkal padi → 100 kkal</span>
              </div>
              <div className={styles.insightNote}>Butuh 10× lebih banyak lahan padi untuk pola makan daging!</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
