import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Sekarang kamu tahu kenapa kolam tetap sejuk — <em>kalor jenis air besar</em>.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Kenapa daerah dekat pantai suhunya lebih stabil dibanding daerah gurun?</p></div>
          <div className={styles.field}><span className={styles.fLabel}>exit ticket</span><p>Hitung kalor untuk memanaskan 2 kg air dari 25°C ke 75°C. (c air = 4200)</p></div>
        </div>
        <div className={styles.side}>
          <div className={styles.hl}>Ingat: <b>Q = m · c · ΔT</b>. Air dengan c besar menyimpan & melepas banyak panas perlahan — itu yang menstabilkan suhu lautan & tubuh kita.</div>
        </div>
      </div>
    </>
  )
}
