import { useState } from 'react'
import styles from './ui.module.css'
export function Scene3Ulangi() {
  const [n, setN] = useState(4)
  return (
    <>
      <p className={styles.prompt}>Daripada menyalin blok yang sama berulang kali, pakai <em>ULANGI.</em> Geser jumlahnya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.compare}>
            <div className={styles.col}><div className={styles.colHead}>Tanpa perulangan</div><div className={styles.stack}>{Array.from({ length: n }).map((_, i) => <span key={i} className={styles.blkF}>maju</span>)}</div></div>
            <div className={styles.col}><div className={styles.colHead}>Dengan ULANGI</div><div className={styles.loopBlk}><div className={styles.loopHead}>ULANGI {n}×</div><span className={styles.blkF}>maju</span></div></div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.sliderRow}><label>Jumlah langkah</label><input type="range" min={2} max={8} value={n} onChange={e => setN(+e.target.value)} /><span className={styles.val}>{n}×</span></div>
          <div className={styles.note}>Keduanya melakukan hal yang sama, tapi <b>ULANGI</b> jauh lebih ringkas. Inilah <b>perulangan (loop)</b> - salah satu kekuatan utama pemrograman.</div>
        </div>
      </div>
    </>
  )
}
