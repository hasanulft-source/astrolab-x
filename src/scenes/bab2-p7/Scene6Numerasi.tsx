import { useState } from 'react'
import styles from './Scene6Numerasi.module.css'

type Benda = { name: string; mass: number; volArr: number[]; rhoStd: number }

const BENDA: Benda[] = [
  { name: 'Batu kerikil', mass: 45.2, volArr: [18, 18.5, 18], rhoStd: 2.5 },
  { name: 'Kayu pinus',   mass: 28.6, volArr: [40, 41, 40.5], rhoStd: 0.6 },
  { name: 'Koin logam',   mass: 5.8,  volArr: [0.7, 0.8, 0.7], rhoStd: 7.9 },
]

function r2(n: number) { return Math.round(n * 100) / 100 }

export function Scene6Numerasi() {
  const [selected, setSelected] = useState<0|1|2>(0)
  const [step, setStep] = useState<0|1|2|3>(0)

  const b = BENDA[selected]
  const vols = b.volArr.map((v,i) => r2(v - (i===0?0:0)))
  const avg  = r2(vols.reduce((a,x)=>a+x,0) / vols.length)
  const rho  = r2(b.mass / avg)
  const pct  = r2(Math.abs(rho - b.rhoStd) / b.rhoStd * 100)
  const float = rho < 1

  return (
    <>
      <p className={styles.prompt}>
        Data sudah ada. Sekarang kita <em>hitung massa jenis</em> — langkah demi langkah.
      </p>
      <div className={styles.main}>
        <div className={styles.selector}>
          {BENDA.map((bnd,i) => (
            <button key={i} className={i===selected?styles.selBtnActive:styles.selBtn}
              onClick={() => { setSelected(i as 0|1|2); setStep(0) }}>
              {bnd.name}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          <div className={styles.dataCard}>
            <div className={styles.cardTitle}>Data Pengukuran</div>
            <div className={styles.dataRow}><span className={styles.dLbl}>Massa</span><span className={styles.dVal}>{b.mass} g</span></div>
            <div className={styles.dataRow}><span className={styles.dLbl}>Volume 1</span><span className={styles.dVal}>{vols[0]} cm³</span></div>
            <div className={styles.dataRow}><span className={styles.dLbl}>Volume 2</span><span className={styles.dVal}>{vols[1]} cm³</span></div>
            <div className={styles.dataRow}><span className={styles.dLbl}>Volume 3</span><span className={styles.dVal}>{vols[2]} cm³</span></div>
          </div>

          <div className={styles.calcCol}>
            <div className={styles.calcStep}>
              <div className={styles.stepHead}><span className={styles.badge}>1</span>Rata-rata Volume</div>
              <div className={styles.formula}>V̄ = ({vols[0]} + {vols[1]} + {vols[2]}) ÷ 3</div>
              <div className={styles.answer}><span className={styles.ansVal}>{avg} cm³</span></div>
            </div>

            {step >= 1 && <div className={styles.calcStep}>
              <div className={styles.stepHead}><span className={styles.badge}>2</span>Hitung ρ = m ÷ V</div>
              <div className={styles.formula}>{b.mass} g ÷ {avg} cm³</div>
              <div className={styles.answer}><span className={styles.ansVal}>{rho} g/cm³</span></div>
            </div>}

            {step >= 2 && <div className={styles.calcStep}>
              <div className={styles.stepHead}><span className={styles.badge}>3</span>Persentase Kesalahan</div>
              <div className={styles.formula}>|{rho} – {b.rhoStd}| ÷ {b.rhoStd} × 100%</div>
              <div className={styles.answer}><span className={styles.ansVal}>{pct}%</span><span className={styles.ansLbl}>{pct<=10?'✓ dalam toleransi':'perlu kalibrasi'}</span></div>
            </div>}

            {step >= 3 && <div className={styles.calcStep}>
              <div className={styles.stepHead}><span className={styles.badge}>4</span>Prediksi: Apung / Tenggelam?</div>
              <div className={styles.formula}>{rho} g/cm³ {float?'<':'>'} 1 g/cm³ (air)</div>
              <div className={float?styles.verdictFloat:styles.verdictSink}>
                {float ? '🌊 Mengapung di air' : '⬇ Tenggelam di air'}
              </div>
            </div>}

            {step < 3 && <button className={styles.nextBtn} onClick={() => setStep(s=>(s+1) as 0|1|2|3)}>
              {['Hitung ρ = m/V','Hitung % kesalahan','Prediksi apung/tenggelam'][step]} →
            </button>}
          </div>
        </div>
      </div>
    </>
  )
}
