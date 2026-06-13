import { useState } from 'react'
import { TERAP } from './data'
import styles from './ui.module.css'

export function Scene3Terapan() {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const toggle = (i: number) => setOpen(p => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n })
  return (
    <>
      <p className={styles.prompt}>Pemuaian ada di mana-mana — kadang dimanfaatkan, kadang harus diantisipasi. Klik tiap penerapan:</p>
      <div className={styles.grid}>
        {TERAP.map((t, i) => {
          const shown = open.has(i)
          return (
            <div key={i} role="button" className={shown ? styles.cardOpen : styles.card} onClick={() => toggle(i)}>
              <span className={styles.cardN}>{t.n}</span>
              {shown ? <span className={styles.cardP}>{t.p}</span> : <span className={styles.cardHint}>klik untuk lihat prinsipnya</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
