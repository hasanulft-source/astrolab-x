import { DensityColumn } from '../../components/DensityColumn'
import styles from './ui.module.css'

export function Scene2Layer() {
  return (
    <>
      <p className={styles.prompt}>Tiga cairan dalam satu gelas akan menyusun diri sesuai <em>massa jenisnya</em> — yang paling rapat di bawah.</p>
      <div className={styles.main}>
        <div className={styles.viz}><DensityColumn /></div>
        <div className={styles.side}>
          <div className={styles.note}>Madu (1,36 g/cm³) paling rapat → dasar. Air (1,00) di tengah. Minyak (0,92) paling ringan → atas.</div>
          <div className={styles.hl}>Urutan ini <b>tidak tergantung</b> berapa banyak yang dituang — hanya pada massa jenis tiap cairan.</div>
        </div>
      </div>
    </>
  )
}
