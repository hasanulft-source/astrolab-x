import { useState } from 'react'
import { KingdomIcon } from '../../components/KingdomIcon'
import { KINGS } from './data'
import styles from './ui.module.css'

export function Scene2Jelajah() {
  const [sel, setSel] = useState(KINGS[0].id)
  const k = KINGS.find(x => x.id === sel)!
  return (
    <>
      <p className={styles.prompt}>Klik tiap kingdom - lihat <em>ciri lengkap</em>, contoh, dan perannya.</p>
      <div className={styles.main}>
        <div className={styles.viz}>
          <div className={styles.kCards}>
            {KINGS.map(x => (
              <button key={x.id} className={`${styles.kCard} ${sel === x.id ? styles.on : ''}`} onClick={() => setSel(x.id)}>
                <KingdomIcon id={x.id} size={26} /><span>{x.nama}</span>
              </button>
            ))}
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.detail}>
            <div className={styles.dRow}><span className={styles.dK}>Membran inti</span><span className={styles.dV}>{k.inti}</span></div>
            <div className={styles.dRow}><span className={styles.dK}>Jumlah sel</span><span className={styles.dV}>{k.sel}</span></div>
            <div className={styles.dRow}><span className={styles.dK}>Cara makan</span><span className={styles.dV}>{k.makan}</span></div>
            <div className={styles.dRow}><span className={styles.dK}>Dinding sel</span><span className={styles.dV}>{k.dinding}</span></div>
            <div className={styles.dRow}><span className={styles.dK}>Contoh</span><span className={styles.dV}>{k.contoh}</span></div>
          </div>
          <div className={styles.peran}>
            <div className={styles.pPlus}><b>+</b> {k.plus}</div>
            <div className={styles.pMinus}><b>−</b> {k.minus}</div>
          </div>
        </div>
      </div>
    </>
  )
}
