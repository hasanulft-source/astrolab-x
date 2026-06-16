import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Bunyi adalah gelombang <em>longitudinal</em> yang butuh medium.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Bunyi merambat sebagai <b>rapatan dan regangan</b> partikel medium - arah getarnya searah arah rambat. Tanpa medium (hampa), bunyi tidak ada.</div>
          <div className={styles.exit}>Manusia mendengar bunyi pada rentang <b>20 Hz - 20.000 Hz</b>. Di bawahnya disebut infrasonik, di atasnya ultrasonik (dipakai USG & sonar).</div>
        </div>
      </div>
    </>
  )
}
