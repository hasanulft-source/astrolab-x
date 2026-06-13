import { useState } from 'react'
import { FENOMENA } from './data'
import styles from './ui.module.css'

export function Scene3Fenomena() {
  const [open, setOpen] = useState<Set<string>>(new Set())
  const toggle = (id: string) => setOpen(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n })
  return (
    <>
      <p className={styles.prompt}>Enam fenomena sehari-hari. <em>Wujud apa</em> yang terlibat, dan kenapa? Klik untuk cek.</p>
      <div className={styles.grid}>
        {FENOMENA.map(f => {
          const shown = open.has(f.id)
          return (
            <div key={f.id} role="button" className={shown ? styles.cardOpen : styles.card} onClick={() => toggle(f.id)}>
              <span className={styles.cardTeks}>{f.teks}</span>
              {shown ? <><span className={styles.cardW}>{f.wujud}</span><span className={styles.cardA}>{f.alasan}</span></> : <span className={styles.cardHint}>klik untuk lihat</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
