import { useState } from 'react'
import { KINGS, COLS } from './data'
import styles from './ui.module.css'

export function Scene3Tabel() {
  const [sel, setSel] = useState<string | null>(null)
  return (
    <>
      <p className={styles.prompt}>Bandingkan kelimanya sekaligus. Klik baris untuk <em>menyorot</em> satu kingdom.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.tableWrap}>
          <div className={styles.tRow + ' ' + styles.tHead}>
            <span className={styles.tKing}>Kingdom</span>
            {COLS.map(c => <span key={c.key} className={styles.tCell}>{c.label}</span>)}
          </div>
          {KINGS.map(k => (
            <div key={k.id} className={`${styles.tRow} ${sel === k.id ? styles.tOn : ''}`} onClick={() => setSel(sel === k.id ? null : k.id)}>
              <span className={styles.tKing}>{k.nama}</span>
              {COLS.map(c => <span key={c.key} className={styles.tCell}>{k[c.key]}</span>)}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tNote}>Pembeda paling dasar: <b>membran inti</b> (Monera = prokariot, sisanya eukariot) dan <b>cara makan</b> (autotrof vs heterotrof).</div>
    </>
  )
}
