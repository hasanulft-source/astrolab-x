import { useState } from 'react'
import type { DiscoverySceneProps } from '../discovery-types'
import styles from './discovery.module.css'

const ORIGINAL = [
  { id:'a', text:'Pasir warnanya lebih gelap, jadi menyerap lebih banyak cahaya.' },
  { id:'b', text:'Pasir dan air menyerap panas dengan cara yang berbeda.' },
  { id:'c', text:'Air terus bergerak sehingga panasnya tersebar ke mana-mana.' },
  { id:'d', text:'Saya belum tahu — tapi ingin tahu.' },
]
const CORRECT = 'b'

export function Scene5Konfirmasi({ onUnlock }: DiscoverySceneProps) {
  const [nowPick, setNowPick] = useState<string | null>(null)

  const confirm = (id: string) => {
    if (nowPick) return
    setNowPick(id)
    onUnlock()
  }

  const isCorrect = nowPick === CORRECT

  return (
    <div className={styles.confirmPanel}>
      <div className={styles.confirmLeft}>
        <div className={styles.mirrorCard}>
          <div className={styles.mirrorLabel}>Prediksimu di awal</div>
          <div className={styles.mirrorText}>
            "Lihat Catatan Ilmuwan-mu — hipotesis apa yang kamu tulis?"
          </div>
          <div className={styles.mirrorSub}>
            Apakah kamu ingin mengubahnya setelah semua yang kamu temukan?
          </div>
        </div>

        <div className={styles.nowLabel}>Sekarang, menurutmu penjelasan yang paling tepat adalah:</div>
        <div className={styles.confirmChoices}>
          {ORIGINAL.map(c => (
            <button key={c.id}
              className={`${styles.confirmOpt} ${nowPick === c.id ? (c.id === CORRECT ? styles.optRight : styles.optWrong) : ''}`}
              onClick={() => confirm(c.id)}
              disabled={!!nowPick}
            >{c.text}</button>
          ))}
        </div>
      </div>

      {nowPick && (
        <div className={styles.confirmRight}>
          <div className={`${styles.reflectCard} ${isCorrect ? styles.reflectGood : styles.reflectGrow}`}>
            <div className={styles.reflectIcon}>{isCorrect ? '✨' : '🔬'}</div>
            <div className={styles.reflectTitle}>{isCorrect ? 'Tepat!' : 'Jawaban menarik untuk diselidiki.'}</div>
            {isCorrect ? (
              <p>Pasir dan air memang menyerap panas <em>dengan cara berbeda</em> — itulah kalor jenis. Besi dengan c kecil naik cepat; air dengan c besar naik lambat.</p>
            ) : (
              <p>Warna sedikit berpengaruh, tapi faktor utamanya adalah <strong>kalor jenis (c)</strong> — sifat bawaan setiap material. Air punya c terbesar dari semua bahan umum.</p>
            )}
            <p className={styles.reflectNote}>
              Dalam sains, prediksi yang berubah bukan kegagalan — itu bukti kamu sudah <em>berpikir lebih dalam</em>.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
