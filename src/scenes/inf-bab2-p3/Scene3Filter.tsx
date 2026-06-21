import { useState } from 'react'
import { SISWA } from './data'
import styles from './ui.module.css'
export function Scene3Filter() {
  const [min, setMin] = useState(75)
  const lolos = SISWA.filter(s => s.nilai >= min).length
  return (
    <>
      <p className={styles.prompt}>Geser batas nilai - <em>filter</em> hanya menampilkan data yang memenuhi syarat.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.table}>
            <div className={styles.tHead}><span>Nama</span><span>Nilai</span></div>
            {SISWA.map(s => <div key={s.nama} className={`${styles.tRow} ${s.nilai < min ? styles.dim : ''}`}><span>{s.nama}</span><span className={styles.num}>{s.nilai}</span></div>)}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Nilai minimal</label><input type="range" min={60} max={100} value={min} onChange={e => setMin(+e.target.value)} /><span className={styles.val}>{min}</span></div>
          <div className={styles.count}>{lolos} dari {SISWA.length} siswa memenuhi syarat (≥ {min})</div>
          <div className={styles.note}>Filter tidak menghapus data - ia hanya menyembunyikan yang tidak relevan, sehingga fokus ke yang dicari.</div>
        </div>
      </div>
    </>
  )
}
