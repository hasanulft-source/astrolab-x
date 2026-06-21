import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Software adalah <em>jembatan</em> antara manusia dan mesin.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Kita memberi perintah lewat <b>aplikasi</b>; <b>sistem operasi</b> menerjemahkannya menjadi instruksi yang dipahami perangkat keras. Tanpa software, hardware secanggih apa pun tak berguna.</div>
          <div className={styles.exit}>Dan dengan <b>manajemen file</b> yang rapi, semua hasil kerjamu tersimpan teratur dan mudah ditemukan - kebiasaan kecil yang menghemat banyak waktu.</div>
        </div>
      </div>
    </>
  )
}
