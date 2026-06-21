import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Komputer bekerja karena keempat kelompok ini <em>bekerja sama.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Data <b>masuk</b> lewat input, <b>diolah</b> oleh prosesor, <b>keluar</b> lewat output, dan bisa <b>disimpan</b> untuk dipakai lagi. Jika satu bagian rusak, sistem tak berjalan utuh.</div>
          <div className={styles.exit}>Di pertemuan berikutnya kita lihat bagaimana keempatnya bekerja dalam satu siklus: <b>Input → Proses → Output</b>.</div>
        </div>
      </div>
    </>
  )
}
