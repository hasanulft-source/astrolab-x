import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Dua orang melihat data penjualan sepekan. Satu membaca <em>tabel angka</em>, satu melihat <em>grafik batang.</em> Siapa yang lebih cepat tahu hari tersibuk?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookBars}><span style={{ height: '30%' }} /><span style={{ height: '60%' }} /><span style={{ height: '45%' }} /><span style={{ height: '85%' }} /><span style={{ height: '50%' }} /></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Yang melihat <b>grafik</b>. Visualisasi mengubah angka menjadi bentuk yang langsung "terbaca" mata - pola, puncak, dan tren terlihat dalam sekejap.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Siapa lebih cepat? →</button>}
        </div>
      </div>
    </>
  )
}
