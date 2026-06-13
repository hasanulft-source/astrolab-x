import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Cheat sheet pribadimu — cara cepat membedakan keduanya:</p>
      <div className={styles.cheat}>
        <div className={styles.cheatCol}>
          <span className={`${styles.cheatH} ${styles.cheatHF}`}>Perubahan Fisika</span>
          <span className={styles.cheatItem}>Zatnya tetap sama</span>
          <span className={styles.cheatItem}>Umumnya bisa dikembalikan (reversibel)</span>
          <span className={styles.cheatItem}>Berubah wujud, bentuk, atau ukuran</span>
          <span className={styles.cheatItem}>Contoh: mencair, merobek, melarutkan gula</span>
        </div>
        <div className={styles.cheatCol}>
          <span className={`${styles.cheatH} ${styles.cheatHK}`}>Perubahan Kimia</span>
          <span className={styles.cheatItem}>Terbentuk zat baru</span>
          <span className={styles.cheatItem}>Umumnya tidak bisa dikembalikan</span>
          <span className={styles.cheatItem}>Tanda: warna, gas, endapan, perubahan suhu</span>
          <span className={styles.cheatItem}>Contoh: membakar, berkarat, membusuk</span>
        </div>
      </div>
    </>
  )
}
