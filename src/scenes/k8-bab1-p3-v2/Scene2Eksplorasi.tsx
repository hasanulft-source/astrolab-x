import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const KOMPONEN = [
  { nama: 'Plasma', persen: '55%', icon: '💧', fungsi: 'Cairan kekuningan yang mengangkut sel darah, nutrisi, dan zat sisa ke seluruh tubuh.' },
  { nama: 'Sel Darah Merah', persen: '~44%', icon: '🔴', fungsi: 'Mengandung hemoglobin — mengikat dan mengangkut oksigen ke seluruh sel tubuh.' },
  { nama: 'Sel Darah Putih', persen: '<1%', icon: '⚪', fungsi: 'Melawan infeksi dan kuman — bagian dari sistem kekebalan tubuh.' },
  { nama: 'Keping Darah', persen: '<1%', icon: '🟡', fungsi: 'Membantu proses pembekuan darah saat terjadi luka.' },
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
        <p className={styles.exploPrompt}>4 komponen darah dari hasil sentrifugasi tadi. <strong>Klik tiap komponen</strong> untuk fungsinya.</p>
        <div className={local.komponenList}>
          {KOMPONEN.map((k, i) => (
            <button key={i} className={`${local.kBtn} ${sel === i ? local.kOn : ''} ${seen.has(i) ? local.kSeen : ''}`} onClick={() => pick(i)}>
              <span>{k.icon} {k.nama}</span><span className={local.kPersen}>{k.persen}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} komponen lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.kDetail}>
            <div className={local.kdIcon}>{KOMPONEN[sel].icon}</div>
            <div className={local.kdNama}>{KOMPONEN[sel].nama}</div>
            <div className={local.kdFungsi}>{KOMPONEN[sel].fungsi}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu komponen</div>}
      </div>
    </div>
  )
}
