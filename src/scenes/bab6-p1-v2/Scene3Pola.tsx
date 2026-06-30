import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab pertanyaan di awal — dengan klasifikasi yang tepat.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>
          Ikan butuh air untuk bernapas. Tanaman butuh cahaya untuk fotosintesis. Bakteri butuh sisa organik untuk diuraikan menjadi nutrisi yang dipakai tanaman lagi.
        </div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Apa hubungannya semua ini? →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Ekosistem = Biotik + Abiotik yang saling bergantung.</div>
            <p className={styles.conceptText}>Komponen <strong>biotik</strong> (makhluk hidup) tidak bisa hidup tanpa komponen <strong>abiotik</strong> (cahaya, air, suhu). Dan keduanya membentuk siklus yang terus berputar — itulah yang membuat satu kolam kecil ternyata sangat kompleks.</p>
          </div>
        )}
      </div>
    </div>
  )
}
