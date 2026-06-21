import { useState } from 'react'
import { SIGNALS } from './data'
import styles from './ui.module.css'
export function Scene2Cek() {
  const [on, setOn] = useState<boolean[]>([false, false, false, false, false])
  const toggle = (i: number) => setOn(v => v.map((x, k) => k === i ? !x : x))
  const score = on.filter(Boolean).length * 20
  const verdict = score < 40 ? 'Ragukan' : score < 80 ? 'Periksa lebih lanjut' : 'Cukup kredibel'
  const col = score < 40 ? '#c0492f' : score < 80 ? '#b9781a' : '#2a7d52'
  return (
    <>
      <p className={styles.prompt}>Centang <em>tanda kredibel</em> yang dimiliki sebuah sumber. Lihat skornya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.scoreWrap}>
            <div className={styles.scoreNum} style={{ color: col }}>{score}</div>
            <div className={styles.scoreVerd} style={{ background: col }}>{verdict}</div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.checks}>{SIGNALS.map((s, i) => (
            <label key={i} className={`${styles.check} ${on[i] ? styles.checkOn : ''}`}><input type="checkbox" checked={on[i]} onChange={() => toggle(i)} /> {s}</label>
          ))}</div>
        </div>
      </div>
    </>
  )
}
