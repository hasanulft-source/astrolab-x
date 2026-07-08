import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [fase, setFase] = useState<'inspirasi' | 'ekspirasi'>('inspirasi')
  const [unlocked, setUnlocked] = useState(false)
  const pick = (f: 'inspirasi' | 'ekspirasi') => { setFase(f); if (!unlocked) { setUnlocked(true); onUnlock() } }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Klik tiap fase pernapasan untuk melihat apa yang terjadi pada diafragma & rongga dada.</p>
        <div className={local.faseTabs}>
          <button className={`${local.fTab} ${fase === 'inspirasi' ? local.fOn : ''}`} onClick={() => pick('inspirasi')}>Inspirasi (Tarik Napas)</button>
          <button className={`${local.fTab} ${fase === 'ekspirasi' ? local.fOn : ''}`} onClick={() => pick('ekspirasi')}>Ekspirasi (Buang Napas)</button>
        </div>
        {fase === 'inspirasi' ? (
          <div className={local.stepBox}>
            <div className={local.step}>1. Diafragma berkontraksi (mendatar, turun)</div>
            <div className={local.step}>2. Otot antar rusuk berkontraksi (rusuk terangkat)</div>
            <div className={local.step}>3. Rongga dada membesar</div>
            <div className={local.step}>4. Tekanan udara dalam paru menurun</div>
            <div className={local.step}>5. Udara luar masuk mengalir ke paru-paru</div>
          </div>
        ) : (
          <div className={local.stepBox}>
            <div className={local.step}>1. Diafragma berelaksasi (melengkung naik)</div>
            <div className={local.step}>2. Otot antar rusuk berelaksasi (rusuk turun)</div>
            <div className={local.step}>3. Rongga dada mengecil</div>
            <div className={local.step}>4. Tekanan udara dalam paru meningkat</div>
            <div className={local.step}>5. Udara terdorong keluar dari paru-paru</div>
          </div>
        )}
      </div>
      <div className={local.detailCenter}>
        <div className={local.diaphragmViz}>
          <div className={local.chestBox} style={{height: fase === 'inspirasi' ? '160px' : '120px'}}>
            <div className={local.lungShape}>🫁</div>
          </div>
          <div className={local.diaphragmLine} style={{transform: fase === 'inspirasi' ? 'translateY(10px)' : 'translateY(-10px)'}}>
            diafragma {fase === 'inspirasi' ? '(turun & mendatar)' : '(naik & melengkung)'}
          </div>
        </div>
      </div>
    </div>
  )
}
