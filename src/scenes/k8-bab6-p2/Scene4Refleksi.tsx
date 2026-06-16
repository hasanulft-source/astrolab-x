import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Dua metode, dua <em>dasar pemisahan</em> yang berbeda.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}><b>Filtrasi</b> memanfaatkan perbedaan <b>ukuran partikel</b> - memisahkan padatan dari cairan.</div>
          <div className={styles.exit}><b>Distilasi</b> memanfaatkan perbedaan <b>titik didih</b> - memisahkan cairan dari cairan/zat terlarut, misalnya membuat air tawar dari air laut atau menyuling minyak atsiri.</div>
        </div>
      </div>
    </>
  )
}
