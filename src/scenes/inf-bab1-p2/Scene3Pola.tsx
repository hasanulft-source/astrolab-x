import { useState } from 'react'
import { POLA } from './data'
import styles from './ui.module.css'
const COL: Record<string, string> = { b: '#4a5bd0', r: '#c0492f', g: '#3a8a4a' }
export function Scene3Pola() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = POLA[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Temukan <em>pola</em> yang berulang - lalu tebak bentuk berikutnya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.polaWrap}>
            <div className={styles.seq}>
              {q.seq.map((c, k) => <span key={k} className={styles.dot} style={{ background: COL[c] }} />)}
              <span className={styles.qDot}>{done ? <span className={styles.dot} style={{ background: COL[q.jawab] }} /> : '?'}</span>
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {!done
            ? <div className={styles.opts}>{q.opsi.map(o => <button key={o} className={styles.optDot} style={{ background: COL[o] }} onClick={() => setPick(o)} />)}</div>
            : <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat! Polanya berulang.' : 'Belum tepat - perhatikan urutan warnanya berulang.'}</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % POLA.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Pola berikutnya →</button>
              </>}
        </div>
      </div>
    </>
  )
}
