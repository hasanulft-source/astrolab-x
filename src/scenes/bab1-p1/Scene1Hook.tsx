import { useState } from 'react'
import { PHENOMENA, byId } from './data'
import styles from './Scene1Hook.module.css'

export function Scene1Hook() {
  const [open, setOpen] = useState<Set<string>>(new Set())
  const toggle = (id: string) => setOpen(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n })

  return (
    <>
      <p className={styles.prompt}>Semua hal ini ada ilmunya. Tebak dulu — <em>cabang sains apa</em> yang mempelajarinya?</p>
      <div className={styles.grid}>
        {PHENOMENA.map(p => {
          const shown = open.has(p.id)
          const br = byId(p.branch)
          return (
            <div key={p.id} role="button" className={shown ? styles.cardOpen : styles.card} onClick={() => toggle(p.id)}>
              <span className={styles.icon}>{p.icon}</span>
              <span className={styles.phenom}>{p.label}</span>
              {shown ? (
                <span className={styles.reveal}>
                  <span className={styles.branch}>{br?.icon} {br?.name}</span>
                  <span className={styles.note}>{p.note}</span>
                </span>
              ) : (
                <span className={styles.hint}>klik untuk lihat</span>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}
