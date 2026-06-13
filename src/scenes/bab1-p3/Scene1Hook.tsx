import { useState } from 'react'
import { ToolGlyph } from '../../components/ToolGlyph'
import { TOOLS } from './data'
import styles from './ui.module.css'

const PICK = ['erlenmeyer', 'burner', 'cylinder']

export function Scene1Hook() {
  const [open, setOpen] = useState<Set<string>>(new Set())
  const toggle = (id: string) => setOpen(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n })
  return (
    <>
      <p className={styles.prompt}>Bayangkan kamu ilmuwan yang baru masuk lab. Kenali dulu “senjata”-mu — <em>alat apa ini?</em></p>
      <div className={styles.grid3}>
        {PICK.map(id => {
          const t = TOOLS.find(x => x.id === id)!
          const shown = open.has(id)
          return (
            <div key={id} role="button" className={styles.guess} onClick={() => toggle(id)}>
              <ToolGlyph id={id} size={90} />
              {shown ? <span className={styles.guessName}>{t.name}</span> : <span className={styles.guessHint}>klik untuk lihat</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
