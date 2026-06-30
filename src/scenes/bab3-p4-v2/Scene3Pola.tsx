import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './discovery.module.css'

const MATERIALS = [
  { name:'Air',   c:4200, emoji:'💧' },
  { name:'Kayu',  c:1700, emoji:'🪵' },
  { name:'Pasir', c:840,  emoji:'🏖' },
  { name:'Besi',  c:450,  emoji:'⚙' },
]
const QUESTIONS = [
  { q:'Material mana yang paling LAMBAT naik suhunya?',
    correct:'Air',     options:['Air','Pasir','Besi','Kayu'] },
  { q:'Material mana yang paling CEPAT panas?',
    correct:'Besi',    options:['Air','Pasir','Besi','Kayu'] },
  { q:'Apa pola yang kamu temukan?',
    correct:'Nilai c besar → lambat panas',
    options:['Nilai c besar → lambat panas','Nilai c besar → cepat panas','Tidak ada pola','Tergantung warnanya'] },
]

export function Scene3Pola({ onUnlock }: DiscoverySceneProps) {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState(false)

  const allDone = Object.keys(answers).length === QUESTIONS.length
  const reveal  = () => { setRevealed(true); onUnlock() }

  return (
    <div className={styles.polaPanel}>
      <div className={styles.chartPanel}>
        <div className={styles.chartTitle}>Energi sama (10 kJ), massa 1 kg — kenaikan suhu berbeda:</div>
        <div className={styles.bars}>
          {MATERIALS.map(m => {
            const dT  = 10000 / m.c
            const pct = dT / (10000 / 450)
            return (
              <div key={m.name} className={styles.barCol}>
                <div className={styles.barVal}>{dT.toFixed(1)}°C</div>
                <div className={styles.barOuter}>
                  <div className={styles.barFill} style={{ height: `${pct * 100}%`, background: 'var(--discovery-primary)' }} />
                </div>
                <div className={styles.barName}>{m.emoji} {m.name}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className={styles.questPanel}>
        {QUESTIONS.map((q, qi) => (
          <div key={qi} className={styles.questItem}>
            <div className={styles.questText}>{q.q}</div>
            <div className={styles.questOpts}>
              {q.options.map(o => {
                const picked  = answers[qi] === o
                const correct = revealed && o === q.correct
                const wrong   = revealed && picked && o !== q.correct
                return (
                  <button key={o}
                    className={`${styles.questOpt} ${picked ? styles.picked : ''} ${correct ? styles.optCorrect : ''} ${wrong ? styles.optWrong : ''}`}
                    onClick={() => !revealed && setAnswers(a => ({ ...a, [qi]: o }))}
                    disabled={revealed}
                  >{o}</button>
                )
              })}
            </div>
          </div>
        ))}

        {allDone && !revealed && (
          <button className={styles.revealBtn} onClick={reveal}>Cek temuanku →</button>
        )}

        {revealed && (
          <div className={styles.conceptCard}>
            <div className={styles.conceptTitle}>Kamu baru menemukan sesuatu yang penting.</div>
            <p className={styles.conceptText}>
              Para ilmuwan menyebut perbedaan "daya tahan panas" ini: <strong>Kalor Jenis (c)</strong>.
            </p>
            <p className={styles.conceptText}>
              Satuan: J/kg°C — energi untuk menaikkan suhu 1 kg zat sebesar 1°C.
              Makin besar c → makin banyak energi dibutuhkan → makin lambat naik suhunya.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
