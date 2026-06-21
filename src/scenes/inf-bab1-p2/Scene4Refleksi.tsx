import styles from './ui.module.css'
export function Scene4Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Dekomposisi & pola hampir selalu <em>dipakai bersama.</em></p>
      <div className={styles.main} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.side} style={{ justifyContent: 'flex-start', gap: 14 }}>
          <div className={styles.reflect}>Setelah <b>memecah</b> masalah menjadi bagian kecil, kita sering menemukan bahwa beberapa bagian punya <b>pola yang mirip</b> - sehingga bisa diselesaikan dengan cara yang sama.</div>
          <div className={styles.exit}>Misalnya tiap bagian panitia sama-sama butuh: daftar tugas → penanggung jawab → tenggat. Begitu pola ini terlihat, semua bagian jadi lebih cepat ditangani.</div>
        </div>
      </div>
    </>
  )
}
