import { useState } from 'react'
import { SafetySymbol } from '../../components/SafetySymbol'
import { SYMBOLS } from './data'
import styles from './ui.module.css'

export function Scene2Simbol() {
  const [sel, setSel] = useState<string | null>(null)
  const s = SYMBOLS.find(x => x.id === sel)
  return (
    <>
      <p className={styles.prompt}>Simbol pada kemasan bahan memberi tahu <em>bahayanya</em> sebelum kamu menyentuhnya. Klik tiap simbol.</p>
      <div className={styles.main}>
        <div className={styles.symGrid}>
          {SYMBOLS.map(sym => (
            <div key={sym.id} role="button" className={sel === sym.id ? styles.symSel : styles.sym} onClick={() => setSel(sym.id)}>
              <SafetySymbol id={sym.id} size={58} />
              <span className={styles.symName}>{sym.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.panel}>
          {s ? (
            <>
              <div className={styles.pName}>{s.name}</div>
              <div className={styles.field}><span className={styles.fLabel}>artinya</span><p>{s.arti}</p></div>
              <div className={styles.field}><span className={styles.fLabel}>contoh</span><p>{s.contoh}</p></div>
            </>
          ) : <p className={styles.empty}>Klik salah satu simbol untuk melihat artinya.</p>}
        </div>
      </div>
    </>
  )
}
