import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kamu menekan tombol "A" di keyboard, dan seketika huruf A muncul di layar. <em>Apa yang terjadi di antara keduanya?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookKey}>A</div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Komputer bekerja dalam satu siklus: <b>Input</b> (tekanan tombol) → <b>Proses</b> (prosesor mengolah) → <b>Output</b> (huruf tampil). Ditambah <b>Penyimpanan</b> untuk menyimpan hasilnya.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Apa yang terjadi? →</button>}
        </div>
      </div>
    </>
  )
}
