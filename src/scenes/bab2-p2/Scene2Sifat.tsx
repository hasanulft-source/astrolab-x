import { useState } from 'react'
import { ParticleViewer } from '../../components/ParticleViewer'
import { WUJUD, byId } from './data'
import styles from './ui.module.css'

export function Scene2Sifat() {
  const [sel, setSel] = useState('padat')
  const w = byId(sel)!
  return (
    <>
      <p className={styles.prompt}>Sifat fisik tiap wujud — semuanya bisa dijelaskan dari <em>susunan partikelnya</em>. Pilih wujud:</p>
      <div className={styles.main}>
        <div className={styles.viz}><ParticleViewer state={w.state} size="md" /></div>
        <div className={styles.side}>
          <div className={styles.tabs}>
            {WUJUD.map(x => <div key={x.id} role="button" className={sel === x.id ? styles.tabActive : styles.tab} onClick={() => setSel(x.id)}>{x.name}</div>)}
          </div>
          <div className={styles.props}>
            <div className={styles.prop}><span className={styles.pK}>bentuk</span><span className={styles.pV}>{w.bentuk}</span></div>
            <div className={styles.prop}><span className={styles.pK}>volume</span><span className={styles.pV}>{w.volume}</span></div>
            <div className={styles.prop}><span className={styles.pK}>kemampatan</span><span className={styles.pV}>{w.mampat}</span></div>
          </div>
          <div className={styles.alasan}>{w.alasan}</div>
        </div>
      </div>
    </>
  )
}
