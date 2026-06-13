import { useState } from 'react'
import { EggFloatViewer, eggStatus } from '../../components/EggFloatViewer'
import styles from './Scene3Lab.module.css'

export function Scene3Lab() {
  const [salt, setSalt] = useState(0)
  const [trials, setTrials] = useState<{ salt: number; status: string }[]>([])
  const record = () => setTrials(t => [...t, { salt, status: eggStatus(salt).label }].slice(-7))

  return (
    <>
      <p className={styles.prompt}>Uji sendiri: berapa sendok garam supaya telur <em>mengapung</em>? Catat hasilmu.</p>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.viz}><EggFloatViewer salt={salt} showStatus /></div>
          <div className={styles.slider}>
            <span className={styles.sLabel}>Garam</span>
            <input type="range" min={0} max={10} step={1} value={salt} onChange={e => setSalt(+e.target.value)} className={styles.range} />
            <span className={styles.sVal}>{salt} sdm</span>
            <button className={styles.rec} onClick={(e) => { record(); (e.currentTarget as HTMLButtonElement).blur() }}>+ Catat</button>
          </div>
        </div>
        <div className={styles.panel}>
          <div className={styles.tHead}>Tabel Uji</div>
          <div className={styles.tRowHead}><span>Garam</span><span>Hasil</span></div>
          {trials.length === 0
            ? <div className={styles.empty}>Belum ada data. Geser garam, lalu klik “Catat”.</div>
            : trials.map((t, i) => (
                <div key={i} className={styles.tRow}><span>{t.salt} sdm</span><span>{t.status}</span></div>
              ))}
        </div>
      </div>
    </>
  )
}
