import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const ORGAN = [
  { nama: 'Ginjal', icon: '🫘', buang: 'Urine (sisa metabolisme protein, air berlebih, garam)' },
  { nama: 'Kulit', icon: '🖐️', buang: 'Keringat (air, garam, sedikit urea)' },
  { nama: 'Paru-paru', icon: '🫁', buang: 'CO₂ dan uap air hasil respirasi sel' },
  { nama: 'Hati', icon: '🫙', buang: 'Empedu (sisa perombakan sel darah merah tua)' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())
  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size === 4) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Tubuh punya 4 organ ekskresi. <strong>Klik tiap organ</strong> untuk zat yang dibuangnya.</p>
        <div className={local.organGrid}>
          {ORGAN.map((o, i) => (
            <button key={i} className={`${local.oBtn} ${sel === i ? local.oOn : ''} ${seen.has(i) ? local.oSeen : ''}`} onClick={() => pick(i)}>
              {o.icon} {o.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} organ lagi` : 'Semua organ sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.oDetail}>
            <div className={local.odIcon}>{ORGAN[sel].icon}</div>
            <div className={local.odNama}>{ORGAN[sel].nama}</div>
            <div className={local.odBuang}><span>Membuang</span>{ORGAN[sel].buang}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu organ</div>}
      </div>
    </div>
  )
}
