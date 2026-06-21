import { useState } from 'react'
import { LANGKAH } from './data'
import styles from './ui.module.css'
export function Scene3Internet() {
  const [step, setStep] = useState(0)
  const reqActive = step <= 1
  return (
    <>
      <p className={styles.prompt}>Bagaimana sebuah halaman web sampai ke layarmu? Ikuti <em>alurnya.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.netFlow}>
            <div className={`${styles.endpoint} ${step === 0 || step === 3 ? styles.epOn : ''}`}><div className={styles.epIcon}>▣</div><span>Perangkatmu</span></div>
            <div className={styles.wires}>
              <div className={`${styles.wire} ${reqActive ? styles.wireReq : ''}`}>permintaan →</div>
              <div className={`${styles.wire} ${step >= 2 ? styles.wireRes : ''}`}>← balasan</div>
            </div>
            <div className={`${styles.endpoint} ${step === 1 || step === 2 ? styles.epOn : ''}`}><div className={styles.epIcon}>▤</div><span>Server</span></div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.stepBox}><span className={styles.stepNo}>{step + 1}/4</span> {LANGKAH[step]}</div>
          {step < LANGKAH.length - 1
            ? <button className={styles.btn} onClick={(e) => { setStep(step + 1); (e.currentTarget as HTMLButtonElement).blur() }}>Lanjut →</button>
            : <button className={styles.reset} onClick={(e) => { setStep(0); (e.currentTarget as HTMLButtonElement).blur() }}>Ulangi</button>}
          <div className={styles.note}>Setiap perangkat punya <b>alamat IP</b> unik - seperti alamat rumah - agar data terkirim ke tujuan yang tepat.</div>
        </div>
      </div>
    </>
  )
}
