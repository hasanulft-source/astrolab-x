import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Lapisan tertipis justru yang <em>paling berharga.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Horizon A (topsoil) hanya setebal beberapa puluh sentimeter, tetapi di situlah <b>hampir semua kehidupan tanah</b> dan kesuburan berada. Tanaman pangan kita bergantung padanya.</div>
          <div className={styles.exit}>Membentuk 1 cm topsoil bisa butuh <b>ratusan tahun</b> - tapi bisa hilang dalam semusim akibat erosi. Itu sebabnya tanah harus dijaga.</div>
        </div>
      </div>
    </>
  )
}
