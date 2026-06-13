import { useState } from 'react'
import { HAZARDS } from './data'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const toggle = (i: number) => setOpen(p => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n })
  return (
    <>
      <p className={styles.prompt}>Lab penuh hal menarik — tapi juga bahaya. <em>Apa yang salah</em> dari tindakan-tindakan ini? Klik untuk cek.</p>
      <div className={styles.hazards}>
        {HAZARDS.map((h, i) => {
          const shown = open.has(i)
          return (
            <div key={i} role="button" className={shown ? styles.hazOpen : styles.haz} onClick={() => toggle(i)}>
              <span className={styles.hazAct}>{h.act}</span>
              {shown ? <span className={styles.hazWhy}>{h.why}</span> : <span className={styles.hazHint}>klik untuk lihat bahayanya</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
