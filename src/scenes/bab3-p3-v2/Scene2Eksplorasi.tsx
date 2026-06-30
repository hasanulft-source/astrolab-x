import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const CARA = [
  { id:'konduksi', nama:'Konduksi', icon:'🥄', ket:'Perpindahan panas melalui sentuhan langsung antar-partikel zat padat. Tidak ada perpindahan partikel itu sendiri.', contoh:'Sendok logam jadi panas saat diaduk di kopi panas', butuh:'Memerlukan medium padat yang bersentuhan' },
  { id:'konveksi', nama:'Konveksi', icon:'🌊', ket:'Perpindahan panas melalui aliran zat cair atau gas — partikel panas berpindah tempat membawa energinya.', contoh:'Air mendidih: bagian bawah panas naik, bagian atas dingin turun', butuh:'Memerlukan medium cair/gas yang bisa mengalir' },
  { id:'radiasi',  nama:'Radiasi',  icon:'☀️', ket:'Perpindahan panas dalam bentuk gelombang elektromagnetik — tidak memerlukan medium sama sekali.', contoh:'Panas matahari sampai ke bumi melalui ruang vakum', butuh:'Tidak memerlukan medium apapun — bisa lewat ruang kosong' },
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
  const c = CARA.find(x => x.id === sel)

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Klik tiap cara perpindahan kalor untuk memahami mekanismenya.</p>
        <div className={local.caraTabs}>
          {CARA.map(c => (
            <button key={c.id} className={`${local.caraTab} ${sel === c.id ? local.caraTabOn : ''} ${seen.has(c.id) ? local.caraSeen : ''}`} onClick={() => pick(c.id)}>
              <span className={local.caraIcon}>{c.icon}</span><span>{c.nama}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 3 ? `Jelajahi ${3 - seen.size} cara lagi` : 'Semua cara sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailPanel}>
        {c ? (
          <div className={local.caraDetail}>
            <div className={local.cdIcon}>{c.icon}</div>
            <div className={local.cdNama}>{c.nama}</div>
            <div className={local.cdKet}>{c.ket}</div>
            <div className={local.cdContoh}><span>Contoh</span>{c.contoh}</div>
            <div className={local.cdButuh} style={{ background: c.id === 'radiasi' ? '#dcfce7' : '#fff7ed', color: c.id === 'radiasi' ? '#14532d' : '#c2410c' }}>{c.butuh}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu cara</div>}
      </div>
    </div>
  )
}
