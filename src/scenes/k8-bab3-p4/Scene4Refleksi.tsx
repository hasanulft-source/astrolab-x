import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>KM besar itu menguntungkan - tapi ada <em>harganya.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Keuntungan mekanis besar berarti <b>gaya yang dikeluarkan kecil</b>. Namun sebagai gantinya, <b>jarak atau lintasannya jadi lebih panjang</b>.</div>
          <div className={styles.exit}>Usaha total tidak pernah berkurang - pesawat sederhana hanya <b>menukar gaya dengan jarak</b> agar pekerjaan terasa lebih ringan.</div>
        </div>
      </div>
    </>
  )
}
