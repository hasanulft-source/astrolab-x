import { useState } from 'react'
import { ExpansionViz } from '../../components/ExpansionViz'
import styles from './ui.module.css'

const INFO = {
  padat: 'Zat padat memuai paling kecil — partikelnya rapat. Contoh: rel, kabel, bingkai jendela.',
  cair: 'Zat cair memuai lebih besar dari padat. Dasar kerja termometer raksa/alkohol.',
  gas: 'Gas memuai paling besar — partikelnya paling bebas. Contoh: balon mengembang, ban panas.',
}

export function Scene2Wujud() {
  const [mode, setMode] = useState<'padat' | 'cair' | 'gas'>('padat')
  const [heat, setHeat] = useState(0)
  return (
    <>
      <p className={styles.prompt}>Padat, cair, dan gas semuanya memuai — tapi <em>tidak sama besar</em>. Pilih wujud, lalu panaskan.</p>
      <div className={styles.tabs}>
        {(['padat', 'cair', 'gas'] as const).map(m => <div key={m} role="button" className={mode === m ? styles.tabActive : styles.tab} onClick={() => setMode(m)}>{m[0].toUpperCase() + m.slice(1)}</div>)}
      </div>
      <div className={styles.expMain}>
        <div className={styles.viz}><ExpansionViz mode={mode} heat={heat} /></div>
        <div className={styles.ctrl}><span className={styles.cLabel}>Panas</span><input className={styles.range} type="range" min={0} max={1} step={0.01} value={heat} onChange={e => setHeat(+e.target.value)} /><span className={styles.cv}>{Math.round(heat * 100)}%</span></div>
        <div className={styles.expNote}>{INFO[mode]}</div>
      </div>
    </>
  )
}
