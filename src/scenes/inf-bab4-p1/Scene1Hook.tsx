import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu menulis komentar kasar, lalu menghapusnya. "Aman, sudah hilang," pikirmu. Tapi seseorang sempat <em>men-screenshot.</em> Apa pelajarannya?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookPhone}><div className={styles.bubble}>!?#</div></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Internet adalah <b>ruang publik</b> - apa pun yang kamu unggah bisa dilihat banyak orang, disalin, dan menjadi <b>jejak digital permanen</b>. Beretikalah seperti di tempat umum nyata.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa pelajarannya? →</button>}
        </div>
      </div>
    </>
  )
}
