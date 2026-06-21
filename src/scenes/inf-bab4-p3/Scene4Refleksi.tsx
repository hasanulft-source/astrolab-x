import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Data pribadimu adalah <em>milikmu</em> - jagalah.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Sebelum mengisi atau membagikan data, tanyakan: "Apakah aplikasi/orang ini benar-benar perlu tahu?" Bagikan <b>seperlunya saja</b>, dan utamakan keselamatan.</div>
          <div className={styles.exit}>Aturan aman: jangan pernah membagikan alamat lengkap, nomor penting, lokasi real-time, atau kata sandi kepada orang yang tidak kamu kenal di dunia maya.</div>
        </div>
      </div>
    </>
  )
}
