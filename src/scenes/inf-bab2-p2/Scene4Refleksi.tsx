import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Kekuatan spreadsheet ada pada <em>formula.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Setiap rumus diawali tanda <b>=</b> dan bekerja secara <b>otomatis</b>. Saat data berubah, hasil ikut berubah tanpa perlu menghitung ulang - cepat, akurat, dan bebas dari salah hitung.</div>
          <div className={styles.exit}>Formula dasar yang wajib dikuasai: <b>SUM</b> (jumlah), <b>AVERAGE</b> (rata-rata), <b>MAX</b> & <b>MIN</b> (tertinggi/terendah), dan <b>COUNT</b> (banyak data).</div>
        </div>
      </div>
    </>
  )
}
