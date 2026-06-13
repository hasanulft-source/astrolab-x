import { useState } from 'react'
import { BESARAN } from './data'
import styles from './ui.module.css'

export function Scene3Besaran() {
  const [sel, setSel] = useState<string>('panjang')
  return (
    <>
      <p className={styles.prompt}>Tiga <em>besaran pokok</em> yang sering diukur di kelas VII — tiap besaran punya satuan SI dan alat ukurnya.</p>
      <div className={styles.besGrid}>
        {BESARAN.map(b => (
          <div key={b.id} role="button" className={sel === b.id ? styles.besCardSel : styles.besCard} onClick={() => setSel(b.id)}>
            <span className={styles.besName}>{b.name}</span>
            <span className={styles.besNote}>{b.note}</span>
            <div className={styles.besField}><span className={styles.besFLabel}>satuan SI</span><span className={styles.besVal}>{b.satuan}</span></div>
            <div className={styles.besField}><span className={styles.besFLabel}>alat ukur</span><span className={styles.besVal}>{b.alat}</span></div>
          </div>
        ))}
      </div>
      <div className={styles.note}>Satuan harus <b>konsisten</b> — ingat Mars Orbiter. Dunia sains memakai <b>Satuan Internasional (SI)</b> agar semua sepakat.</div>
    </>
  )
}
