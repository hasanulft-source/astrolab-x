import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Di internet, kita berenang dalam lautan <em>konten.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Setiap video, artikel, dan unggahan media sosial adalah <b>konten</b> - informasi yang sengaja dikemas oleh seseorang untuk dibagikan, kadang demi tujuan tertentu.</div>
          <div className={styles.exit}>Karena itu kita perlu menjadi pembaca yang cerdas: bisa <b>mencari, menilai, dan memilah</b> konten. Itulah yang akan kita pelajari di pertemuan-pertemuan berikutnya.</div>
        </div>
      </div>
    </>
  )
}
