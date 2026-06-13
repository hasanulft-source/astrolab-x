import { useState } from 'react'
import { CONTOH } from './data'
import styles from './ui.module.css'

export function Scene3Klasifikasi() {
  const [open, setOpen] = useState<Set<string>>(new Set())
  const toggle = (id: string) => setOpen(p => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n })
  return (
    <>
      <p className={styles.prompt}>Klasifikasikan: <em>fisika</em> atau <em>kimia</em>? Tebak dulu, lalu klik untuk cek alasannya.</p>
      <div className={styles.classGrid}>
        {CONTOH.map(c => {
          const shown = open.has(c.id)
          const cls = !shown ? styles.cCard : c.jenis === 'fisika' ? styles.cFisika : styles.cKimia
          return (
            <div key={c.id} role="button" className={cls} onClick={() => toggle(c.id)}>
              <span className={styles.cTeks}>{c.teks}</span>
              {shown
                ? <><span className={`${styles.cJenis} ${c.jenis === 'fisika' ? styles.tF : styles.tK}`}>{c.jenis === 'fisika' ? 'Perubahan Fisika' : 'Perubahan Kimia'}</span><span className={styles.cAlasan}>{c.alasan}</span></>
                : <span className={styles.cHint}>klik untuk cek</span>}
            </div>
          )
        })}
      </div>
    </>
  )
}
