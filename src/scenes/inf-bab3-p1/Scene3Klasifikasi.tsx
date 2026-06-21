import { useState } from 'react'
import { SOAL } from './data'
import styles from './ui.module.css'
const LABEL: Record<string, string> = { data: 'Data', info: 'Informasi', konten: 'Konten' }
export function Scene3Klasifikasi() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = SOAL[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Ini termasuk <em>data, informasi, atau konten?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizTeks}>{q.teks}</div>
            <div className={styles.quizOpts}>
              {['data', 'info', 'konten'].map(o => {
                const cls = !done ? styles.qOpt : o === q.jawab ? `${styles.qOpt} ${styles.qRight}` : o === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={o} className={cls} disabled={done} onClick={() => setPick(o)}>{LABEL[o]}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} Ini {LABEL[q.jawab]}.</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % SOAL.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Tanya: apakah ini angka mentah, fakta bermakna, atau sesuatu yang dikemas & dibagikan?</div>}
        </div>
      </div>
    </>
  )
}
