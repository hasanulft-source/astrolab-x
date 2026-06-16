import { useState } from 'react'
import styles from './ui.module.css'
function phColor(ph: number) {
  if (ph <= 2) return '#d63a2f'; if (ph <= 4) return '#e57b2f'; if (ph <= 6) return '#e8c33a'
  if (ph <= 7) return '#5aa84a'; if (ph <= 9) return '#3a8ab0'; if (ph <= 11) return '#3a5ab0'; return '#6a3ab0'
}
export function Scene3pH() {
  const [ph, setPh] = useState(7)
  const status = ph < 5.5 ? 'Asam' : ph <= 7.5 ? 'Netral / ideal' : 'Basa (alkalis)'
  const note = ph < 5.5 ? 'Terlalu asam - banyak tanaman sulit menyerap hara. Bisa dinetralkan dengan kapur.'
    : ph <= 7.5 ? 'Rentang ideal - kebanyakan tanaman tumbuh subur, hara mudah diserap.'
    : 'Terlalu basa - beberapa unsur hara (besi, fosfor) sukar diserap akar.'
  return (
    <>
      <p className={styles.prompt}>Geser nilai <em>pH</em> tanah - amati keasaman & kecocokannya bagi tanaman.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.phWrap}>
            <div className={styles.phBlock} style={{ background: phColor(ph) }}>{ph.toFixed(1)}</div>
            <div className={styles.phScale}><span>0 asam</span><span>7 netral</span><span>14 basa</span></div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.verdict} style={{ background: phColor(ph) }}>{status}</div>
          <div className={styles.sliderRow}><label>pH tanah</label><input type="range" min={0} max={14} step={0.5} value={ph} onChange={e => setPh(+e.target.value)} /><span className={styles.val}>{ph.toFixed(1)}</span></div>
          <div className={styles.note}>{note}</div>
        </div>
      </div>
    </>
  )
}
