import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Sepulang sekolah kamu langsung main gawai sampai larut - lupa makan, PR belum disentuh, mata perih. <em>Masih wajarkah?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookEye}>😓</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Dunia digital menyenangkan, tapi perlu <b>keseimbangan</b>. Terlalu lama di layar bisa mengganggu kesehatan, tugas, dan hubungan nyata - bahkan menimbulkan <b>kecanduan</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Masih wajar? →</button>}
        </div>
      </div>
    </>
  )
}
