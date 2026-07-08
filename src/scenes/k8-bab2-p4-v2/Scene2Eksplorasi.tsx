import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const TAHAP = [
  { nama: 'Filtrasi', lokasi: 'Glomerulus', hasil: 'Urine primer', ket: 'Darah disaring — sel darah & protein tertahan, air & zat terlarut kecil lolos ke kapsul Bowman.' },
  { nama: 'Reabsorpsi', lokasi: 'Tubulus', hasil: 'Urine sekunder', ket: 'Zat yang masih berguna (glukosa, sebagian besar air, asam amino) diserap kembali ke darah.' },
  { nama: 'Augmentasi', lokasi: 'Tubulus distal', hasil: 'Urine sesungguhnya', ket: 'Penambahan zat sisa lain (ion H+, kalium, amonia) ke urine sebelum dikeluarkan.' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)

  const next = () => {
    const ns = Math.min(step + 1, TAHAP.length - 1)
    setStep(ns)
    if (ns === TAHAP.length - 1) onUnlock()
  }

  return (
    <div className={styles.polaPanel}>
      <div className={local.stepsViz}>
        {TAHAP.map((t, i) => (
          <div key={i} className={`${local.stepNode} ${i <= step ? local.stepActive : ''} ${i === step ? local.stepCurrent : ''}`}>
            <div className={local.stepNo}>{i + 1}</div>
            <div className={local.stepLabel}>{t.nama}</div>
            {i < TAHAP.length - 1 && <div className={`${local.stepArrow} ${i < step ? local.arrowActive : ''}`}>↓</div>}
          </div>
        ))}
      </div>
      <div className={styles.questPanel}>
        <div className={local.activeStep}>
          <div className={local.asNama}>{TAHAP[step].nama}</div>
          <div className={local.asLokasi}>Lokasi: {TAHAP[step].lokasi} · Hasil: {TAHAP[step].hasil}</div>
          <div className={local.asKet}>{TAHAP[step].ket}</div>
        </div>
        {step < TAHAP.length - 1
          ? <button className={styles.revealBtn} onClick={next}>Tahap berikutnya →</button>
          : <div className={styles.conceptCard}>
              <div className={styles.conceptTitle}>3 tahap — bukan sekadar saring sekali jadi.</div>
              <p className={styles.conceptText}>Filtrasi menyaring semua, tapi <strong>reabsorpsi mengambil kembali</strong> apa yang masih berguna. Hanya sisa yang benar-benar tidak dibutuhkan yang akhirnya jadi urine.</p>
            </div>}
      </div>
    </div>
  )
}
