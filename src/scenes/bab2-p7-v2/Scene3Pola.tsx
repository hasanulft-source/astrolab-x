import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu siap menjawab teka-teki kapal besi.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>
          Kapal besi: massa sangat besar, TAPI volumenya juga sangat besar (bentuknya berongga & lebar).
          <br /><br />
          Koin besi: massa kecil, volumenya JUGA sangat kecil (padat dan kompak).
        </div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Bandingkan ρ keduanya →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Bentuk mengubah volume, bukan jenis materialnya.</div>
            <p className={styles.conceptText}>
              Koin besi: ρ ≈ <strong>7,9 g/mL</strong> (padat & kompak) → tenggelam.<br />
              Kapal besi: bentuknya berongga sehingga volumenya jauh lebih besar dari massa besinya saja → ρ rata-rata <strong>kurang dari 1,0 g/mL</strong> → mengapung.
            </p>
            <p className={styles.conceptText}>Bukan jenis bahannya yang berubah — tapi <strong>rasio massa terhadap volume</strong> yang berbeda drastis karena bentuk.</p>
          </div>
        )}
      </div>
    </div>
  )
}
