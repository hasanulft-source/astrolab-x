import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const HORIZON = [
  { kode: 'O', nama: 'Horizon O', warna: '#2d1f0f', ciri: 'Lapisan paling atas — didominasi bahan organik yang belum/baru terurai (serasah, humus)' },
  { kode: 'A', nama: 'Horizon A', warna: '#4a3a22', ciri: 'Lapisan tanah atas (topsoil) — kaya humus, paling subur, tempat sebagian besar akar tanaman' },
  { kode: 'B', nama: 'Horizon B', warna: '#6b4f30', ciri: 'Lapisan tengah — tempat mineral tercuci dari atas mengendap, umumnya lebih padat' },
  { kode: 'C', nama: 'Horizon C', warna: '#9c7b52', ciri: 'Bahan induk yang mulai lapuk — batuan yang sedang dalam proses menjadi tanah' },
  { kode: 'R', nama: 'Horizon R', warna: '#b09878', ciri: 'Batuan induk (bedrock) yang belum lapuk — dasar dari semua lapisan di atasnya' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())
  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size === 5) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>5 horizon tanah dari atas ke bawah. <strong>Klik tiap lapisan</strong> untuk cirinya.</p>
        <div className={local.horizonStack}>
          {HORIZON.map((h, i) => (
            <button key={i} className={`${local.hBtn} ${sel === i ? local.hOn : ''}`} style={{background: h.warna, opacity: seen.has(i) ? 1 : 0.5}} onClick={() => pick(i)}>
              {h.kode}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 5 ? `${5 - seen.size} horizon lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.hDetail}>
            <div className={local.hdNama}>{HORIZON[sel].nama}</div>
            <div className={local.hdCiri}>{HORIZON[sel].ciri}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu horizon</div>}
      </div>
    </div>
  )
}
