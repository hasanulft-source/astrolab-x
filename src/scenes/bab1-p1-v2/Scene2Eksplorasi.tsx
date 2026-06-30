import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const CABANG = [
  { id:'bio', nama:'Biologi', icon:'🧬', contoh:'Mengapa virus bisa bermutasi?', obj:'makhluk hidup' },
  { id:'fis', nama:'Fisika',  icon:'⚡', contoh:'Mengapa petir selalu ke tanah?', obj:'energi & materi' },
  { id:'kim', nama:'Kimia',   icon:'⚗️', contoh:'Mengapa besi bisa berkarat?', obj:'zat & perubahannya' },
  { id:'geo', nama:'Geologi', icon:'🌋', contoh:'Mengapa gempa terjadi?', obj:'bumi & strukturnya' },
  { id:'ast', nama:'Astronomi',icon:'🌌',contoh:'Mengapa ada siang dan malam?', obj:'benda langit' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<string | null>(null)
  const [seen, setSeen] = useState<Set<string>>(new Set())
  const pick = (id: string) => {
    setSel(id)
    const next = new Set(seen).add(id)
    setSeen(next)
    if (next.size >= 3) onUnlock()
  }
  const c = CABANG.find(x => x.id === sel)

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>
          Setiap cabang sains punya <strong>pertanyaan khasnya sendiri</strong>.<br />
          Klik tiap cabang — lihat apa yang mereka pelajari.
        </p>
        <div className={local.cabangGrid}>
          {CABANG.map(cb => (
            <button key={cb.id}
              className={`${local.cabangBtn} ${sel === cb.id ? local.cabangOn : ''} ${seen.has(cb.id) ? local.cabangSeen : ''}`}
              onClick={() => pick(cb.id)}>
              <span className={local.cbIcon}>{cb.icon}</span>
              <span>{cb.nama}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>
          {seen.size < 3 ? `Klik ${3 - seen.size} cabang lagi untuk lanjut` : 'Semua sudah dijelajahi ✓'}
        </div>
      </div>
      <div className={local.detailPanel}>
        {c ? (
          <div className={local.detailCard}>
            <div className={local.detailIcon}>{c.icon}</div>
            <div className={local.detailNama}>{c.nama}</div>
            <div className={local.detailObj}>Mempelajari: <strong>{c.obj}</strong></div>
            <div className={local.detailContoh}>
              <span className={local.contohLabel}>Contoh pertanyaan</span>
              <span className={local.contohTeks}>"{c.contoh}"</span>
            </div>
          </div>
        ) : (
          <div className={local.detailEmpty}>← Klik salah satu cabang</div>
        )}
      </div>
    </div>
  )
}
