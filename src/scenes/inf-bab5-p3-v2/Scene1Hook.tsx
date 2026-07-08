import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [refined, setRefined] = useState(0)
  const queries = [
    {q:'gempa', hasil:'48.000.000', note:'Terlalu umum — apa yang kamu cari?'},
    {q:'gempa aceh', hasil:'2.400.000', note:'Lebih baik, tapi masih terlalu luas'},
    {q:'gempa aceh 2004 kekuatan magnitudo', hasil:'156.000', note:'Spesifik — mulai relevan'},
    {q:'"gempa aceh 2004" site:bmkg.go.id', hasil:'340', note:'Presisi — sumber resmi, sangat relevan'},
  ]
  const cur = queries[refined]
  const advance = () => {
    setRefined(r => {
      const nr = r+1
      if (nr === queries.length-1) onUnlock()
      return nr
    })
  }
  return (
    <>
      <p className={styles.prompt}>Kamu butuh data gempa Aceh 2004 untuk tugas. <em>Ketik "gempa" → 48 juta hasil. Bagaimana menyempitkannya?</em></p>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔍</span>
        <span className={styles.query}>{cur.q}</span>
      </div>
      <div className={styles.resultBox}>
        <div className={styles.count}>{cur.hasil} hasil</div>
        <div className={styles.note}>{cur.note}</div>
      </div>
      <div className={styles.progress}>
        {queries.map((_,i)=>(
          <div key={i} className={`${styles.pDot} ${i<=refined?styles.pOn:''}`}/>
        ))}
      </div>
      {refined<queries.length-1?<button className={styles.refineBtn} onClick={advance}>Persempit pencarian →</button>
        :<div className={styles.reveal}>
          Dari 48 juta ke 340 hasil — <b>penurunan 99,999%.</b> Kuncinya: menambah kata spesifik + operator seperti tanda kutip (frasa persis) dan <code>site:</code> (batasi ke sumber tertentu). Mesin pencari sama, hasil sangat berbeda tergantung cara bertanya.
        </div>}
    </>
  )
}
