import styles from './ui.module.css'

export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Model partikel itu <em>alat berpikir</em> — bukan hafalan. Sekali paham, kamu bisa menjelaskan hampir semua sifat zat.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Kenapa zat cair punya volume tetap tapi bentuknya berubah-ubah?</p></div>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Bisakah kamu jelaskan kenapa balon bisa dipencet, tapi botol berisi air penuh tidak?</p></div>
        </div>
        <div className={styles.side}>
          <div className={styles.reflect}>Kunci: <b>jarak</b> dan <b>gerak</b> partikel menentukan bentuk, volume, dan kemampatan zat.</div>
        </div>
      </div>
    </>
  )
}
