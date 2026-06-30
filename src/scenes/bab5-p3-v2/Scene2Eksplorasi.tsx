import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const KINGDOM = [
  { nama:'Monera', icon:'🦠', warna:'#f97316', ciri:'Prokariotik, uniseluler, tanpa membran inti', contoh:'E. coli, bakteri yogurt' },
  { nama:'Protista', icon:'🔬', warna:'#8b5cf6', ciri:'Eukariotik sederhana, hidup di air', contoh:'Amoeba, Paramecium' },
  { nama:'Fungi', icon:'🍄', warna:'#d97706', ciri:'Eukariotik, dinding sel kitin, heterotrof dekomposer', contoh:'Jamur tiram, ragi roti' },
  { nama:'Plantae', icon:'🌿', warna:'#16a34a', ciri:'Eukariotik, dinding sel selulosa, autotrof fotosintesis', contoh:'Pohon, rumput, lumut' },
  { nama:'Animalia', icon:'🦁', warna:'#dc2626', ciri:'Eukariotik, tanpa dinding sel, heterotrof, bisa bergerak', contoh:'Harimau, ikan, serangga' },
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
        <p className={styles.exploPrompt}>Jelajahi 5 kingdom kehidupan. Klik tiap kingdom.</p>
        <div className={local.kingdomTabs}>
          {KINGDOM.map((k, i) => (
            <button key={i} className={`${local.kTab} ${sel === i ? local.kTabOn : ''} ${seen.has(i) ? local.kSeen : ''}`}
              style={sel === i ? { borderColor: k.warna, background: k.warna + '18' } : {}}
              onClick={() => pick(i)}>{k.icon} {k.nama}</button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 5 ? `${5 - seen.size} kingdom lagi` : 'Semua kingdom dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.kDetail}>
            <div className={local.kdIcon} style={{ color: KINGDOM[sel].warna }}>{KINGDOM[sel].icon}</div>
            <div className={local.kdNama}>{KINGDOM[sel].nama}</div>
            <div className={local.kdCiri}>{KINGDOM[sel].ciri}</div>
            <div className={local.kdContoh}><span>Contoh</span>{KINGDOM[sel].contoh}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu kingdom</div>}
      </div>
    </div>
  )
}
