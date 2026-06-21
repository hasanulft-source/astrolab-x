import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Banyak orang memakai kata sandi <em>"123456"</em> atau <em>"password".</em> Tahukah kamu berapa lama komputer membobolnya? <em>Kurang dari sedetik.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookPw}>123456</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Kata sandi adalah <b>kunci rumah digital</b>-mu. Sandi yang lemah seperti pintu tanpa gembok. Sandi <b>kuat</b> melindungi semua data & akunmu.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Seberapa bahaya? →</button>}
        </div>
      </div>
    </>
  )
}
