import { useState } from 'react'
import { KEY, START } from './data'
import styles from './ui.module.css'

export function Scene2Identifikasi() {
  const [node, setNode] = useState(START)
  const [path, setPath] = useState<{ q: string; a: string }[]>([])
  const isResult = node.startsWith('r:')
  const result = isResult ? node.slice(2) : null
  const cur = isResult ? null : KEY[node]

  const answer = (ya: boolean) => {
    if (!cur) return
    setPath([...path, { q: cur.q, a: ya ? 'Ya' : 'Tidak' }])
    setNode(ya ? cur.ya : cur.tidak)
  }
  const reset = () => { setNode(START); setPath([]) }

  return (
    <>
      <p className={styles.prompt}>Bayangkan satu hewan misterius. Jawab tiap pertanyaan - kunci akan <em>menebaknya</em>.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          {result
            ? <div className={styles.resultBox}>
                <div className={styles.resultK}>Hasil identifikasi</div>
                <div className={styles.resultV}>{result}</div>
                <button className={styles.btnG} onClick={reset}>Ulangi →</button>
              </div>
            : <div className={styles.qBox}>
                <div className={styles.qText}>{cur!.q}</div>
                <div className={styles.yt}>
                  <button className={styles.ytBtn} onClick={() => answer(true)}>Ya</button>
                  <button className={styles.ytBtn} onClick={() => answer(false)}>Tidak</button>
                </div>
              </div>}
        </div>
        <div className={styles.side}>
          <div className={styles.trailH}>Jejak identifikasi</div>
          {path.length === 0
            ? <div className={styles.trailEmpty}>Mulai jawab untuk menyusuri kunci.</div>
            : <div className={styles.trail}>{path.map((p, i) => (
                <div key={i} className={styles.trailItem}><span className={styles.trailQ}>{p.q}</span><span className={`${styles.trailA} ${p.a === 'Ya' ? styles.taYes : styles.taNo}`}>{p.a}</span></div>
              ))}</div>}
        </div>
      </div>
    </>
  )
}
