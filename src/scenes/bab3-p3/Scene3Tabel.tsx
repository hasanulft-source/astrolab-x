import { CARA } from './data'
import styles from './ui.module.css'

export function Scene3Tabel() {
  return (
    <>
      <p className={styles.prompt}>Tiga cara, satu perbandingan. Bedanya ada pada <em>medium</em> dan apakah <em>partikel ikut berpindah</em>.</p>
      <div className={styles.tableWrap}>
        <div className={styles.thead}><span>Cara</span><span>Medium</span><span>Partikel</span><span>Contoh</span></div>
        {CARA.map(c => (
          <div key={c.id} className={styles.trow}><b>{c.name}</b><span>{c.medium}</span><span>{c.partikel}</span><span>{c.contoh}</span></div>
        ))}
      </div>
    </>
  )
}
