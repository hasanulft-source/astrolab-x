import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Gawai adalah <em>alat</em>, bukan pengganti hidup.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Dunia digital memberi banyak manfaat, tapi hidup nyata - keluarga, teman, olahraga, tidur cukup - tetap yang utama. Aturlah <b>kapan</b> dan <b>berapa lama</b> kamu online.</div>
          <div className={styles.exit}>Tips sederhana: tetapkan jam bebas-gawai (misal saat makan & sebelum tidur), dan utamakan tugas sebelum hiburan.</div>
        </div>
      </div>
    </>
  )
}
