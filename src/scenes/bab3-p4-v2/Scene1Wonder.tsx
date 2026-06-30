import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './discovery.module.css'

const CHOICES = [
  { id:'a', text:'Pasir warnanya lebih gelap, jadi menyerap lebih banyak cahaya.' },
  { id:'b', text:'Pasir dan air menyerap panas dengan cara yang berbeda.' },
  { id:'c', text:'Air terus bergerak sehingga panasnya tersebar ke mana-mana.' },
  { id:'d', text:'Saya belum tahu — tapi ingin tahu.' },
]

export function Scene1Wonder({ onUnlock }: DiscoverySceneProps) {
  const [pick, setPick] = useState<string | null>(null)

  const choose = (id: string) => {
    if (pick) return
    setPick(id)
    onUnlock()
  }

  return (
    <div className={styles.wonder}>
      <div className={styles.storyPanel}>
        <div className={styles.sceneViz}>
          <div className={styles.sunRay} />
          <div className={styles.vizRow}>
            <div className={styles.sandBlock}>
              <span className={styles.matLabel}>Pasir</span>
              <span className={styles.tempBadge} style={{ background:'#f43f5e22', color:'#f87171' }}>🔥 Membakar</span>
            </div>
            <div className={styles.vsDiv}>vs</div>
            <div className={styles.waterBlock}>
              <span className={styles.matLabel}>Air kolam</span>
              <span className={styles.tempBadge} style={{ background:'#0ebea522', color:'#5eead4' }}>❄️ Sejuk</span>
            </div>
          </div>
          <div className={styles.caption}>Matahari yang sama · Sejak pagi yang sama</div>
        </div>
      </div>

      <div className={styles.rightPanel}>
        <p className={styles.wonderQ}>
          Hari Minggu siang di pantai. Kaki kamu melangkah dari pasir putih ke kolam di sebelahnya.<br /><br />
          Pasir terasa <strong>membakar</strong>. Kolam terasa <strong>sejuk</strong>.<br /><br />
          Padahal keduanya di bawah matahari yang sama sejak pagi.
        </p>
        <div className={styles.predLabel}>Menurutmu, kenapa ini bisa terjadi?</div>
        <div className={styles.choices}>
          {CHOICES.map(c => (
            <button
              key={c.id}
              className={`${styles.choice} ${pick === c.id ? styles.choicePicked : ''} ${pick && pick !== c.id ? styles.choiceDim : ''}`}
              onClick={() => choose(c.id)}
            >
              {c.text}
            </button>
          ))}
        </div>
        {pick && (
          <div className={styles.pickNote}>
            Prediksimu tercatat. Kita akan kembali ke sini nanti — apapun jawabanmu, itu titik awal penyelidikan.
          </div>
        )}
      </div>
    </div>
  )
}
