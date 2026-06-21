import { useState } from 'react'
import { TAHAP } from './data'
import styles from './ui.module.css'
export function Scene2Rantai() {
  const [step, setStep] = useState(0)
  return (
    <>
      <p className={styles.prompt}>Ikuti perjalanan dari <em>data</em> menjadi <em>konten.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.chain}>
            {TAHAP.map((t, i) => (
              <div key={t.id} className={`${styles.node} ${i <= step ? styles.nodeOn : ''}`}>
                <div className={styles.nLabel}>{t.nama}</div>
                <div className={styles.nIsi}>{t.isi}</div>
                {i < TAHAP.length - 1 && <div className={styles.arrow}>↓</div>}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>{TAHAP[step].ket}</div>
          {step < TAHAP.length - 1
            ? <button className={styles.btn} onClick={(e) => { setStep(step + 1); (e.currentTarget as HTMLButtonElement).blur() }}>Tahap berikutnya →</button>
            : <button className={styles.reset} onClick={(e) => { setStep(0); (e.currentTarget as HTMLButtonElement).blur() }}>Ulangi dari awal</button>}
        </div>
      </div>
    </>
  )
}
