import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tanah subur adalah soal <em>keseimbangan.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Kesuburan bukan dari satu faktor saja, melainkan perpaduan <b>tekstur yang pas</b> (seperti lempung), <b>pH mendekati netral</b>, serta <b>cukup bahan organik</b> dan kehidupan mikroba.</div>
          <div className={styles.exit}>Petani menguji pH dan tekstur sebelum menanam, lalu memperbaikinya dengan pengapuran atau pupuk organik agar hasil panen maksimal.</div>
        </div>
      </div>
    </>
  )
}
