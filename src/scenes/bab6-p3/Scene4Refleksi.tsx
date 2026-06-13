import { useState } from 'react'
import styles from './ui.module.css'
export function Scene4Refleksi() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Skenario: petani memburu habis seluruh <em>ular</em> di sawah. Apa yang terjadi?</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.scenChain}>
            <span className={styles.scTag}>Ular hilang</span>
            <span className={styles.scArr}>→</span>
            <span className={styles.scTag}>Tikus & katak melonjak</span>
            <span className={styles.scArr}>→</span>
            <span className={styles.scTag}>Padi habis dimakan</span>
          </div>
        </div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reflect}>Menghilangkan satu mata rantai <b>mengguncang seluruh jaring</b>: mangsa ular melonjak tak terkendali, lalu produsen (padi) ikut hancur. Inilah mengapa <b>keseimbangan</b> tiap komponen penting.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Mengapa berbahaya? →</button>}
        </div>
      </div>
    </>
  )
}
