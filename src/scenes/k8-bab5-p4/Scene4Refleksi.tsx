import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Cermin & lensa adalah jantung semua <em>alat optik.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Dari <b>lup, kacamata, kamera, mikroskop,</b> hingga <b>teleskop</b> - semua bekerja dengan mengatur pemantulan dan pembiasan cahaya lewat cermin atau lensa.</div>
          <div className={styles.exit}>Bahkan <b>mata kita</b> adalah alat optik: lensa mata membiaskan cahaya agar membentuk bayangan tajam di retina. Cacat mata diperbaiki dengan lensa kacamata.</div>
        </div>
      </div>
    </>
  )
}
