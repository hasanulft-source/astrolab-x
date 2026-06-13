import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Dapur rumahmu adalah <em>laboratorium kalor</em> — ketiganya terjadi setiap hari.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.field}><span className={styles.fLabel}>exit ticket</span><p>Sebutkan satu contoh konduksi, konveksi, dan radiasi dari dapur rumahmu.</p></div>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Kenapa gagang panci sering dibuat dari plastik atau kayu, bukan logam?</p></div>
        </div>
        <div className={styles.side}>
          <div className={styles.reflect}>Kunci beda: <b>konduksi</b> lewat padat (partikel diam), <b>konveksi</b> lewat aliran fluida (partikel pindah), <b>radiasi</b> tanpa medium (gelombang).</div>
        </div>
      </div>
    </>
  )
}
