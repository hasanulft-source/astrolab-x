import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu ditunjuk jadi ketua panitia pentas seni kelas. Tugasnya terasa <em>sangat besar dan membingungkan.</em> Dari mana harus mulai?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookBig}>?</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Mulai dengan <b>dekomposisi</b>: pecah masalah besar jadi bagian-bagian kecil. Lalu kenali <b>pola</b> yang berulang agar pekerjaan jadi lebih ringan.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Dari mana mulai? →</button>}
        </div>
      </div>
    </>
  )
}
