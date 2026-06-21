import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Satu siklus sederhana menjalankan <em>seluruh dunia digital.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Dari mengetik tugas, bermain game, hingga membuka video - semuanya mengikuti pola yang sama: <b>Input → Proses → Output</b>, dengan data disimpan di RAM atau penyimpanan.</div>
          <div className={styles.exit}>Mirip manusia: <b>mata & telinga</b> sebagai input, <b>otak</b> sebagai pemroses, <b>mulut & tangan</b> sebagai output, dan <b>ingatan</b> sebagai penyimpanan.</div>
        </div>
      </div>
    </>
  )
}
