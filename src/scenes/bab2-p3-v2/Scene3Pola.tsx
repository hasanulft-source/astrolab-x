import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q:'Embun di luar gelas dingin termasuk perubahan apa?', correct:'Mengembun (gas → cair)', opsi:['Menguap (cair → gas)','Mengembun (gas → cair)','Mencair (padat → cair)','Membeku (cair → padat)'] },
  { q:'Perubahan mana yang MELEPAS kalor (membuang energi)?', correct:'Membeku, mengembun, mengkristal', opsi:['Mencair, menguap, menyublim','Membeku, mengembun, mengkristal','Semua perubahan melepas kalor','Tidak ada yang melepas kalor'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number,string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang kamu bisa menjawab teka-teki embun di awal.</p>
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
        {allDone && !revealed && <button className={styles.revealBtn} onClick={() => { setRevealed(true); onUnlock() }}>Cek jawabanku →</button>}
        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Embun = uap air di udara yang melepas kalornya ke gelas dingin.</div>
            <p className={styles.conceptText}>Saat uap air bersentuhan dengan permukaan dingin, ia <strong>melepas kalor dan berubah menjadi cairan</strong> — itulah mengapa luar gelas berembun, bukan kebocoran.</p>
          </div>
        )}
      </div>
    </div>
  )
}
