import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Campuran bisa <em>dipisahkan kembali</em> - tanpa reaksi kimia.</p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Berbeda dari senyawa, komponen campuran tidak terikat secara kimia. Karena itu dapat dipisahkan kembali lewat <b>cara fisika</b> - memanfaatkan perbedaan sifat seperti ukuran, titik didih, atau massa jenis.</div>
          <div className={styles.exit}>Pada pertemuan berikutnya kita pelajari metodenya: <b>filtrasi, distilasi, evaporasi, kromatografi,</b> dan lainnya.</div>
        </div>
      </div>
    </>
  )
}
