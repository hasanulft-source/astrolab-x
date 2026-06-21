import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Di papan tertulis: <em>85, 90, 78, 88, 95.</em> Sekadar deretan angka. Tapi gurumu bisa tahu "rata-rata kelas 87, dan semua lulus." Bagaimana angka tadi berubah jadi makna?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookNums}>85 90 78 88 95</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Angka mentah itu disebut <b>data</b>. Setelah diolah (dirata-rata, dibandingkan), ia menjadi <b>informasi</b> yang bermakna dan bisa dipakai mengambil keputusan.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bagaimana caranya? →</button>}
        </div>
      </div>
    </>
  )
}
