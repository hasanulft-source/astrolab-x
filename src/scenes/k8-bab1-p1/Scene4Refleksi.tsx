import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tubuh butuh <em>semua</em> nutrisi - bukan hanya satu.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Lewat uji sederhana (Lugol, Benedict, Biuret, kertas) kita bisa membuktikan kandungan zat dalam makanan. Tiap nutrisi punya peran khas yang tak bisa digantikan yang lain.</div>
          <div className={styles.exit}>Karena itu pola makan harus <b>seimbang</b> - cukup karbohidrat, protein, lemak, vitamin, mineral, dan air sesuai kebutuhan tubuh.</div>
        </div>
      </div>
    </>
  )
}
