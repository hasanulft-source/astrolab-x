import styles from './ui.module.css'

export function Scene2Skalar() {
  return (
    <>
      <p className={styles.prompt}>Kuncinya: <em>skalar</em> (hanya nilai) vs <em>vektor</em> (nilai + arah). Seperti <em>odometer</em> vs <em>GPS</em>.</p>
      <div className={styles.cmp}>
        <div className={styles.cmpCol}>
          <span className={`${styles.cmpH} ${styles.cmpHs}`}>Skalar — hanya nilai</span>
          <span className={styles.cmpItem}><b>Jarak</b>: panjang seluruh lintasan</span>
          <span className={styles.cmpItem}><b>Kelajuan</b>: jarak ÷ waktu</span>
          <span className={styles.cmpItem}>Seperti odometer — hanya menghitung total tempuh</span>
          <span className={styles.cmpItem}>Tidak peduli arah</span>
        </div>
        <div className={styles.cmpCol}>
          <span className={`${styles.cmpH} ${styles.cmpHv}`}>Vektor — nilai + arah</span>
          <span className={styles.cmpItem}><b>Perpindahan</b>: jarak lurus awal→akhir</span>
          <span className={styles.cmpItem}><b>Kecepatan</b>: perpindahan ÷ waktu</span>
          <span className={styles.cmpItem}>Seperti GPS — “seberapa jauh dari titik awal”</span>
          <span className={styles.cmpItem}>Punya arah (mis. 5 m ke timur)</span>
        </div>
      </div>
    </>
  )
}
