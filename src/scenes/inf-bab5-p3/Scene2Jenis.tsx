import { useState } from 'react'
import { JENIS } from './data'
import styles from './ui.module.css'
export function Scene2Jenis() {
  const [sel, setSel] = useState('os')
  const j = JENIS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Software terbagi dua jenis utama. Klik untuk membandingkan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.layers}>
            <button className={`${styles.layer} ${styles.lApp} ${sel === 'app' ? styles.lOn : ''}`} onClick={() => setSel('app')}>Aplikasi</button>
            <button className={`${styles.layer} ${styles.lOs} ${sel === 'os' ? styles.lOn : ''}`} onClick={() => setSel('os')}>Sistem Operasi</button>
            <div className={styles.layerHw}>Perangkat Keras</div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dName}>{j.nama}</div><div className={styles.dDef}>{j.ket}</div><div className={styles.dEx}><span>Contoh</span> {j.contoh}</div></div>
        </div>
      </div>
    </>
  )
}
