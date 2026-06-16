import { useState } from 'react'
import styles from './ui.module.css'
export function Scene4Refleksi() {
  const [aktif, setAktif] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Tiap denyut nadi = satu pompaan jantung. <em>Apa yang terjadi saat berolahraga?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.pulseWrap}>
            <div className={`${styles.pulse} ${aktif ? styles.pulseFast : ''}`} />
            <div className={styles.bpm}>{aktif ? '~120' : '~70'}<span>denyut/menit</span></div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.toggle}>
            <button className={`${styles.tBtn} ${!aktif ? styles.on : ''}`} onClick={() => setAktif(false)}>Istirahat</button>
            <button className={`${styles.tBtn} ${aktif ? styles.on : ''}`} onClick={() => setAktif(true)}>Olahraga</button>
          </div>
          <div className={styles.reflect}>Saat berolahraga, otot butuh <b>lebih banyak oksigen</b>. Jantung pun memompa lebih cepat agar pasokan darah meningkat - itulah sebabnya denyut nadi <b>naik</b>.</div>
        </div>
      </div>
    </>
  )
}
