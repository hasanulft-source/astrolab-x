import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const NUTRISI = [
  { nama: 'Karbohidrat', icon: '🍚', fungsi: 'Sumber energi utama tubuh', sumber: 'Nasi, roti, kentang, jagung' },
  { nama: 'Protein', icon: '🥚', fungsi: 'Membangun & memperbaiki sel tubuh', sumber: 'Telur, daging, ikan, tahu' },
  { nama: 'Lemak', icon: '🥑', fungsi: 'Cadangan energi & pelindung organ', sumber: 'Minyak, mentega, alpukat' },
  { nama: 'Vitamin', icon: '🍊', fungsi: 'Mengatur proses tubuh, daya tahan', sumber: 'Buah & sayur segar' },
  { nama: 'Mineral', icon: '🧂', fungsi: 'Pembentuk tulang & fungsi saraf', sumber: 'Susu, garam, sayuran hijau' },
  { nama: 'Air', icon: '💧', fungsi: 'Pelarut & pengangkut zat dalam tubuh', sumber: 'Minuman, buah berair' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())

  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size >= 4) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Makanan mengandung 6 jenis nutrisi. <strong>Klik tiap nutrisi</strong> untuk fungsi dan sumbernya.</p>
        <div className={local.nutrisiGrid}>
          {NUTRISI.map((n, i) => (
            <button key={i} className={`${local.nBtn} ${sel === i ? local.nOn : ''} ${seen.has(i) ? local.nSeen : ''}`} onClick={() => pick(i)}>
              <span className={local.nIcon}>{n.icon}</span><span>{n.nama}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `Jelajahi ${4 - seen.size} nutrisi lagi` : 'Cukup untuk lanjut ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.nDetail}>
            <div className={local.ndIcon}>{NUTRISI[sel].icon}</div>
            <div className={local.ndNama}>{NUTRISI[sel].nama}</div>
            <div className={local.ndFungsi}><span>Fungsi</span>{NUTRISI[sel].fungsi}</div>
            <div className={local.ndSumber}><span>Sumber</span>{NUTRISI[sel].sumber}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu nutrisi</div>}
      </div>
    </div>
  )
}
