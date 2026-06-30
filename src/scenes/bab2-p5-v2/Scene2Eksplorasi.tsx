import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const TANDA = [
  { icon:'🎨', nama:'Perubahan Warna', ket:'Munculnya warna baru yang tidak ada sebelumnya — pertanda zat baru terbentuk.', contoh:'Apel yang dipotong menjadi kecoklatan' },
  { icon:'💨', nama:'Munculnya Gas',   ket:'Gelembung gas yang terbentuk — produk baru yang sebelumnya tidak ada.', contoh:'Soda kue + cuka menghasilkan CO₂' },
  { icon:'🌡️', nama:'Perubahan Suhu',  ket:'Suhu naik (eksoterm) atau turun (endoterm) drastis tanpa pemanasan eksternal.', contoh:'Kapur tohor + air jadi sangat panas' },
  { icon:'🧪', nama:'Endapan Terbentuk', ket:'Munculnya padatan baru dari larutan yang sebelumnya bening.', contoh:'Air sadah + sabun membentuk endapan' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [sel, setSel] = useState<number | null>(null)
  const [seen, setSeen] = useState<Set<number>>(new Set())

  const pick = (i: number) => {
    setSel(i)
    const ns = new Set(seen).add(i)
    setSeen(ns)
    if (ns.size === 4) onUnlock()
  }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Klik tiap tanda untuk memahami bagaimana mengenali perubahan kimia.</p>
        <div className={local.tandaGrid}>
          {TANDA.map((t, i) => (
            <button key={i} className={`${local.tandaBtn} ${sel === i ? local.tandaOn : ''} ${seen.has(i) ? local.tandaSeen : ''}`} onClick={() => pick(i)}>
              <span className={local.tandaIcon}>{t.icon}</span>
              <span>{t.nama}</span>
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} tanda lagi` : 'Semua tanda sudah dikenali ✓'}</div>
      </div>
      <div className={local.tandaDetail}>
        {sel !== null ? (
          <>
            <div className={local.tdIcon}>{TANDA[sel].icon}</div>
            <div className={local.tdNama}>{TANDA[sel].nama}</div>
            <div className={local.tdKet}>{TANDA[sel].ket}</div>
            <div className={local.tdContoh}><span>Contoh</span>{TANDA[sel].contoh}</div>
          </>
        ) : <div className={styles.sliderHint}>← Klik salah satu tanda</div>}
      </div>
    </div>
  )
}
