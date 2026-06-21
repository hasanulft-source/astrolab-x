import { useState } from 'react'
import styles from './ui.module.css'
const NILAI = [85, 90, 78, 88, 95]
export function Scene2Olah() {
  const [olah, setOlah] = useState(false)
  const rata = Math.round(NILAI.reduce((a, b) => a + b, 0) / NILAI.length)
  const lulus = NILAI.filter(n => n >= 75).length
  const tertinggi = Math.max(...NILAI)
  return (
    <>
      <p className={styles.prompt}>Ubah <em>data mentah</em> menjadi <em>informasi.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.dataBox}>
            <div className={styles.dLabel}>DATA</div>
            <div className={styles.rawRow}>{NILAI.map((n, i) => <span key={i} className={styles.cell}>{n}</span>)}</div>
          </div>
        </div>
        <div className={styles.side}>
          {!olah
            ? <button className={styles.btn} onClick={(e) => { setOlah(true); (e.currentTarget as HTMLButtonElement).blur() }}>Olah jadi informasi →</button>
            : <div className={styles.infoBox}>
                <div className={styles.iLabel}>INFORMASI</div>
                <div className={styles.iItem}>Rata-rata kelas: <b>{rata}</b></div>
                <div className={styles.iItem}>Nilai tertinggi: <b>{tertinggi}</b></div>
                <div className={styles.iItem}>Siswa lulus (≥ 75): <b>{lulus} dari {NILAI.length}</b></div>
              </div>}
        </div>
      </div>
    </>
  )
}
