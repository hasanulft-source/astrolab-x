import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Pemuaian itu kecil, tapi pada struktur raksasa — <em>nyata dan penting</em>.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Ilmu fisika apa yang membuat jembatan tidak roboh karena pemuaian?</p></div>
          <div className={styles.field}><span className={styles.fLabel}>exit ticket</span><p>Berapa cm kabel 50 m bertambah panjang saat suhu naik 15°C? (α = 0,000017/°C)</p></div>
        </div>
        <div className={styles.side}>
          <div className={styles.hl}>Urutan muai: <b>gas &gt; cair &gt; padat</b>. Dan untuk padat: ΔL = L₀·α·ΔT — makin panjang & makin panas, makin besar pemuaiannya.</div>
        </div>
      </div>
    </>
  )
}
