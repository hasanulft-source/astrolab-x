import { useState } from 'react'
import { FloatTank } from '../../components/FloatTank'
import { BENDA } from './data'
import styles from './ui.module.css'

export function Scene4Apung() {
  const [sel, setSel] = useState('kayu')
  const b = BENDA.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Aturan emasnya: benda <em>mengapung</em> bila massa jenisnya lebih kecil dari air. Pilih benda:</p>
      <div className={styles.main}>
        <div className={styles.viz}><FloatTank rho={b.rho} /></div>
        <div className={styles.side}>
          <div className={styles.chips}>
            {BENDA.map(x => <div key={x.id} role="button" className={sel === x.id ? styles.chipActive : styles.chip} onClick={() => setSel(x.id)}>{x.name}</div>)}
          </div>
          <div className={styles.rule}>ρ {b.name} = <b>{b.rho.toFixed(2)} g/cm³</b>. {b.rho < 1 ? 'Lebih kecil dari air (1,00) → mengapung.' : 'Lebih besar dari air (1,00) → tenggelam.'}</div>
          <div className={styles.note}>Ingat percobaan telur di BAB I? Menambah garam menaikkan massa jenis <b>air</b> hingga melebihi telur — prinsip yang sama.</div>
        </div>
      </div>
    </>
  )
}
