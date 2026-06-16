import { useState } from 'react'
import { FOODS, TESTS } from './data'
import styles from './ui.module.css'
export function Scene3Uji() {
  const [food, setFood] = useState('nasi')
  const [test, setTest] = useState('amilum')
  const f = FOODS.find(x => x.id === food)!
  const t = TESTS.find(x => x.id === test)!
  const positive = f.pos === test
  const fill = positive ? t.pos : t.base
  return (
    <>
      <p className={styles.prompt}>Lab uji nutrisi: pilih <em>bahan</em> + <em>reagen</em>, lihat hasilnya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          {t.paper
            ? <div className={styles.paper} style={{ background: positive ? 'transparent' : '#fff' }}>
                {positive ? <span className={styles.greaseSpot} /> : null}
                <span className={styles.paperLbl}>kertas HVS</span>
              </div>
            : <svg viewBox="0 0 80 150" className={styles.tube}>
                <defs><clipPath id="tb"><path d="M28 8h24v108a12 12 0 0 1-24 0z" /></clipPath></defs>
                <rect x="28" y="40" width="24" height="80" fill={fill} clipPath="url(#tb)" />
                <path d="M28 8h24v108a12 12 0 0 1-24 0z" fill="none" stroke="#c9ccd6" strokeWidth="2.5" />
                <line x1="24" y1="8" x2="56" y2="8" stroke="#c9ccd6" strokeWidth="3" strokeLinecap="round" />
              </svg>}
        </div>
        <div className={styles.side}>
          <div className={styles.pickRow}><span className={styles.pickH}>Bahan</span>{FOODS.map(x => <button key={x.id} className={`${styles.pill} ${food === x.id ? styles.pillOn : ''}`} onClick={() => setFood(x.id)}>{x.nama}</button>)}</div>
          <div className={styles.pickRow}><span className={styles.pickH}>Reagen</span>{TESTS.map(x => <button key={x.id} className={`${styles.pill} ${test === x.id ? styles.pillOn : ''}`} onClick={() => setTest(x.id)}>{x.nama}</button>)}</div>
          <div className={positive ? styles.fbOk : styles.fbNo}>
            {positive ? `Positif - berubah jadi ${t.posLabel}. ` : `Negatif - tidak ada perubahan. `}
            {f.nama} {positive ? 'mengandung' : 'tidak mengandung'} {t.nutrisi}.
          </div>
        </div>
      </div>
    </>
  )
}
