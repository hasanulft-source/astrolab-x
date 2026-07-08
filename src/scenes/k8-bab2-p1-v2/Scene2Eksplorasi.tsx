import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const SALURAN = [
  { nama: 'Hidung', icon: '👃', fungsi: 'Menyaring, menghangatkan, dan melembapkan udara yang masuk' },
  { nama: 'Faring', icon: '⬇️', fungsi: 'Persimpangan saluran napas dan saluran makanan' },
  { nama: 'Laring', icon: '🗣️', fungsi: 'Tempat pita suara — juga katup pencegah makanan masuk paru' },
  { nama: 'Trakea', icon: '➖', fungsi: 'Batang tenggorokan — pipa berlapis silia penangkap debu' },
  { nama: 'Bronkus', icon: '🌿', fungsi: 'Percabangan trakea menuju masing-masing paru-paru' },
  { nama: 'Alveolus', icon: '🫧', fungsi: 'Kantung mikroskopis tempat oksigen berpindah ke darah' },
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
        <p className={styles.exploPrompt}>Klik tiap organ secara berurutan untuk mengikuti perjalanan udara.</p>
        <div className={local.saluranFlow}>
          {SALURAN.map((s, i) => (
            <button key={i} className={`${local.sBtn} ${sel === i ? local.sOn : ''} ${seen.has(i) ? local.sSeen : ''}`} onClick={() => pick(i)}>
              {s.icon} {s.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 6 ? `${6 - seen.size} organ lagi` : 'Semua organ sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.sDetail}>
            <div className={local.sdIcon}>{SALURAN[sel].icon}</div>
            <div className={local.sdNama}>{SALURAN[sel].nama}</div>
            <div className={local.sdFungsi}>{SALURAN[sel].fungsi}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu organ</div>}
      </div>
    </div>
  )
}
