import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki mobil panas — dalam skala global.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Sinar matahari (gelombang pendek) mudah menembus kaca/atmosfer. Tapi panas yang dipantulkan bumi (gelombang panjang/inframerah) sulit menembus balik keluar karena terhalang gas rumah kaca.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Hubungkan dengan bumi →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Bumi adalah "mobil raksasa" dengan atmosfer sebagai kacanya.</div>
            <p className={styles.conceptText}>Gas rumah kaca (CO₂, metana) di atmosfer berperan seperti <strong>kaca mobil</strong> — membiarkan cahaya matahari masuk tapi menahan panas keluar. Semakin banyak gas rumah kaca, semakin banyak panas yang terperangkap — inilah <strong>pemanasan global</strong>.</p>
          </div>
        )}
      </div>
    </div>
  )
}
