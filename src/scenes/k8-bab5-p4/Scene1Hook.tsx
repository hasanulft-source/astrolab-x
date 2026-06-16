import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Lihat bayanganmu di sendok: sisi <em>cekung</em> menampilkan wajah terbalik, sisi <em>cembung</em> tegak namun kecil. Satu benda, dua hasil. Mengapa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookSpoon}><div className={styles.spoonBowl} /><div className={styles.spoonHandle} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Karena bentuk permukaan menentukan sifat bayangan. Cermin & lensa <b>cekung/cembung</b> memantulkan atau membiaskan cahaya secara berbeda.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Kenapa berbeda? →</button>}
        </div>
      </div>
    </>
  )
}
