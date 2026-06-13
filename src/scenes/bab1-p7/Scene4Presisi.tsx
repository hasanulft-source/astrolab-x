import { useState } from 'react'
import { TargetBoard } from '../../components/TargetBoard'
import { CASES } from './data'
import styles from './ui.module.css'

export function Scene4Presisi() {
  const [i, setI] = useState(0)
  const c = CASES[i]
  return (
    <>
      <p className={styles.prompt}>Bayangkan menembak target. <em>Presisi</em> = hasil rapat/konsisten. <em>Akurasi</em> = dekat ke nilai benar.</p>
      <div className={styles.accMain}>
        <div className={styles.accBoard}><TargetBoard dots={c.dots} /></div>
        <div className={styles.accSide}>
          {CASES.map((cc, idx) => (
            <div key={cc.id} role="button" className={i === idx ? styles.accItemSel : styles.accItem} onClick={() => setI(idx)}>{cc.label}</div>
          ))}
          <div className={styles.accDesc}>{c.desc}</div>
        </div>
      </div>
    </>
  )
}
