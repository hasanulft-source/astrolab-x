import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Di balik layar tetap ada <em>manusia</em> - dan jejak yang abadi.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Aturan <b>netiket</b> sederhana: perlakukan orang di dunia maya seperti kamu ingin diperlakukan. Hindari ujaran kebencian, SARA, dan perundungan - semuanya meninggalkan jejak.</div>
          <div className={styles.exit}>Sebelum mengunggah, tanyakan: "Apakah aku nyaman jika ini dilihat guru, orang tua, atau diriku 10 tahun lagi?" Jika ragu, jangan unggah.</div>
        </div>
      </div>
    </>
  )
}
