import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [mode, setMode] = useState<'kecil' | 'besar'>('kecil')
  const [unlocked, setUnlocked] = useState(false)
  const pick = (m: 'kecil' | 'besar') => { setMode(m); if (!unlocked) { setUnlocked(true); onUnlock() } }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Ada dua jalur peredaran darah. <strong>Klik tiap jalur</strong> untuk melihat rutenya.</p>
        <div className={local.modeTabs}>
          <button className={`${local.mTab} ${mode === 'kecil' ? local.mOn : ''}`} onClick={() => pick('kecil')}>Peredaran Kecil</button>
          <button className={`${local.mTab} ${mode === 'besar' ? local.mOn : ''}`} onClick={() => pick('besar')}>Peredaran Besar</button>
        </div>
        {mode === 'kecil' ? (
          <div className={local.routeBox}>
            <div className={local.routeStep}>Jantung (bilik kanan)</div>
            <div className={local.routeArrow}>↓</div>
            <div className={local.routeStep}>Paru-paru (ambil O₂, buang CO₂)</div>
            <div className={local.routeArrow}>↓</div>
            <div className={local.routeStep}>Jantung (serambi kiri)</div>
          </div>
        ) : (
          <div className={local.routeBox}>
            <div className={local.routeStep}>Jantung (bilik kiri)</div>
            <div className={local.routeArrow}>↓</div>
            <div className={local.routeStep}>Seluruh tubuh (antar O₂, ambil CO₂)</div>
            <div className={local.routeArrow}>↓</div>
            <div className={local.routeStep}>Jantung (serambi kanan)</div>
          </div>
        )}
      </div>
      <div className={local.detailCenter}>
        <div className={local.explainBox}>
          {mode === 'kecil'
            ? 'Peredaran kecil (pulmonal) tujuannya mengambil oksigen baru dari paru-paru — jalurnya pendek, hanya jantung ke paru-paru dan kembali.'
            : 'Peredaran besar (sistemik) tujuannya mengantarkan oksigen ke seluruh sel tubuh — jalurnya panjang, mencakup seluruh tubuh.'}
        </div>
      </div>
    </div>
  )
}
