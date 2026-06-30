import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const TAHAP = [
  { aktor:'🐺 Serigala', status:'Dimusnahkan', dampak:'Predator puncak hilang dari ekosistem' },
  { aktor:'🦌 Populasi Rusa', status:'Meledak', dampak:'Tanpa predator, rusa berkembang biak tak terkendali' },
  { aktor:'🌳 Vegetasi Muda', status:'Habis dimakan', dampak:'Rusa menghabiskan tunas pohon di sepanjang tepi sungai' },
  { aktor:'🏞️ Tepi Sungai', status:'Erosi parah', dampak:'Tanpa akar pohon menahan tanah, sungai melebar dan berkelok' },
  { aktor:'🐦 Burung & Berang-berang', status:'Berkurang', dampak:'Habitat di tepi sungai rusak, banyak spesies kehilangan tempat tinggal' },
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
      <div className={local.cascadeViz}>
        {TAHAP.map((t, i) => (
          <div key={i} className={`${local.cNode} ${i <= step ? local.cActive : ''}`}>
            <span className={local.cAktor}>{t.aktor}</span>
            <span className={local.cStatus}>{t.status}</span>
            {i < TAHAP.length - 1 && <div className={`${local.cArrow} ${i < step ? local.cArrowActive : ''}`}>↓</div>}
          </div>
        ))}
      </div>
      <div className={styles.questPanel}>
        <div className={local.activeBox}>
          <div className={local.abLabel}>Tahap {step + 1}</div>
          <div className={local.abDampak}>{TAHAP[step].dampak}</div>
        </div>
        {step < TAHAP.length - 1
          ? <button className={styles.revealBtn} onClick={next}>Lihat dampak berikutnya →</button>
          : <div className={styles.conceptCard}>
              <div className={styles.conceptTitle}>Satu predator hilang — lima sistem berubah.</div>
              <p className={styles.conceptText}>Ini disebut <strong>cascade effect</strong> (efek berjenjang) — perubahan kecil di satu titik ekosistem merambat dan membesar ke seluruh sistem.</p>
            </div>}
      </div>
    </div>
  )
}
