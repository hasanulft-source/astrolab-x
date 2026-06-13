import styles from './ui.module.css'

export function Scene5Refleksi() {
  return (
    <>
      <p className={styles.prompt}>Grafik pemanasan bercerita banyak — kalau kamu tahu cara membacanya.</p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.note}>Garis <b>miring</b> = suhu naik (zat memanas dalam satu wujud).</div>
          <div className={styles.note}>Garis <b>datar</b> = perubahan wujud sedang berlangsung (suhu tetap).</div>
        </div>
        <div className={styles.side}>
          <div className={styles.reflect}>Renungkan: dari sebuah grafik pemanasan, bagaimana kamu menemukan titik lebur dan titik didih suatu zat?</div>
        </div>
      </div>
    </>
  )
}
