import { useState } from 'react'
import styles from './Scene5Cascade.module.css'

type Scenario = { trigger: string; steps: { event: string; category: string }[] }
const SCENARIOS: Scenario[] = [
  {
    trigger: "Harimau Sumatera punah akibat perburuan",
    steps: [
      { event:"Populasi rusa dan babi hutan meledak (tidak ada predator)", category:"biotik" },
      { event:"Vegetasi hutan rusak parah akibat overgrazing", category:"biotik" },
      { event:"Akar pohon berkurang → erosi tanah meningkat", category:"abiotik" },
      { event:"Sungai menjadi keruh karena sedimen erosi", category:"abiotik" },
      { event:"Ikan-ikan sensitif terhadap kekeruhan berkurang drastis", category:"biotik" },
      { event:"Hasil tangkapan nelayan sungai menurun → ekonomi terdampak", category:"sosial" },
      { event:"Pariwisata ekowisata harimau hilang → pendapatan daerah turun", category:"sosial" },
    ]
  },
  {
    trigger: "Hutan mangrove pesisir Aceh ditebang untuk tambak udang",
    steps: [
      { event:"Nursery ground ikan laut hilang → rekrutmen ikan muda turun", category:"biotik" },
      { event:"Akar mangrove tidak ada → garis pantai tererosi gelombang", category:"abiotik" },
      { event:"Populasi ikan laut turun drastis karena tidak ada tempat bertelur", category:"biotik" },
      { event:"Hasil tangkapan nelayan laut turun walaupun tambak ditambah", category:"sosial" },
      { event:"Karbon yang tersimpan di tanah mangrove terlepas ke atmosfer", category:"abiotik" },
      { event:"Banjir rob makin parah tanpa mangrove sebagai penahan", category:"abiotik" },
      { event:"Komunitas pesisir terdampak banjir dan kehilangan mata pencaharian", category:"sosial" },
    ]
  }
]

const CAT_COLOR: Record<string, string> = {
  biotik: "#16a34a", abiotik: "#2563eb", sosial: "#d97706"
}

export default function Scene() {
  const [scen, setScen] = useState(0)
  const [visible, setVisible] = useState(0)
  const s = SCENARIOS[scen]

  const next = () => setVisible(v => Math.min(v+1, s.steps.length))
  const reset = () => setVisible(0)
  const switchScen = (i: number) => { setScen(i); setVisible(0) }

  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>Cascade Effect — satu gangguan memicu <em>rentetan dampak bertingkat</em>.</p>
      <div className={styles.main}>
        <div className={styles.scenPicker}>
          {SCENARIOS.map((sc,i) => (
            <button key={i} className={i===scen?styles.spActive:styles.sp} onClick={()=>switchScen(i)}>
              {sc.trigger}
            </button>
          ))}
          <div className={styles.legend}>
            {Object.entries(CAT_COLOR).map(([cat,color]) => (
              <div key={cat} className={styles.lgItem}>
                <div className={styles.lgDot} style={{background:color}}/>
                <span>{cat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cascade}>
          <div className={styles.trigger}>💥 {s.trigger}</div>
          <div className={styles.chain}>
            {s.steps.map((step, i) => (
              <div key={i} className={styles.stepWrap} style={{opacity: i < visible ? 1 : 0.08, transition:'opacity .4s'}}>
                <div className={styles.arrow}>↓</div>
                <div className={styles.step} style={{borderLeftColor: CAT_COLOR[step.category]}}>
                  <span className={styles.stepCat} style={{color: CAT_COLOR[step.category], background:CAT_COLOR[step.category]+"22"}}>
                    {step.category}
                  </span>
                  <span className={styles.stepText}>{step.event}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.btnRow}>
            {visible < s.steps.length ? (
              <button className={styles.nextBtn} onClick={next}>Tampilkan dampak berikutnya →</button>
            ) : (
              <button className={styles.resetBtn} onClick={reset}>↩ Reset cascade</button>
            )}
            <span className={styles.counter}>{visible} / {s.steps.length} dampak</span>
          </div>
        </div>
      </div>
    </div>
  )
}
