import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tanah bukan benda mati - ia sebuah <em>sistem hidup.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Keseimbangan mineral, bahan organik, air, dan udara membuat tanah mampu menopang kehidupan. Jika satu komponen rusak - misalnya udara hilang karena tanah terlalu padat - tumbuhan pun sulit hidup.</div>
          <div className={styles.exit}>Di pertemuan berikutnya kita lihat bagaimana komponen ini tersusun dalam <b>lapisan-lapisan tanah</b>.</div>
        </div>
      </div>
    </>
  )
}
