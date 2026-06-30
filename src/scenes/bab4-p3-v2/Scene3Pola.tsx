import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki mobil mengerem.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Mobil melaju 20 m/s, mengerem hingga berhenti total dalam 2 detik.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Hitung jaraknya →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Jarak = luas di bawah grafik v-t = 20 meter.</div>
            <p className={styles.conceptText}>Grafik v-t mobil ini membentuk <strong>segitiga</strong>: dari (20 m/s, 0s) menurun ke (0 m/s, 2s). Luas segitiga = ½ × alas × tinggi = ½ × 2s × 20m/s = <strong>20 meter</strong>.</p>
            <p className={styles.conceptText}>Inilah cara fisikawan menghitung jarak tanpa rumus rumit — cukup hitung area di bawah grafik kecepatan-waktu.</p>
          </div>
        )}
      </div>
    </div>
  )
}
