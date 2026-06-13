import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kolam renang dan aspal di sebelahnya disinari matahari yang sama. <em>Kenapa aspal jauh lebih cepat panas?</em></p>
      <div className={styles.main}>
        <div className={styles.side}>
          <div className={styles.note}>Padahal keduanya menerima energi matahari yang sama. Tapi air kolam tetap sejuk, sementara aspal sampai tak bisa diinjak.</div>
          {!show && <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa? →</button>}
        </div>
        <div className={styles.side}>
          {show && <div className={styles.hl}>Karena <b>kalor jenis</b> (c) air sangat besar — air butuh banyak energi untuk naik 1°C. Aspal kalor jenisnya kecil, jadi cepat panas. Tiap zat punya “daya tahan panas” sendiri.</div>}
        </div>
      </div>
    </>
  )
}
