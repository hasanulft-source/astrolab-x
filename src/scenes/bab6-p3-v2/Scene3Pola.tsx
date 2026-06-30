import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu sudah membangun satu jaring-jaring makanan sendiri.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>
          Jika satu spesies (misal tikus) menghilang dari ekosistem, apa yang terjadi pada elang, ular, dan padi?
        </div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Lihat efeknya →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Jaring-jaring makanan lebih tangguh dari rantai tunggal.</div>
            <p className={styles.conceptText}>Jika tikus hilang: elang masih bisa makan ular, ular masih bisa makan katak — sistem tidak langsung runtuh. Tapi jika hanya ada SATU rantai linear, hilangnya satu spesies bisa <strong>memutus seluruh rantai</strong>.</p>
            <p className={styles.conceptText}>Inilah mengapa <strong>keanekaragaman hayati</strong> penting — semakin banyak jalur makan-dimakan, semakin tangguh ekosistem terhadap gangguan.</p>
          </div>
        )}
      </div>
    </div>
  )
}
