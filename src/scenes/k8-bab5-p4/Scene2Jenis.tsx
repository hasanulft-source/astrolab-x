import { useState } from 'react'
import { OPTIK } from './data'
import styles from './ui.module.css'
export function Scene2Jenis() {
  const [sel, setSel] = useState('cekung')
  const o = OPTIK.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Tiap cermin & lensa punya <em>sifat bayangan</em> khasnya. Klik untuk membandingkan.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.cards}>{OPTIK.map(x => <button key={x.id} className={`${styles.card} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}><div className={styles.dDef}>{o.sifat}</div><div className={styles.dEx}><span>Dipakai pada</span> {o.pakai}</div></div>
        </div>
      </div>
    </>
  )
}
