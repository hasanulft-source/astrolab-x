import { useState } from 'react'
import styles from './ui.module.css'
export function Scene2Jejak() {
  const [posted, setPosted] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Satu unggahan, lalu lihat <em>ke mana saja ia bisa pergi.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.spread}>
            <div className={styles.origin}>Unggahanmu</div>
            {posted && <div className={styles.dots}>{['Teman', 'Teman teman', 'Screenshot', 'Grup lain', 'Selamanya'].map((d, i) => <span key={i} className={styles.node} style={{ animationDelay: `${i * 0.08}s` }}>{d}</span>)}</div>}
          </div>
        </div>
        <div className={styles.side}>
          {!posted
            ? <button className={styles.btn} onClick={(e) => { setPosted(true); (e.currentTarget as HTMLButtonElement).blur() }}>Unggah →</button>
            : <div className={styles.detail}>Sekali diunggah, kontrolmu hilang. Orang lain bisa menyalin, menyebar, dan menyimpannya - bahkan setelah kamu menghapus aslinya. Inilah <b>jejak digital</b>.</div>}
        </div>
      </div>
    </>
  )
}
