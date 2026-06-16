import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tanpa ekskresi, zat sisa akan <em>meracuni</em> tubuh.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Zat sisa metabolisme seperti urea dan CO2 bersifat <b>racun</b> bila menumpuk. Ekskresi menjaga keseimbangan kimia di dalam tubuh agar sel tetap sehat.</div>
          <div className={styles.exit}>Keempat organ bekerja bersama - bila salah satu terganggu (mis. ginjal), beban organ lain bertambah. Maka menjaganya penting.</div>
        </div>
      </div>
    </>
  )
}
