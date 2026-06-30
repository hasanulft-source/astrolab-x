import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'

const SOAL = [
  { alat:'Gelas Ukur', fungsi:'Mengukur volume cairan', jawab:'Alat Ukur' },
  { alat:'Pembakar Bunsen', fungsi:'Sumber panas percobaan', jawab:'Alat Pemanas' },
  { alat:'Pipet Tetes', fungsi:'Memindahkan cairan setetes', jawab:'Alat Pemindah' },
  { alat:'Penjepit Tabung', fungsi:'Memegang tabung saat panas', jawab:'Alat Keselamatan' },
  { alat:'Erlenmeyer', fungsi:'Menampung dan mencampur', jawab:'Alat Wadah' },
]
const KATEGORI = ['Alat Ukur','Alat Pemanas','Alat Pemindah','Alat Keselamatan','Alat Wadah']

export function Scene3Klasifikasi({ onUnlock }: DiscoverySceneProps) {
  const [idx, setIdx]   = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const q = SOAL[idx]
  const done = pick !== null
  const correct = pick === q.jawab

  const next = () => {
    setIdx(i => i + 1)
    setPick(null)
    if (idx === SOAL.length - 1) onUnlock()
  }

  if (idx >= SOAL.length) return (
    <div className={styles.transferPanel}>
      <div className={styles.conceptCard}>
        <div className={styles.conceptTitle}>Selesai! Skor kamu: {score} / {SOAL.length}</div>
        <p className={styles.conceptText}>Mengenal kategori alat membantu kamu merencanakan percobaan dengan lebih efisien dan aman.</p>
      </div>
    </div>
  )

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>Klasifikasikan alat berdasarkan fungsinya.</p>
      <div className={styles.caseCard}>
        <div className={styles.caseSit} style={{ fontSize:20, fontWeight:700 }}>{q.alat}</div>
        <div className={styles.caseQ}>"{q.fungsi}" — Ini termasuk kategori apa?</div>
        <div className={styles.caseOpts}>
          {KATEGORI.map(k => {
            const isPicked = pick === k
            const right = done && k === q.jawab
            const wrong = done && isPicked && k !== q.jawab
            return (
              <button key={k}
                className={`${styles.caseOpt} ${isPicked ? styles.casePicked : ''} ${right ? styles.caseRight : ''} ${wrong ? styles.caseWrong : ''}`}
                onClick={() => { if (!done) { setPick(k); if (k === q.jawab) setScore(s => s + 1) } }}
                disabled={done}>
                {k}
              </button>
            )
          })}
        </div>
        {done && (
          <div className={styles.insight}>
            <span className={styles.insightIcon}>{correct ? '✓' : '💡'}</span>
            {correct ? `Tepat! ${q.alat} memang termasuk ${q.jawab}.` : `${q.alat} adalah ${q.jawab} — karena ${q.fungsi.toLowerCase()}.`}
          </div>
        )}
        {done && <button className={styles.revealBtn} onClick={next} style={{marginTop:8}}>
          {idx < SOAL.length - 1 ? 'Berikutnya →' : 'Lihat hasil →'}
        </button>}
      </div>
      <div className={styles.caseProgress}>{idx + 1} / {SOAL.length}</div>
    </div>
  )
}
