import { useState } from 'react'
import { FENOMENA, MODE_NAME } from './data'
import styles from './ui.module.css'

export function Scene4Klasifikasi() {
  const [open, setOpen] = useState<Set<string>>(new Set())
  const toggle = (id: string) => setOpen(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n })
  return (
    <>
      <p className={styles.prompt}>Konduksi, konveksi, atau radiasi? Tebak dulu, lalu klik untuk cek.</p>
      <div className={styles.grid}>
        {FENOMENA.map(f => {
          const shown = open.has(f.id)
          return (
            <div key={f.id} role="button" className={shown ? styles.cardOpen : styles.card} onClick={() => toggle(f.id)}>
              <span className={styles.cardTeks}>{f.teks}</span>
              {shown ? <span className={styles.cardMode}>{MODE_NAME[f.mode]}</span> : <span className={styles.cardHint}>klik untuk cek</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
