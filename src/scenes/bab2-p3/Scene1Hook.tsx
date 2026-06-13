import { useState } from 'react'
import { ParticleViewer } from '../../components/ParticleViewer'
import styles from './ui.module.css'

export function Scene1Hook() {
  const [show, setShow] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Es batu dipanaskan: meleleh jadi air, lalu menguap. <em>Ada berapa perubahan wujud di sini?</em></p>
      <div className={styles.hookRow}>
        <div className={styles.mini}><div className={styles.miniViz}><ParticleViewer state="solid" size="sm" /></div><span className={styles.miniCap}>Es (padat)</span></div>
        <span className={styles.arrow}>→</span>
        <div className={styles.mini}><div className={styles.miniViz}><ParticleViewer state="liquid" size="sm" /></div><span className={styles.miniCap}>Air (cair)</span></div>
        <span className={styles.arrow}>→</span>
        <div className={styles.mini}><div className={styles.miniViz}><ParticleViewer state="gas" size="sm" /></div><span className={styles.miniCap}>Uap (gas)</span></div>
      </div>
      <button className={styles.btn} style={{ alignSelf: 'center' }} onClick={(e) => { setShow(true); (e.currentTarget as HTMLButtonElement).blur() }}>
        {show ? '✓ Dua perubahan: mencair, lalu menguap' : 'Jawab →'}
      </button>
    </>
  )
}
