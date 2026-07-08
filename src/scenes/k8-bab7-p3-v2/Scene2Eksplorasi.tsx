import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

const TEKSTUR = [
  { nama: 'Pasir', ukuran: 'Paling besar', sifat: 'Mudah dilalui air dan udara, tidak menahan air lama, mudah gembur' },
  { nama: 'Debu', ukuran: 'Sedang', sifat: 'Menahan air lebih baik dari pasir, tekstur lembut seperti tepung' },
  { nama: 'Liat', ukuran: 'Paling kecil', sifat: 'Menahan air sangat kuat, lengket saat basah, sulit dilalui air/udara' },
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
        <p className={styles.exploPrompt}>3 jenis tekstur berdasarkan ukuran butir. <strong>Klik tiap jenis</strong> untuk sifatnya.</p>
        <div className={local.teksturTabs}>
          {TEKSTUR.map((t, i) => (
            <button key={i} className={`${local.tBtn} ${sel === i ? local.tOn : ''} ${seen.has(i) ? local.tSeen : ''}`} onClick={() => pick(i)}>{t.nama}</button>
          ))}
        </div>
        <div className={styles.sliderHint}>{seen.size < 3 ? `${3 - seen.size} jenis lagi` : 'Semua sudah dijelajahi ✓'}</div>
      </div>
      <div className={local.detailCenter}>
        {sel !== null ? (
          <div className={local.tDetail}>
            <div className={local.tdNama}>{TEKSTUR[sel].nama}</div>
            <div className={local.tdUkuran}>Ukuran butir: <strong>{TEKSTUR[sel].ukuran}</strong></div>
            <div className={local.tdSifat}>{TEKSTUR[sel].sifat}</div>
          </div>
        ) : <div className={styles.sliderHint}>← Klik salah satu tekstur</div>}
      </div>
    </div>
  )
}
