import { useState } from 'react'
import { BAGIAN } from './data'
import styles from './ui.module.css'
export function Scene3Anatomi() {
  const [sel, setSel] = useState('sel')
  const b = BAGIAN.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Kenali <em>bagian-bagian</em> spreadsheet. Klik tiap istilah.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.anatomy}>
            <div className={`${styles.fbar} ${sel === 'formula' ? styles.hi : ''}`}>fx  =SUM(B1:B5)</div>
            <div className={styles.miniSheet}>
              <div className={styles.mRow}><span className={styles.mCorner}></span><span className={`${styles.mColH} ${sel === 'kolom' ? styles.hi : ''}`}>A</span><span className={`${styles.mColH} ${sel === 'kolom' ? styles.hi : ''}`}>B</span><span className={`${styles.mColH} ${sel === 'kolom' ? styles.hi : ''}`}>C</span></div>
              {[1, 2, 3].map(n => (
                <div key={n} className={styles.mRow}>
                  <span className={`${styles.mRowH} ${sel === 'baris' ? styles.hi : ''}`}>{n}</span>
                  {['A', 'B', 'C'].map(c => <span key={c} className={`${styles.mCell} ${sel === 'sel' && c === 'B' && n === 2 ? styles.hiCell : ''}`}>{sel === 'sel' && c === 'B' && n === 2 ? 'B2' : ''}</span>)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.tabs}>{BAGIAN.map(x => <button key={x.id} className={`${styles.tab} ${sel === x.id ? styles.tabOn : ''}`} onClick={() => setSel(x.id)}>{x.nama}</button>)}</div>
          <div className={styles.detail}>{b.ket}</div>
        </div>
      </div>
    </>
  )
}
