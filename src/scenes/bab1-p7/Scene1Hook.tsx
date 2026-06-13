import { useState } from 'react'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Pengukuran itu <em>fondasi sains</em> — dan kesalahan kecil bisa berakibat besar.</p>
      <div className={styles.mars}>
        <span className={styles.marsTag}>1999</span>
        <span>Wahana antariksa <b>Mars Climate Orbiter</b> senilai $327 juta hilang karena dua tim memakai satuan berbeda (metrik vs imperial) tanpa saling tahu.</span>
      </div>
      <div className={styles.hookRow}>
        <div className={styles.measCard}><span className={styles.measVal}>12,2 cm</span><span className={styles.measWho}>Kelompok A</span></div>
        <div className={styles.measCard}><span className={styles.measVal}>12,46 cm</span><span className={styles.measWho}>Kelompok B</span></div>
      </div>
      <div className={styles.hookQ}>
        {show
          ? <>Benda yang sama, hasil berbeda. Bisa terjadi karena <b>ketelitian alat</b> dan <b>cara membaca skala</b>. Hari ini kita pelajari cara mengukur dengan benar — termasuk beda <b>presisi</b> dan <b>akurasi</b>.</>
          : <>Benda yang sama diukur dua kelompok. <b>Mana yang benar? Kenapa bisa beda?</b></>}
      </div>
      {!show && <button className={styles.osnBtn} style={{ alignSelf: 'center' }} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>Bahas →</button>}
    </>
  )
}
