import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

type Node = { q: string; ya: string|number; tidak: string|number }
const KEY: Node[] = [
  { q:'Apakah organisme ini memiliki tulang belakang?', ya:1, tidak:2 },
  { q:'Apakah tubuhnya ditutupi rambut/bulu mamalia?', ya:'Mammalia 🦁', tidak:3 },
  { q:'Apakah memiliki 6 kaki?', ya:'Insekta (Arthropoda) 🦋', tidak:4 },
  { q:'Apakah ia dapat terbang?', ya:'Aves (Burung) 🦅', tidak:'Reptilia 🐊' },
  { q:'Apakah tubuhnya lunak tanpa cangkang?', ya:'Cacing (Annelida) 🪱', tidak:'Moluska / Krustasea 🦀' },
]

export function Scene2Eksplorasi({ onUnlock }: DiscoverySceneProps) {
  const [step, setStep] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)

  const go = (ans: 'ya'|'tidak') => {
    const node = KEY[step]
    const next = ans === 'ya' ? node.ya : node.tidak
    setHistory(h => [...h, `${ans === 'ya' ? '✓' : '✗'} ${node.q}`])
    if (typeof next === 'string') {
      setResult(next)
      onUnlock()
    } else setStep(next)
  }

  const reset = () => { setStep(0); setHistory([]); setResult(null) }

  return (
    <div className={styles.exploPanel}>
      <div className={styles.exploLeft}>
        <p className={styles.exploPrompt}>Jawab pertanyaan tentang organisme misterius. Lihat ke mana jawabanmu membawamu.</p>
        {!result ? (
          <>
            <div className={local.questBox}>{KEY[step].q}</div>
            <div className={local.yesNo}>
              <button className={local.yBtn} onClick={() => go('ya')}>Ya</button>
              <button className={local.nBtn} onClick={() => go('tidak')}>Tidak</button>
            </div>
          </>
        ) : (
          <div className={local.resultBox}>
            <div className={local.resultLabel}>Hasil identifikasi:</div>
            <div className={local.resultVal}>{result}</div>
            <button className={styles.revealBtn} onClick={reset}>Coba lagi →</button>
          </div>
        )}
      </div>
      <div className={local.historyPanel}>
        <div className={styles.chartTitle}>Jejak keputusanmu:</div>
        {history.length === 0 && <div className={styles.sliderHint}>Mulai menjawab untuk melihat jejaknya</div>}
        {history.map((h, i) => <div key={i} className={local.historyItem}>{h}</div>)}
      </div>
    </div>
  )
}
