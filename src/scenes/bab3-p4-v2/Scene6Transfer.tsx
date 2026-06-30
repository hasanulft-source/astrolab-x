import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './discovery.module.css'

const CASES = [
  {
    id: 0,
    situation: 'Wajan besi cepat panas di atas kompor, tapi pegangan plastiknya tidak.',
    question:  'Kenapa pegangan plastik tetap aman dipegang?',
    options: [
      { text:'Plastik tidak menghantarkan listrik.',               correct:false },
      { text:'Plastik punya kalor jenis lebih besar dari besi.',   correct:true  },
      { text:'Plastik lebih tebal dari besi.',                     correct:false },
    ],
    insight: 'Plastik punya c lebih besar → butuh lebih banyak energi untuk naik suhunya → meski terhubung ke wajan panas, suhunya naik jauh lebih lambat.'
  },
  {
    id: 1,
    situation: 'Kota pesisir seperti Banda Aceh suhunya lebih stabil sepanjang tahun dibanding kota gurun.',
    question:  'Mengapa suhu di kota pesisir tidak terlalu ekstrem?',
    options: [
      { text:'Angin laut selalu bertiup dingin.',                                correct:false },
      { text:'Laut (air) punya c besar — menyerap & melepas panas perlahan.',   correct:true  },
      { text:'Kota pesisir lebih sedikit penduduknya.',                          correct:false },
    ],
    insight: 'Laut adalah "penyangga suhu" alami. c air yang besar membuat lautan menyerap panas siang hari dan melepasnya malam hari — menjaga suhu tetap moderat.'
  },
  {
    id: 2,
    situation: 'Tubuh manusia terdiri dari sekitar 60% air.',
    question:  'Apa keuntungan tubuh yang "penuh air" ini?',
    options: [
      { text:'Air membuat tubuh lebih berat sehingga tidak mudah jatuh.',       correct:false },
      { text:'Air dengan c besar melindungi organ dari perubahan suhu ekstrem.',correct:true  },
      { text:'Air membuat kulit tampak lebih sehat.',                            correct:false },
    ],
    insight: 'c air yang besar berarti suhu tubuh tidak langsung melonjak meski olahraga keras atau cuaca sangat panas. Air adalah "buffer termal" biologis yang luar biasa.'
  },
]

export function Scene6Transfer({ onUnlock }: DiscoverySceneProps) {
  const [active, setActive] = useState(0)
  const [picks, setPicks]   = useState<Record<number, number>>({})
  const [shown, setShown]   = useState<Record<number, boolean>>({})

  const pick = (caseId: number, optIdx: number) => {
    if (picks[caseId] !== undefined) return
    const newPicks = { ...picks, [caseId]: optIdx }
    setPicks(newPicks)
    setShown(s => ({ ...s, [caseId]: true }))
    if (Object.keys(newPicks).length === CASES.length) onUnlock()
  }

  const c       = CASES[active]
  const picked  = picks[active]
  const isShown = shown[active]

  return (
    <div className={styles.transferPanel}>
      <p className={styles.transferHead}>
        Kamu sudah menemukan konsep kalor jenis. Sekarang terapkan di dunia nyata.
      </p>

      <div className={styles.caseNav}>
        {CASES.map((cs, i) => (
          <button key={i}
            className={`${styles.caseTab} ${active === i ? styles.caseTabOn : ''} ${picks[i] !== undefined ? styles.caseTabDone : ''}`}
            onClick={() => setActive(i)}>
            Kasus {i + 1} {picks[i] !== undefined ? '✓' : ''}
          </button>
        ))}
      </div>

      <div className={styles.caseCard}>
        <div className={styles.caseSit}>{c.situation}</div>
        <div className={styles.caseQ}>{c.question}</div>
        <div className={styles.caseOpts}>
          {c.options.map((o, i) => {
            const isPicked = picked === i
            const right    = isShown && o.correct
            const wrong    = isShown && isPicked && !o.correct
            return (
              <button key={i}
                className={`${styles.caseOpt} ${isPicked ? styles.casePicked : ''} ${right ? styles.caseRight : ''} ${wrong ? styles.caseWrong : ''}`}
                onClick={() => pick(c.id, i)}
                disabled={picked !== undefined}
              >{o.text}</button>
            )
          })}
        </div>
        {isShown && (
          <div className={styles.insight}>
            <span className={styles.insightIcon}>💡</span>
            {c.insight}
          </div>
        )}
      </div>

      <div className={styles.caseProgress}>
        {Object.keys(picks).length} / {CASES.length} kasus selesai
      </div>
    </div>
  )
}
