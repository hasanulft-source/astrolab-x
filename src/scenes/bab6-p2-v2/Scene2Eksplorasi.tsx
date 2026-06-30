import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const SIMBIOSIS = [
  { nama:'Mutualisme', icon:'🤝', untung:'Keduanya untung', contoh:'Lebah & bunga — lebah dapat nektar, bunga terbantu penyerbukan', warna:'#16a34a' },
  { nama:'Komensalisme', icon:'🐦', untung:'Satu untung, satu netral', contoh:'Burung di pohon — burung dapat tempat tinggal, pohon tidak terpengaruh', warna:'#0891b2' },
  { nama:'Parasitisme', icon:'🦟', untung:'Satu untung, satu rugi', contoh:'Nyamuk & manusia — nyamuk dapat darah, manusia dirugikan (gatal/penyakit)', warna:'#dc2626' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
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
        <p className={styles.exploPrompt}>Jelajahi tiga jenis simbiosis dalam ekosistem. Klik tiap jenis.</p>
        <div className={local.simbiosisTabs}>
          {SIMBIOSIS.map((s, i) => (
            <button key={i} className={`${local.simTab} ${sel === i ? local.simTabOn : ''} ${seen.has(i) ? local.simSeen : ''}`}
              style={sel === i ? { borderColor: s.warna, background: s.warna + '18' } : {}}
              onClick={() => pick(i)}>{s.icon} {s.nama}</button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 3 ? `${3 - seen.size} jenis lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.simDetail}>
            <div className={local.sdIcon}>{SIMBIOSIS[sel].icon}</div>
            <div className={local.sdNama} style={{ color: SIMBIOSIS[sel].warna }}>{SIMBIOSIS[sel].nama}</div>
            <div className={local.sdUntung}>{SIMBIOSIS[sel].untung}</div>
            <div className={local.sdContoh}>{SIMBIOSIS[sel].contoh}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu jenis</div>}
      </div>
    </div>
  )
}
