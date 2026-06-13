import { useState } from 'react'
import { MoonPhase } from '../../components/MoonPhase'
import { FASE } from './data'
import styles from './ui.module.css'
export function Scene2Fase() {
  const [sel, setSel] = useState('purnama')
  const f = FASE.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Delapan fase dalam satu siklus (~29,5 hari). Klik tiap fase.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.ring}>
            <div className={styles.earthDot} />
            {FASE.map((x, i) => {
              const a = (-90 + i * 45) * Math.PI / 180
              const cx = 50 + 39 * Math.cos(a), cy = 50 + 39 * Math.sin(a)
              return (
                <button key={x.id} className={`${styles.moonBtn} ${sel === x.id ? styles.moonOn : ''}`} style={{ left: `${cx}%`, top: `${cy}%` }} onClick={() => setSel(x.id)}>
                  <MoonPhase p={x.p} size={40} />
                </button>
              )
            })}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.bigMoon}><MoonPhase p={f.p} size={78} /></div>
            <div>
              <div className={styles.dName}>{f.nama}</div>
              <div className={styles.dPos}>{f.pos}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
