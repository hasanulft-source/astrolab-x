import { useState } from 'react'
import { MASALAH, BAGIAN } from './data'
import styles from './ui.module.css'
export function Scene2Dekom() {
  const [open, setOpen] = useState(false)
  const [sel, setSel] = useState<number | null>(null)
  return (
    <>
      <p className={styles.prompt}>Pecah masalah besar menjadi <em>bagian-bagian kecil.</em> Klik untuk membongkar.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.tree}>
            <div className={styles.root}>{MASALAH}</div>
            {!open
              ? <button className={styles.split} onClick={(e) => { setOpen(true); (e.currentTarget as HTMLButtonElement).blur() }}>Pecah masalah ↓</button>
              : <div className={styles.branches}>{BAGIAN.map((b, i) => <button key={b.nama} className={`${styles.branch} ${sel === i ? styles.bOn : ''}`} onClick={() => setSel(i)}>{b.nama}</button>)}</div>}
          </div>
        </div>
        <div className={styles.side}>
          {sel !== null
            ? <div className={styles.detail}><div className={styles.dName}>{BAGIAN[sel].nama}</div><ul className={styles.subList}>{BAGIAN[sel].sub.map(s => <li key={s}>{s}</li>)}</ul></div>
            : <div className={styles.allNote}>{open ? 'Klik tiap bagian untuk melihat langkah-langkah kecilnya - tiap bagian kini jauh lebih mudah dikerjakan.' : 'Satu masalah besar terasa menakutkan. Setelah dipecah, tiap bagian bisa ditangani satu per satu.'}</div>}
        </div>
      </div>
    </>
  )
}
