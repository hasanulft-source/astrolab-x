import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const JENIS = [
  { nama: 'Tuas (Pengungkit)', icon: '⚖️', contoh: 'Linggis, gunting, jungkat-jungkit', prinsip: 'Gaya kecil di lengan panjang menghasilkan gaya besar di lengan pendek' },
  { nama: 'Katrol', icon: '🔄', contoh: 'Timba sumur, tiang bendera, derek', prinsip: 'Mengubah arah gaya, atau melipatgandakan gaya angkat dengan beberapa katrol' },
  { nama: 'Bidang Miring', icon: '📐', contoh: 'Tangga, jalan berkelok di gunung, papan luncur', prinsip: 'Memperpanjang jarak tempuh untuk memperkecil gaya yang dibutuhkan' },
  { nama: 'Roda Berporos', icon: '⚙️', contoh: 'Setir mobil, obeng, gagang pintu', prinsip: 'Roda besar berputar di sekitar poros kecil, memperbesar gaya putar' },
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
        <p className={styles.exploPrompt}>4 jenis pesawat sederhana. <strong>Klik tiap jenis</strong> untuk contoh dan prinsip kerjanya.</p>
        <div className={local.jenisGrid}>
          {JENIS.map((j, i) => (
            <button key={i} className={`${local.jBtn} ${sel === i ? local.jOn : ''} ${seen.has(i) ? local.jSeen : ''}`} onClick={() => pick(i)}>
              {j.icon} {j.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} jenis lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.jDetail}>
            <div className={local.jdIcon}>{JENIS[sel].icon}</div>
            <div className={local.jdNama}>{JENIS[sel].nama}</div>
            <div className={local.jdContoh}><span>Contoh</span>{JENIS[sel].contoh}</div>
            <div className={local.jdPrinsip}><span>Prinsip</span>{JENIS[sel].prinsip}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu jenis</div>}
      </div>
    </div>
  )
}
