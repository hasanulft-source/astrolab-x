import { CIRI } from './data'
import styles from './ui.module.css'

export function Scene2Ciri() {
  return (
    <>
      <p className={styles.prompt}>Bagaimana tahu suatu perubahan itu <em>kimia</em>? Cari <em>4 tanda</em> ini — cukup satu muncul, kemungkinan besar perubahan kimia.</p>
      <div className={styles.grid4}>
        {CIRI.map((c, i) => (
          <div key={c.id} className={styles.ciri}>
            <span className={styles.ciriNum}>tanda {i + 1}</span>
            <span className={styles.ciriName}>{c.ciri}</span>
            <span className={styles.ciriContoh}>{c.contoh}</span>
          </div>
        ))}
      </div>
    </>
  )
}
