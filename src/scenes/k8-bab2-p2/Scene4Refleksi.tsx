import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Kita bernapas <em>~12-20 kali per menit</em> - dan bisa berubah.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Frekuensi pernapasan dipengaruhi <b>aktivitas</b> (naik saat berlari), <b>usia</b>, dan <b>suhu</b>. Saat butuh banyak energi, tubuh menambah laju napas untuk memasok oksigen.</div>
          <div className={styles.exit}>Inspirasi dan ekspirasi yang silih berganti inilah yang menjaga pasokan O2 dan membuang CO2 - tanpa henti, siang dan malam.</div>
        </div>
      </div>
    </>
  )
}
