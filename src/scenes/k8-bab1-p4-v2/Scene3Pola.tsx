import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki kadar oksigen di awal.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit}>Darah dari bilik kanan menuju paru-paru BELUM mengambil oksigen baru. Darah dari bilik kiri menuju tubuh SUDAH mengambil oksigen dari paru-paru lewat serambi kiri.</div>
        {!revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Hubungkan dua jalur ini →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Dua jalur berbeda tujuan — bukan dua "tangki" terpisah.</div>
            <p className={styles.conceptText}>Darah yang sama terus beredar bolak-balik antara <strong>peredaran kecil</strong> (ambil oksigen di paru-paru) dan <strong>peredaran besar</strong> (antarkan oksigen ke tubuh). Kadar oksigennya berubah tergantung di jalur mana ia sedang berada — bukan karena ada dua jenis darah berbeda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
