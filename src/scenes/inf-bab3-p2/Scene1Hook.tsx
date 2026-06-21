import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu ingin tahu cara merawat bulu kucing persia yang rontok, tapi kamu mengetik <em>"kucing"</em> saja. Hasilnya: jutaan halaman yang tak kamu butuhkan. Apa yang salah?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookSearch}><span className={styles.bar}>kucing</span><span className={styles.res}>~2,4 juta hasil</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Kata kuncinya terlalu umum. Dengan <b>kata kunci spesifik</b> dan <b>operator pencarian</b>, kita bisa mempersempit hasil menjadi yang benar-benar relevan.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa yang salah? →</button>}
        </div>
      </div>
    </>
  )
}
