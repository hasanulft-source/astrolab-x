import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const METODE = [
  { nama: 'Terasering', icon: '🪜', ket: 'Membuat lahan miring menjadi bertingkat-tingkat — memperlambat aliran air dan mengurangi kecepatan erosi' },
  { nama: 'Reboisasi', icon: '🌲', ket: 'Menanam kembali pohon di lahan gundul — akar menahan tanah dan mengurangi aliran air permukaan' },
  { nama: 'Tanaman Penutup Tanah', icon: '🌿', ket: 'Menanam tumbuhan rendah yang menutupi permukaan tanah — melindungi dari hantaman langsung air hujan' },
  { nama: 'Rotasi Tanaman', icon: '🔄', ket: 'Bergantian jenis tanaman yang ditanam — menjaga struktur tanah tetap sehat dan tidak terus-menerus terkuras' },
]

export function Scene3Konservasi({ onUnlock }: DiscoverySceneProps) {
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
        <p className={styles.exploPrompt}>4 metode konservasi tanah. <strong>Klik tiap metode</strong> untuk cara kerjanya.</p>
        <div className={local.metodeGrid}>
          {METODE.map((m, i) => (
            <button key={i} className={`${local.mBtn} ${sel === i ? local.mOn : ''} ${seen.has(i) ? local.mSeen : ''}`} onClick={() => pick(i)}>
              {m.icon} {m.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} metode lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.mDetail}>
            <div className={local.mdIcon}>{METODE[sel].icon}</div>
            <div className={local.mdNama}>{METODE[sel].nama}</div>
            <div className={local.mdKet}>{METODE[sel].ket}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu metode</div>}
      </div>
    </div>
  )
}
