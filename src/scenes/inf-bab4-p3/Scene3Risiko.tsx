import { useState } from 'react'
import styles from './ui.module.css'
const RISIKO = [
  { data: 'Alamat rumah + foto seragam', bahaya: 'Orang asing bisa tahu di mana kamu tinggal dan bersekolah - membahayakan keselamatan.' },
  { data: 'Lokasi real-time (check-in)', bahaya: 'Orang tahu kamu sedang tidak di rumah, atau bisa menguntit keberadaanmu.' },
  { data: 'Nomor HP di unggahan publik', bahaya: 'Bisa disalahgunakan untuk penipuan, spam, atau peretasan akun.' },
]
export function Scene3Risiko() {
  const [sel, setSel] = useState(0)
  const r = RISIKO[sel]
  return (
    <>
      <p className={styles.prompt}>Apa yang bisa terjadi jika data ini <em>tersebar?</em> Klik tiap kasus.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.list}>{RISIKO.map((x, i) => <button key={i} className={`${styles.card} ${sel === i ? styles.on : ''}`} onClick={() => setSel(i)}>{x.data}</button>)}</div>
        </div>
        <div className={styles.side}><div className={styles.warn}>{r.bahaya}</div></div>
      </div>
    </>
  )
}
