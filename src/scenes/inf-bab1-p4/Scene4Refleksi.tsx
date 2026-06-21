import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Blok-blok itu sebenarnya adalah <em>algoritma yang dijalankan.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Saat menyusun blok, kamu sedang menerapkan semua yang dipelajari di bab ini: memecah tujuan (dekomposisi), mengenali langkah berulang (pola), dan mengurutkannya (algoritma).</div>
          <div className={styles.exit}><b>Perulangan</b> membuat program ringkas, dan <b>kondisi (JIKA-MAKA)</b> membuatnya bisa mengambil keputusan. Dua hal inilah yang membuat program terasa "pintar".</div>
        </div>
      </div>
    </>
  )
}
