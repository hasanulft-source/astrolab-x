import { useState } from 'react'
import styles from './ui.module.css'
export function Scene3Simpan() {
  const [sel, setSel] = useState<'ram' | 'storage'>('ram')
  return (
    <>
      <p className={styles.prompt}>Ada dua tempat menyimpan data: <em>sementara</em> dan <em>permanen.</em> Klik untuk membandingkan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.toggle}>
            <button className={`${styles.tBtn} ${sel === 'ram' ? styles.tOn : ''}`} onClick={() => setSel('ram')}>RAM (memori)</button>
            <button className={`${styles.tBtn} ${sel === 'storage' ? styles.tOn : ''}`} onClick={() => setSel('storage')}>Penyimpanan</button>
          </div>
        </div>
        <div className={styles.side}>
          {sel === 'ram'
            ? <div className={styles.detail}><b>RAM</b> menyimpan data yang sedang dipakai - sangat cepat, tapi <b>sementara</b>. Saat komputer mati, isinya hilang. Itu sebabnya dokumen yang belum disimpan bisa lenyap saat listrik padam.</div>
            : <div className={styles.detail}><b>Penyimpanan</b> (harddisk, SSD, flashdisk) menyimpan data secara <b>permanen</b> - tetap ada walau komputer dimatikan. Lebih lambat dari RAM, tapi kapasitasnya besar.</div>}
        </div>
      </div>
    </>
  )
}
