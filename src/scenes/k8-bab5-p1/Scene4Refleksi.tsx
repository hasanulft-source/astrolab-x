import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Gelombang memindahkan <em>energi</em>, bukan materi.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Partikel medium hanya bergetar di tempatnya, sementara <b>energi</b> berpindah dari satu titik ke titik lain. Cepat rambat gelombang: <b>v = λ × f</b>.</div>
          <div className={styles.exit}>Dua besaran penting: <b>amplitudo</b> menentukan besar energi, <b>frekuensi</b> menentukan rapat-renggangnya gelombang.</div>
        </div>
      </div>
    </>
  )
}
