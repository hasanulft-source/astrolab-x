import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Kunci dikotomi itu ampuh - tapi <em>tidak sempurna.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Kunci dikotomi mengidentifikasi organisme lewat <b>pertanyaan ya/tidak bertahap</b> berdasarkan ciri yang <b>terlihat</b>. Kelebihannya: sistematis dan mudah dipakai di lapangan.</div>
          <div className={styles.exit}><b>Keterbatasannya:</b> hanya mengandalkan ciri fisik luar - organisme yang sangat mirip bisa keliru. Karena itu identifikasi modern dibantu <b>teknologi DNA</b> yang membaca kode genetik, jauh lebih akurat.</div>
        </div>
      </div>
    </>
  )
}
