import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Aturan emas literasi digital: <em>saring sebelum sharing.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Sebelum membagikan apa pun, berhenti sejenak: <b>cek sumbernya, cari konfirmasi resmi, dan jangan terbawa emosi.</b> Hoaks dirancang untuk menyebar cepat justru karena orang tidak sempat berpikir.</div>
          <div className={styles.exit}>Kalau ragu, gunakan situs pemeriksa fakta seperti <b>cekfakta.com</b> atau tanyakan ke orang dewasa yang tepercaya. Lebih baik telat membagikan daripada ikut menyebar kebohongan.</div>
        </div>
      </div>
    </>
  )
}
