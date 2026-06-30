import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const LANGKAH = [
  { no:1, label:'Observasi',    icon:'👁',  ket:'Amati fenomena — apa yang terjadi? Kumpulkan fakta sebelum menyimpulkan.' },
  { no:2, label:'Rumusan Masalah', icon:'❓', ket:'Ubah pengamatan menjadi pertanyaan yang bisa dijawab secara ilmiah.' },
  { no:3, label:'Hipotesis',    icon:'💡',  ket:'Buat dugaan sementara yang logis dan bisa diuji — bukan sekadar tebakan.' },
  { no:4, label:'Eksperimen',   icon:'⚗️',  ket:'Uji hipotesis dengan percobaan terkontrol. Ubah satu variabel, catat hasilnya.' },
  { no:5, label:'Analisis',     icon:'📊',  ket:'Olah data — cari pola, bandingkan, dan maknai hasilnya.' },
  { no:6, label:'Kesimpulan',   icon:'✅',  ket:'Jawab pertanyaan awal berdasarkan bukti. Hipotesis terbukti atau tidak.' },
]

export function Scene3MetodeSains({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)

  const next = () => {
    const ns = Math.min(step + 1, LANGKAH.length - 1)
    setStep(ns)
    if (ns === LANGKAH.length - 1) onUnlock()
  }

  return (
    <div className={styles.polaPanel}>
      <div className={local.stepsViz}>
        {LANGKAH.map((l, i) => (
          <div key={i} className={`${local.stepNode} ${i <= step ? local.stepActive : ''} ${i === step ? local.stepCurrent : ''}`}>
            <div className={local.stepNo}>{l.no}</div>
            <div className={local.stepIcon}>{l.icon}</div>
            <div className={local.stepLabel}>{l.label}</div>
            {i < LANGKAH.length - 1 && <div className={`${local.stepArrow} ${i < step ? local.arrowActive : ''}`}>↓</div>}
          </div>
        ))}
      </div>
      <div className={styles.questPanel}>
        <div className={local.activeStep}>
          <div className={local.asIcon}>{LANGKAH[step].icon}</div>
          <div className={local.asLabel}>{LANGKAH[step].no}. {LANGKAH[step].label}</div>
          <div className={local.asKet}>{LANGKAH[step].ket}</div>
        </div>
        {step < LANGKAH.length - 1
          ? <button className={styles.revealBtn} onClick={next}>Langkah berikutnya →</button>
          : <div className={styles.conceptCard}>
              <div className={styles.conceptTitle}>Itulah Metode Ilmiah.</div>
              <p className={styles.conceptText}>Sains bukan hafalan — sains adalah <strong>cara berpikir</strong>. Langkah-langkah ini yang membedakan sains dari opini atau mitos.</p>
            </div>}
      </div>
    </div>
  )
}
