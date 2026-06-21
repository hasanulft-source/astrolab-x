import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu menonton video tutorial masak di YouTube, membaca artikel resep, lalu melihat angka "180°C" di dalamnya. <em>Apakah ketiganya hal yang sama?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookStack}><span>180</span><span>180°C oven</span><span>video resep</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Bukan. Ada tingkatannya: <b>data</b> (angka mentah) berkembang menjadi <b>informasi</b> (data + konteks), lalu dikemas menjadi <b>konten</b> (yang dibagikan).</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apakah sama? →</button>}
        </div>
      </div>
    </>
  )
}
