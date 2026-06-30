import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const PLANET = [
  { nama:'Merkurius', icon:'🪐', tipe:'dalam', jarak:'57 juta km', ket:'Planet terdekat matahari, tanpa atmosfer signifikan' },
  { nama:'Venus', icon:'🪐', tipe:'dalam', jarak:'108 juta km', ket:'Planet terpanas — efek rumah kaca ekstrem dari CO₂' },
  { nama:'Bumi', icon:'🌍', tipe:'dalam', jarak:'150 juta km', ket:'Satu-satunya planet dengan kehidupan yang diketahui' },
  { nama:'Mars', icon:'🔴', tipe:'dalam', jarak:'228 juta km', ket:'Planet merah — target eksplorasi manusia berikutnya' },
  { nama:'Jupiter', icon:'🟠', tipe:'luar', jarak:'778 juta km', ket:'Planet terbesar — bisa menampung 1.300 Bumi' },
  { nama:'Saturnus', icon:'🪐', tipe:'luar', jarak:'1,4 miliar km', ket:'Terkenal dengan cincin es dan batuannya yang ikonik' },
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
        <p className={styles.exploPrompt}>Jelajahi planet-planet di tata surya kita, dari yang terdekat ke matahari.</p>
        <div className={local.planetGrid}>
          {PLANET.map((p, i) => (
            <button key={i} className={`${local.pBtn} ${sel === i ? local.pOn : ''} ${seen.has(i) ? local.pSeen : ''}`} onClick={() => pick(i)}>
              {p.icon} {p.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 6 ? `${6 - seen.size} planet lagi` : 'Semua planet dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.pDetail}>
            <div className={local.pdIcon}>{PLANET[sel].icon}</div>
            <div className={local.pdNama}>{PLANET[sel].nama}</div>
            <div className={local.pdJarak}>Jarak dari matahari: <strong>{PLANET[sel].jarak}</strong></div>
            <div className={local.pdKet}>{PLANET[sel].ket}</div>
            <div className={local.pdTipe} style={{ background: PLANET[sel].tipe === 'dalam' ? '#fff7ed' : '#eff6ff', color: PLANET[sel].tipe === 'dalam' ? '#c2410c' : '#1d4ed8' }}>
              Planet {PLANET[sel].tipe === 'dalam' ? 'Dalam (berbatu)' : 'Luar (raksasa gas)'}
            </div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu planet</div>}
      </div>
    </div>
  )
}
