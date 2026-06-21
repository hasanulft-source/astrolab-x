import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Kata sandi yang kuat adalah <em>baris pertahanan pertama.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Gabungkan <b>panjang, huruf besar-kecil, angka, dan simbol</b> - makin beragam, makin sulit dibobol. Sandi pendek & umum bisa ditebak dalam sekejap.</div>
          <div className={styles.exit}>Dengan inilah Bab 4 lengkap: beretika di ruang publik, menjaga keseimbangan, melindungi privasi, dan mengamankan akun. Itulah jati diri <b>warga digital yang bertanggung jawab</b>.</div>
        </div>
      </div>
    </>
  )
}
