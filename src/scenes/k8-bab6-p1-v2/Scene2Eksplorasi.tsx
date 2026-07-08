import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const CIRI = [
  { sifat: 'Tampilan', homogen: 'Menyatu, tidak bisa dibedakan komponennya', heterogen: 'Komponen masih terlihat terpisah' },
  { sifat: 'Kejernihan', homogen: 'Umumnya bening/jernih', heterogen: 'Umumnya keruh' },
  { sifat: 'Pengendapan', homogen: 'Tidak mengendap meski didiamkan lama', heterogen: 'Bisa mengendap seiring waktu' },
  { sifat: 'Komposisi', homogen: 'Sama di setiap bagian larutan', heterogen: 'Bisa berbeda di tiap bagian' },
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
        <p className={styles.exploPrompt}>4 sifat yang membedakan homogen dari heterogen. <strong>Klik tiap sifat</strong> untuk perbandingannya.</p>
        <div className={local.ciriGrid}>
          {CIRI.map((c, i) => (
            <button key={i} className={`${local.cBtn} ${sel === i ? local.cOn : ''} ${seen.has(i) ? local.cSeen : ''}`} onClick={() => pick(i)}>
              {c.sifat}
            </button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 4 ? `${4 - seen.size} sifat lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.cDetail}>
            <div className={local.cdSifat}>{CIRI[sel].sifat}</div>
            <div className={local.cdRow}><span>Homogen</span>{CIRI[sel].homogen}</div>
            <div className={local.cdRow} style={{borderColor:'#d97706'}}><span style={{color:'#d97706'}}>Heterogen</span>{CIRI[sel].heterogen}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu sifat</div>}
      </div>
    </div>
  )
}
