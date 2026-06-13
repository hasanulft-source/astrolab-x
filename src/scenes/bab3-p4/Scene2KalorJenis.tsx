import { useState } from 'react'
import { MAT } from './data'
import styles from './ui.module.css'

export function Scene2KalorJenis() {
  const [sel, setSel] = useState('air')
  const max = 4200
  return (
    <>
      <p className={styles.prompt}>Kalor jenis (c) = energi untuk menaikkan 1 kg zat sebesar 1°C. Makin <em>besar</em> c, makin <em>lambat</em> panas.</p>
      <div className={styles.cTable}>
        {MAT.map(m => (
          <div key={m.id} role="button" className={sel === m.id ? styles.cRowSel : styles.cRow} onClick={() => setSel(m.id)}>
            <span className={styles.cName}>{m.name}</span>
            <div className={styles.cBarWrap}><div className={styles.cBar} style={{ width: `${(m.c / max) * 100}%` }} /></div>
            <span className={styles.cVal}>{m.c} J/kg°C</span>
          </div>
        ))}
      </div>
    </>
  )
}
