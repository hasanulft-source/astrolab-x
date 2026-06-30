import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from '../bab3-p4-v2/discovery.module.css'
import local from './local.module.css'

export function Scene1Wonder({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<number | null>(null)

  return (
    <div className={styles.wonder}>
      <div className={styles.storyPanel}>
        <div className={styles.sceneViz}>
          <div className={local.mysteryAnimal}>❓</div>
          <div className={local.mysteryFacts}>
            <div className={local.factLine}>Tidak punya tulang belakang</div>
            <div className={local.factLine}>Punya 8 kaki</div>
            <div className={local.factLine}>Bisa membuat jaring</div>
          </div>
        </div>
      </div>
      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Seorang peneliti menemukan hewan asing di hutan. Ia tidak punya buku ensiklopedia hewan di sana.<br /><br />
          Tapi dengan hanya menjawab <strong>beberapa pertanyaan ya/tidak</strong>, ia bisa mengidentifikasi kelompok hewan tersebut dengan cepat.<br /><br />
          Bagaimana cara kerja sistem identifikasi seperti ini?
        </p>
        <div className={styles.predLabel}>Menurutmu, bagaimana cara sistem identifikasi ini bekerja dengan pertanyaan ya/tidak?</div>
        <div className={styles.choices}>
          {[
            'Menebak-nebak berdasarkan kemiripan visual.',
            'Setiap jawaban mempersempit kemungkinan, bercabang seperti pohon keputusan.',
            'Mencocokkan dengan database foto hewan.',
            'Menanyakan ke ahli biologi langsung.',
          ].map((c, i) => (
            <button key={i}
              className={`${styles.choice} ${pick === i ? styles.choicePicked : ''} ${pick !== null && pick !== i ? styles.choiceDim : ''}`}
              onClick={() => { if (pick === null) { setPick(i); onUnlock() } }}>
              {c}
            </button>
          ))}
        </div>
        {pick !== null && <div className={styles.pickNote}>Prediksimu tercatat. Mari kita coba sendiri sistemnya.</div>}
      </div>
    </div>
  )
}
