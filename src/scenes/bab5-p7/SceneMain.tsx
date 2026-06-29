import { useState } from 'react'
import styles from './Scene.module.css'

type Node = { q: string; ya: string|number; tidak: string|number }
const KEY: Node[] = [
  { q:"Apakah organisme ini memiliki tulang belakang?", ya:1, tidak:2 },      // 0
  { q:"Apakah tubuhnya ditutupi rambut/bulu mamalia?", ya:"Mammalia 🦁", tidak:3 },  // 1
  { q:"Apakah memiliki 6 kaki?", ya:"Insekta (Arthropoda) 🦋", tidak:4 },          // 2
  { q:"Apakah ia dapat terbang?", ya:"Aves (Burung) 🦅", tidak:"Reptilia 🐊" },     // 3
  { q:"Apakah tubuhnya lunak tanpa cangkang?", ya:"Cacing (Annelida) 🪱", tidak:"Moluska / Krustasea 🦀" }, // 4
]

export default function Scene() {
  const [step, setStep] = useState<number>(0)
  const [history, setHistory] = useState<string[]>([])
  const [result, setResult] = useState<string|null>(null)

  const go = (ans: "ya"|"tidak") => {
    const node = KEY[step]
    const next = ans === "ya" ? node.ya : node.tidak
    const h = [...history, `${ans === "ya" ? "✓" : "✗"} ${node.q}`]
    setHistory(h)
    if (typeof next === "string") {
      setResult(next)
    } else {
      setStep(next)
    }
  }

  const reset = () => { setStep(0); setHistory([]); setResult(null) }

  return (
    <div className={styles.wrap}>
      <p className={styles.prompt}>Kunci Dikotomi Interaktif — jawab Ya atau Tidak untuk <em>mengidentifikasi organisme</em>.</p>
      <div className={styles.main}>
        <div className={styles.histPanel}>
          <div className={styles.histTitle}>Riwayat Langkah:</div>
          {history.length === 0 && <div className={styles.histEmpty}>Belum ada langkah...</div>}
          {history.map((h,i) => (
            <div key={i} className={styles.histItem}>
              <span className={styles.histNum}>{i+1}</span>
              <span className={styles.histText}>{h}</span>
            </div>
          ))}
          {result && (
            <div className={styles.histResult}>
              Hasil: <strong>{result}</strong> dalam {history.length} langkah
            </div>
          )}
          <button className={styles.resetBtn} onClick={reset}>↩ Mulai ulang</button>
        </div>

        <div className={styles.questionPanel}>
          {result ? (
            <div className={styles.resultBox}>
              <div className={styles.resultEmoji}>{result.split(" ").pop()}</div>
              <div className={styles.resultName}>{result.replace(/\s\S*$/, "")}</div>
              <div className={styles.resultSub}>Identifikasi selesai dalam {history.length} langkah!</div>
            </div>
          ) : (
            <>
              <div className={styles.stepBadge}>Langkah {history.length + 1}</div>
              <div className={styles.question}>{KEY[step].q}</div>
              <div className={styles.btnRow}>
                <button className={styles.yaBtn} onClick={() => go("ya")}>✓ Ya</button>
                <button className={styles.tidakBtn} onClick={() => go("tidak")}>✗ Tidak</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
