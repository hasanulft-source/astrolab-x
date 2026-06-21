import { useState } from 'react'
import { PERNYATAAN } from './data'
import styles from './ui.module.css'
export function Scene2FaktaOpini() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = PERNYATAAN[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Pernyataan ini <em>fakta</em> atau <em>opini?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.quizBox}><div className={styles.quizTeks}>"{q.teks}"</div></div>
        </div>
        <div className={styles.side}>
          <div className={styles.fo}>
            {(['fakta', 'opini'] as const).map(o => {
              const cls = !done ? styles.foBtn : o === q.jawab ? `${styles.foBtn} ${styles.foR}` : o === pick ? `${styles.foBtn} ${styles.foW}` : styles.foBtn
              return <button key={o} className={cls} disabled={done} onClick={() => setPick(o)}>{o === 'fakta' ? 'Fakta' : 'Opini'}</button>
            })}
          </div>
          {done
            ? <>
                <div className={correct ? styles.fbOk : styles.fbNo}>{q.jawab === 'fakta' ? 'Fakta - dapat dibuktikan kebenarannya.' : 'Opini - pendapat pribadi, bisa berbeda tiap orang.'}</div>
                <button className={styles.btn} onClick={(e) => { setI((i + 1) % PERNYATAAN.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
              </>
            : <div className={styles.allNote}>Fakta bisa dicek benar/salah. Opini memuat kata seperti "menurutku", "paling", "lebih baik".</div>}
        </div>
      </div>
    </>
  )
}
