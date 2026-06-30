import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const QUESTIONS = [
  { q:'Cara mana yang BISA melewati ruang vakum (tanpa medium)?', correct:'Radiasi', opsi:['Konduksi','Konveksi','Radiasi','Ketiganya tidak bisa'] },
  { q:'Mengapa sendok logam panas saat diaduk di kopi panas?', correct:'Konduksi — panas merambat lewat sentuhan partikel logam', opsi:['Konveksi — sendok ikut mengalir','Konduksi — panas merambat lewat sentuhan partikel logam','Radiasi — sendok menyerap gelombang panas','Sendok memanas sendiri karena gerakan tangan'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number,string>>({})
  const [revealed, setRevealed] = useState(false)
  const allDone = Object.keys(answers).length === QUESTIONS.length

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Sekarang jawab teka-teki matahari di awal — dengan pemahaman baru.</p>
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
            <div className={styles.conceptTitle}>Radiasi adalah satu-satunya cara yang tidak butuh medium.</div>
            <p className={styles.conceptText}>Matahari memancarkan energi sebagai <strong>gelombang elektromagnetik</strong> — sama seperti cahaya, tapi membawa energi panas. Inilah mengapa panasnya bisa "menyeberangi" ruang vakum yang sama sekali tidak ada partikelnya.</p>
          </div>
        )}
      </div>
    </div>
  )
}
