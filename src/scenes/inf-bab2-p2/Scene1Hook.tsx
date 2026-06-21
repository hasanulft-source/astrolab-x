import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Bayangkan menjumlahkan nilai <em>300 siswa</em> satu per satu dengan kalkulator. Lama, melelahkan, dan rawan salah. Adakah cara yang lebih pintar?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookSheet}><div /><div /><div /><div /><div /><div /><div /><div /><div /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Gunakan <b>spreadsheet</b> seperti Microsoft Excel. Dengan satu <b>formula</b>, ribuan angka bisa dijumlah, dirata-rata, atau dianalisis secara otomatis dan akurat.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Cara lebih pintar? →</button>}
        </div>
      </div>
    </>
  )
}
