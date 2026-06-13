import { MotionGraph } from '../../components/MotionGraph'
import styles from './ui.module.css'

export function Scene2Konsep() {
  return (
    <>
      <p className={styles.prompt}>Pada GLB, posisi bertambah <em>rata</em> seiring waktu — grafik s-t selalu berupa <em>garis lurus</em>.</p>
      <div className={styles.main}>
        <div className={styles.graphBox}><MotionGraph series={[{ points: [[0, 0], [10, 80]] }]} xMax={10} yMax={90} xLabel="waktu (s) →" yLabel="posisi s (m)" /></div>
        <div className={styles.side}>
          <div className={styles.note}>Ciri GLB: kecepatan <b>tetap</b>, percepatan <b>nol</b>, lintasan lurus. Garis s-t yang lurus = kecepatan tidak berubah.</div>
          <div className={styles.hl}>Kemiringan (kecuraman) garis ini <b>= kecepatan</b> benda. Kita buktikan di scene berikut.</div>
        </div>
      </div>
    </>
  )
}
