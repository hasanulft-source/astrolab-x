import { useState } from 'react'
import styles from './ui.module.css'

const CTX = [
  { q: 'Dokter ukur suhu pasien 38,5°C. Demam?', a: 'Ya — normal tubuh ~37°C, di atas 37,5°C sudah demam.' },
  { q: 'Kenapa termometer tubuh skalanya 35–42°C saja?', a: 'Karena suhu tubuh manusia hanya berkisar di rentang sempit itu.' },
  { q: 'Ilmuwan sering pakai Kelvin. Kenapa?', a: 'Kelvin mulai dari nol mutlak — tak ada suhu negatif, cocok untuk rumus fisika.' },
]

export function Scene4Konteks() {
  const [open, setOpen] = useState<Set<number>>(new Set())
  const toggle = (i: number) => setOpen(p => { const n = new Set(p); n.has(i) ? n.delete(i) : n.add(i); return n })
  return (
    <>
      <p className={styles.prompt}>Suhu ada di mana-mana — kedokteran, cuaca, industri. Klik tiap situasi:</p>
      <div className={styles.grid}>
        {CTX.map((x, i) => {
          const shown = open.has(i)
          return (
            <div key={i} role="button" className={shown ? styles.ctxOpen : styles.ctx} onClick={() => toggle(i)}>
              <span className={styles.ctxQ}>{x.q}</span>
              {shown ? <span className={styles.ctxA}>{x.a}</span> : <span className={styles.ctxHint}>klik untuk lihat</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
