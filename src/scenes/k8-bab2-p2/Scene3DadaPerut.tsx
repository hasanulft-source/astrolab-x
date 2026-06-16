import { useState } from 'react'
import { JENIS } from './data'
import styles from './ui.module.css'
export function Scene3DadaPerut() {
  const [sel, setSel] = useState('dada')
  const j = JENIS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Ada dua cara bernapas, dibedakan dari <em>otot</em> yang dominan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>
            {JENIS.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail2}><div className={styles.dName}>{j.nama}</div><div className={styles.dTag}>{j.otot}</div><div className={styles.dDef}>{j.proses}</div></div>
        </div>
      </div>
    </>
  )
}
