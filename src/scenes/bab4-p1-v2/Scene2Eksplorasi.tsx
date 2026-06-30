import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const LINTASAN = [
  { id:'lurus', nama:'Lurus A → B', jarak:100, perpindahan:100 },
  { id:'zigzag', nama:'Zigzag A → B', jarak:160, perpindahan:100 },
  { id:'putar', nama:'Putar balik ke A', jarak:200, perpindahan:0 },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<string | null>(null)
  const [seen, setSeen] = useState<Set<string>>(new Set())
  const pick = (id: string) => {
    setSel(id)
    const ns = new Set(seen).add(id)
    setSeen(ns)
    if (ns.size === 3) onUnlock()
  }
  const l = LINTASAN.find(x => x.id === sel)

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Bandingkan tiga lintasan berbeda. Klik tiap lintasan untuk melihat jarak vs perpindahannya.</p>
        <div className={local.lintasanTabs}>
          {LINTASAN.map(l => (
            <button key={l.id} className={`${local.lintasanTab} ${sel === l.id ? local.lintasanOn : ''} ${seen.has(l.id) ? local.lintasanSeen : ''}`} onClick={() => pick(l.id)}>{l.nama}</button>
          ))}
        </div>
        {l && (
          <div className={local.compareBox}>
            <div className={local.cbRow}><span>Jarak (skalar)</span><strong>{l.jarak} m</strong></div>
            <div className={local.cbRow}><span>Perpindahan (vektor)</span><strong>{l.perpindahan} m</strong></div>
          </div>
        )}
      </div>
      <div className={local.vizCenter}>
        {l ? (
          <svg viewBox="0 0 200 100" className={local.pathSvg}>
            <circle cx="20" cy="50" r="5" fill="#0d6b7a" /><text x="10" y="68" fontSize="9" fill="#6b7280">A</text>
            {l.id === 'lurus' && <line x1="20" y1="50" x2="180" y2="50" stroke="#0d6b7a" strokeWidth="2.5" />}
            {l.id === 'zigzag' && <polyline points="20,50 70,20 110,70 180,50" fill="none" stroke="#0d6b7a" strokeWidth="2.5" />}
            {l.id === 'putar' && <path d="M 20 50 Q 100 0, 180 50 Q 100 100, 20 50" fill="none" stroke="#0d6b7a" strokeWidth="2.5" />}
            <circle cx={l.id === 'putar' ? 20 : 180} cy="50" r="5" fill={l.id === 'putar' ? '#0d6b7a' : '#dc2626'} />
            <text x={l.id === 'putar' ? 10 : 170} y="68" fontSize="9" fill="#6b7280">{l.id === 'putar' ? 'A (kembali)' : 'B'}</text>
          </svg>
        ) : <div className={styles.sliderHint}>← Pilih lintasan</div>}
      </div>
    </div>
  )
}
