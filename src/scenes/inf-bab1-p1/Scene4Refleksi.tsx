import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Berpikir komputasional bukan hanya untuk <em>komputer.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Keempat pondasi ini adalah cara berpikir memecahkan masalah <b>apa pun</b> - dari mengatur jadwal belajar hingga merencanakan acara kelas. Komputer hanya salah satu alat untuk menjalankannya.</div>
          <div className={styles.exit}>Di pertemuan berikutnya kita latih dua pondasi yang paling sering dipakai: <b>dekomposisi</b> dan <b>pengenalan pola</b>.</div>
        </div>
      </div>
    </>
  )
}
