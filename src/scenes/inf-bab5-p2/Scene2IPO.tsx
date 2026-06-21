import { useState } from 'react'
import styles from './ui.module.css'
const STAGE = [
  { nama: 'INPUT', isi: 'Keyboard menerima tekanan tombol "A"', warna: '#2b7fa8' },
  { nama: 'PROSES', isi: 'CPU mengubahnya jadi kode & mengolahnya', warna: '#7c4dbb' },
  { nama: 'OUTPUT', isi: 'Monitor menampilkan huruf "A"', warna: '#2a7d52' },
]
export function Scene2IPO() {
  const [step, setStep] = useState(0)
  return (
    <>
      <p className={styles.prompt}>Ikuti perjalanan satu ketukan tombol lewat siklus <em>Input → Proses → Output.</em></p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.flow}>
            {STAGE.map((s, i) => (
              <div key={s.nama} className={styles.stageWrap}>
                <div className={`${styles.stage} ${i <= step ? styles.stageOn : ''}`} style={i <= step ? { borderColor: s.warna } : {}}>
                  <div className={styles.sName} style={i <= step ? { color: s.warna } : {}}>{s.nama}</div>
                  <div className={styles.sIsi}>{s.isi}</div>
                </div>
                {i < STAGE.length - 1 && <div className={`${styles.arr} ${i < step ? styles.arrOn : ''}`}>→</div>}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          {step < STAGE.length - 1
            ? <button className={styles.btn} onClick={(e) => { setStep(step + 1); (e.currentTarget as HTMLButtonElement).blur() }}>Tahap berikutnya →</button>
            : <button className={styles.reset} onClick={(e) => { setStep(0); (e.currentTarget as HTMLButtonElement).blur() }}>Ulangi</button>}
          <div className={styles.note}>Siklus ini terjadi miliaran kali per detik - itulah sebabnya komputer terasa "instan".</div>
        </div>
      </div>
    </>
  )
}
