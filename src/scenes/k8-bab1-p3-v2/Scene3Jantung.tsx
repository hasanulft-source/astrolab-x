import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const RUANG = [
  { nama: 'Serambi Kanan', fungsi: 'Menerima darah rendah oksigen dari seluruh tubuh' },
  { nama: 'Bilik Kanan', fungsi: 'Memompa darah rendah oksigen ke paru-paru' },
  { nama: 'Serambi Kiri', fungsi: 'Menerima darah kaya oksigen dari paru-paru' },
  { nama: 'Bilik Kiri', fungsi: 'Memompa darah kaya oksigen ke seluruh tubuh (paling tebal ototnya)' },
]

export function Scene3Jantung({ onUnlock }: DiscoverySceneProps) {
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
        <p className={styles.exploPrompt}>Jantung punya 4 ruang. <strong>Klik tiap ruang</strong> untuk memahami perannya.</p>
        <div className={local.heartGrid}>
          {RUANG.map((r, i) => (
            <button key={i} className={`${local.hBtn} ${sel === i ? local.hOn : ''} ${seen.has(i) ? local.hSeen : ''}`} onClick={() => pick(i)}>
              {r.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} ruang lagi` : 'Semua ruang sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.hDetail}>
            <div className={local.hdNama}>{RUANG[sel].nama}</div>
            <div className={local.hdFungsi}>{RUANG[sel].fungsi}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu ruang jantung</div>}
      </div>
    </div>
  )
}
