import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Mencari dengan pintar menghemat <em>waktu dan tenaga.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Kunci pencarian efektif: gunakan <b>kata kunci spesifik</b> (bukan kata umum), dan manfaatkan <b>operator</b> seperti tanda kutip, minus, dan site: untuk mempersempit hasil.</div>
          <div className={styles.exit}>Tapi menemukan banyak hasil belum cukup - kita masih harus <b>menilai</b> apakah informasinya benar dan dapat dipercaya. Itu pembahasan berikutnya.</div>
        </div>
      </div>
    </>
  )
}
