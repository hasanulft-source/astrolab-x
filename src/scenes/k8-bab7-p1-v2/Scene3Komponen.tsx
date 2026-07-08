import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const KOMPONEN = [
  { nama: 'Mineral', icon: '🪨', peran: 'Berasal dari batuan yang lapuk — menyediakan struktur dan sebagian unsur hara bagi tanaman' },
  { nama: 'Bahan Organik', icon: '🍂', peran: 'Sisa tumbuhan dan hewan yang membusuk — sumber utama nutrisi bagi tanaman' },
  { nama: 'Air', icon: '💧', peran: 'Mengisi ruang antar-partikel tanah — dibutuhkan akar untuk menyerap nutrisi' },
  { nama: 'Udara', icon: '💨', peran: 'Mengisi ruang kosong yang tidak terisi air — dibutuhkan akar dan mikroba untuk bernapas' },
]

export function Scene3Komponen({ onUnlock }: DiscoverySceneProps) {
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
        <p className={styles.exploPrompt}>Tanah tersusun dari 4 komponen utama. <strong>Klik tiap komponen</strong> untuk perannya.</p>
        <div className={local.komponenGrid}>
          {KOMPONEN.map((k, i) => (
            <button key={i} className={`${local.kBtn} ${sel === i ? local.kOn : ''} ${seen.has(i) ? local.kSeen : ''}`} onClick={() => pick(i)}>
              {k.icon} {k.nama}
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
            <div className={local.kdPeran}>{KOMPONEN[sel].peran}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu komponen</div>}
      </div>
    </div>
  )
}
