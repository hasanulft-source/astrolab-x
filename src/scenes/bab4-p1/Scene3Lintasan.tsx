import { useState } from 'react'
import { PathViz } from '../../components/PathViz'
import { SCEN, byId } from './data'
import styles from './ui.module.css'

export function Scene3Lintasan() {
  const [sel, setSel] = useState('L')
  const s = byId(sel)
  return (
    <>
      <p className={styles.prompt}>Coba berbagai lintasan — perhatikan kapan <em>jarak = perpindahan</em>, kapan <em>berbeda</em>.</p>
      <div className={styles.main}>
        <div className={styles.viz}><PathViz route={s.route} /></div>
        <div className={styles.side}>
          <div className={styles.chips}>
            {SCEN.map(x => <div key={x.id} role="button" className={sel === x.id ? styles.chipActive : styles.chip} onClick={() => setSel(x.id)}>{x.name}</div>)}
          </div>
          <div className={styles.vals}>
            <div className={styles.val}><span className={`${styles.valK} ${styles.valKj}`}>JARAK</span><span className={styles.valV}>{s.jarak}</span></div>
            <div className={styles.val}><span className={`${styles.valK} ${styles.valKp}`}>PERPINDAHAN</span><span className={styles.valV}>{s.perpindahan}</span></div>
          </div>
          <div className={styles.note}>{s.note}</div>
        </div>
      </div>
    </>
  )
}
