import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [mode, setMode] = useState<'filtrasi' | 'distilasi'>('filtrasi')
  const [unlocked, setUnlocked] = useState(false)
  const pick = (m: 'filtrasi' | 'distilasi') => { setMode(m); if (!unlocked) { setUnlocked(true); onUnlock() } }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Dua metode pemisahan berbeda prinsip. <strong>Klik untuk bandingkan.</strong></p>
        <div className={local.modeTabs}>
          <button className={`${local.mTab} ${mode === 'filtrasi' ? local.mOn : ''}`} onClick={() => pick('filtrasi')}>Filtrasi</button>
          <button className={`${local.mTab} ${mode === 'distilasi' ? local.mOn : ''}`} onClick={() => pick('distilasi')}>Distilasi</button>
        </div>
        {mode === 'filtrasi' ? (
          <div className={local.explainBox}>
            <div className={local.explainTitle}>Filtrasi (Penyaringan)</div>
            <div className={local.explainText}>Memisahkan campuran heterogen berdasarkan <strong>ukuran partikel</strong> — partikel besar tertahan saringan, partikel kecil (dan zat cair) lolos.</div>
            <div className={local.explainWhen}>Cocok untuk: campuran padat-cair heterogen (air keruh, ampas kopi)</div>
          </div>
        ) : (
          <div className={local.explainBox}>
            <div className={local.explainTitle}>Distilasi (Penyulingan)</div>
            <div className={local.explainText}>Memisahkan campuran homogen berdasarkan <strong>perbedaan titik didih</strong> — zat dengan titik didih lebih rendah menguap dan dipisahkan lebih dulu, lalu diembunkan kembali.</div>
            <div className={local.explainWhen}>Cocok untuk: campuran zat cair yang menyatu (air garam, campuran alkohol-air)</div>
          </div>
        )}
      </div>
      <div className={local.vizCenter}>
        {mode === 'filtrasi' ? (
          <div className={local.filterDiagram}>
            <div className={local.funnel}>🔽</div>
            <div className={local.filterPaper}>kertas saring</div>
            <div className={local.filterResult}>💧 filtrat jernih</div>
          </div>
        ) : (
          <div className={local.distilDiagram}>
            <div className={local.flask}>🧪 dipanaskan</div>
            <div className={local.vaporArrow}>uap naik ↑</div>
            <div className={local.condenser}>❄️ diembunkan</div>
            <div className={local.distilResult}>💧 destilat murni</div>
          </div>
        )}
      </div>
    </div>
  )
}
