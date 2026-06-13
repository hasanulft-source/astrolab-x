import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Grafik v-t menyimpan <em>dua informasi sekaligus</em> — kemiringan dan luas.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>ingat</span><p>Kemiringan v-t = percepatan (a).</p></div>
          <div className={styles.field}><span className={styles.fLabel}>ingat</span><p>Luas di bawah v-t = jarak tempuh (s).</p></div>
          <div className={styles.field}><span className={styles.fLabel}>exit ticket</span><p>Mobil dari diam, a = 2 m/s² selama 5 s. Berapa v akhir dan jarak s?</p></div>
        </div>
        <div className={styles.side}>
          <div className={styles.hl}>Jawaban: v = 0 + 2×5 = <b>10 m/s</b>; s = ½·2·5² = <b>25 m</b>. Cocok dengan luas segitiga di grafik v-t.</div>
        </div>
      </div>
    </>
  )
}
