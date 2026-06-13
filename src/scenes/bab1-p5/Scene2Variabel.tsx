import { useState } from 'react'
import { EggFloatViewer } from '../../components/EggFloatViewer'
import styles from './Scene2Variabel.module.css'

export function Scene2Variabel() {
  const [salt, setSalt] = useState(5)
  return (
    <>
      <p className={styles.prompt}>Geser garamnya. Dalam satu percobaan, ada <em>tiga peran</em> berbeda:</p>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.viz}><EggFloatViewer salt={salt} showStatus /></div>
          <div className={styles.slider}>
            <span className={styles.sLabel}>Garam</span>
            <input type="range" min={0} max={10} step={1} value={salt} onChange={e => setSalt(+e.target.value)} className={styles.range} />
            <span className={styles.sVal}>{salt} sdm</span>
          </div>
        </div>
        <div className={styles.vars}>
          <div className={styles.varCard} style={{ borderLeftColor: '#088395' }}>
            <span className={styles.vTag} style={{ color: '#088395' }}>variabel bebas</span>
            <span className={styles.vName}>Jumlah garam</span>
            <span className={styles.vDesc}>Yang sengaja kita ubah-ubah.</span>
          </div>
          <div className={styles.varCard} style={{ borderLeftColor: '#7AB2B2' }}>
            <span className={styles.vTag} style={{ color: '#7AB2B2' }}>variabel terikat</span>
            <span className={styles.vName}>Posisi telur</span>
            <span className={styles.vDesc}>Yang kita amati & ukur — hasilnya bergantung pada garam.</span>
          </div>
          <div className={styles.varCard} style={{ borderLeftColor: '#d8c39a' }}>
            <span className={styles.vTag} style={{ color: '#d8c39a' }}>variabel kontrol</span>
            <span className={styles.vName}>Jumlah air, ukuran telur, suhu</span>
            <span className={styles.vDesc}>Dijaga tetap supaya percobaan adil.</span>
          </div>
        </div>
      </div>
    </>
  )
}
