import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Mengenal alat bukan sekadar hafal nama — tapi tahu <em>cara memakainya dengan aman</em>.</p>
      <div className={styles.main}>
        <div className={styles.panel}>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Alat mana yang menurutmu paling penting diketahui? Mengapa?</p></div>
          <div className={styles.field}><span className={styles.fLabel}>renungkan</span><p>Kenapa keselamatan harus jadi prioritas sebelum menyalakan pembakar?</p></div>
        </div>
        <div className={styles.panel}>
          <div className={styles.reflect}>Empat kelompok alat: <b>wadah & reaksi</b>, <b>alat ukur</b>, <b>pemanas</b>, dan <b>penunjang</b>. Tiap alat punya fungsi dan aturan keselamatannya sendiri.</div>
        </div>
      </div>
    </>
  )
}
