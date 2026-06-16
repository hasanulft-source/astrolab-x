import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Ketiganya bermain dengan <em>wujud zat.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}><b>Evaporasi</b> & <b>kristalisasi</b> mengubah cairan jadi padatan dengan menguapkan pelarut, lalu membentuk kristal. <b>Sublimasi</b> langsung mengubah padat menjadi gas.</div>
          <div className={styles.exit}>Kuncinya: setiap zat punya titik didih, titik leleh, dan sifat menyublim yang berbeda - perbedaan inilah yang dimanfaatkan untuk memisahkannya.</div>
        </div>
      </div>
    </>
  )
}
