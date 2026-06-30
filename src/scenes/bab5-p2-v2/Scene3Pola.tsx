import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q:'Tingkatan takson mana yang PALING UMUM (mencakup paling banyak makhluk hidup)?', correct:'Kingdom', opsi:['Kingdom','Genus','Spesies','Famili'] },
  { q:'Nama ilmiah "Panthera tigris" terdiri dari dua bagian — apa nama sistem ini?', correct:'Binomial nomenklatur (genus + spesies)', opsi:['Sistem ganda','Binomial nomenklatur (genus + spesies)','Sistem dua kata','Nama latin biasa'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number,string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Uji pemahamanmu tentang sistem klasifikasi.</p>
      <div className={styles.questPanel}>
        {QUESTIONS.map((q, qi) => (
          <div key={qi} className={styles.questItem}>
            <div className={styles.questText}>{q.q}</div>
            <div className={styles.questOpts}>
              {q.opsi.map(o => {
                const picked = answers[qi] === o
                const correct = revealed && o === q.correct
                const wrong = revealed && picked && o !== q.correct
                return <button key={o} className={`${styles.questOpt} ${picked?styles.picked:''} ${correct?styles.optCorrect:''} ${wrong?styles.optWrong:''}`}
                  onClick={() => !revealed && setAnswers(a => ({...a,[qi]:o}))} disabled={revealed}>{o}</button>
              })}
            </div>
          </div>
        ))}
        {allDone && !revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Cek pemahamanku →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Sistem alamat ilmuwan bekerja secara global.</div>
            <p className={styles.conceptText}>Dengan <strong>binomial nomenklatur</strong>, ilmuwan di mana pun bisa langsung tahu spesies mana yang dimaksud — tanpa bingung dengan nama lokal yang berbeda di setiap daerah.</p>
          </div>
        )}
      </div>
    </div>
  )
}
