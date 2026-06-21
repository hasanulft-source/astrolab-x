import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Literasi digital adalah tiga keterampilan yang menyatu: <em>cari, nilai, kelola.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}><b>Mencari</b> informasi secara efektif, <b>menilai</b> kredibilitas dan kebenarannya, lalu <b>mengelola</b> serta merujuknya dengan jujur - itulah ciri warga digital yang cerdas.</div>
          <div className={styles.exit}>Di dunia yang dibanjiri informasi, kemampuan memilah yang benar dari yang menyesatkan adalah salah satu keterampilan terpenting abad ini.</div>
        </div>
      </div>
    </>
  )
}
