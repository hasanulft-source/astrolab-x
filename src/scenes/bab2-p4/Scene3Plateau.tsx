import { HeatingCurve } from '../../components/HeatingCurve'
import styles from './ui.module.css'

export function Scene3Plateau() {
  return (
    <>
      <p className={styles.prompt}>Garis datar (<em>plateau</em>) itu kuncinya — kenapa suhu diam saat zat berubah wujud?</p>
      <div className={styles.main}>
        <div className={styles.viz}><HeatingCurve progress={0.27} /></div>
        <div className={styles.side}>
          <div className={styles.note}>Saat mencair atau mendidih, kalor yang masuk <b>tidak menaikkan suhu</b>. Energi itu dipakai untuk <b>memutus susunan partikel</b> — mengubah wujud, bukan menambah gerak.</div>
          <div className={styles.hl}>Setelah seluruh zat berubah wujud, suhu baru naik lagi. Itulah kenapa air mendidih tetap 100°C selama masih ada air yang menguap.</div>
        </div>
      </div>
    </>
  )
}
