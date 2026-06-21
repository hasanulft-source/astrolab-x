import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Sort & filter mengubah data berantakan jadi <em>jawaban cepat.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}><b>Mengurutkan</b> menata data berdasarkan suatu kolom (terbesar/terkecil, A-Z), sehingga peringkat dan pola langsung terlihat.</div>
          <div className={styles.exit}><b>Menyaring</b> menampilkan hanya data yang memenuhi kriteria tertentu. Pada data ribuan baris, dua alat ini menghemat waktu luar biasa.</div>
        </div>
      </div>
    </>
  )
}
