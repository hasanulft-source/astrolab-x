import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Di film, ledakan di luar angkasa terdengar menggelegar. Faktanya, antariksa itu <em>senyap total.</em> Mengapa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookSpace}><span className={styles.mute}>✕</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Karena bunyi adalah <b>gelombang mekanik</b> - ia perlu <b>medium</b> (zat) untuk merambat. Di ruang hampa tak ada partikel yang bisa digetarkan, jadi tak ada suara.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa senyap? →</button>}
        </div>
      </div>
    </>
  )
}
