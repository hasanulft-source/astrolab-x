import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tetap saja, tidak ada yang <em>gratis.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Gaya angkat memang berlipat besar, tetapi pengisap kecil harus ditekan <b>jauh lebih panjang</b> daripada naiknya pengisap besar. Usaha total tetap sama - persis seperti pesawat sederhana.</div>
          <div className={styles.exit}>Inti Hukum Pascal: tekanan pada zat cair tertutup diteruskan <b>sama besar ke segala arah</b>.</div>
        </div>
      </div>
    </>
  )
}
