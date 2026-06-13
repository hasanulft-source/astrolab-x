import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sendok <em>logam</em> dan sendok <em>plastik</em> dicelup di air panas. Setelah 1 menit — mana ujung yang lebih panas dipegang?</p>
      <div className={styles.hookRow}>
        <div role="button" className={styles.hookCard} onClick={() => setA(v => !v)}>
          <span className={styles.hookName}>Sendok logam</span>
          {a ? <span className={styles.hookReveal}>Ujungnya cepat panas — logam penghantar panas (konduktor) yang baik.</span> : <span className={styles.hookHint}>klik untuk lihat</span>}
        </div>
        <div role="button" className={styles.hookCard} onClick={() => setB(v => !v)}>
          <span className={styles.hookName}>Sendok plastik</span>
          {b ? <span className={styles.hookReveal}>Ujungnya tetap dingin — plastik penghantar panas yang buruk (isolator).</span> : <span className={styles.hookHint}>klik untuk lihat</span>}
        </div>
      </div>
    </>
  )
}
