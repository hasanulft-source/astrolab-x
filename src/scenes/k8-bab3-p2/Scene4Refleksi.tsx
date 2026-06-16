import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Inilah <em>Hukum Kekekalan Energi.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Energi <b>tidak dapat diciptakan atau dimusnahkan</b> - hanya berubah dari satu bentuk ke bentuk lain. Pada bola tadi, jumlah Ep + Ek selalu tetap.</div>
          <div className={styles.exit}>Karena itu setiap alat sebenarnya bukan "membuat" energi, melainkan <b>mengubah</b> energi yang sudah ada - sebagian sering terbuang jadi kalor.</div>
        </div>
      </div>
    </>
  )
}
