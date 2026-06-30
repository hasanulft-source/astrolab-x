import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const CIRI = [
  { icon:'🍽️', nama:'Nutrisi', ket:'Memerlukan makanan/energi untuk hidup' },
  { icon:'💨', nama:'Bernapas', ket:'Mengambil O₂ untuk menghasilkan energi' },
  { icon:'📈', nama:'Tumbuh', ket:'Bertambah ukuran secara permanen' },
  { icon:'👶', nama:'Reproduksi', ket:'Menghasilkan keturunan baru' },
  { icon:'⚡', nama:'Iritabilitas', ket:'Merespon rangsang dari lingkungan' },
  { icon:'🏃', nama:'Bergerak', ket:'Berpindah atau menggerakkan bagian tubuh' },
  { icon:'🚽', nama:'Ekskresi', ket:'Membuang zat sisa metabolisme' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())
  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size >= 5) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Kenali 7 ciri makhluk hidup. Klik tiap ciri.</p>
        <div className={local.ciriGrid}>
          {CIRI.map((c, i) => (
            <button key={i} className={`${local.ciriBtn} ${sel === i ? local.ciriOn : ''} ${seen.has(i) ? local.ciriSeen : ''}`} onClick={() => pick(i)}>
              <span>{c.icon}</span><span>{c.nama}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 5 ? `${5 - seen.size} ciri lagi` : 'Cukup untuk lanjut ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.ciriDetail}>
            <div className={local.cdIcon}>{CIRI[sel].icon}</div>
            <div className={local.cdNama}>{CIRI[sel].nama}</div>
            <div className={local.cdKet}>{CIRI[sel].ket}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu ciri</div>}
      </div>
    </div>
  )
}
