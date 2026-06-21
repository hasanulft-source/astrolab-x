import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Membuat program terdengar sulit dan penuh ketikan rumit. Tapi di <em>Scratch</em>, kamu cukup menyusun blok warna-warni seperti puzzle. Bagaimana bisa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookBlocks}><span style={{ background: '#c8732f' }}>maju</span><span style={{ background: '#4a8bd0' }}>belok</span><span style={{ background: '#3a8a4a' }}>ulangi</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Tiap blok adalah satu perintah. Menyusun blok berurutan = menulis <b>algoritma</b>. Komputer menjalankannya dari atas ke bawah - tanpa perlu mengetik satu baris kode pun.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bagaimana bisa? →</button>}
        </div>
      </div>
    </>
  )
}
