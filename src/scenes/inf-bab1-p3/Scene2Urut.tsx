import { useState } from 'react'
import { LANGKAH } from './data'
import styles from './ui.module.css'
const SHUF = [2, 4, 0, 3, 1]
export function Scene2Urut() {
  const [picked, setPicked] = useState<number[]>([])
  const add = (i: number) => { if (!picked.includes(i)) setPicked([...picked, i]) }
  const full = picked.length === LANGKAH.length
  const correct = full && picked.every((i, k) => LANGKAH[i].urut === k + 1)
  return (
    <>
      <p className={styles.prompt}>Susun langkah membuat teh ke <em>urutan yang benar.</em> Klik satu per satu.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.bank}>{SHUF.map(i => <button key={i} className={`${styles.chip} ${picked.includes(i) ? styles.used : ''}`} disabled={picked.includes(i)} onClick={() => add(i)}>{LANGKAH[i].teks}</button>)}</div>
        </div>
        <div className={styles.side}>
          <ol className={styles.prog}>{picked.map((i, k) => <li key={i} className={full ? (LANGKAH[i].urut === k + 1 ? styles.ok : styles.no) : ''}>{LANGKAH[i].teks}</li>)}{picked.length === 0 && <li className={styles.ph}>Urutan akan muncul di sini…</li>}</ol>
          {full && <div className={correct ? styles.fbOk : styles.fbNo}>{correct ? 'Algoritma benar! Urutannya tepat.' : 'Ada langkah yang tertukar - urutan menentukan hasil.'}</div>}
          {picked.length > 0 && <button className={styles.reset} onClick={(e) => { setPicked([]); (e.currentTarget as HTMLButtonElement).blur() }}>Ulangi</button>}
        </div>
      </div>
    </>
  )
}
