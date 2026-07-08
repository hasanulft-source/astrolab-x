import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const METODE = [
  { nama: 'Filtrasi', dasar: 'Ukuran partikel', untuk: 'Campuran heterogen (padat-cair)' },
  { nama: 'Evaporasi', dasar: 'Penguapan zat pelarut', untuk: 'Campuran homogen, hanya perlu zat terlarutnya (misal garam)' },
  { nama: 'Distilasi', dasar: 'Perbedaan titik didih', untuk: 'Campuran homogen, perlu KEDUA zat murni (misal air murni + garam murni)' },
]

export function Scene3Metode({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())
  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size === 3) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>3 metode, 3 prinsip dasar berbeda. <strong>Klik tiap metode</strong> untuk membandingkan.</p>
        <div className={local.metodeTabs}>
          {METODE.map((m, i) => (
            <button key={i} className={`${local.mBtn} ${sel === i ? local.mOn : ''} ${seen.has(i) ? local.mSeen : ''}`} onClick={() => pick(i)}>{m.nama}</button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 3 ? `${3 - seen.size} metode lagi` : 'Semua sudah dibandingkan ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.mDetail}>
            <div className={local.mdNama}>{METODE[sel].nama}</div>
            <div className={local.mdRow}><span>Prinsip dasar</span>{METODE[sel].dasar}</div>
            <div className={local.mdRow}><span>Cocok untuk</span>{METODE[sel].untuk}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu metode</div>}
      </div>
    </div>
  )
}
