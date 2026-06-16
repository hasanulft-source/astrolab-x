import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Saluran pencernaan bisa <em>terganggu</em> bila tak dijaga.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Contoh gangguan: <b>maag</b> (asam lambung berlebih), <b>diare</b> (usus besar gagal menyerap air), dan <b>sembelit</b> (feses mengeras karena kurang serat & air).</div>
          <div className={styles.exit}>Menjaganya sederhana: makan <b>teratur</b>, cukup <b>serat</b> (sayur & buah), dan banyak <b>minum air</b>.</div>
        </div>
      </div>
    </>
  )
}
