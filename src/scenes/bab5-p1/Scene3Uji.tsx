import { useState } from 'react'
import { KASUS, CIRI } from './data'
import styles from './ui.module.css'

const BADGE: Record<string, [string, string]> = {
  ya: ['bYa', 'Makhluk hidup'], tidak: ['bTidak', 'Bukan makhluk hidup'], batas: ['bBatas', 'Di perbatasan'],
}

export function Scene3Uji() {
  const [sel, setSel] = useState(KASUS[0].id)
  const k = KASUS.find(x => x.id === sel)!
  const [bcls, blabel] = BADGE[k.mh]
  return (
    <>
      <p className={styles.prompt}>Sekarang uji kasus yang <em>menjebak</em>. Cek 7 ciri - masih makhluk hidup atau bukan?</p>
      <div className={styles.tabs}>
        {KASUS.map(x => (
          <button key={x.id} className={`${styles.tab} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.checkList}>
            {CIRI.map(c => {
              const ok = k.punya[c.id]
              return (
                <div key={c.id} className={styles.checkRow}>
                  <span className={`${styles.mark} ${ok ? styles.markYes : styles.markNo}`}>{ok ? '✓' : '✗'}</span>{c.nama}
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.verdict}>
            <span className={`${styles.badge} ${styles[bcls]}`}>{blabel}</span>
            <div>{k.verdict}</div>
          </div>
        </div>
      </div>
    </>
  )
}
