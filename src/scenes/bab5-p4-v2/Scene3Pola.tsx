import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu sudah merasakan langsung cara kerja kunci dikotomi.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Setiap pertanyaan punya hanya 2 jawaban (ya/tidak) — dan setiap jawaban memimpin ke pertanyaan baru atau hasil akhir.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Mengapa sistem ini efektif? →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Inilah "Kunci Dikotomi" — di- artinya dua.</div>
            <p className={styles.conceptText}>Setiap pertanyaan membagi kemungkinan menjadi <strong>dua cabang</strong>. Dengan hanya beberapa pertanyaan (biasanya 4-6), kita bisa mempersempit jutaan kemungkinan menjadi satu jawaban spesifik.</p>
            <p className={styles.conceptText}>Sistem ini dipakai ilmuwan lapangan di seluruh dunia untuk identifikasi cepat tanpa perlu internet atau database besar.</p>
          </div>
        )}
      </div>
    </div>
  )
}
