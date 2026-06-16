import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Tekanan bukan sekadar besarnya gaya - tapi <em>seberapa terpusat</em> gaya itu.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Gaya yang sama bisa menghasilkan tekanan sangat berbeda, tergantung <b>luas bidang sentuhnya</b>. Itulah inti P = F/A.</div>
          <div className={styles.exit}>Satuan tekanan adalah <b>pascal (Pa)</b>, yaitu newton per meter persegi (N/m²).</div>
        </div>
      </div>
    </>
  )
}
