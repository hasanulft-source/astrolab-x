import { useState } from 'react'
import { ITEMS } from './data'
import styles from './ui.module.css'
export function Scene3Proses() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = ITEMS[i]
  const done = pick !== null
  const correct = pick === q.jenis
  return (
    <>
      <p className={styles.prompt}>Pencernaan ada dua macam. Ini termasuk <em>mekanik</em> atau <em>kimiawi?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}>
            <div className={styles.quizItem}>{q.t}</div>
            <div className={styles.quizOpts}>
              {(['mekanik', 'kimiawi'] as const).map(j => {
                const cls = !done ? styles.qOpt : j === q.jenis ? `${styles.qOpt} ${styles.qRight}` : j === pick ? `${styles.qOpt} ${styles.qWrong}` : styles.qOpt
                return <button key={j} className={cls} disabled={done} onClick={() => setPick(j)}>{j === 'mekanik' ? 'Mekanik' : 'Kimiawi'}</button>
              })}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Tepat!' : 'Belum tepat.'} {q.jenis === 'mekanik' ? 'Mengubah ukuran makanan secara fisik, tanpa enzim.' : 'Memecah molekul makanan dengan bantuan enzim.'}</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % ITEMS.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}><b>Mekanik</b> = fisik (kunyah, remas). <b>Kimiawi</b> = pakai enzim.</div>}
        </div>
      </div>
    </>
  )
}
