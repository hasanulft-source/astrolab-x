import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const JENIS = [
  { kategori: 'medium', nama: 'Gelombang Mekanik', contoh: 'Gelombang air, bunyi, tali', ket: 'Butuh medium (zat) untuk merambat — tidak bisa merambat di ruang hampa' },
  { kategori: 'medium', nama: 'Gelombang Elektromagnetik', contoh: 'Cahaya, gelombang radio, sinar-X', ket: 'Bisa merambat tanpa medium — bahkan lewat ruang hampa (vakum)' },
  { kategori: 'arah', nama: 'Gelombang Transversal', contoh: 'Gelombang tali, cahaya', ket: 'Arah getar tegak lurus terhadap arah rambat gelombang' },
  { kategori: 'arah', nama: 'Gelombang Longitudinal', contoh: 'Gelombang bunyi, slinki ditekan', ket: 'Arah getar sejajar (searah) dengan arah rambat gelombang' },
]

export function Scene3Jenis({ onUnlock }: DiscoverySceneProps) {
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
        <p className={styles.exploPrompt}>Gelombang diklasifikasi 2 cara berbeda. <strong>Klik tiap jenis</strong> untuk penjelasannya.</p>
        <div className={local.jenisGrid}>
          {JENIS.map((j, i) => (
            <button key={i} className={`${local.jBtn} ${sel === i ? local.jOn : ''} ${seen.has(i) ? local.jSeen : ''}`} onClick={() => pick(i)}>
              {j.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} jenis lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.jDetail}>
            <div className={local.jdNama}>{JENIS[sel].nama}</div>
            <div className={local.jdContoh}><span>Contoh</span>{JENIS[sel].contoh}</div>
            <div className={local.jdKet}>{JENIS[sel].ket}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu jenis</div>}
      </div>
    </div>
  )
}
