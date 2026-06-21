import { useState } from 'react'
import { ITEM } from './data'
import styles from './ui.module.css'
export function Scene2Pilah() {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const q = ITEM[i]
  const done = pick !== null
  const correct = pick === q.jawab
  return (
    <>
      <p className={styles.prompt}>Data ini sebaiknya <em>privat</em> atau boleh <em>publik?</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.itemBox}>{q.teks}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.choice}>
            {(['privat', 'publik'] as const).map(o => {
              const cls = !done ? styles.cBtn : o === q.jawab ? `${styles.cBtn} ${styles.cR}` : o === pick ? `${styles.cBtn} ${styles.cW}` : styles.cBtn
              return <button key={o} className={cls} disabled={done} onClick={() => setPick(o)}>{o === 'privat' ? 'Privat (jaga)' : 'Publik (boleh)'}</button>
            })}
          </div>
          {done && <>
            <div className={correct ? styles.fbOk : styles.fbNo}>{q.jawab === 'privat' ? 'Privat - simpan rapat, jangan dibagikan sembarangan.' : 'Publik - relatif aman dibagikan secara umum.'}</div>
            <button className={styles.btn} onClick={(e) => { setI((i + 1) % ITEM.length); setPick(null); (e.currentTarget as HTMLButtonElement).blur() }}>Berikutnya →</button>
          </>}
        </div>
      </div>
    </>
  )
}
