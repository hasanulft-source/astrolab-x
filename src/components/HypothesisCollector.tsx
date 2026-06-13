import { useState } from 'react'
import styles from './HypothesisCollector.module.css'

interface Props { label?:string; initial?:string[] }

export function HypothesisCollector({ label = 'tebakan_siswa', initial = [] }: Props) {
  const [items, setItems] = useState<string[]>(initial)
  const [input, setInput] = useState('')
  const [adding, setAdding] = useState(false)

  const submit = () => {
    if (input.trim()) { setItems([...items, input.trim()]); setInput(''); setAdding(false) }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <span className={styles.lbl}>{label}</span>
        <div className={styles.line}/>
        <span className={styles.count}>{String(items.length).padStart(2,'0')}</span>
      </div>
      <div className={styles.list}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}><span className={styles.mark}>›</span><span>{item}</span></div>
        ))}
        {adding ? (
          <div className={styles.adding}>
            <span className={styles.mark}>›</span>
            <input autoFocus className={styles.input} value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if(e.key==='Enter') submit(); if(e.key==='Escape'){setInput('');setAdding(false)} }}
              onBlur={() => { if (!input.trim()) setAdding(false) }}
              placeholder="Ketik hipotesis siswa..." />
          </div>
        ) : (
          <div className={styles.add} onClick={() => setAdding(true)}>
            <span className={styles.addIcon}>+</span><span>Tambah hipotesis siswa…</span>
          </div>
        )}
      </div>
    </div>
  )
}
