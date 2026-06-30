import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const KOMPONEN = [
  { tipe:'biotik', icon:'🐟', nama:'Ikan', ket:'Makhluk hidup — bergerak, makan, bereproduksi' },
  { tipe:'biotik', icon:'🌿', nama:'Tanaman air', ket:'Makhluk hidup — fotosintesis, tumbuh' },
  { tipe:'biotik', icon:'🦠', nama:'Bakteri dekomposer', ket:'Makhluk hidup mikroskopis — menguraikan sisa organik' },
  { tipe:'abiotik', icon:'💧', nama:'Air', ket:'Benda tak hidup — medium hidup, pelarut nutrisi' },
  { tipe:'abiotik', icon:'☀️', nama:'Cahaya matahari', ket:'Benda tak hidup — sumber energi fotosintesis' },
  { tipe:'abiotik', icon:'🌡️', nama:'Suhu air', ket:'Benda tak hidup — memengaruhi metabolisme organisme' },
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
        <p className={styles.exploPrompt}>Klasifikasikan komponen kolam — biotik (hidup) atau abiotik (tak hidup)?</p>
        <div className={local.komponenGrid}>
          {KOMPONEN.map((k, i) => (
            <button key={i} className={`${local.kBtn} ${sel === i ? local.kOn : ''} ${seen.has(i) ? local.kSeen : ''}`}
              style={sel === i ? { borderColor: k.tipe === 'biotik' ? '#16a34a' : '#0891b2' } : {}}
              onClick={() => pick(i)}>{k.icon} {k.nama}</button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 6 ? `${6 - seen.size} komponen lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.kDetail} style={{ borderColor: KOMPONEN[sel].tipe === 'biotik' ? '#16a34a' : '#0891b2' }}>
            <div className={local.kdTipe} style={{ color: KOMPONEN[sel].tipe === 'biotik' ? '#16a34a' : '#0891b2' }}>{KOMPONEN[sel].tipe === 'biotik' ? 'BIOTIK (hidup)' : 'ABIOTIK (tak hidup)'}</div>
            <div className={local.kdIcon}>{KOMPONEN[sel].icon}</div>
            <div className={local.kdNama}>{KOMPONEN[sel].nama}</div>
            <div className={local.kdKet}>{KOMPONEN[sel].ket}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu komponen</div>}
      </div>
    </div>
  )
}
