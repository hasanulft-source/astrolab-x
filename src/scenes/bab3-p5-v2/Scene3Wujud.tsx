import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const WUJUD = [
  { id:'padat', nama:'Padat', icon:'🔧', tingkat:'Paling kecil', ket:'Partikel sudah rapat tersusun, hanya bergetar lebih kuat saat dipanaskan.' },
  { id:'cair',  nama:'Cair',  icon:'💧', tingkat:'Sedang',       ket:'Partikel lebih leluasa bergerak menjauh saat suhunya naik.' },
  { id:'gas',   nama:'Gas',   icon:'💨', tingkat:'Paling besar', ket:'Partikel sudah bebas bergerak — kenaikan energi langsung memperbesar volume drastis.' },
]

export function Scene3Wujud({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<string | null>(null)
  const [seen, setSeen] = useState<Set<string>>(new Set())
  const pick = (id: string) => {
    setSel(id)
    const ns = new Set(seen).add(id)
    setSeen(ns)
    if (ns.size === 3) onUnlock()
  }
  const w = WUJUD.find(x => x.id === sel)

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Ketiga wujud zat memuai, tapi tingkatnya berbeda. Klik tiap wujud untuk tahu kenapa.</p>
        <div className={local.wujudTabs}>
          {WUJUD.map(w => (
            <button key={w.id} className={`${local.wujudTab} ${sel === w.id ? local.wujudTabOn : ''} ${seen.has(w.id) ? local.wujudSeen : ''}`} onClick={() => pick(w.id)}>
              {w.icon} {w.nama}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 3 ? `${3 - seen.size} wujud lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailPanel}>
        {w ? (
          <div className={local.wujudDetail}>
            <div className={local.wdIcon}>{w.icon}</div>
            <div className={local.wdNama}>{w.nama}</div>
            <div className={local.wdTingkat}>Tingkat pemuaian: <strong>{w.tingkat}</strong></div>
            <div className={local.wdKet}>{w.ket}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Pilih wujud zat</div>}
      </div>
    </div>
  )
}
