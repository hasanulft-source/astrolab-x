import { useState } from 'react'
import { SORT_ITEMS, GROUPS } from './data'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [sorted, setSorted] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Ada jutaan jenis makhluk hidup. Mustahil mempelajari semuanya satu per satu. <em>Bagaimana ilmuwan mengaturnya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          {!sorted
            ? <div className={styles.chipWrap}>{SORT_ITEMS.map(it => <span key={it.n} className={styles.chipN}>{it.n}</span>)}</div>
            : <div className={styles.groups}>
                {GROUPS.map((g, gi) => (
                  <div key={g} className={styles.group}>
                    <div className={`${styles.groupH} ${styles['g' + gi]}`}>{g}</div>
                    <div className={styles.groupItems}>{SORT_ITEMS.filter(it => it.g === g).map(it => <span key={it.n} className={`${styles.chipG} ${styles['g' + gi]}`}>{it.n}</span>)}</div>
                  </div>
                ))}
              </div>}
        </div>
        <div className={styles.side}>
          {sorted
            ? <div className={styles.reveal}>Itulah <b>klasifikasi</b>: mengelompokkan makhluk hidup berdasarkan <b>persamaan ciri</b> - seperti menata buku di perpustakaan agar mudah dicari. Tanpa ini, sains tak mungkin rapi.</div>
            : <button className={styles.btn} onClick={(e) => { setSorted(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kelompokkan →</button>}
        </div>
      </div>
    </>
  )
}
