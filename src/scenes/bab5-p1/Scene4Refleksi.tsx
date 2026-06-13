import styles from './ui.module.css'

export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Jadi, apa yang membuat sesuatu <em>benar-benar hidup?</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Makhluk hidup tidak ditentukan oleh <b>satu</b> ciri, tetapi oleh <b>seluruh ciri sekaligus</b>: bergerak, bernapas, butuh nutrisi, tumbuh, peka rangsang, berkembang biak, dan mengeluarkan zat sisa. Api, kristal, dan robot hanya meniru sebagian - itulah sebabnya mereka bukan makhluk hidup.</div>
          <div className={styles.exit}><b>Tiket keluar:</b> Mengapa <b>virus</b> sulit digolongkan? Karena ia bisa berkembang biak (1 ciri MH), tetapi hanya di dalam sel inang dan tak punya ciri lain - sehingga berada di perbatasan antara hidup dan tak hidup.</div>
        </div>
      </div>
    </>
  )
}
