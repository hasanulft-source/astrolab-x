import { useState } from 'react'
import { FloatTank } from '../../components/FloatTank'
import styles from './ui.module.css'

export function Scene5Penerapan() {
  const [mode, setMode] = useState<'bola' | 'perahu'>('bola')
  const rho = mode === 'bola' ? 7.90 : 0.45
  return (
    <>
      <p className={styles.prompt}>Baja jauh lebih rapat dari air — tapi <em>kapal baja bisa mengapung</em>. Bagaimana mungkin?</p>
      <div className={styles.main}>
        <div className={styles.viz}><FloatTank rho={rho} /></div>
        <div className={styles.side}>
          <div className={styles.toggle}>
            <div role="button" className={mode === 'bola' ? styles.tBtnActive : styles.tBtn} onClick={() => setMode('bola')}>Bola baja padat</div>
            <div role="button" className={mode === 'perahu' ? styles.tBtnActive : styles.tBtn} onClick={() => setMode('perahu')}>Perahu baja (berongga)</div>
          </div>
          <div className={styles.hl}>{mode === 'bola'
            ? 'Bola padat: seluruh volume terisi baja (ρ = 7,9) → tenggelam.'
            : 'Perahu dibentuk berongga — volumenya jauh lebih besar tapi banyak berisi udara. Massa jenis efektifnya turun di bawah 1 → mengapung.'}</div>
          <div className={styles.reflect}>Inilah tantangan plastisin: bentuk yang sama beratnya bisa tenggelam atau mengapung — tergantung volume yang dibentuk. Konsep mana dari BAB II yang paling sering kamu temui sehari-hari?</div>
        </div>
      </div>
    </>
  )
}
