import { useState } from 'react'
import styles from './ui.module.css'
export function Scene3Pseudo() {
  const [pj, setPj] = useState(8)
  const [lb, setLb] = useState(5)
  const luas = pj * lb
  return (
    <>
      <p className={styles.prompt}>Algoritma bisa ditulis sebagai <em>pseudocode.</em> Geser nilainya - lihat program "berjalan".</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <pre className={styles.code}>
{'MULAI\n'}
{'  baca panjang  '}<span className={styles.v}>{pj}</span>{'\n'}
{'  baca lebar    '}<span className={styles.v}>{lb}</span>{'\n'}
{'  luas = panjang × lebar\n'}
{'  tampilkan luas  '}<span className={styles.out}>{luas}</span>{'\n'}
{'SELESAI'}
          </pre>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>panjang</label><input type="range" min={1} max={12} value={pj} onChange={e => setPj(+e.target.value)} /><span className={styles.val}>{pj}</span></div>
          <div className={styles.sliderRow}><label>lebar</label><input type="range" min={1} max={12} value={lb} onChange={e => setLb(+e.target.value)} /><span className={styles.val}>{lb}</span></div>
          <div className={styles.note}>Komputer membaca masukan, menghitung, lalu menampilkan hasil - tepat seperti urutan di pseudocode.</div>
        </div>
      </div>
    </>
  )
}
