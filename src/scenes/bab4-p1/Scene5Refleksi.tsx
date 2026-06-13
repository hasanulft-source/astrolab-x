import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Jarak & kelajuan cerita “seberapa banyak bergerak”. Perpindahan & kecepatan cerita “seberapa jauh berpindah, ke mana”.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>exit ticket</span><p>Jelaskan beda kelajuan dan kecepatan dengan contoh dari kegiatanmu hari ini.</p></div>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Kapan nilai jarak persis sama dengan perpindahan?</p></div>
        </div>
        <div className={styles.side}>
          <div className={styles.reflect}>Jawaban: jarak = perpindahan hanya saat <b>lintasan lurus satu arah</b> (tanpa belok atau balik).</div>
        </div>
      </div>
    </>
  )
}
