import { useState } from 'react'
import styles from './ui.module.css'

export function Scene4Demo() {
  const [mix, setMix] = useState(false)
  return (
    <>
      <p className={styles.prompt}>Demonstrasi klasik: <em>cuka + soda kue</em>. Amati — tanda perubahan kimia mana yang muncul?</p>
      <div className={styles.demoMain}>
        <div className={styles.beakerWrap}>
          <div className={styles.beaker}>
            {mix && Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className={styles.bubble} style={{ left: `${10 + i * 12}%`, animationDelay: `${(i % 5) * 0.3}s` }} />
            ))}
          </div>
        </div>
        <div className={styles.demoSide}>
          <button className={styles.btn} onClick={(e) => { setMix(v => !v); (e.currentTarget as HTMLButtonElement).blur() }}>{mix ? 'Ulangi' : 'Campurkan →'}</button>
          {mix
            ? <div className={styles.demoHi}>Muncul <b>gelembung gas</b> (karbon dioksida)! <b>Timbul gas</b> adalah salah satu tanda perubahan <b>kimia</b> — terbentuk zat baru.</div>
            : <div className={styles.demoNote}>Klik “Campurkan” untuk mereaksikan cuka dengan soda kue, lalu perhatikan apa yang terjadi.</div>}
        </div>
      </div>
    </>
  )
}
