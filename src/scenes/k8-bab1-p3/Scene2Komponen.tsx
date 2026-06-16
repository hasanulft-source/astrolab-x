import { useState } from 'react'
import { KOMP } from './data'
import styles from './ui.module.css'
export function Scene2Komponen() {
  const [sel, setSel] = useState('plasma')
  const k = KOMP.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Bila didiamkan, darah <em>mengendap</em> berlapis. Klik tiap komponen.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <svg viewBox="0 0 70 150" className={styles.tube}>
            <defs><clipPath id="bt"><path d="M24 8h22v104a11 11 0 0 1-22 0z" /></clipPath></defs>
            <g clipPath="url(#bt)">
              <rect x="24" y="8" width="22" height="60" fill={k.layer === 'top' ? '#e8c84a' : '#efe2a0'} />
              <rect x="24" y="68" width="22" height="8" fill={k.layer === 'mid' ? '#d8dde2' : '#eceff2'} />
              <rect x="24" y="76" width="22" height="46" fill={k.layer === 'bottom' ? '#b6271f' : '#d98a86'} />
            </g>
            <path d="M24 8h22v104a11 11 0 0 1-22 0z" fill="none" stroke="#c9ccd6" strokeWidth="2.5" />
            <line x1="20" y1="8" x2="50" y2="8" stroke="#c9ccd6" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className={styles.side}>
          <div className={styles.kList}>
            {KOMP.map(x => <button key={x.id} className={`${styles.kBtn} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}
          </div>
          <div className={styles.detail}>{k.desc}</div>
        </div>
      </div>
    </>
  )
}
