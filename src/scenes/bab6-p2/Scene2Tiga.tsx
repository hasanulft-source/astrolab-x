import { useState } from 'react'
import { SIMB } from './data'
import styles from './ui.module.css'
function Sign({ s }: { s: string }) {
  const cls = s === '+' ? styles.sPlus : s === '−' ? styles.sMinus : styles.sZero
  return <span className={`${styles.sign} ${cls}`}>{s}</span>
}
export function Scene2Tiga() {
  const [sel, setSel] = useState('mut')
  const k = SIMB.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tiga jenis simbiosis dibedakan dari <em>siapa yang untung dan siapa yang rugi.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>
            {SIMB.map(s => (
              <button key={s.id} className={`${styles.card} ${sel === s.id ? styles.on : ''}`} onClick={() => setSel(s.id)}>
                <span>{s.nama}</span>
                <span className={styles.signs}><Sign s={s.a} /><Sign s={s.b} /></span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dName}>{k.nama} <span className={styles.signs}><Sign s={k.a} /><Sign s={k.b} /></span></div>
            <div className={styles.dDef}>{k.ket}</div>
            <div className={styles.dEx}><span>Contoh</span> {k.ex}</div>
          </div>
        </div>
      </div>
    </>
  )
}
