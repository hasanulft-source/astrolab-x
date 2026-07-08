import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const ORGAN = [
  { nama: 'Mulut', icon: '👄', proses: 'Mekanik (kunyah) + kimiawi (enzim ptialin memecah amilum)' },
  { nama: 'Kerongkongan', icon: '⬇️', proses: 'Menyalurkan makanan ke lambung lewat gerak peristaltik' },
  { nama: 'Lambung', icon: '🫃', proses: 'Kimiawi — asam lambung & enzim pepsin mencerna protein' },
  { nama: 'Usus Halus', icon: '🌀', proses: 'Kimiawi — pencernaan tuntas + penyerapan sari makanan ke darah' },
  { nama: 'Usus Besar', icon: '➰', proses: 'Menyerap air & membentuk sisa makanan jadi feses' },
  { nama: 'Anus', icon: '🚪', proses: 'Mengeluarkan sisa pencernaan (defekasi)' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())
  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size === 6) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Klik tiap organ secara berurutan untuk mengikuti perjalanan makanan.</p>
        <div className={local.organFlow}>
          {ORGAN.map((o, i) => (
            <button key={i} className={`${local.oBtn} ${sel === i ? local.oOn : ''} ${seen.has(i) ? local.oSeen : ''}`} onClick={() => pick(i)}>
              {o.icon} {o.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 6 ? `${6 - seen.size} organ lagi` : 'Semua organ sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.oDetail}>
            <div className={local.odIcon}>{ORGAN[sel].icon}</div>
            <div className={local.odNama}>{ORGAN[sel].nama}</div>
            <div className={local.odProses}>{ORGAN[sel].proses}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu organ</div>}
      </div>
    </div>
  )
}
