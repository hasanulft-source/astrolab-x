import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Data hanyalah bahan mentah - <em>informasi</em>-lah yang berguna.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Data adalah fakta mentah (angka, teks, tanggal). Setelah <b>diolah dan diberi konteks</b>, ia menjadi informasi yang bisa menjawab pertanyaan dan mendasari keputusan.</div>
          <div className={styles.exit}>Mengenali <b>jenis data</b> penting karena menentukan cara mengolahnya - angka bisa dijumlah, teks bisa diurutkan, tanggal bisa dihitung selisihnya.</div>
        </div>
      </div>
    </>
  )
}
