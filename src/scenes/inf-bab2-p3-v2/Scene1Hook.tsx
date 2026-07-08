import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './Scene1Hook.module.css'
export function Scene1Hook({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<string|null>(null)
  const choose = (v: string) => { setPick(v); onUnlock() }
  return (
    <>
      <p className={styles.prompt}>Dua chart, data yang sama persis. <em>Tapi menceritakan cerita yang berbeda. Mana yang benar?</em></p>
      <div className={styles.charts}>
        <div className={styles.chartCard}>
          <div className={styles.chartTitle}>Chart A — sumbu Y mulai dari 0</div>
          <svg viewBox="0 0 200 120" className={styles.svg}>
            <line x1="30" y1="100" x2="190" y2="100" stroke="var(--line)" strokeWidth="1"/>
            <line x1="30" y1="10" x2="30" y2="100" stroke="var(--line)" strokeWidth="1"/>
            {[70,72,74,73,75].map((v,i)=><rect key={i} x={40+i*30} y={100-(v/100*90)} width="20" height={v/100*90} fill="var(--teal-mid)"/>)}
            <text x="5" y="100" fontSize="8" fill="var(--ink-4)">0</text>
            <text x="5" y="15" fontSize="8" fill="var(--ink-4)">100</text>
          </svg>
          <div className={styles.chartNote}>Kesan: nilai relatif stabil, perbedaan kecil</div>
        </div>
        <div className={styles.chartCard}>
          <div className={styles.chartTitle}>Chart B — sumbu Y mulai dari 68</div>
          <svg viewBox="0 0 200 120" className={styles.svg}>
            <line x1="30" y1="100" x2="190" y2="100" stroke="var(--line)" strokeWidth="1"/>
            <line x1="30" y1="10" x2="30" y2="100" stroke="var(--line)" strokeWidth="1"/>
            {[70,72,74,73,75].map((v,i)=><rect key={i} x={40+i*30} y={100-((v-68)/8*90)} width="20" height={(v-68)/8*90} fill="#f97316"/>)}
            <text x="5" y="100" fontSize="8" fill="var(--ink-4)">68</text>
            <text x="5" y="15" fontSize="8" fill="var(--ink-4)">76</text>
          </svg>
          <div className={styles.chartNote}>Kesan: perbedaan dramatis, lonjakan besar</div>
        </div>
      </div>
      <div className={styles.q}>Chart mana yang "jujur" menampilkan data?</div>
      <div className={styles.opts}>
        <button className={`${styles.opt} ${pick==='a'?styles.sel:''}`} onClick={()=>choose('a')}>Chart A (mulai 0)</button>
        <button className={`${styles.opt} ${pick==='b'?styles.sel:''}`} onClick={()=>choose('b')}>Chart B (mulai 68)</button>
        <button className={`${styles.opt} ${pick==='both'?styles.sel:''}`} onClick={()=>choose('both')}>Tergantung tujuannya</button>
      </div>
      {pick&&<div className={styles.reveal}>
        Jawaban: <b>tergantung tujuan — tapi Chart A lebih jujur secara umum.</b> Chart B membesar-besarkan perbedaan kecil dengan memotong sumbu Y. Ini teknik yang sering dipakai untuk menyesatkan. Chart bukan dekorasi — ia adalah <b>argumen visual</b>. Cara membuatnya menentukan cerita yang tersampaikan.
      </div>}
    </>
  )
}
