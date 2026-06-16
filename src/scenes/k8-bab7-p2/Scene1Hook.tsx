import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Saat menggali sumur, tanah berubah warna lapis demi lapis: gelap di atas, makin terang & berbatu di bawah. <em>Mengapa berlapis?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookLayers}><span style={{ background: '#4a3a22' }} /><span style={{ background: '#6b4f30' }} /><span style={{ background: '#9c7b52' }} /><span style={{ background: '#b09878' }} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Karena tanah terbentuk dari atas ke bawah selama ratusan tahun. Susunan lapisan ini disebut <b>profil tanah</b>, terbagi menjadi horizon <b>O, A, B, C, dan R</b>.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Mengapa berlapis? →</button>}
        </div>
      </div>
    </>
  )
}
