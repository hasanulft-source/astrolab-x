import { useState } from 'react'
import styles from './ui.module.css'
export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Kapal baja seberat ribuan ton <em>mengapung</em>, tapi sebuah paku kecil <em>tenggelam</em>. Bagaimana bisa?</p>
      <div className={styles.main}>
        <div className={styles.viz}><div className={styles.hookSea}><span className={styles.shipE}>🚢</span></div></div>
        <div className={styles.side}>
          {show
            ? <div className={styles.reveal}>Kuncinya bukan berat, tapi <b>massa jenis</b>. Menurut <b>Hukum Archimedes</b>, benda terapung jika massa jenis rata-ratanya lebih kecil daripada air - kapal berongga membuatnya jauh lebih ringan per volume.</div>
            : <button className={styles.btn} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bagaimana bisa? →</button>}
        </div>
      </div>
    </>
  )
}
