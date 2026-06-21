import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Inilah ujung dari analisis data: <em>dari angka menjadi keputusan.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Alur lengkapnya: kumpulkan <b>data</b> → olah jadi <b>informasi</b> → sajikan sebagai <b>visualisasi</b> → tarik <b>kesimpulan</b> untuk mengambil keputusan.</div>
          <div className={styles.exit}>Contohnya, dari grafik tadi pemilik toko bisa memutuskan menambah stok di hari Kamis dan membuat promo di hari Senin. Itulah kekuatan analisis data.</div>
        </div>
      </div>
    </>
  )
}
