import { useState } from 'react'
import { FLOW } from './data'
import styles from './ui.module.css'
export function Scene2Energi() {
  const [sel, setSel] = useState('p')
  const f = FLOW.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Aturan 10%: tiap naik satu tingkat, energi <em>tinggal sepersepuluh.</em> Klik tiap tingkat.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.flow}>
            {FLOW.map((x, i) => (
              <div key={x.id} className={styles.flowItem}>
                {i > 0 && <div className={styles.lost}>− 90% hilang</div>}
                <button className={`${styles.bar} ${sel === x.id ? styles.barOn : ''}`} onClick={() => setSel(x.id)}>
                  <span className={styles.barFill} style={{ width: `${x.w}%` }} />
                  <span className={styles.barTxt}><b>{x.n}</b> · {x.sub}</span>
                  <span className={styles.barPct}>{x.pct}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{f.n} <span className={styles.dPct}>{f.pct}</span></div>
            <div className={styles.dDef}>{f.detail}</div>
          </div>
        </div>
      </div>
    </>
  )
}
