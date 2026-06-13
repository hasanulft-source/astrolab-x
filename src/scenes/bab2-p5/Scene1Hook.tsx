import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [a, setA] = useState(false)
  const [b, setB] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Seorang koki <em>merobek</em> kertas pembungkus, lalu <em>memanggang</em> ikan. Dua hal sederhana — tapi beda secara ilmiah. Klik tiap kartu.</p>
      <div className={styles.hookRow}>
        <div role="button" className={styles.hookCard} onClick={() => setA(v => !v)}>
          <span className={styles.hookAct}>Merobek kertas</span>
          {a ? <span className={`${styles.hookReveal} ${styles.tF}`}>Masih kertas — hanya berubah bentuk. Perubahan FISIKA, bisa dianggap kembali.</span> : <span className={styles.hookHint}>klik untuk lihat</span>}
        </div>
        <div role="button" className={styles.hookCardK} onClick={() => setB(v => !v)}>
          <span className={styles.hookAct}>Memanggang ikan</span>
          {b ? <span className={`${styles.hookReveal} ${styles.tK}`}>Terbentuk zat baru, tak bisa dikembalikan. Perubahan KIMIA.</span> : <span className={styles.hookHint}>klik untuk lihat</span>}
        </div>
      </div>
    </>
  )
}
