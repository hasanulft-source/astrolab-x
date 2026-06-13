import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Simbiosis bukan satu-satunya interaksi.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Ada juga <b>predasi</b> (pemangsa memakan mangsa, mis. ular memangsa katak) dan <b>kompetisi</b> (perebutan sumber daya, mis. tumbuhan berebut cahaya).</div>
          <div className={styles.exit}>Semua interaksi ini bersama-sama <b>menjaga keseimbangan populasi</b> - tak ada satu jenis pun yang tumbuh tanpa batas.</div>
        </div>
      </div>
    </>
  )
}
