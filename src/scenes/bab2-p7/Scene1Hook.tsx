import { DensityColumn } from '../../components/DensityColumn'
import styles from './ui.module.css'

export function Scene1Hook() {
  return (
    <>
      <p className={styles.prompt}>Tuang minyak ke dalam air — minyak <em>selalu</em> naik ke atas. Kenapa tidak pernah sebaliknya?</p>
      <div className={styles.main}>
        <div className={styles.viz}><DensityColumn layers={[{ name: 'Minyak', rho: 0.92, color: '#d9a441' }, { name: 'Air', rho: 1.00, color: '#1f7d92' }]} /></div>
        <div className={styles.side}>
          <div className={styles.note}>Jawabannya: <b>massa jenis</b> (kerapatan). Minyak punya massa jenis lebih kecil dari air — untuk volume yang sama, minyak lebih ringan, jadi mengambang di atas.</div>
          <div className={styles.hl}>Massa jenis = seberapa padat materi dikemas dalam suatu volume. Itu yang menentukan benda <b>mengapung</b> atau <b>tenggelam</b>.</div>
        </div>
      </div>
    </>
  )
}
