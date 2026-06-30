import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const WUJUD = [
  { id:'padat', nama:'Padat', n:16, jarak:'rapat', gerak:'bergetar di tempat', susun:'teratur' },
  { id:'cair',  nama:'Cair',  n:16, jarak:'agak rapat', gerak:'bergeser bebas', susun:'tidak teratur' },
  { id:'gas',   nama:'Gas',   n:8,  jarak:'sangat jauh', gerak:'bergerak bebas & cepat', susun:'sangat tidak teratur' },
]

function ParticleBox({ wujud }: { wujud: typeof WUJUD[0] }) {
  const positions = wujud.id === 'padat'
    ? Array.from({length:16}, (_,i) => ({ x: 15+ (i%4)*23, y: 15+Math.floor(i/4)*23 }))
    : wujud.id === 'cair'
    ? Array.from({length:16}, (_,i) => ({ x: 10+Math.random()*75, y: 10+Math.random()*75 }))
    : Array.from({length:8}, (_,i) => ({ x: 5+Math.random()*85, y: 5+Math.random()*85 }))
  return (
    <div className={local.pBox}>
      {positions.map((p, i) => (
        <div key={i} className={`${local.particle} ${local['p_' + wujud.id]}`} style={{ left:`${p.x}%`, top:`${p.y}%` }} />
      ))}
    </div>
  )
}

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
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
        <p className={styles.exploPrompt}>Klik tiap wujud untuk melihat bagaimana partikelnya tersusun dan bergerak.</p>
        <div className={local.wujudTabs}>
          {WUJUD.map(w => (
            <button key={w.id} className={`${local.wujudTab} ${sel === w.id ? local.wujudTabOn : ''} ${seen.has(w.id) ? local.wujudSeen : ''}`}
              onClick={() => pick(w.id)}>{w.nama}</button>
          ))}
        </div>
        {w && (
          <div className={local.particleInfo}>
            <div className={local.piRow}><span>Jarak antar-partikel</span><strong>{w.jarak}</strong></div>
            <div className={local.piRow}><span>Gerak partikel</span><strong>{w.gerak}</strong></div>
            <div className={local.piRow}><span>Susunan</span><strong>{w.susun}</strong></div>
          </div>
        )}
        <div className={styles.sliderHint}>{seen.size < 3 ? `Lihat ${3 - seen.size} wujud lagi` : 'Semua wujud sudah dieksplorasi ✓'}</div>
      </div>
      <div className={local.vizCenter}>
        {w ? <ParticleBox wujud={w} /> : <div className={local.pBoxEmpty}>← Pilih wujud zat</div>}
      </div>
    </div>
  )
}
